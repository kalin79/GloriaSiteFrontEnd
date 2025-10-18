'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { CampanaInterfaceAux } from '@/interfaces/campana';

// Estilos swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import CardCampanaComponent from "@/components/campanas/CardHome";
import styles from '@/styles/scss/campanas.module.scss';


interface Props {
    titularCampana: string;
    subtitularCampana: string;
    videosCampana: CampanaInterfaceAux[];
}
const CarruselCampanasHome = ({ titularCampana, subtitularCampana, videosCampana }: Props) => {

    return (
        <div className={styles.listadoComponentContainer}>
            <div className='containerFluid'>
                <div className={`${styles.titularHeader}`}>
                    <h2 className={styles.titularMini}>{titularCampana} </h2>
                    <p className={styles.parrafoMini}>{subtitularCampana}</p>
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
                        className={`swiperNetflix vertical`}
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

export default CarruselCampanasHome
