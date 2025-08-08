'use client';
import { useState } from 'react';
import Image from 'next/image';
import VideoBanner from "@/components/video/Banner";
import Portal from '@/components/Portal';
import { VideoInterface } from "@/interfaces/video";
import SantizedHtml from "@/components/SanitizedHtml";
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
    const handleLigthVideo = () => {
        setShowVideo(true);
    }
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
                <div className={styles.infoCenter}>
                    <div className={styles.infoContainer}>
                        <div className="containerFluid">
                            <div className={styles.gridContainer}>
                                <div>
                                    <h1 className="bannerTitular"><SantizedHtml html={multimediaContents.title_large ?? ''} /></h1>
                                    <p className="bannerParrafo"><SantizedHtml html={multimediaContents.sub_title ?? ''} /></p>
                                    <div className={styles.infoVideo}>
                                        <div>
                                            <Image src='/estrella.svg' width={24} height={24} alt="" />
                                            <p className="bannerParrafo">1245</p>
                                        </div>
                                        <div>
                                            <Image src='/time.svg' width={24} height={24} alt="" />
                                            <p className="bannerParrafo"><SantizedHtml html={multimediaContents.duracion ?? ''} /></p>
                                        </div>
                                    </div>
                                    <button className={`btnStandart ${styles.btnStandart}`} onClick={handleLigthVideo}>
                                        <span>Reproducir</span>
                                        <Image src='/play4.svg' width={14} height={16} alt="" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Header
