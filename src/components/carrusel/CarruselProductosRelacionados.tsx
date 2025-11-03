'use client';
import { useRouter } from "next/navigation";
import { ProductInterface } from '@/interfaces/producto';
// import SanitizedHtml from '@/components/SanitizedHtml';

import { Swiper, SwiperSlide } from 'swiper/react';
import CardComponent from "@/components/producto/Card";
// Estilos swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from '@/styles/scss/producto.module.scss';

interface Props {
    productosRelacionados: ProductInterface[];
    // productoData: ProductInterface;
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
                    <h2 className={styles.titularRelacionados}>
                        Otros productos que  <br />
                        podrían interesarte
                    </h2>
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
                                        onClick={() => { if (item.slug && item.marca) { handleClickViewVideo(item.slug, item.marca?.slug) } }}
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
