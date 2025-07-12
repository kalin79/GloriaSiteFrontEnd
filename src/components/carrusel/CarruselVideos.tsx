'use client';
import { useRef, useEffect, useState } from "react";
import { VideoInterface, FiltroVideosInterface } from '@/interfaces/video';

import { useRouter } from "next/navigation";
import { gsap } from "gsap"; // Importar GSAP
import Draggable from 'gsap/Draggable';
gsap.registerPlugin(Draggable);
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// import VideoBanner from "@/components/videos/Banner"
import PrevisualizacionComponent from "@/components/video/Previsualizacion";
import styles from '@/styles/scss/video.module.scss';

// Estilos swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
interface Props {
    videos: VideoInterface[],
    titularVideo: string,
    colorTxt: string,
    listFiltro: FiltroVideosInterface[] | null;
}
const CarruselVideos = ({ videos, titularVideo, colorTxt, listFiltro }: Props) => {
    const [videosData, setVideosData] = useState<VideoInterface[]>(videos);
    const [filtroActivo, setFiltroActivo] = useState<string | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null)
    let isAnimating = false;
    const tlCard = gsap.timeline({ paused: false });
    // let animatingElement = null; // elemento actualmente animado
    const router = useRouter();
    // Referencia al div  que contiene la informacion.
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    const handleMouseEnter = (index: number, slug: string, marca: string, title: string, video: string) => {
        const card = cardRefs.current[index];

        // solo animamos sino existe otra animacion activa 
        if (!tlCard.isActive() && !isAnimating) {
            isAnimating = true; //bloqueamos nuevas animaciones
            tlCard.clear(); // limpiar animaciones previas
            if (card) {
                const rect = card.getBoundingClientRect();
                document.querySelectorAll(".popupVideo").forEach(el => el.remove());
                mostrarPopUp(rect.top + window.scrollY, rect.left + window.scrollX, rect.width, rect.height, slug, marca, title, video);
            } else {
                isAnimating = false;
            }

        } else {
            if ((document.querySelector(".popupVideo")) && !tlCard.isActive()) {
                isAnimating = false;
                document.querySelectorAll(".popupVideo").forEach(el => el.remove());
            }
        }

    }

    const handleMouseLeave = () => {

        const divRemove = document.querySelector(".popupVideo");
        if (divRemove) {
            if (!tlCard.isActive() && isAnimating) {
                tlCard.clear();
                tlCard.to(divRemove, {
                    scale: 0, // Escala inicial (0 = completamente pequeño)
                    opacity: 0, // Opacidad inicial (0 = completamente transparente)
                    duration: 0.5, // Duración de la animación
                    ease: "power2.out", // Curva de easing
                    onComplete: () => {
                        divRemove.remove();
                        isAnimating = false;
                    }
                });
                tlCard.play();
            };
        }


    }

    const handleClickViewVideo = (slug: string, marca: string) => {
        router.push(`/${marca}/video/${slug}`)
    }

    const mostrarPopUp = (top: number, left: number, width: number, height: number, slug: string, marca: string, title: string, video: string) => {

        const divContenedorVideo = document.createElement("div");
        const divVideo = document.createElement("div");
        const divControles = document.createElement("div");
        const videoElement = document.createElement("video");
        const divTitular = document.createElement("div");
        const altoContenido = 80;
        const divFlexControlador = document.createElement("div");
        const imagenPlay = document.createElement('img');
        // Div para contenedor del video

        videoElement.src = video;
        videoElement.controls = false;
        videoElement.autoplay = true;
        videoElement.muted = true;

        divTitular.textContent = title;
        divTitular.classList.add("titularDiv");


        divVideo.classList.add("videoPlayView");
        divVideo.appendChild(videoElement);
        divVideo.appendChild(divTitular);
        divVideo.style.height = (height - altoContenido) + "px";
        divContenedorVideo.classList.add("popupVideo");
        divContenedorVideo.appendChild(divVideo);


        // Div para el contenedor del controlador de video

        divControles.style.height = altoContenido + "px";
        divControles.classList.add("videoControladorPopup");
        divContenedorVideo.appendChild(divControles);

        divFlexControlador.classList.add("controladorFlex");
        divControles.appendChild(divFlexControlador);

        imagenPlay.src = "/play.svg";
        imagenPlay.alt = 'Ir al Video'; // Texto alternativo
        imagenPlay.width = 42; // Ancho de la imagen
        imagenPlay.height = 42; // Altura de la imagen

        divFlexControlador.appendChild(imagenPlay);

        divContenedorVideo.style.top = (top - 10) + "px";
        divContenedorVideo.style.left = left + "px";
        divContenedorVideo.style.width = width + "px";
        divContenedorVideo.style.height = height + "px";

        divContenedorVideo.addEventListener("mouseleave", handleMouseLeave);

        divContenedorVideo.addEventListener("click", () => { handleClickViewVideo(slug, marca) });

        document.body.appendChild(divContenedorVideo);

        // Animación con GSAP

        tlCard.from(divContenedorVideo, {
            scale: 0, // Escala inicial (0 = completamente pequeño)
            opacity: 0, // Opacidad inicial (0 = completamente transparente)
            duration: 0.5, // Duración de la animación
            ease: "power2.out", // Curva de easing
            // onComplete: () => setActivePopupVideo(true)
        });
        tlCard.play();
    }

    // Limpiar event listeners y timeouts al desmontar el componente
    useEffect(() => {
        return () => {
            // if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
            document.querySelectorAll(".popupVideo").forEach(el => el.remove());
            setVideosData(videos); // Reinicia videosData cuando cambian las props
        };
    }, [videos]);
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
    // Manejar cambio de filtro
    const handleFilter = (filtro: string | null) => {
        setFiltroActivo(filtro);
    };
    return (
        <div className={`videoPrevisualizacionContent`}>
            <div className={`containerFluid`}>
                <div className={`headerContainer`}>
                    <h2 className={`titularGrande ${colorTxt != '' ? 'blancoTxt' : ''}`} >{titularVideo}</h2>
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
                                            onClick={() => handleFilter(item.slug)}>{item.nombre}</button>
                                    ))
                                }
                            </div>
                        </div>
                    )
                }
            </div>
            <div className={`listaReproduccionContainer`}>
                <div>
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
                                slidesPerView: 6
                            }
                        }}

                    >
                        {videosData.map((item, index) => (
                            <SwiperSlide
                                key={index}
                                className={`slideNetflix`}
                            >
                                <PrevisualizacionComponent
                                    ref={(el) => { cardRefs.current[index] = el }}
                                    index={index}
                                    videosContents={item}
                                    onMouseEnter={() => handleMouseEnter(index, item.slug, item.marca, item.title, item.video)}
                                    onMouseMove={() => handleMouseEnter(index, item.slug, item.marca, item.title, item.video)}
                                    onClick={() => handleClickViewVideo(item.slug, item.marca)}

                                />
                            </SwiperSlide>
                        ))}

                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default CarruselVideos
