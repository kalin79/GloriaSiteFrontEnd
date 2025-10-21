"use client";
import { useEffect, useRef } from 'react';
import Player from '@vimeo/player';
import { VideoInterface } from "@/interfaces/video";
import Image from 'next/image';
import styles from '@/styles/scss/marcapro.module.scss';

interface Props {
    videoData: VideoInterface;
}

const BannerAuto = ({ videoData }: Props) => {
    const videoRef = useRef<HTMLDivElement>(null);
    const placeholderRef = useRef<HTMLImageElement>(null);
    useEffect(() => {
        if (videoRef.current && videoData.previsualizacion_video) {
            const player = new Player(videoRef.current, {
                id: Number(videoData.previsualizacion_video),
                autoplay: true,     // ✅ se reproduce automáticamente
                muted: true,        // ✅ necesario para autoplay sin bloqueo del navegador
                loop: false, // 
                controls: false,    // ✅ oculta los controles
                background: false,   // ✅ optimizado para fullscreen / background
                responsive: true,
            });

            // Cuando el video empieza a reproducirse → ocultamos imagen
            player.on('play', () => {
                if (placeholderRef.current) {
                    const timeout = setTimeout(() => {
                        if (placeholderRef.current) { // 👈 Verificación dentro del timeout
                            placeholderRef.current!.style.opacity = '0';
                            placeholderRef.current!.style.display = 'none';
                        }
                    }, 500);
                    return () => clearTimeout(timeout); // 👈 Limpieza por si se desmonta el componente
                }
            });

            // Cuando el video termina → mostramos imagen y pausamos
            player.on('ended', async () => {
                if (placeholderRef.current) {
                    const timeout = setTimeout(() => {
                        if (placeholderRef.current) { // 👈 Verificación dentro del timeout
                            placeholderRef.current!.style.display = 'block';
                            placeholderRef.current!.style.opacity = '1';
                        }
                    }, 50);
                    return () => clearTimeout(timeout); // 👈 Limpieza por si se desmonta el componente
                }
            });



            return () => {
                player.unload().catch(console.error);
            };
        }
    }, [videoData.previsualizacion_video]);
    return (
        <>
            <div className={`${styles.videoFullPage}`}>
                {/* Imagen de fondo mientras carga el video */}
                <Image
                    src={videoData.imagemobile || '/bgAzul2.webp'}
                    alt="Cargando video..."
                    ref={placeholderRef}
                    className={styles.videoPlaceholder}
                    width={2460}
                    height={1641}
                />
                <div ref={videoRef} />
            </div>
        </>
    );
}

export default BannerAuto
