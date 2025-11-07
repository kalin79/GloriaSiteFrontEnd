'use client';
import { useCallback, useEffect, useRef, useState } from "react";
// import { debounce } from 'lodash';
import { getListadoProductos, getListadoProductosInput } from '@/actions/marca/producto/getListadoProductos';
import { useRouter } from "next/navigation";
import { ProductoHomeInterface, PaginationHomeInterface } from '@/interfaces/producto';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// import type { SwiperRef } from "swiper/react";
import CardComponent from "@/components/producto/CardHome";

// Estilos swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styles from '@/styles/scss/producto.module.scss';
export interface ApiResponse {
    productos: ProductoHomeInterface[];
    pagination: PaginationHomeInterface;
}
interface Props {
    productosData: ProductoHomeInterface[];
    paginationData: PaginationHomeInterface;
    // tagsData: TagsAux[];
}
const CarruselProductosBuscador = ({ productosData, paginationData }: Props) => {
    const router = useRouter();
    const [productos, setProductos] = useState<ProductoHomeInterface[]>([]);
    const [pagination, setPagination] = useState<PaginationHomeInterface>(paginationData);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const abortControllerRef = useRef<AbortController | null>(null);
    const [query, setQuery] = useState("");
    const handleClickViewVideo = (slug: string, marca: string) => {
        router.push(`/${marca}/producto/${slug}`)
    }
    // Cargar todos los productos (sin filtro)
    const cargarTodos = useCallback(() => {
        setProductos(productosData);
    }, [productosData]); // ← depende solo de productosIniciales
    // Búsqueda en API

    const buscarEnApi = useCallback(async (term: string) => {
        if (abortControllerRef.current) {
            abortControllerRef.current.abort();
        }
        const controller = new AbortController();
        abortControllerRef.current = controller;

        setIsLoading(true);
        setError(null);

        try {
            // 1. Búsqueda por NOMBRE
            let response: ApiResponse = await getListadoProductosInput(1, term);
            let productos = response.productos || [];

            // 2. Si no hay resultados → buscar por TAGS
            if (productos.length === 0) {
                const responseTags = await getListadoProductos(1, term);
                response = responseTags; // ← Aquí sí se reasigna
                productos = responseTags.productos || [];
            }

            // 3. Actualizar estado
            setProductos(productos);
            setPagination(response.pagination);

            if (productos.length === 0) {
                setError('No se encontraron productos');
            }

        } catch (err: unknown) {
            if (err instanceof Error && err.name !== 'AbortError') {
                setError('Error en la búsqueda');
                setProductos([]);
            }
        } finally {
            setIsLoading(false);
        }
    }, []);
    // Lógica principal
    useEffect(() => {
        const term = query.trim();

        if (term === '') {
            // 1. Input vacío → mostrar todos
            cargarTodos();
        } else if (term.length >= 3) {
            // 2. 4+ letras → buscar en API
            buscarEnApi(term);
        } else {
            // 3. 1-3 letras → no buscar, pero mantener resultados actuales
            // Opcional: mostrar todos o limpiar
            cargarTodos();
        }
    }, [query, cargarTodos, buscarEnApi]);

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
                                    Buscar Producto:
                                </p>
                                <div className={styles.buscadorInfo}>
                                    <input
                                        type="text"
                                        value={query}
                                        placeholder="Buscar productos ..."
                                        onChange={(e) => setQuery(e.target.value)}
                                    />
                                </div>

                            </div>

                        </div>
                        <div style={{ display: 'none' }}>
                            {
                                pagination && (
                                    pagination.total
                                )
                            }

                            {isLoading}

                            {error}
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

export default CarruselProductosBuscador
