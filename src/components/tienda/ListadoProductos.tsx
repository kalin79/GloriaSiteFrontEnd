'use client';
import { useState, useEffect } from 'react';
// import { useState, useEffect, useRef } from 'react';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useRouter } from "next/navigation";
// import HtmlSafeRender from '@/components/HtmlSafeRender';
import SanitizedHtml from '@/components/SanitizedHtml';
// Estilos swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';


import styles from '@/styles/scss/producto.module.scss';

const ListadoProductos = () => {
    const [totalPaginas, setTotalPaginas] = useState(1);
    const [pagina, setPagina] = useState(1);
    const [isInit, setIsInit] = useState(false); // Puedes ajustarlo luego desde API

    const router = useRouter();
    const handleSiguiente = () => {
        if (!isInit) setIsInit((prev) => !prev);

        if (pagina < totalPaginas) setPagina(pagina + 1);
    };

    const handlePagina = (num: number) => {
        if (!isInit) setIsInit((prev) => !prev);
        setPagina(num)
    }

    const handleAnterior = () => {
        if (!isInit) setIsInit((prev) => !prev);
        if (pagina > 1) setPagina(pagina - 1);
    };

    useEffect(() => {
        setTotalPaginas(1);
    }, [])

    const multimediaContents = [
        {
            image: '/iconqueso.svg',
            title: 'Quesos'
        },
        {
            image: '/iconyogurt.svg',
            title: 'Yogures'
        },
        {
            image: '/iconqueso.svg',
            title: 'Quesos'
        },
        {
            image: '/iconyogurt.svg',
            title: 'Yogures'
        },
        {
            image: '/iconqueso.svg',
            title: 'Quesos'
        },
        {
            image: '/iconyogurt.svg',
            title: 'Yogures'
        },
        {
            image: '/iconqueso.svg',
            title: 'Quesos'
        },
        {
            image: '/iconyogurt.svg',
            title: 'Yogures'
        },
        {
            image: '/iconqueso.svg',
            title: 'Quesos'
        },
        {
            image: '/iconyogurt.svg',
            title: 'Yogures'
        }
    ]
    const dataProducts = [
        {
            marca: 'gloria',
            slug: 'leche-gloria-azul',
            image: '/pO1M.png',
            title: 'Leche UHT Gloria Light',
            subTitule: 'Presentación caja de 900 g',
        },
        {
            marca: 'gloria',
            slug: 'leche-gloria-azul',
            image: '/pO1M.png',
            title: 'Leche UHT Gloria Light',
            subTitule: 'Presentación caja de 900 g',
        },
        {
            marca: 'gloria',
            slug: 'leche-gloria-azul',
            image: '/pO1M.png',
            title: 'Leche UHT Gloria Light',
            subTitule: 'Presentación caja de 900 g',
        },
        {
            marca: 'gloria',
            slug: 'leche-gloria-azul',
            image: '/pO1M.png',
            title: 'Leche UHT Gloria Light',
            subTitule: 'Presentación caja de 900 g',
        },
        {
            marca: 'gloria',
            slug: 'leche-gloria-azul',
            image: '/pO1M.png',
            title: 'Leche UHT Gloria Light',
            subTitule: 'Presentación caja de 900 g',
        },
        {
            marca: 'gloria',
            slug: 'leche-gloria-azul',
            image: '/pO1M.png',
            title: 'Leche UHT Gloria Light',
            subTitule: 'Presentación caja de 900 g',
        },
        {
            marca: 'gloria',
            slug: 'leche-gloria-azul',
            image: '/pO1M.png',
            title: 'Leche UHT Gloria Light',
            subTitule: 'Presentación caja de 900 g',
        },
        {
            marca: 'gloria',
            slug: 'leche-gloria-azul',
            image: '/pO1M.png',
            title: 'Leche UHT Gloria Light',
            subTitule: 'Presentación caja de 900 g',
        },
        {
            marca: 'gloria',
            slug: 'leche-gloria-azul',
            image: '/pO1M.png',
            title: 'Leche UHT Gloria Light',
            subTitule: 'Presentación caja de 900 g',
        },
        {
            marca: 'gloria',
            slug: 'leche-gloria-azul',
            image: '/pO1M.png',
            title: 'Leche UHT Gloria Light',
            subTitule: 'Presentación caja de 900 g',
        },
        {
            marca: 'gloria',
            slug: 'leche-gloria-azul',
            image: '/pO1M.png',
            title: 'Leche UHT Gloria Light',
            subTitule: 'Presentación caja de 900 g',
        },
        {
            marca: 'gloria',
            slug: 'leche-gloria-azul',
            image: '/pO1M.png',
            title: 'Leche UHT Gloria Light',
            subTitule: 'Presentación caja de 900 g',
        },
    ]
    const handleClickViewVideo = (marca: string, slug: string) => {
        router.push(`/${marca}/producto/${slug}`)
    }
    return (
        <>
            <div className={styles.headerFiltrosContainer}>
                <div className='containerFluid'>
                    <div className={styles.headerFiltroTop}>
                        <div className={styles.buscadorContainer}>
                            <Image src='/buscar.svg' className={styles.iconBuscador} alt='Buscar Productos' width='25' height='25' />
                            <input type="text" placeholder='Buscar...' />
                            <div className={styles.fitrosContainer}>
                                <div className={styles.iconBuscarContainer}>
                                    <Image src='/buscadorBlanco.svg' height={26} width={26} alt='filtros buscar' />
                                </div>
                                <div className={styles.opcionFiltrosContainer}>
                                    <p>Filtrar productos</p>
                                    <Image src='/filtroicon.svg' height={20} width={20} alt='filtros buscar' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.headerFiltroBottom}>
                        <Swiper
                            spaceBetween={10}
                            centeredSlides={false}
                            slidesPerView={1} // Muestra 5 películas a la vez
                            navigation
                            grabCursor={true}
                            pagination={{ clickable: true }}
                            // autoplay={{ delay: 3000 }}

                            loop={false}
                            modules={[Navigation]}
                            className={`carruselCategoriasProductos`}
                            breakpoints={{
                                750: {
                                    slidesPerView: 3
                                },
                                992: {
                                    slidesPerView: 7
                                },
                                1200: {
                                    slidesPerView: 8
                                },
                                1600: {
                                    slidesPerView: 8
                                }
                            }}
                        >
                            {multimediaContents.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className={styles.cardIcon} >
                                        <Image src={item.image} alt={item.title} width={102} height={102} />
                                        <p>{item.title}</p>
                                    </div>
                                </SwiperSlide>

                            ))}

                        </Swiper>
                    </div>

                </div>
            </div>
            <div className={styles.viewProductosContainer}>
                <div className='containerFluid'>
                    <div className={styles.viewProductHeader}>
                        <div>
                            <h2>NUESTROS PRODUCTOS</h2>
                            <h1>
                                Hechos y pensados para <br />
                                toda <span>la familia</span>
                            </h1>
                        </div>
                        <div>
                            <p>
                                Estamos con quienes lo dan todo por los suyos, a través de productos deliciosos, nutritivos y perfectos para acompañar momentos que unen e inspiran.
                            </p>
                        </div>
                    </div>
                    <div className={styles.viewProductBody}>
                        {dataProducts.map((item, index) => (
                            <div key={index} onClick={() => { handleClickViewVideo(item.marca || '', item.slug || '') }} className={styles.cardProductContainer}>
                                <div className={styles.cardHeader}>
                                    <Image src={item.image} width={656} height={858} alt={item.title} />
                                </div>
                                <div className={styles.cardBody}>
                                    <h3>
                                        <SanitizedHtml html={item.title} />
                                    </h3>
                                    <h2>
                                        <SanitizedHtml html={item.subTitule} />
                                    </h2>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
            <div className={styles.paginadoContainer}>
                <div className={styles.containerPaginacion}>
                    <button
                        onClick={handleAnterior}
                        disabled={pagina === 1}
                        className={styles.arrowButtonPag}
                    >
                        <Image src="/arrowPP2.svg"
                            width={11}
                            height={20}
                            alt='anterior'
                            className={styles.arrowLeft}
                        />
                    </button>
                    {Array.from({ length: totalPaginas }, (_, i) => i + 1).map((num) => (
                        <button
                            key={num}
                            onClick={() => handlePagina(num)}
                            className={`${styles.btnNum} parrafoPequeno ${pagina === num ? styles.active : ''}`}
                        >
                            {num}
                        </button>
                    ))}

                    <button
                        onClick={handleSiguiente}
                        disabled={pagina === totalPaginas}
                        className={styles.arrowButtonPag}
                    >
                        <Image
                            src="/arrowPP1.svg"
                            width={11}
                            height={20}
                            alt="Siguiente"
                        />
                    </button>
                </div>
            </div>
        </>
    )
}

export default ListadoProductos
