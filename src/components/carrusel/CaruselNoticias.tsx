'use client';
import Link from 'next/link'
import { useRouter } from "next/navigation";

import { Swiper, SwiperSlide } from 'swiper/react';
import CardComponent from "@/components/noticias/Card";
import { NoticiaInterface } from '@/interfaces/noticia';
// Estilos swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from '@/styles/scss/noticias.module.scss';
interface Props {
    noticias: NoticiaInterface[];
}
const CaruselNoticias = ({ noticias }: Props) => {
    const router = useRouter();

    const handleClickViewVideo = (slug: string) => {
        router.push(`/noticias/${slug}`)
    }
    return (
        <div className={`${styles.carruselNoticiasContainer} bgAzul`}>
            <div className={`containerFluidLeft`}>
                <div className={styles.headerContainer}>
                    <div>
                        <h3 className='titularPequeno boldMedium rojoTxt '>NOTICIAS QUE INSPIRAN</h3>
                        <h2 className='titularExtraGrande'>
                            Historias y Actualidad <br />
                            de Gloria
                        </h2>
                    </div>
                    <div className='btnContainer'>
                        <Link href={`/noticias`} className='btnStandart' title='Ver todas las noticias'>Ver todas las noticias</Link>
                    </div>
                </div>
                <div className={styles.listadoCarrusel}>
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={"auto"} // Permite ajustar el tamaño según el contenido
                        freeMode={true} // Activa el desplazamiento libre
                        grabCursor={true} // Muestra el cursor tipo "agarre"
                        style={{ overflowX: "auto" }} // Permite el scroll horizontal
                        className={`swiperScrollHorizontalNoticias`}
                    >
                        {noticias.map((item, index) => (
                            <SwiperSlide
                                key={index}
                                className={styles.slide}
                            >
                                <CardComponent
                                    noticiaContents={item}
                                    onClick={() => handleClickViewVideo(item.slug)}

                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default CaruselNoticias
