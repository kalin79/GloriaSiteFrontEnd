'use client';
import { useState, useEffect, useRef } from "react";
import VideoComponent from "@/components/video/CardVideo";
import Image from 'next/image';
import gsap from 'gsap';
import Draggable from 'gsap/Draggable';
gsap.registerPlugin(Draggable);
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from '@/styles/scss/tabs.module.scss';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SanitizedHtml from '@/components/SanitizedHtml';
import HtmlSafeRender from "@/components/HtmlSafeRender";
import { VideoInterface } from "@/interfaces/video";

interface Props {
    video: VideoInterface;
    relatedVideo: VideoInterface[];
}
const Tabs = ({ video, relatedVideo }: Props) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);

    const [activeTab, setActiveTab] = useState(0);
    useEffect(() => {
        if (containerRef.current && wrapperRef.current) {
            const tabElements = Array.from(containerRef.current.children) as HTMLElement[];
            // Calcular ancho total dinámico
            const totalWidth = tabElements.reduce((acc, el) => acc + el.offsetWidth + 30, 0); // 12 = gap
            containerRef.current.style.width = `${totalWidth}px`; // ⬅️ asignamos el ancho real

            Draggable.create(containerRef.current, {
                type: 'x',
                edgeResistance: 0.85,
                bounds: wrapperRef.current,
                inertia: true,
                dragClickables: true,
            })
        }
    }, [])
    return (
        <>
            <div className={styles.tabsContainer}>
                <div className={styles.headerContainerMovil} ref={wrapperRef}>
                    <div className={styles.listTabs} ref={containerRef}>
                        <div
                            className={`parrafoMediano ${0 === activeTab ? styles.active : ''}`}
                            onClick={() => setActiveTab(0)}
                        >
                            SUGERENCIAS
                        </div>
                        <div
                            className={`parrafoMediano ${1 === activeTab ? styles.active : ''}`}
                            onClick={() => setActiveTab(1)}
                        >DETALLES</div>
                    </div>
                </div>
                <div className={styles.headerContainer}>
                    <div
                        className={`parrafoMediano celesteTxt ${0 === activeTab ? styles.active : ''}`}
                        onClick={() => setActiveTab(0)}
                    >
                        SUGERENCIAS
                    </div>
                    <div
                        className={`parrafoMediano celesteTxt ${1 === activeTab ? styles.active : ''}`}
                        onClick={() => setActiveTab(1)}
                    >DETALLES</div>
                </div>
                <div className={`${styles.bodyContainer} `}>
                    <div className={`${0 === activeTab ? styles.activeContent : ''}`}>
                        <div className="videoPrevisualizacionContent">
                            <Swiper
                                spaceBetween={10}
                                centeredSlides={true}
                                slidesPerView={1} // Muestra 5 películas a la vez
                                navigation
                                grabCursor={true}
                                pagination={{ clickable: true }}
                                // autoplay={{ delay: 3000 }}
                                loop={true}
                                modules={[Navigation]}
                                className={`swiperNetflix`}
                                breakpoints={{
                                    750: {
                                        slidesPerView: 3
                                    },
                                    992: {
                                        slidesPerView: 4
                                    },
                                    1600: {
                                        slidesPerView: 5
                                    }
                                }}
                            >
                                {relatedVideo.map((item, index) => (
                                    <SwiperSlide
                                        style={{ width: "auto" }}
                                        key={index}
                                    >
                                        <VideoComponent videosContents={item} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                    <div className={`${1 === activeTab ? styles.activeContent : ''}`}>
                        <div className={`${styles.infoBox} ${styles.gridContainer}`}>
                            <div>
                                <h1 className="titularGrande mbot0_5 notBr"><SanitizedHtml html={video.title_large ?? ''} /></h1>
                                <div className={`parrafoMedianoPop`}>
                                    <HtmlSafeRender html={video.descripcion ?? ''} />
                                </div>
                            </div>
                            <div>
                                <h3 className="parrafoMedianoPop celesteTxt fontLight">DURACIÓN: <span className="parrafoMedianoPop blancoTxt boldRegular"><SanitizedHtml html={video.duracion ?? ''} /></span></h3>
                                <h3 className="parrafoMedianoPop celesteTxt fontLight">FECHA DE ESTRENO: <span className="parrafoMedianoPop blancoTxt boldRegular"><SanitizedHtml html={video.fecha_estreno ?? ''} /></span></h3>
                                <h3 className="parrafoMedianoPop celesteTxt fontLight">MARCA AUSPICIADORA: <span className="parrafoMedianoPop blancoTxt boldRegular"><SanitizedHtml html={video.marca?.nombre ?? ''} /></span></h3>
                                <h3 className="parrafoMedianoPop celesteTxt fontLight">CLASIFICACIÓN: <span className="parrafoMedianoPop blancoTxt boldRegular"><SanitizedHtml html={video.clasificacion ?? ''} /></span></h3>
                                <div className={styles.elencoContainer}>
                                    <h3 className="parrafoMedianoPop celesteTxt fontLight">ELENCO:</h3>
                                    <HtmlSafeRender html={video.elenco ?? ''} />
                                </div>
                                <div className={styles.autorBox}>
                                    <h3 className="parrafoMedianoPop celesteTxt fontLight">AUTOR:</h3>
                                    <div className={styles.autorList}>
                                        <Image src={video.autor_imagen ?? '/autor.png'} width={58} height={58} alt="" />
                                        <div>
                                            <h2 className="parrafoMedianoPop blancoTxt boldRegular"><SanitizedHtml html={video.autor_nombre ?? ''} /></h2>
                                            <h4 className="parrafoMedianoPop celesteTxt boldRegular"><SanitizedHtml html={video.autor_profesion ?? ''} /></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tabs
