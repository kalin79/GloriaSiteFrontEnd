'use client';
import { useEffect, useRef } from 'react';
import Player from '@vimeo/player';

import Image from 'next/image';
import { BannerInterface } from '@/interfaces/banner';
import styles from '@/styles/scss/popup.module.scss';

interface Props {
    videoData: BannerInterface,
    onClose: () => void
}
const Video = ({ videoData, onClose }: Props) => {
    const playerRefs = useRef<Map<string, Player>>(new Map());

    useEffect(() => {
        const videoId = videoData.multimedia;
        const containerId = `vimeo-${videoId}`;
        const container = document.getElementById(containerId);
        if (!container || playerRefs.current.has(videoId)) return;
        const player = new Player(container, {
            url: `https://vimeo.com/${videoId}`,
            responsive: true,
            autoplay: true, // opcional
            muted: false      // opcional, ayuda a autoplay
        });
        player.ready().then(() => {
            console.log(`✅ Player ${videoId} listo`);

            let triggered = false;

            player.on('play', () => {
                console.log(`▶️ Video ${videoId} reproduciéndose`);
            });

            player.on('timeupdate', (data) => {
                const percent = (data.percent || 0) * 100;
                console.log(`⏱️ ${percent.toFixed(2)}% visto del video ${videoId}`);

                if (percent >= 60 && !triggered) {
                    triggered = true;
                    console.log(`🎯 Usuario vio más del 60% del video ${videoId}`);
                    // fetch("/api/registrar-vista", { method: "POST", body: JSON.stringify({ id: videoId }) })
                }
            });
        });

        playerRefs.current.set(videoId, player);
        return () => {
            const currentPlayer = playerRefs.current.get(videoId);
            if (currentPlayer) {
                currentPlayer.destroy();
                playerRefs.current.delete(videoId);
                console.log(`🧹 Player ${videoId} destruido`);
            }
        };
    }, [videoData.multimedia]);
    return (
        <div className={styles.popUpContainer}>
            <div className='containerFluid'>
                <div className={styles.viewContainerVideo}>
                    <button
                        onClick={onClose}
                        className={styles.buttonCloseContainer}
                        aria-label="Cerrar"
                    >
                        <Image src="/close.svg" width={58} height={54} alt='' />
                    </button>
                    {/* <video width="100%" height="100%"
                        autoPlay // Reproducir automáticamente
                        controls={true} // Ocultar controles
                    >
                        <source src={videoData.multimedia} type="video/mp4" />
                        Tu navegador no soporta la etiqueta de video.
                    </video> */}
                    <div id={`vimeo-${videoData.multimedia}`} />
                </div>
            </div>
        </div>
    )
}

export default Video
