'use client';
import Link from 'next/link'
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import NoticiaCardComponent from "@/components/noticias/Card";
import { NoticiaInterface } from '@/interfaces/noticia';
// Estilos swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from '@/styles/scss/noticias.module.scss';
interface Props {
    noticiasData: NoticiaInterface[];
}
const CaruselNoticias = ({ noticiasData }: Props) => {
    const router = useRouter();
    const handleClickNoticias = (slug: string) => {
        router.push(`/noticias/${slug}`)
    }


    return (
        <div className={styles.noticiasHomeContainer}>
            <div className='containerFluid'>
                <div className={styles.noticiaHeaderContainer}>
                    <div>
                        <h3>NOTICIAS</h3>
                        <h2>
                            Noticias que Inspiran: <br />
                            <span>Actualidad de Gloria</span>
                        </h2>
                    </div>
                    <div>
                        <p>
                            Seguimos creciendo y trabajando para alimentar un futuro mejor. Conoce las últimas novedades de Gloria: logros, innovaciones y proyectos que nos acercan cada día más a las familias peruanas.
                        </p>
                    </div>
                </div>
                <div className={`${styles.listaNoticiasContainer} listaNoticiasCarruselHomeContainer`}>
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
                                slidesPerView: 4
                            }
                        }}

                    >
                        {noticiasData.map((item, index) => (
                            <SwiperSlide
                                key={index}
                                className={`slideNetflix`}
                            >
                                <NoticiaCardComponent
                                    noticiaContent={item}
                                    onClick={() => handleClickNoticias(item.slug ?? '')}
                                />
                            </SwiperSlide>
                        ))}

                    </Swiper>
                </div>
                <div className={styles.btnContainer}>
                    <Link href='/noticias'>Ver todas las noticias</Link>
                </div>
            </div>
        </div>
    )
}

export default CaruselNoticias
