'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { VideoInterface } from '@/interfaces/video';
import SantizedHtml from '@/components/SanitizedHtml';
// Estilos swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import PrevisualizacionComponent from "@/components/bonle/PrevisualizacionRel";
import styles from '@/styles/scss/marcabonle.module.scss';


interface Props {
    titularCampana: string;
    subtitularCampana: string;
    videosCampana: VideoInterface[];
}
const CarruselVideosRelacionados = ({ titularCampana, subtitularCampana, videosCampana }: Props) => {

    return (
        <div className={`${styles.listadoComponentContainer} ${styles.listadoComponentContainer2} videoPrevisualizacionContent`}>
            <div className={`${styles.titularHeader}`}>
                <h3 className={`${styles.titularMini}`}><SantizedHtml html={titularCampana} /></h3>
                <h2 className={styles.parrafoMini}><SantizedHtml html={subtitularCampana} /></h2>
            </div>

            <div className={`${styles.carruselCampanas}`}>
                <Swiper
                    spaceBetween={10}
                    centeredSlides={false}
                    slidesPerView={1} // Muestra 5 películas a la vez
                    navigation
                    pagination={{ clickable: true }}
                    // autoplay={{ delay: 3000 }}
                    loop={true}
                    modules={[Navigation]}
                    className={`swiperNetflix swiperNetflixBonle ${styles.swiperNetflix}`}
                    breakpoints={{
                        750: {
                            slidesPerView: 4
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
                            className={`slideNetflix `}
                        >
                            <PrevisualizacionComponent videosContents={item} />
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>
        </div>
    )
}

export default CarruselVideosRelacionados
