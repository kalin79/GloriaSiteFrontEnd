'use client';
// import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
// Estilos swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import styles from '@/styles/scss/banner.module.scss';
const HeaderProductos = () => {
    const multimediaContents = [
        {
            image: '/b1.webp',
            title: ''
        },
        {
            image: '/b1.webp',
            title: ''
        }
    ]
    return (
        <div className={`${styles.bannerProductosPage}`}>
            <Swiper
                modules={[EffectFade, Navigation, Pagination, Autoplay]}
                effect={'fade'}
                spaceBetween={30}
                slidesPerView={1}
                navigation={false}
                pagination={{ clickable: true }}
                // autoplay={{ delay: 8000 }}
                className={`bannerProductosPage`}
            >
                {multimediaContents.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className={styles.imageFull} >
                            <Image src={item.image} alt={item.title} width={2421} height={990} />
                        </div>
                    </SwiperSlide>

                ))}

            </Swiper>

        </div>
    )
}

export default HeaderProductos
