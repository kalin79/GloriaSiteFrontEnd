'use client';
import { useEffect, useRef } from 'react';
import Player from '@vimeo/player';

import Image from 'next/image';
import { VideoInterface } from "@/interfaces/video";

import styles from '@/styles/scss/popup.module.scss';

interface Props {
    videoData: VideoInterface,
    onClose: () => void,
    isOpen: boolean,
}
const Video = ({ videoData, onClose, isOpen }: Props) => {
    const videoRefPopUp = useRef<HTMLDivElement>(null);
    const playerRefPopUp = useRef<Player | null>(null);
    const hasTriggeredApi = useRef(false);
    useEffect(() => {

        if (isOpen && videoRefPopUp.current) {
            if (typeof window === 'undefined') return;
            if (playerRefPopUp.current) {
                playerRefPopUp.current.unload().catch(console.error);
            }
            console.log(`Verifica video: ${videoData.link_video}`)
            const playerPopUp = new Player(videoRefPopUp.current, {
                id: Number(videoData.link_video),
                autoplay: true,
                controls: true,
                responsive: true,
            });

            playerRefPopUp.current = playerPopUp;

            // Escucha el progreso del video

            playerPopUp.on('timeupdate', async (data) => {
                const percent = (data.percent || 0) * 100;
                console.log(`Porcentaje de avance es: ${percent}`);
                if (!hasTriggeredApi.current && percent >= 60) {
                    hasTriggeredApi.current = true;
                    // Aplicamos nuestro Api
                    console.log('llegamos :)')
                }

            })

        }

        return () => {
            if (playerRefPopUp.current) {
                playerRefPopUp.current.off('timeupdate');
                playerRefPopUp.current.pause();
            }
        };
    }, [isOpen, videoData.link_video]);

    if (!isOpen) return null;
    return (

        <div className={styles.popUpContainer}>
            <div className={styles.lightbox}>
                <button onClick={onClose} className={styles.closeBtn}>
                    <Image src="/close.svg" width={58} height={54} alt='' />
                </button>
                <div ref={videoRefPopUp} className={styles.playerPopUp} />
            </div>
        </div>
    )
}

export default Video
