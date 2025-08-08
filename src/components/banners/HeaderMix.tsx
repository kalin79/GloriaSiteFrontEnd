'use client';
import { useState } from 'react';
import { useRouter } from "next/navigation";
import Image from 'next/image';
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
const HeaderMix = ({ multimediaContents, viewLogo = true }: multimediaParameters) => {
    const [showVideo, setShowVideo] = useState(false);
    const router = useRouter();
    // const [isOpen, setIsOpen] = useState(false);
    // const irVerVideo = (items: BannerInterface) => {
    //     router.push(`/${items.slugMarca}/video/${items.slug}`)
    // }
    const irVerContenido = (items: VideoInterface) => {
        router.push(`${items.slug}`)
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
                        onClose={() => setShowVideo(false)}
                    />
                </Portal>
            )}
            <div className={styles.bannerContainer}>
                {
                    multimediaContents.type === 'image' ? (
                        <>
                            <VideoBanner />
                            <div className={styles.infoCenter}>
                                <div className={styles.infoContainer}>
                                    <div className="containerFluid">
                                        <div className={styles.gridContainer}>
                                            <div>
                                                <h1 className="bannerTitular" dangerouslySetInnerHTML={{ __html: multimediaContents.title }}></h1>
                                                <p className="bannerParrafo" dangerouslySetInnerHTML={{ __html: multimediaContents.descripcionCorta || '' }}></p>
                                                <button className="btnStandart" onClick={() => irVerContenido(multimediaContents)}>Más información</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        multimediaContents.marca === '' ? (
                            <>
                                <VideoBanner />
                                <div className={styles.infoCenter}>
                                    <div className={styles.infoContainer}>
                                        <div className="containerFluid">
                                            <div className={styles.gridContainer}>
                                                <div>
                                                    <h1 className="bannerTitular" dangerouslySetInnerHTML={{ __html: multimediaContents.title }}></h1>
                                                    <p className="bannerParrafo" dangerouslySetInnerHTML={{ __html: multimediaContents.descripcionCorta || '' }}></p>
                                                    <button className="btnStandart" onClick={() => irVerContenido(multimediaContents)}>Más información</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <VideoBanner />
                                <div className={styles.infoCenter}>
                                    <div className={styles.infoContainer}>
                                        <div className="containerFluid">
                                            <div className={styles.gridContainer}>
                                                <div>
                                                    <h1 className="bannerTitular" dangerouslySetInnerHTML={{ __html: multimediaContents.title }}></h1>
                                                    <p className="bannerParrafo" dangerouslySetInnerHTML={{ __html: multimediaContents.descripcionCorta || '' }}></p>
                                                    <div className={styles.infoVideo}>
                                                        <div>
                                                            <Image src='/estrella.svg' width={24} height={24} alt="" />
                                                            <p className="bannerParrafo">1245</p>
                                                        </div>
                                                        <div>
                                                            <Image src='/time.svg' width={24} height={24} alt="" />
                                                            <p className="bannerParrafo">Duración: 23 seg</p>
                                                        </div>
                                                    </div>
                                                    <button className={`btnStandart ${styles.btnStandart}`} onClick={() => setShowVideo(true)}>
                                                        <span>Reproducir</span>
                                                        <Image src='/play4.svg' width={14} height={16} alt="" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    )
                }

            </div>
        </>
    )
}

export default HeaderMix
