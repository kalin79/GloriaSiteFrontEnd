'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Estilos swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import CardCampanaComponent from "@/components/campanas/Card";
import styles from '@/styles/scss/campanas.module.scss';
import { VideoCampanaInterface } from '@/interfaces/campana';


interface Props {
    titularCampana: string;
    subtitularCampana: string;
    videosCampana: VideoCampanaInterface[];
}
const CarruselCampanas = ({ titularCampana, subtitularCampana, videosCampana }: Props) => {

    return (
        <div className={styles.listadoComponentContainer}>
            <div className={`containerFluid`}>
                {
                    subtitularCampana === '' ? (
                        <div className={`${styles.titularHeader}`}>
                            <h2 className="titularGrande">{titularCampana} <span className="blancoTxt">{subtitularCampana}</span></h2>
                        </div>
                    ) : (
                        <div className={`${styles.titularHeader2}`}>
                            <h3 className="titularPequeno">{titularCampana} </h3>
                            <h2 className="titularGrande blancoTxt">{subtitularCampana}</h2>
                        </div>
                    )
                }

            </div>

            <div className={`${styles.carruselCampanas}`}>
                <Swiper
                    spaceBetween={10}
                    centeredSlides={true}
                    slidesPerView={1} // Muestra 5 películas a la vez
                    navigation
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
    )
}

export default CarruselCampanas
