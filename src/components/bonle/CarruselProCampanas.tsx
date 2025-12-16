'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { CampanaInterface } from '@/interfaces/campana';

// Estilos swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import CardCampanaComponent from "@/components/bonle/CardPro";
import SanitizedHtml from "@/components/SanitizedHtml";
import styles from '@/styles/scss/marcabonle.module.scss';
interface Props {
    titularCampana: string;
    subtitularCampana: string;
    videosCampana: CampanaInterface[];
}
const CarruselProCampanas = ({ titularCampana, subtitularCampana, videosCampana }: Props) => {

    return (
        <div className={styles.listadoComponentContainer}>
            <div className='containerFluid'>
                <div className={`${styles.titularHeader}`}>
                    <h2 className={styles.titularMini}><SanitizedHtml html={titularCampana} /> </h2>
                    <p className={styles.parrafoMini}><SanitizedHtml html={subtitularCampana} /></p>
                </div>

                <div className={`${styles.carruselCampanas}`}>
                    <Swiper
                        spaceBetween={10}
                        centeredSlides={false}
                        slidesPerView={1} // Muestra 5 películas a la vez
                        navigation
                        pagination={{ clickable: true }}
                        // autoplay={{ delay: 3000 }}
                        loop={false}
                        modules={[Navigation]}
                        className={`swiperNetflix swiperNetflixBonle vertical`}
                        breakpoints={{
                            750: {
                                slidesPerView: 3
                            },
                            992: {
                                slidesPerView: 3
                            },
                            1600: {
                                slidesPerView: 3
                            }
                        }}

                    >
                        {videosCampana.map((item, index) => (
                            <SwiperSlide
                                key={index}
                                className={`slideNetflix`}
                            >
                                <CardCampanaComponent videosContents={item} />
                            </SwiperSlide>
                        ))}

                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default CarruselProCampanas
