'use client';
import { useRouter } from "next/navigation";
import { ProductInterface } from '@/interfaces/producto';

import { Swiper, SwiperSlide } from 'swiper/react';
import CardComponent from "@/components/producto/Card";
// Estilos swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from '@/styles/scss/producto.module.scss';

interface Props {
    productosRelacionados: ProductInterface[];
}

const CarruselProductosRelacionados = ({ productosRelacionados }: Props) => {
    const router = useRouter();


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
                            {productosRelacionados.map((item, index) => (
                                <SwiperSlide
                                    // style={{ width: "auto" }}
                                    key={index}
                                    className={styles.slide}
                                >
                                    <CardComponent
                                        productContents={item}
                                        onClick={() => { if (item.titulo && item.marca) { handleClickViewVideo(item.titulo, item.marca?.name) } }}
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
