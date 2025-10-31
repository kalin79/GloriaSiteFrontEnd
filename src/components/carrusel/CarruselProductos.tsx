'use client';
import { useCallback, useEffect, useRef, useState } from "react";
import { getListadoProductos } from '@/actions/marca/producto/getListadoProductos';
// import Image from 'next/image'
import { useRouter } from "next/navigation";
import { ProductoHomeInterface, PaginationHomeInterface, TagsAux } from '@/interfaces/producto';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { SwiperRef } from "swiper/react";
// import { Navigation } from 'swiper/modules';
// import VideoBanner from "@/components/videos/Banner"
import CardComponent from "@/components/producto/CardHome";
import dynamic from "next/dynamic";
import type { SingleValue } from "react-select";
// Carga react-select sin SSR
const Select = dynamic(() => import("react-select"), {
    ssr: false,
}) as unknown as React.FC<import("react-select").Props<OptionType, false>>;

// 👇 Tipamos la opción
interface OptionType {
    value: number;
    label: string;
}

// Estilos swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styles from '@/styles/scss/producto.module.scss';


interface Props {
    productosData: ProductoHomeInterface[];
    paginationData: PaginationHomeInterface;
    tagsData: TagsAux[];
}

const CarruselProductos = ({ productosData, paginationData, tagsData }: Props) => {
    const router = useRouter();
    const [productos, setProductos] = useState<ProductoHomeInterface[]>(productosData);
    const [pagination, setPagination] = useState<PaginationHomeInterface>(paginationData);
    const [optionSelect, setOptionSelect] = useState<SingleValue<OptionType>>(null);
    const [isLoading, setIsLoading] = useState(false);
    // Convertimos el arreglo en opciones que entienda react-select
    const options: OptionType[] = [
        { value: 0, label: 'Ver todos' }, // 👈 opción adicional
        ...tagsData.map(tag => ({
            value: tag.id,
            label: tag.name
        }))
    ];
    const swiperRef = useRef<SwiperRef | null>(null);
    const handleChange = async (newValue: SingleValue<OptionType>) => {
        setOptionSelect(newValue);
        const response = await getListadoProductos(1, newValue?.value);
        const { productos, pagination } = response;

        setProductos(productos);
        setPagination(pagination);
        // setOptions(selectedOption);
    };
    const handleClickViewVideo = (slug: string, marca: string) => {
        router.push(`/${marca}/producto/${slug}`)
    }
    // 🔹 Llamada a la API con paginación
    // 🔹 1. handlePagination siempre usa valores actualizados
    const handlePagination = useCallback(async () => {
        if (isLoading) return;
        if (!pagination || pagination.current_page >= pagination.last_page) return;

        setIsLoading(true);
        try {
            let response = await getListadoProductos(pagination.current_page + 1);
            if (optionSelect && optionSelect.value > 0) {
                response = await getListadoProductos(pagination.current_page + 1, optionSelect.value);
            }

            const { productos: nuevos, pagination: nuevaPaginacion } = response;

            setProductos(prev => [...prev, ...nuevos]);
            setPagination(nuevaPaginacion);
        } finally {
            setIsLoading(false);
        }
    }, [isLoading, pagination, optionSelect]);


    // 🔹 Detectar si es móvil
    const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;
    useEffect(() => {
        const swiperInstance = swiperRef.current?.swiper;
        const swiperEl = swiperInstance?.el;
        if (!swiperEl) return;

        // Desktop → scroll
        const handleScroll = () => {
            const { scrollLeft, scrollWidth, clientWidth } = swiperEl;
            if (scrollLeft + clientWidth >= scrollWidth - 80 && !isLoading) {
                handlePagination();
            }
        };

        // Mobile → touchmove con verificación de fin de scroll
        const handleTouchMove = () => {
            const { scrollLeft, scrollWidth, clientWidth } = swiperEl;
            if (scrollLeft + clientWidth >= scrollWidth - 20 && !isLoading) {
                handlePagination();
            }
        };

        if (isMobile) {
            swiperEl.addEventListener("touchmove", handleTouchMove);
        } else {
            swiperEl.addEventListener("scroll", handleScroll);
        }

        return () => {
            if (isMobile) {
                swiperEl.removeEventListener("touchmove", handleTouchMove);
            } else {
                swiperEl.removeEventListener("scroll", handleScroll);
            }
        };
    }, [handlePagination, isLoading, isMobile]);




    return (
        <div className={`${styles.sectionHomeProductos}`}>
            <div className={`containerFluidLeft2`}>
                <div className={`${styles.productoCarruselContainer}`}>
                    <div>
                        <h3 className={styles.subTitularProductoHome}>NUESTROS PRODUCTOS</h3>
                        <h2 className={styles.titularProductoHome}>
                            Descubre lo<br />
                            mejor para<br />
                            <span>tu día a día.</span>
                        </h2>
                        <p className={styles.parrafoHome}>
                            Deliciosos, nutritivos y <br />
                            perfectos para toda la <br />
                            familia. Desliza y descubre <br />
                            tus favoritos junto a <br />
                            novedades pensadas para ti.
                        </p>
                        {/* <div className={`${styles.chefContent}`}>
                            <Image src="/iconChef.svg" width={42} height={37} alt='Receta' />
                            <p className={styles.parrafoPequeHome}>
                                Producto <br />con receta
                            </p>
                        </div> */}
                    </div>
                    <div>
                        <div className={`${styles.headerContainer}`}>
                            <div>
                                <p className={styles.parrofoTagHome}>
                                    Filtrar productos por tag:
                                </p>
                                <Select
                                    inputId="searchableProductHome"
                                    options={options}
                                    onChange={handleChange}
                                    value={optionSelect} // 👈 clave para que quede marcada
                                    isSearchable={true}
                                    placeholder="Buscar..."
                                    classNamePrefix="customSelectHomeProducts"
                                />
                            </div>
                            {/* <div>
                            <Link href={`/marca/producto/gloria`} className='buttonBtn' title='Ir a productos'>Ver todos los productos</Link>
                        </div> */}
                        </div>
                        <div className={`${styles.bodyContainer}`}>
                            {/* <pre>{JSON.stringify(productos)}</pre> */}
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
                                className={`swiperNetflix swiperNetflixProductoHome`}
                                breakpoints={{
                                    750: {
                                        slidesPerView: 3
                                    },
                                    992: {
                                        slidesPerView: 2
                                    },
                                    1200: {
                                        slidesPerView: 3
                                    },
                                    1600: {
                                        slidesPerView: 3
                                    }
                                }}
                            >
                                {productos.map((item, index) => (
                                    <SwiperSlide
                                        // style={{ width: "auto" }}
                                        key={index}
                                        className={styles.slide}
                                    >
                                        <CardComponent
                                            productContents={item}
                                            onClick={() => { if (item.slug && item.marca_slug) { handleClickViewVideo(item.slug, item.marca_slug) } }}
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>

                </div>
            </div >
        </div>
    )
}

export default CarruselProductos
