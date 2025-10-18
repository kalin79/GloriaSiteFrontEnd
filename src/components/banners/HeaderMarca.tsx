'use client';
import { useState } from 'react';
// import { useRouter } from "next/navigation";
import Image from 'next/image';
import VideoBanner from "@/components/video/BannerAuto";
import Portal from '@/components/Portal';
import { VideoInterface } from "@/interfaces/video";
import SantizedHtml from '@/components/SanitizedHtml';
import HtmlSafeRender from '@/components/HtmlSafeRender';
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
const HeaderMarca = ({ multimediaContents, viewLogo = true }: multimediaParameters) => {
    const [showVideo, setShowVideo] = useState(false);
    // const router = useRouter();
    // const [isOpen, setIsOpen] = useState(false);
    // const irVerVideo = (items: BannerInterface) => {
    //     router.push(`/${items.slugMarca}/video/${items.slug}`)
    // }
    // const irVerContenido = (items: VideoInterface) => {
    //     router.push(`${items.slug}`)
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
                        onClose={() => setShowVideo(false)}
                        isOpen={showVideo}
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
                                    <h1 className={styles.titularBanner}><SantizedHtml html={multimediaContents.title_large || ''} /></h1>
                                    <HtmlSafeRender html={multimediaContents.elenco || ''} className={styles.descripcionBanner} />
                                    <button className={`btnStandart ${styles.btnStandart}`} onClick={() => setShowVideo(true)}>
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

export default HeaderMarca
