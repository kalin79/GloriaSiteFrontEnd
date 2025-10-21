'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { VideoInterface } from '@/interfaces/video';

// Estilos swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import PrevisualizacionComponent from "@/components/video/Previsualizacion";
import styles from '@/styles/scss/marcabonle.module.scss';


interface Props {
    titularCampana: string;
    subtitularCampana: string;
    videosCampana: VideoInterface[];
}
const CarruselVideosRelacionados = ({ titularCampana, subtitularCampana, videosCampana }: Props) => {

    return (
        <div className={styles.listadoComponentContainer}>
            <div className={`${styles.titularHeader}`}>
                <h3 className={`${styles.titularMini}`}>{titularCampana} </h3>
                <h2 className={styles.parrafoMini}>{subtitularCampana}</h2>
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
                            {/* <PrevisualizacionComponent videosContents={item} /> */}
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>
        </div>
    )
}

export default CarruselVideosRelacionados
