'use client';
import { useState, useEffect } from "react";
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ProductInterface } from '@/interfaces/producto';
// import HtmlSafeRender from '@/components/HtmlSafeRender';
import SanitizedHtml from '@/components/SanitizedHtml';
import styles from '@/styles/scss/producto.module.scss';
// Estilos swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
interface Props {
    productoData: ProductInterface;
}
const DetailMain = ({ productoData }: Props) => {
    const [imageActive, setImageActive] = useState<string | undefined>();
    useEffect(() => {
        if (productoData.gallery && productoData.gallery.length > 0) {
            setImageActive(productoData.gallery[0]);
        }
    }, [productoData]);
    return (
        <div className={styles.detailHeaderContainer}>
            <div className='containerFluid'>
                <div className={styles.gridContainer}>
                    <div>
                        {/* <pre>{JSON.stringify(productoData.imagenes, null, 2)}</pre>saddas */}
                        <div className={styles.viewPC}>
                            {
                                productoData.gallery?.map((item, index) => (
                                    <div
                                        className={styles.miniProducto}
                                        key={index}
                                        onClick={() => setImageActive(item)}
                                    >
                                        <Image src={item} width={82} height={107} alt='' />
                                    </div>
                                ))
                            }
                        </div>
                        <div className={styles.viewMobil}>
                            <Swiper
                                spaceBetween={10}
                                slidesPerView={1} // Muestra 5 películas a la vez
                                // navigation
                                grabCursor={true}
                                pagination={{ clickable: true }}
                                autoplay={{
                                    delay: 5000,       // ⏱️ cada 3 segundos
                                    disableOnInteraction: false, // sigue el autoplay aunque el usuario interactúe
                                }}
                                loop={true}
                                modules={[Navigation, Pagination, Autoplay]}
                                className={`${styles.bannerCarruselProducto} bannerCarruselProducto`}
                                breakpoints={{
                                    750: {
                                        slidesPerView: 1
                                    },
                                    992: {
                                        slidesPerView: 1
                                    },
                                    1600: {
                                        slidesPerView: 1
                                    }
                                }}

                            >
                                {
                                    productoData.gallery?.map((item, index) => (
                                        <SwiperSlide
                                            key={index}
                                            className={styles.itemProducto}
                                        >
                                            <Image src={item} width={675} height={884} alt='' />
                                        </SwiperSlide>
                                    ))
                                }

                            </Swiper>
                        </div>

                    </div>
                    <div>
                        <div className={styles.imageViewContainer}>
                            {imageActive && (
                                <Image src={imageActive || ''} width={675} height={884} alt="" />
                            )}
                        </div>
                    </div>
                    <div>
                        <div className={styles.bodyContainer}>
                            {/* <div className={styles.stickerContainer}>
                                <p className="celesteTxt">Mundo <SanitizedHtml html={productoData.marca?.name ?? ''} /> </p>
                            </div> */}
                            <h2 className={`${styles.titularHeader}`}><SanitizedHtml html={productoData.titulo ?? ''} /></h2>
                            <p className={styles.parrafoInfo}>
                                <SanitizedHtml html={productoData.descripcion_corta ?? ''} />
                            </p>
                            <div className={styles.presentacionesContainer}>
                                <h3 className={styles.subTitulo}>PRESENTACIONES</h3>
                                <div className={styles.listadoContainer}>
                                    {
                                        productoData.presentaciones?.map((item, index) => (
                                            <div className={styles.item} key={index}>
                                                <div className={styles.imageContainer}>
                                                    <Image src={item.imagen || ''} width={25} height={52} alt="" />
                                                </div>
                                                <div className={styles.titularIcon}>
                                                    <SanitizedHtml html={item.nombre} />
                                                </div>
                                            </div>
                                        ))
                                    }

                                </div>
                            </div>
                            <div className={styles.presentacionesContainer2}>
                                <div>
                                    <h2 className={styles.subTitulo2}>
                                        <SanitizedHtml html={productoData.titulo_caracteristica ?? ''} />
                                    </h2>
                                    <h3 className={styles.subTitulo}>
                                        <SanitizedHtml html={productoData.sub_titulo_caracteristica ?? ''} />
                                    </h3>
                                </div>
                                <div className={styles.listadoItem}>
                                    {
                                        productoData.caracteristica?.map((item, index) => (
                                            <div className={styles.item} key={index}>
                                                <div>
                                                    <h4><SanitizedHtml html={item.valor} /></h4>
                                                </div>
                                                <p><SanitizedHtml html={item.descripcion} /></p>
                                            </div>
                                        ))
                                    }

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default DetailMain
