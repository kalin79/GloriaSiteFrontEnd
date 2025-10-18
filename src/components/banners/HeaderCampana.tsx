'use client';
import { useState } from 'react';
import Image from 'next/image';
import VideoBanner from "@/components/video/BannerCampana";
import Portal from '@/components/Portal';
import { CampanaInterface } from '@/interfaces/campana';

// import SantizedHtml from "@/components/SanitizedHtml";
import dynamic from 'next/dynamic';
import styles from '@/styles/scss/banner.module.scss';
interface multimediaParameters {
    multimediaContents: CampanaInterface;
    viewLogo?: boolean;
}
const Lightbox = dynamic(() => import('@/components/popup/VideoCampana'), {
    ssr: false, // importante si el video usa APIs del navegador
    loading: () => <p>Cargando video...</p>
})
const HeaderCampana = ({ multimediaContents, viewLogo = true }: multimediaParameters) => {
    const [showVideo, setShowVideo] = useState(false);
    // const handleLigthVideo = () => {
    //     setShowVideo(true);
    // }
    return (
        <>
            {
                (multimediaContents.marca?.logo?.trim() && viewLogo) && (
                    <div className='LogoProductoHeader'>
                        <Image src={(multimediaContents.marca.logo ?? '/gloria.svg') as string} width={121} height={84} alt={multimediaContents.marca.nombre ?? ''} />
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

export default HeaderCampana
