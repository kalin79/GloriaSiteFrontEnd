'use client';
import { useRouter } from "next/navigation";

import { Swiper, SwiperSlide } from 'swiper/react';
import CardComponent from "@/components/producto/Card";
import { ProductInterface } from '@/interfaces/producto';
// Estilos swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from '@/styles/scss/producto.module.scss';

const CarruselProductosRelacionados = () => {
    const router = useRouter();
    const products: ProductInterface[] = [
        {
            title: 'Leche Gloria UHT Entera',
            descirpcionCorta: 'Presentación caja de 1 L',
            idMarca: 1,
            marca: 'Gloria',
            slug: 'leche-gloria-uht-entera',
            imagen: '/pO1.png',
            receta: true
        },
        {
            title: 'LECHE EN POLVO INSTANTÁNEA',
            descirpcionCorta: 'Presentación botella de 946 mL',
            idMarca: 1,
            marca: 'Gloria',
            slug: 'leche-en-polvo-instantanea',
            imagen: '/pO1M.png',
            receta: false
        },
        {
            title: 'Yogurt Gloria Durazno',
            descirpcionCorta: 'Presentación botella de 1 kg',
            idMarca: 2,
            marca: 'BONLE',
            slug: 'bonle-uht-sin-lactosa',
            imagen: '/pO2.png',
            receta: true
        },
        {
            title: 'Leche Gloria UHT Entera',
            descirpcionCorta: 'Presentación caja de 1 L',
            idMarca: 1,
            marca: 'Gloria',
            slug: 'leche-gloria-uht-entera',
            imagen: '/p4.png',
            receta: true
        },
        {
            title: 'LECHE EN POLVO INSTANTÁNEA',
            descirpcionCorta: 'Presentación botella de 946 mL',
            idMarca: 1,
            marca: 'Gloria',
            slug: 'leche-en-polvo-instantanea',
            imagen: '/pO1.png',
            receta: false
        },
        {
            title: 'Yogurt Gloria Durazno',
            descirpcionCorta: 'Presentación botella de 1 kg',
            idMarca: 2,
            marca: 'BONLE',
            slug: 'bonle-uht-sin-lactosa',
            imagen: '/p6.png',
            receta: true
        },

    ]

    const handleClickViewVideo = (slug: string, marca: string) => {
        router.push(`/${marca}/producto/${slug}`)
    }
    return (
        <div className={`containerFluid`}>
            <div className={`${styles.productoCarruselRelacionadosContainer}`}>
                <div>
                    <h2 className='titularExtraGrande blancoTxt fontLight'>
                        Otros productos que podrían <br />
                        interesarte
                    </h2>
                    <p className='parrafoMediano celesteTxt'>
                        200 ml de producto contiene:
                    </p>
                </div>
                <div>
                    <div className={`${styles.bodyContainer}`}>
                        <Swiper
                            spaceBetween={10}
                            slidesPerView={"auto"} // Permite ajustar el tamaño según el contenido
                            freeMode={true} // Activa el desplazamiento libre
                            grabCursor={true} // Muestra el cursor tipo "agarre"
                            style={{ overflowX: "auto" }} // Permite el scroll horizontal
                            className={`swiperScrollHorizontal`}
                        >
                            {products.map((item, index) => (
                                <SwiperSlide
                                    // style={{ width: "auto" }}
                                    key={index}
                                    className={styles.slide}
                                >
                                    <CardComponent
                                        productContents={item}
                                        onClick={() => { if (item.slug && item.marca) { handleClickViewVideo(item.slug, item.marca) } }}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default CarruselProductosRelacionados
