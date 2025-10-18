'use client';
import { useRef, useEffect, useState } from "react";
import { VideoInterfaceAux } from '@/interfaces/video';

import { gsap } from "gsap"; // Importar GSAP
import Draggable from 'gsap/Draggable';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import PreviewVideo from "@/components/popup/PreviewVideoHome";
import PrevisualizacionComponent from "@/components/video/PrevisualizacionHome";
import styles from '@/styles/scss/video.module.scss';
// Estilos swiper

import 'swiper/css';

import 'swiper/css/navigation';

import 'swiper/css/pagination';

gsap.registerPlugin(Draggable);

interface Props {
    videos: VideoInterfaceAux[],
    titularVideo: string,
    tipo: string,
}
const CarruselVideosHome = ({ videos, titularVideo, tipo }: Props) => {
    const [videosData, setVideosData] = useState<VideoInterfaceAux[]>(videos);

    // Referencia al div  que contiene la informacion.
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [hoverIndex, setHoverIndex] = useState<number | null>(null);

    const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);

    // Detectar elementos visibles con IntersectionObserver
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const index = Number(entry.target.getAttribute('data-index'));
                    if (entry.isIntersecting) {
                        setVisibleIndexes((prev) => [...new Set([...prev, index])]);
                    } else {
                        setVisibleIndexes((prev) => prev.filter((i) => i !== index));
                    }
                });
            },
            { threshold: 0.5 }
        );

        cardRefs.current.forEach((el, idx) => {
            if (el) {
                el.setAttribute('data-index', idx.toString());
                observer.observe(el);
            }
        });

        return () => observer.disconnect();
    }, []);

    // Limpiar event listeners y timeouts al desmontar el componente
    useEffect(() => {
        return () => {
            setVideosData(videos); // Reinicia videosData cuando cambian las props
        };
    }, [videos]);

    return (
        <div className={`videoPrevisualizacionContent ${styles.carruselVideos}`}>
            <div className={`containerFluid`}>
                <div className={`headerContainer`}>
                    <h2 className={styles.titularMini} >{titularVideo}</h2>
                    <p className={styles.parrafoMini}>Videos hechos por especialistas para guiarte y acompañarte.</p>
                </div>
            </div>
            <div className={`listaReproduccionContainer`}>
                <div>
                    <Swiper
                        spaceBetween={10}
                        centeredSlides={false}
                        slidesPerView={1} // Muestra 5 películas a la vez
                        navigation
                        grabCursor={true}
                        pagination={{ clickable: true }}
                        // autoplay={{ delay: 3000 }}

                        loop={false}
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
                        {videosData.map((item, index) => (
                            <SwiperSlide
                                key={index}
                                className={`slideNetflix`}

                            >
                                <div className="slideContentVideoPrevio"
                                    onMouseEnter={() => { console.log(index); setHoverIndex(index) }}
                                    onMouseLeave={() => { console.log(index); setHoverIndex(null) }}
                                >
                                    <PrevisualizacionComponent
                                        ref={(el) => { cardRefs.current[index] = el }}
                                        index={index}
                                        videosContents={item}

                                    // onMouseEnter={() => handleMouseEnter(index, item.slug ?? '', item.marca ?? '', item.title ?? '', item.video ?? '')}
                                    // onMouseMove={() => handleMouseEnter(index, item.slug ?? '', item.marca ?? '', item.title ?? '', item.video ?? '')}

                                    // onClick={() => handleClickViewVideo(item.slug ?? '', item.marca ?? '')}

                                    />
                                    <div className={`videoPreview ${hoverIndex === index ? 'show' : ''}`}>
                                        <PreviewVideo
                                            videoData={item}
                                            isVisible={visibleIndexes.includes(index)}
                                            isHovered={hoverIndex === index}
                                            tipo={tipo}
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}

                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default CarruselVideosHome
