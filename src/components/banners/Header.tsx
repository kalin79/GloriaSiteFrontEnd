'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import VideoBanner from "@/components/video/Banner";
import Portal from '@/components/Portal';
import { VideoInterface } from "@/interfaces/video";
import dynamic from 'next/dynamic';
import styles from '@/styles/scss/banner.module.scss';
interface multimediaParameters {
    multimediaContents: VideoInterface;
    viewLogo?: boolean;
}
const Lightbox = dynamic(() => import('@/components/popup/Video'), {
    ssr: false, // importante si el video usa APIs del navegador
    loading: () => <p>Cargando video...</p>
})
const Header = ({ multimediaContents, viewLogo = true }: multimediaParameters) => {
    const [showVideo, setShowVideo] = useState(false);

    return (
        <>
            {
                (multimediaContents.marca?.logo?.trim() && viewLogo) && (
                    <div className='LogoProductoHeader'>
                        <Link href={`/${multimediaContents.marca?.slug}` || ''}>
                            <Image src={(multimediaContents.marca.logo ?? '/gloria.svg') as string} width={121} height={84} alt={multimediaContents.marca.nombre ?? ''} />
                        </Link>
                    </div>
                )
            }
            {showVideo && (
                <Portal>
                    <Lightbox
                        videoData={multimediaContents}
                        isOpen={showVideo}
                        onClose={() => setShowVideo(false)}
                    />
                </Portal>
            )}
            <div className={styles.bannerContainer}>
                <VideoBanner videoData={multimediaContents} />
            </div>
        </>
    )
}

export default Header
