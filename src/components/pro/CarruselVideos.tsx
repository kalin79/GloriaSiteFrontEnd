'use client';
import { useRef, useEffect, useState } from "react";
import { CategoriaVideosHomeInterface, VideosHomeInterface } from '@/interfaces/marca';

import { gsap } from "gsap"; // Importar GSAP
import Draggable from 'gsap/Draggable';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import PreviewVideo from "@/components/pro/PreviewVideo"
import PrevisualizacionComponent from "@/components/pro/Previsualizacion";
import styles from '@/styles/scss/marcapro.module.scss';
import { getVideoByCatgories } from '@/actions/marca/video/getVideoBySlug';
// Estilos swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

gsap.registerPlugin(Draggable);

interface Props {
    videos: VideosHomeInterface[],
    titularVideo: string,
    listFiltro: CategoriaVideosHomeInterface[] | null;
    tipo: string,
}
const CarruselVideos = ({ videos, titularVideo, listFiltro, tipo }: Props) => {
    const [videosData, setVideosData] = useState<VideosHomeInterface[]>(videos);
    const [filtroActivo, setFiltroActivo] = useState<string | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);

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


    // Manejar cambio de filtro
    const handleFilter = (filtro: string | null) => {
        setFiltroActivo(filtro);
    };

    useEffect(() => {
        console.log(`aqui: ${filtroActivo}`);

        if (!filtroActivo) {
            setVideosData(videos);
            return
        }

        const fetchData = async () => {
            try {
                // setLoading(true);
                const response = await getVideoByCatgories(filtroActivo);

                if (response?.status != 1) {
                    console.error("Error en la API:", response);
                    setVideosData([]);
                    return;
                }
                const videosCategories: VideosHomeInterface[] = response.data;
                setVideosData(videosCategories);

            } catch (error) {
                console.error("Error en fetchData:", error);
            } finally {
                // setLoading(false);
            }
        };

        fetchData();
    }, [videos, filtroActivo])

    return (
        <div className={`videoPrevisualizacionContent ${styles.carruselVideos}`}>
            <div className={`containerFluid`}>
                <div className={`headerContainer`}>
                    <h2 className={styles.titularMini} >{titularVideo}</h2>
                    <p className={styles.parrafoMini}> Nuestros especialistas resuelven todas tus dudas sobre la proteína y cómo alcanzar todo lo que te PROpongas.</p>
                </div>

                {
                    listFiltro && listFiltro.length > 0 &&
                    (
                        <div className={styles.ScrollContainerFiltro} ref={wrapperRef}>
                            <div className={styles.filtroContainer} ref={containerRef}>
                                <button
                                    className={`parrafoMediano ${filtroActivo === null ? styles.active : ''}`}
                                    onClick={() => handleFilter(null)}
                                >Ver todos</button>
                                {
                                    listFiltro.map((item, index) => (
                                        <button
                                            className={`parrafoMediano ${filtroActivo === item.slug && item.slug !== '' ? styles.active : ''}`}
                                            key={index}
                                            onClick={() => handleFilter(item.slug ?? '')}>{item.name}</button>
                                    ))
                                }
                            </div>
                        </div>
                    )
                }
            </div>
            <div className={`listaReproduccionContainer ${styles.listaReproduccionContainer}`}>
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
                        className={`swiperNetflix swiperNetflixPro ${styles.swiperNetflix}`}
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
                                    />
                                    <div className={`videoPreview ${styles.videoPreview} ${hoverIndex === index ? 'show' : ''}`}>
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

export default CarruselVideos
