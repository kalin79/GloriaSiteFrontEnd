"use client";
import { useEffect, useRef, useState } from 'react';
import Player from '@vimeo/player';
import { VideoInterface } from "@/interfaces/video";

import styles from '@/styles/scss/video.module.scss';

interface Props {
    videoData: VideoInterface;
}

const Banner = ({ videoData }: Props) => {
    const videoRef = useRef<HTMLDivElement>(null);
    const playerRef = useRef<Player | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Detectar si es mobile (se ejecuta una sola vez)
    useEffect(() => {
        const mobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        setIsMobile(mobile);
    }, []);

    useEffect(() => {
        if (!videoRef.current || !videoData.link_video) return;

        const player = new Player(videoRef.current, {
            id: Number(videoData.link_video),
            autoplay: false,
            muted: false,
            loop: false,
            controls: true,
            responsive: true,

            // Muy importante para mobile:
            playsinline: true,      // true = reproduce inline (recomendado)
            // false = intenta fullscreen nativo al dar play (pero NO es confiable)
        });

        player.ready().then(() => {
            player.pause();

            player.on('play', () => setIsPlaying(true));
            player.on('pause', () => setIsPlaying(false));
            player.on('ended', () => setIsPlaying(false));
        });

        return () => {
            player.unload().catch(console.error);
            playerRef.current = null;
        };
    }, [videoData.link_video]);

    // ── Lógica de rotación → fullscreen solo en mobile ──────────────────
    useEffect(() => {
        if (!isMobile) return;

        const handleOrientationChange = () => {
            const isLandscape = window.matchMedia("(orientation: landscape)").matches;

            // Solo intentamos fullscreen si:
            // 1. Está en landscape
            // 2. El video está reproduciéndose
            // 3. No estamos ya en fullscreen
            if (isLandscape && isPlaying && playerRef.current) {
                const container = videoRef.current;
                if (!container) return;

                // Evitamos múltiples llamadas
                if (document.fullscreenElement) return;

                if (container.requestFullscreen) {
                    container.requestFullscreen().catch(e => console.log("No se pudo entrar a fullscreen", e));
                }
                // Soporte antiguo WebKit (iOS Safari principalmente)
                interface FullscreenHTMLElement extends HTMLElement {
                    webkitRequestFullscreen?: () => Promise<void> | void;
                }

                const el = container as FullscreenHTMLElement;

                if (el.webkitRequestFullscreen) {
                    el.webkitRequestFullscreen();
                }
            }
            // Opcional: salir de fullscreen al volver a portrait
            else if (!isLandscape && document.fullscreenElement) {
                if (document.exitFullscreen) {
                    document.exitFullscreen().catch(console.error);
                }
            }
        };

        // Eventos recomendados (orientationchange + resize por seguridad)
        window.addEventListener("orientationchange", handleOrientationChange);
        window.addEventListener("resize", handleOrientationChange);

        // Ejecutamos una vez al montar por si ya está en landscape
        handleOrientationChange();

        return () => {
            window.removeEventListener("orientationchange", handleOrientationChange);
            window.removeEventListener("resize", handleOrientationChange);
        };
    }, [isMobile, isPlaying]);

    return (
        <div className={`${styles.videoFullPage} ${styles.sinDegradado}`}>
            <div ref={videoRef} />
        </div>
    );
}

export default Banner;