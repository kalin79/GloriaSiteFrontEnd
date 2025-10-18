'use client';

import { BannerInterfaceAux } from '@/interfaces/banner';
import BannerPrincipalComponent from "@/components/banners/HeaderHome";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

// Estilos swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';


interface multimediaParameters {
    multimediaContents: BannerInterfaceAux[];
    viewLogo?: boolean;
}
const FullPageHome = ({ multimediaContents }: multimediaParameters) => {
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
                        <BannerPrincipalComponent multimediaContents={item} />
                    </SwiperSlide>
                ))}

            </Swiper>

        </>
    )
}

export default FullPageHome
