"use client";
import { useEffect, useRef } from 'react';
import Player from '@vimeo/player';
import { VideoInterface } from "@/interfaces/video";

import styles from '@/styles/scss/video.module.scss';

interface Props {
    videoData: VideoInterface;
}

const Banner = ({ videoData }: Props) => {
    const videoRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (videoRef.current && videoData.link_video) {
            const player = new Player(videoRef.current, {
                id: Number(1102244290),
                autoplay: true,
                muted: true,
                loop: true,
                background: true,
                responsive: true,
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

export default Banner
