'use client';
import { useState, useEffect } from "react";
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { ProductInterface } from '@/interfaces/producto';
import HtmlSafeRender from '@/components/HtmlSafeRender';
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
        if (productoData.imagenes && productoData.imagenes.length > 0) {
            setImageActive(productoData.imagenes[0].imagen);
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
                                productoData.imagenes?.map((item, index) => (
                                    <div
                                        className={styles.miniProducto}
                                        key={index}
                                        onClick={() => setImageActive(item.imagen)}
                                    >
                                        <Image src={item.imagen} width={82} height={107} alt='' />
                                    </div>
                                ))
                            }
                        </div>
                        <div className={styles.viewMobil}>
                            <Swiper
                                spaceBetween={10}
                                slidesPerView={1} // Muestra 5 películas a la vez
                                navigation
                                grabCursor={true}
                                pagination={{ clickable: true }}
                                // autoplay={{ delay: 3000 }}
                                loop={true}
                                modules={[Navigation, Pagination]}
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
                                    productoData.imagenes?.map((item, index) => (
                                        <SwiperSlide
                                            key={index}
                                            className={styles.itemProducto}
                                        >
                                            <Image src={item.imagen} width={675} height={884} alt='' />
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
                            <div className={styles.stickerContainer}>
                                <p className="celesteTxt">Mundo Gloria</p>
                            </div>
                            <h2 className={`titularGrande ${styles.titularHeader}`}>Leche Entera UHT Gloria</h2>
                            <p className="parrafoMedianoPop">
                                Es un producto elaborado a partir de la leche entera de vaca enriquecido con vitaminas A y D. Por su naturaleza aporta proteínas de alta calidad y minerales como el calcio y el fósforo.
                            </p>
                            <div className={styles.presentacionesContainer}>
                                <h3 className="celesteTxt parrafoMediano ">PRESENTACIONES</h3>
                                <div className={styles.listadoContainer}>
                                    {
                                        productoData.presentaciones?.map((item, index) => (
                                            <div className={styles.item} key={index}>
                                                <div className={styles.imageContainer}>
                                                    <Image src={item.imagen || ''} width={25} height={52} alt="" />
                                                </div>
                                                <div className="parrafoPequeno blancoTxt centerTxt">
                                                    <HtmlSafeRender html={item.descripcion} />
                                                </div>
                                            </div>
                                        ))
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h2 className="misti">Un vaso de bienestar en
                                cada momento</h2>
                            <h3>200 ml de producto contiene:</h3>
                        </div>
                        <div>
                            {
                                productoData.caracteristicas?.map((item, index) => (
                                    <div className={styles.item} key={index}>
                                        <div>
                                            <h4 className="titularMediano fontLight">{item.valor}</h4>
                                            <p className="parrafoMediano celesteTxt">{item.descripcion}</p>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailMain
