'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

// Estilos swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import styles from '@/styles/scss/marcabonle.module.scss';
const BannerPro = () => {
    return (
        <Swiper
            modules={[EffectFade, Navigation, Pagination, Autoplay]}
            effect={'fade'}
            spaceBetween={30}
            slidesPerView={1}
            navigation={false}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            className={`bannerCarruselInterna`}
        >
            <SwiperSlide>
                <div className={styles.bannerFull}>
                    <Image src='/bonle1.webp' width={2460} height={1383} alt='Banner Bonle' />
                </div>
            </SwiperSlide>
            {/* <SwiperSlide>
                <div className={styles.bannerFull}>
                    <Image src='/bonle2.webp' width={2460} height={1383} alt='Banner Bonle' />
                </div>
            </SwiperSlide> */}

        </Swiper>

    )
}

export default BannerPro
