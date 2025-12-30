'use client';
import { useState } from 'react';
// import { useRouter } from "next/navigation";
import Image from 'next/image';
import VideoBanner from "@/components/pro/BannerAuto";
import Portal from '@/components/Portal';
import { VideoInterface } from "@/interfaces/video";
import SantizedHtml from '@/components/SanitizedHtml';
import HtmlSafeRender from '@/components/HtmlSafeRender';
import dynamic from 'next/dynamic';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
// Estilos swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import styles from '@/styles/scss/marcabonle.module.scss';
interface multimediaParameters {
    multimediaContents: VideoInterface[];
    viewLogo?: boolean;
    logo: string;

}
const Lightbox = dynamic(() => import('@/components/popup/Video'), {
    ssr: false, // importante si el video usa APIs del navegador
    loading: () => <p>Cargando video...</p>
})
const HeaderMarca = ({ multimediaContents, viewLogo = true, logo }: multimediaParameters) => {
    const [showVideo, setShowVideo] = useState(false);
    const [videoSelect, setVideoSelect] = useState<VideoInterface>()
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
                (logo?.trim() && viewLogo) && (
                    <div className='LogoProductoHeader Bonle'>
                        <Image src={(logo ?? '/gloria.svg') as string} width={121} height={84} alt="" />
                    </div>
                )
            }
            {showVideo && videoSelect ? (
                <Portal>
                    <Lightbox
                        videoData={videoSelect}
                        onClose={() => setShowVideo(false)}
                        isOpen={showVideo}
                    />
                </Portal>
            ) : null}
            <div className={`${styles.bannerContainer}`}>
                <Swiper
                    modules={[EffectFade, Navigation, Pagination, Autoplay]}
                    effect={'fade'}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation={false}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 8000 }}
                    className={`bannerCarruselHome`}
                >
                    {multimediaContents.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className={styles.fullVideoContainerDiv} >
                                <VideoBanner videoData={item} />
                                <div className={styles.infoCenter} >
                                    <div className={styles.infoContainer}>
                                        <div className="containerFluid">
                                            <div className={styles.gridContainer}>
                                                <div>
                                                    <h1 className={styles.titularBanner}><SantizedHtml html={item.title_large || ''} /></h1>
                                                    <HtmlSafeRender html={item.description || ''} className={styles.descripcionBanner} />
                                                    <button className={`btnStandart ${styles.btnStandart}`} onClick={() => { setShowVideo(true); setVideoSelect(item) }}>
                                                        <span>Reproducir </span>
                                                        <Image src='/play4.svg' width={14} height={16} alt="" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>




            </div>
        </>
    )
}

export default HeaderMarca
