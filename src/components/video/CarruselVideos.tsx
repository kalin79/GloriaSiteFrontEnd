'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { VideoInterface } from '@/interfaces/video';

// Estilos swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import PrevisualizacionRelComponent from "@/components/video/PrevisualizacionRel";
import styles from '@/styles/scss/video.module.scss';


interface Props {
    titularCampana: string;
    subtitularCampana: string;
    videosCampana: VideoInterface[];
}
const CarruselVideos = ({ titularCampana, subtitularCampana, videosCampana }: Props) => {

    return (
        <div className={`${styles.listadoComponentContainer} videoPrevisualizacionContent`}>
            <div className={`${styles.titularHeader}`}>
                <h3 className={styles.titularMini}>{titularCampana}</h3>
                <h2 className={styles.parrafoMini}>{subtitularCampana}</h2>
            </div>
            {/* {JSON.stringify(videosCampana)} */}
            <div className={`${styles.listaReproduccionContainer}`}>
                <Swiper
                    spaceBetween={10}
                    centeredSlides={false}
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
                            slidesPerView: 4
                        },
                        1600: {
                            slidesPerView: 4
                        }
                    }}

                >
                    {videosCampana.map((item, index) => (
                        <SwiperSlide
                            key={index}
                            className={`slideNetflix`}
                        >
                            <div className='slideContentVideoPrevio'>
                                <PrevisualizacionRelComponent videosContents={item} />
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>
        </div>
    )
}

export default CarruselVideos
