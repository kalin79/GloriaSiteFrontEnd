"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Player from "@vimeo/player";
import { VideoInterface } from "@/interfaces/video";

import styles from "@/styles/scss/video.module.scss";

interface Props {
    videoData: VideoInterface;
}

const Banner = ({ videoData }: Props) => {
    const videoRef = useRef<HTMLDivElement>(null);
    const playerRef = useRef<Player | null>(null);

    const [isPlaying, setIsPlaying] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // ─────────────────────────────────────────────
    // Detectar mobile
    // ─────────────────────────────────────────────
    useEffect(() => {
        const mobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        setIsMobile(mobile);
    }, []);

    // ─────────────────────────────────────────────
    // Inicializar / Rehidratar Player
    // ─────────────────────────────────────────────
    const initPlayer = useCallback(() => {
        if (!videoRef.current) return;
        if (!videoData.link_video) return;
        if (playerRef.current) return;

        const player = new Player(videoRef.current, {
            id: Number(videoData.link_video),
            autoplay: false,
            muted: false,
            loop: false,
            controls: true,
            responsive: true,
            playsinline: true,
        });

        playerRef.current = player;

        player.ready().then(() => {
            player.pause();

            player.on("play", () => setIsPlaying(true));
            player.on("pause", () => setIsPlaying(false));
            player.on("ended", () => setIsPlaying(false));
        });
    }, [videoData.link_video]);

    // ─────────────────────────────────────────────
    // Montar / Desmontar player
    // ─────────────────────────────────────────────
    useEffect(() => {
        initPlayer();

        return () => {
            if (playerRef.current) {
                playerRef.current.destroy().catch(console.error);
                playerRef.current = null;
            }
        };
    }, [initPlayer]);

    // ─────────────────────────────────────────────
    // Fullscreen al rotar (solo mobile)
    // ─────────────────────────────────────────────
    useEffect(() => {
        if (!isMobile) return;

        const handleOrientation = async () => {

            console.log(playerRef.current)

            // Rehidratar si murió
            if (!playerRef.current) {
                initPlayer();
                return;
            }

            const isLandscape = window.matchMedia(
                "(orientation: landscape)"
            ).matches;

            // Entrar fullscreen con API Vimeo
            if (isLandscape && isPlaying) {
                try {
                    await playerRef.current.requestFullscreen();
                } catch {
                    // iOS puede bloquearlo
                }
            }

            // Salir fullscreen
            if (!isLandscape) {
                try {
                    await playerRef.current.exitFullscreen();
                } catch {
                    //
                }
            }
        };

        window.addEventListener("orientationchange", handleOrientation);
        window.addEventListener("resize", handleOrientation);

        handleOrientation();

        return () => {
            window.removeEventListener("orientationchange", handleOrientation);
            window.removeEventListener("resize", handleOrientation);
        };
    }, [isMobile, isPlaying, initPlayer]);

    // ─────────────────────────────────────────────
    // Render
    // ─────────────────────────────────────────────
    return (
        <div className={`${styles.videoFullPage} ${styles.sinDegradado}`}>
            <div ref={videoRef} />
        </div>
    );
};

export default Banner;
