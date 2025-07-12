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
interface VideoContent {
    title: string;
    idMarca: number;
    marca: string;
    slug: string;
    imagen: string;
    video: string;
    colorMarca: string;
    duracion: string;
    like: number;
}
const Tabs = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const videos: VideoContent[] = [
        {
            title: 'Loncheras divertidas y nutritivas para tus pequeños',
            idMarca: 1,
            marca: 'Bonle',
            slug: 'lonceras-divertidas-y-nutricionales-para-tus-pequenos',
            imagen: '/videoimg.png',
            video: '/videocorto.mp4',
            colorMarca: 'color1',
            duracion: '11:34',
            like: 245
        },
        {
            title: 'Cómo potenciar el aprendizaje de tus hijos desde casa',
            idMarca: 2,
            marca: 'ActiBio',
            slug: 'como-potenciar-el-aprendizaje-de-tus-hijos-desde-casa',
            imagen: '/videoimg2.png',
            video: '/videocorto.mp4',
            colorMarca: 'color2',
            duracion: '01:05',
            like: 245
        },
        {
            title: 'Potencia tu actividad física con estos consejos PRO',
            idMarca: 3,
            marca: 'PRO',
            slug: 'potencia-tu-actividad-fisica-con-estos-consejos-pro',
            imagen: '/videoimg3.png',
            video: '/videocorto.mp4',
            colorMarca: 'color3',
            duracion: '01:05',
            like: 245
        },
        {
            title: 'Loncheras divertidas y nutritivas para tus pequeños',
            idMarca: 4,
            marca: 'PRO',
            slug: 'loncheras-divertidas-y-nutritivas-para-tus-pequenos',
            imagen: '/videoimg.png',
            video: '/videocorto.mp4',
            colorMarca: 'color3',
            duracion: '01:05',
            like: 245
        },
        {
            title: 'Loncheras divertidas y nutritivas para tus pequeños',
            idMarca: 5,
            marca: 'Bonle',
            slug: 'loncheras-divertidas-y-nutritivas-para-tus-pequenos',
            imagen: '/videoimg3.png',
            video: '/videocorto.mp4',
            colorMarca: 'color1',
            duracion: '01:05',
            like: 245
        },
        {
            title: 'Loncheras divertidas y nutritivas para tus pequeños',
            idMarca: 1,
            marca: 'Bonle',
            slug: 'lonceras-divertidas-y-nutricionales-para-tus-pequenos',
            imagen: '/videoimg.png',
            video: '/videocorto.mp4',
            colorMarca: 'color1',
            duracion: '01:05',
            like: 245
        },
        {
            title: 'Cómo potenciar el aprendizaje de tus hijos desde casa',
            idMarca: 2,
            marca: 'ActiBio',
            slug: 'como-potenciar-el-aprendizaje-de-tus-hijos-desde-casa',
            imagen: '/videoimg2.png',
            video: '/videocorto.mp4',
            colorMarca: 'color2',
            duracion: '01:05',
            like: 245
        },
        {
            title: 'Potencia tu actividad física con estos consejos PRO',
            idMarca: 3,
            marca: 'PRO',
            slug: 'potencia-tu-actividad-fisica-con-estos-consejos-pro',
            imagen: '/videoimg3.png',
            video: '/videocorto.mp4',
            colorMarca: 'color3',
            duracion: '00:35',
            like: 245
        },
        {
            title: 'Loncheras divertidas y nutritivas para tus pequeños',
            idMarca: 4,
            marca: 'PRO',
            slug: 'loncheras-divertidas-y-nutritivas-para-tus-pequenos',
            imagen: '/videoimg.png',
            video: '/videocorto.mp4',
            colorMarca: 'color3',
            duracion: '00:05',
            like: 245
        },
        {
            title: 'Loncheras divertidas y nutritivas para tus pequeños',
            idMarca: 5,
            marca: 'Bonle',
            slug: 'loncheras-divertidas-y-nutritivas-para-tus-pequenos',
            imagen: '/videoimg2.png',
            video: '/videocorto.mp4',
            colorMarca: 'color1',
            duracion: '01:05',
            like: 245
        },
    ]
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
                                {videos.map((item, index) => (
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
                                <h1 className="titularGrande mbot0_5">Cómo potenciar el aprendizaje de tus hijos desde casa</h1>
                                <div className={`${styles.descriptionBox} parrafoMedianoPop`}>
                                    <p>
                                        Descubre estrategias efectivas para mejorar el aprendizaje de tus hijos desde casa. En este video, te brindamos herramientas prácticas, consejos pedagógicos y técnicas para fomentar su autonomía, concentración y motivación en el estudio.
                                    </p>
                                </div>
                            </div>
                            <div>
                                <h3 className="parrafoMedianoPop celesteTxt fontLight">DURACIÓN: <span className="parrafoMedianoPop blancoTxt boldRegular">02 min 23 seg</span></h3>
                                <h3 className="parrafoMedianoPop celesteTxt fontLight">FECHA DE ESTRENO: <span className="parrafoMedianoPop blancoTxt boldRegular">MAY 2024</span></h3>
                                <h3 className="parrafoMedianoPop celesteTxt fontLight">MARCA AUSPICIADORA: <span className="parrafoMedianoPop blancoTxt boldRegular">GLORIA</span></h3>
                                <h3 className="parrafoMedianoPop celesteTxt fontLight">CLASIFICACIÓN: <span className="parrafoMedianoPop blancoTxt boldRegular">+18</span></h3>
                                <div className={styles.elencoContainer}>
                                    <h3 className="parrafoMedianoPop celesteTxt fontLight">ELENCO:</h3>
                                    <p className="parrafoMedianoPop blancoTxt boldRegular">Mario Mendez</p>
                                    <p className="parrafoMedianoPop blancoTxt boldRegular">Lucia Pérez</p>
                                    <p className="parrafoMedianoPop blancoTxt boldRegular">Gabriel Bueno </p>
                                    <p className="parrafoMedianoPop blancoTxt boldRegular">Luisa Reyes</p>
                                </div>
                                <div className={styles.autorBox}>
                                    <h3 className="parrafoMedianoPop celesteTxt fontLight">AUTOR:</h3>
                                    <div className={styles.autorList}>
                                        <Image src='/autor.png' width={58} height={58} alt="" />
                                        <div>
                                            <h2 className="parrafoMedianoPop blancoTxt boldRegular">Diego Beltrán Rojas</h2>
                                            <h4 className="parrafoMedianoPop celesteTxt boldRegular">PSICÓLOGO DE FAMILIA</h4>
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
