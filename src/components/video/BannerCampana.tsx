"use client";
import { useEffect, useRef } from 'react';
import Player from '@vimeo/player';

import { CampanaInterface } from '@/interfaces/campana';

import styles from '@/styles/scss/video.module.scss';

interface Props {
    videoData: CampanaInterface;
}

const BannerCampana = ({ videoData }: Props) => {
    const videoRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (videoRef.current && videoData.link_video) {
            const player = new Player(videoRef.current, {
                id: Number(videoData.link_video),
                autoplay: false, // ✅ No inicia automáticamente
                muted: false,
                loop: false,
                controls: true, // ✅ Muestra los controles
                responsive: true,
            });

            // Opcional: ajustar a fullscreen por CSS
            player.ready().then(() => {
                player.pause(); // ✅ Asegura que empiece pausado
            });

            return () => {
                player.unload().catch(console.error);
            };
        }
    }, [videoData.link_video]);
    return (
        <>
            <div className={styles.videoFullPage}>
                <div ref={videoRef} />
            </div>
        </>
    );
}

export default BannerCampana
