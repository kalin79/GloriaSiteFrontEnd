'use client';

import { BannerInterface } from '@/interfaces/banner';
import BannerPrincipalComponent from "@/components/banners/Header";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

// Estilos swiper
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


interface multimediaParameters {
    multimediaContents: BannerInterface[];
    viewLogo?: boolean;
}
const FullPage = ({ multimediaContents, viewLogo = true }: multimediaParameters) => {
    return (
        <>
            <Swiper
                modules={[EffectFade, Navigation, Pagination, Autoplay]}
                effect={'fade'}
                spaceBetween={30}
                slidesPerView={1}
                navigation={true}
                pagination={{ clickable: true }}
                // autoplay={{ delay: 8000 }}
                className={`bannerCarruselHome`}
            >
                {multimediaContents.map((item, index) => (
                    <SwiperSlide
                        key={index}
                    >
                        <BannerPrincipalComponent multimediaContents={item} viewLogo={viewLogo} />
                    </SwiperSlide>
                ))}

            </Swiper>

        </>
    )
}

export default FullPage
