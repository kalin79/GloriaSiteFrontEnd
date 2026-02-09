'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import { setResultFilterCategory } from '@/actions/tienda/getFiltros';

import gsap from 'gsap'; // Importa GSAP
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
// import { useState, useEffect, useRef } from 'react';
// Registra el plugin (solo una vez)
gsap.registerPlugin(ScrollToPlugin);

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useRouter } from "next/navigation";
import { SelectedFilters, FilterKey } from "@/types/filters"
// import HtmlSafeRender from '@/components/HtmlSafeRender';
import SanitizedHtml from '@/components/SanitizedHtml';
// Estilos swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import { InfoCategorieInterface, ProductoInterfaceInterface, PaginationInterface, CategoryInterface, MarcaInterface, PresentacionInterface, TipoProductoInterface, AtributoInterface } from '@/interfaces/tienda';
import styles from '@/styles/scss/producto.module.scss';

interface Props {
    infoCategory: InfoCategorieInterface[];
    slug: string;
    dataCategories: CategoryInterface[];
    marcas: MarcaInterface[];
    tipo_producto: TipoProductoInterface[];
    presentaciones: PresentacionInterface[];
    atributos: AtributoInterface[];
    listProducts: ProductoInterfaceInterface[];
    pagination: PaginationInterface;
}

const ListadoProductosCategorias = ({ infoCategory, slug, pagination, listProducts, dataCategories, marcas, tipo_producto, presentaciones, atributos }: Props) => {
    const [totalPaginas, setTotalPaginas] = useState(1);
    const [pagina, setPagina] = useState(1);
    const PAGES_PER_BLOCK = pagination.per_page;
    const currentBlock = Math.floor((pagina - 1) / PAGES_PER_BLOCK);
    // Rango visible
    const startPage = (currentBlock * PAGES_PER_BLOCK) + 1;
    const endPage = Math.min(startPage + PAGES_PER_BLOCK - 1, totalPaginas);


    const [query, setQuery] = useState("");
    const [queryFiltros, setQueryFiltros] = useState("");
    const abortControllerRef = useRef<AbortController | null>(null);

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>("");

    const [isInit, setIsInit] = useState(false); // Puedes ajustarlo luego desde API
    const [viewFiltro, setViewFiltro] = useState(false);
    const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({});
    const [dataProducts, setDataProducts] = useState<ProductoInterfaceInterface[]>(listProducts);

    const categoryDataMain = infoCategory?.[0];
    const posterMobile = categoryDataMain?.poster_mobile?.trim();
    const posterMain = categoryDataMain?.poster?.trim();

    const scrollOnNextLoad = useRef(false);
    const skipNextFetch = useRef(false); // ← Nuevo ref
    const skipSearch = useRef(true); // ← Nuevo ref
    // const isInitialData = useRef(true);
    // Ref al contenedor de productos
    const productosRef = useRef<HTMLDivElement>(null);
    const router = useRouter();
    const handleSiguiente = () => {

        if (!isInit) setIsInit((prev) => !prev);
        // if (endPage === totalPaginas) return;
        // const nuevaPagina = Math.min(startPage + PAGES_PER_BLOCK, totalPaginas);
        // setPagina(nuevaPagina);
        if (pagina < totalPaginas) {
            setPagina(pagina + 1);
            scrollOnNextLoad.current = true;
        }


    };
    const handleAnterior = () => {
        if (!isInit) setIsInit((prev) => !prev);
        if (pagina > 1) {
            setPagina(pagina - 1);
            scrollOnNextLoad.current = true;
        }
    };

    const handlePagina = (num: number) => {
        scrollOnNextLoad.current = true;
        skipNextFetch.current = false; // ← Indicamos que el próximo fetch debe saltarse

        if (!isInit) setIsInit((prev) => !prev);
        setPagina(num);
        // onChange(num);
    }

    const cargarTodos = useCallback(() => {
        skipNextFetch.current = true; // ← Indicamos que el próximo fetch debe saltarse
        setIsLoading(false);
        setError("");
        setDataProducts(listProducts);
        setTotalPaginas(pagination.last_page);
        setPagina(1);
        setQueryFiltros("");
        // isInitialData.current = true; // ← marcamos como inicial
    }, [listProducts, pagination]); // ← depende solo de productosIniciales

    const resultSearchInput = useCallback(async () => {
        if (skipSearch.current) {
            skipSearch.current = false;
            return;
        }
        skipNextFetch.current = true; // ← Indicamos que el próximo fetch debe saltarse
        if (abortControllerRef.current) {
            abortControllerRef.current.abort();
        }
        const controller = new AbortController();
        abortControllerRef.current = controller;

        setIsLoading(true);
        setError("");

        try {
            const responseProductus = await setResultFilterCategory(`categorias_slug=${slug}&search=${query}`);
            const { pagination: paginationApi, items: productsApi } = responseProductus.data;
            setTotalPaginas(paginationApi.last_page);
            setPagina(1);
            setDataProducts(productsApi);

            if (productsApi.length === 0) {
                setError('No se encontraron productos');
            }

        } catch (err: unknown) {
            if (err instanceof Error && err.name !== 'AbortError') {
                setError('Error en la búsqueda');
            }
        } finally {
            setIsLoading(false);
        }
    }, [query, slug]);

    useEffect(() => {
        setTotalPaginas(pagination.last_page);
    }, [pagination])

    useEffect(() => {
        const fetchProductos = async () => {
            if (skipNextFetch.current) {
                skipNextFetch.current = false;
                return;
            }
            if (pagina !== 0) {
                let _URL_ = `categorias_slug=${slug}&page=${pagina}`;

                // verificamos si ha realizado una busqueda en el input en caso si haya hecho busqueda
                // y tengamos muchos resultados estos deberan ser paginados.
                if (query.trim() !== '') {
                    _URL_ = `categorias_slug=${slug}&page=${pagina}&search=${query}`;
                }

                // En el caso que se use los filtros hara la nueva concatenacion aqui.
                if (queryFiltros.trim() !== '') {
                    _URL_ = `categorias_slug=${slug}&page=${pagina}&${queryFiltros}`;
                }

                const responseProductus = await setResultFilterCategory(_URL_);

                const { pagination: paginationApi, items: productsApi } = responseProductus.data;

                setTotalPaginas(paginationApi.last_page);
                setDataProducts(productsApi);

                if (scrollOnNextLoad.current) {
                    scrollOnNextLoad.current = false;
                    if (isInit) {
                        setTimeout(() => {
                            // Scroll suave con GSAP hasta el div de productos
                            if (productosRef.current) {
                                gsap.to(window, {
                                    duration: 1.2,                // Duración del scroll (más suave si es mayor)
                                    scrollTo: productosRef.current, // Scroll hasta el elemento
                                    ease: "power2.out",           // Curva de easing muy natural y suave
                                    offsetY: 80,                  // Deja un pequeño margen arriba (ajusta si tienes navbar fija)
                                });
                            }
                        }, 500);
                    }
                }

            }
        };

        fetchProductos(); // ✅ no olvides ejecutarla
    }, [pagina, isInit, query, queryFiltros, slug]);

    // Lógica principal
    useEffect(() => {

        if (query.trim() === '') {
            // 1. Input vacío → mostrar todos
            setQueryFiltros("");
            cargarTodos();

        } else if (query.length >= 3) {
            // 2. 4+ letras → buscar en API
            skipSearch.current = false;
            setQueryFiltros("");
            resultSearchInput();
        } else {
            // 3. 1-3 letras → no buscar, pero mantener resultados actuales
            // Opcional: mostrar todos o limpiar
            setQueryFiltros("");
            cargarTodos();
        }
    }, [query, cargarTodos, resultSearchInput]);



    const handleClickViewVideo = (marca: string, slug: string) => {
        router.push(`/${marca}/producto/${slug}`)
    }
    const toggleOption = (categoryKey: FilterKey, value: number) => {
        setSelectedFilters(prev => {
            const current = prev[categoryKey] || [];
            if (current.includes(value)) {
                return { ...prev, [categoryKey]: current.filter(v => v !== value) };
            }
            return { ...prev, [categoryKey]: [...current, value] };
        });
    };
    const handleViewFiltro = () => {
        setViewFiltro(true);
    }
    const handleFiltroCancelar = () => {
        setViewFiltro(false);
    }
    const handleResetFiltro = () => {
        setSelectedFilters({})
    }
    const handleAplicarFiltro = async () => {
        console.log(selectedFilters);
        scrollOnNextLoad.current = true;
        // skipNextFetch.current = true;
        // Mapeo de nombres frontend → backend
        const keyMap: Record<FilterKey, string> = {
            formato: 'presentaciones',
            marcas: 'marcas',
            atributos: 'atributo',
            tipo: 'nutrientes',
        };
        setQuery("");
        // armamos el query de marcas
        // const queryMarcas = selectedFilters.marcas.map((value, index) => `marcas[${index}]=${value}`).join('&');
        const queryString = Object.entries(selectedFilters)
            .flatMap(([key, values]) => {
                if (!values || values.length === 0) return [];
                const apiKey = keyMap[key as FilterKey];
                return values.map((value, index) => `${apiKey}[${index}]=${value}`)
            })
            .join('&');

        console.log(queryString)
        setQueryFiltros(queryString);
        setIsLoading(true);
        setError("");

        try {
            const responseProductus = await setResultFilterCategory(`categorias_slug=${slug}&${queryString}`);
            const { pagination: paginationApi, items: productsApi } = responseProductus.data;
            setTotalPaginas(paginationApi.last_page);
            setPagina(1);
            setDataProducts(productsApi);

            if (productsApi.length === 0) {
                setError('No se encontraron productos');
            }

        } catch (err: unknown) {
            if (err instanceof Error && err.name !== 'AbortError') {
                setError('Error en la búsqueda');
            }
        } finally {
            setIsLoading(false);
        }



        setViewFiltro(false);
        // Scroll suave con GSAP hasta el div de productos
        if (productosRef.current) {
            gsap.to(window, {
                duration: 1.2,                // Duración del scroll (más suave si es mayor)
                scrollTo: productosRef.current, // Scroll hasta el elemento
                ease: "power2.out",           // Curva de easing muy natural y suave
                offsetY: 80,                  // Deja un pequeño margen arriba (ajusta si tienes navbar fija)
            });
        }
    }

    const handleVolverProductos = () => {
        router.push(`/productos`);
    }

    const handleViewCategoriaProducto = (slug: string) => {
        router.push(`/productos/${slug}`)
    }
    return (
        <>
            <div className={styles.headerFiltrosContainer} >
                {/* {JSON.stringify(listProducts)} */}
                <div className='containerFluid' >
                    <div className={styles.headerFiltroTop}>
                        <div className={styles.filtroContainerMain}>
                            <div className={styles.buscadorContainer}>
                                <Image src='/buscar.svg' className={styles.iconBuscador} alt='Buscar Productos' width='25' height='25' />
                                <input
                                    type="text"
                                    placeholder='Buscar...'
                                    onChange={(e) => setQuery(e.target.value)}
                                    value={query}
                                />
                                <div className={styles.fitrosContainer}>
                                    <div className={styles.iconBuscarContainer}>
                                        <Image src='/buscadorBlanco.svg' height={26} width={26} alt='filtros buscar' />
                                    </div>
                                    <div className={styles.opcionFiltrosContainer} onClick={handleViewFiltro}>
                                        <p>Filtrar productos</p>
                                        <Image src='/filtroicon.svg' height={20} width={20} alt='filtros buscar' />
                                    </div>
                                </div>
                            </div>
                            {
                                viewFiltro && (
                                    <div className={styles.popUpFiltro}>
                                        <div className={styles.listFiltroContainer}>

                                            <div>
                                                <h2>MARCAS</h2>
                                                <div className={styles.listOpcionMultiple}>
                                                    {marcas.map(option => (
                                                        <div key={option.id}>
                                                            <label className={styles.checkboxLabel}>
                                                                {/* Input real (oculto pero accesible) */}
                                                                <input
                                                                    type="checkbox"
                                                                    checked={selectedFilters['marcas']?.includes(option.id) ?? false}
                                                                    onChange={() => toggleOption('marcas', option.id)}
                                                                    className={styles.checkboxInput}
                                                                />

                                                                {/* Checkbox visual personalizado */}
                                                                <div
                                                                    className={`${styles.checkboxCustom} ${selectedFilters['marcas']?.includes(option.id)
                                                                        ? styles.checkboxCustomChecked
                                                                        : ''
                                                                        }`}
                                                                >
                                                                    <span
                                                                        className={`${styles.checkMark} ${selectedFilters['marcas']?.includes(option.id)
                                                                            ? styles.checkMarkVisible
                                                                            : ''
                                                                            }`}
                                                                    >
                                                                        ✓
                                                                    </span>
                                                                </div>

                                                                {/* Texto de la opción */}
                                                                <span className={styles.checkboxText}>{option.nombre}</span>
                                                            </label>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div>
                                                <h2>FORMATO PRESENTACIÓN</h2>
                                                <div className={styles.listOpcionMultiple}>
                                                    {presentaciones.map(option => (
                                                        <div key={option.id}>
                                                            <label className={styles.checkboxLabel}>
                                                                {/* Input real (oculto pero accesible) */}
                                                                <input
                                                                    type="checkbox"
                                                                    checked={selectedFilters['formato']?.includes(option.id) ?? false}
                                                                    onChange={() => toggleOption('formato', option.id)}
                                                                    className={styles.checkboxInput}
                                                                />

                                                                {/* Checkbox visual personalizado */}
                                                                <div
                                                                    className={`${styles.checkboxCustom} ${selectedFilters['formato']?.includes(option.id)
                                                                        ? styles.checkboxCustomChecked
                                                                        : ''
                                                                        }`}
                                                                >
                                                                    <span
                                                                        className={`${styles.checkMark} ${selectedFilters['formato']?.includes(option.id)
                                                                            ? styles.checkMarkVisible
                                                                            : ''
                                                                            }`}
                                                                    >
                                                                        ✓
                                                                    </span>
                                                                </div>

                                                                {/* Texto de la opción */}
                                                                <span className={styles.checkboxText}>{option.name}</span>
                                                            </label>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            <div>
                                                <h2>TIPO DE PRODUCTO</h2>
                                                <div className={styles.listOpcionMultiple}>
                                                    {tipo_producto.map(option => (
                                                        <div key={option.id}>
                                                            <label className={styles.checkboxLabel}>
                                                                {/* Input real (oculto pero accesible) */}
                                                                <input
                                                                    type="checkbox"
                                                                    checked={selectedFilters['tipo']?.includes(option.id) ?? false}
                                                                    onChange={() => toggleOption('tipo', option.id)}
                                                                    className={styles.checkboxInput}
                                                                />

                                                                {/* Checkbox visual personalizado */}
                                                                <div
                                                                    className={`${styles.checkboxCustom} ${selectedFilters['tipo']?.includes(option.id)
                                                                        ? styles.checkboxCustomChecked
                                                                        : ''
                                                                        }`}
                                                                >
                                                                    <span
                                                                        className={`${styles.checkMark} ${selectedFilters['tipo']?.includes(option.id)
                                                                            ? styles.checkMarkVisible
                                                                            : ''
                                                                            }`}
                                                                    >
                                                                        ✓
                                                                    </span>
                                                                </div>

                                                                {/* Texto de la opción */}
                                                                <span className={styles.checkboxText}>{option.name}</span>
                                                            </label>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            <div>
                                                <h2>ATRIBUTOS FUNCIONALES</h2>
                                                <div className={styles.listOpcionMultiple}>
                                                    {atributos.map(option => (
                                                        <div key={option.id}>
                                                            <label className={styles.checkboxLabel}>
                                                                {/* Input real (oculto pero accesible) */}
                                                                <input
                                                                    type="checkbox"
                                                                    checked={selectedFilters['atributos']?.includes(option.id) ?? false}
                                                                    onChange={() => toggleOption('atributos', option.id)}
                                                                    className={styles.checkboxInput}
                                                                />

                                                                {/* Checkbox visual personalizado */}
                                                                <div
                                                                    className={`${styles.checkboxCustom} ${selectedFilters['atributos']?.includes(option.id)
                                                                        ? styles.checkboxCustomChecked
                                                                        : ''
                                                                        }`}
                                                                >
                                                                    <span
                                                                        className={`${styles.checkMark} ${selectedFilters['atributos']?.includes(option.id)
                                                                            ? styles.checkMarkVisible
                                                                            : ''
                                                                            }`}
                                                                    >
                                                                        ✓
                                                                    </span>
                                                                </div>

                                                                {/* Texto de la opción */}
                                                                <span className={styles.checkboxText}>{option.name}</span>
                                                            </label>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                        </div>
                                        <div className={styles.btnFiltro}>
                                            <div>
                                                <button onClick={handleResetFiltro}>Resetear filtros</button>
                                            </div>
                                            <div>
                                                <button onClick={handleFiltroCancelar}>Cerrar</button>
                                                <button onClick={handleAplicarFiltro}>Aplicar filtros</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }

                        </div>

                    </div>
                    <div className={styles.headerFiltroBottom}>
                        {/* {JSON.stringify(dataCategories)} */}
                        <Swiper
                            spaceBetween={10}
                            centeredSlides={false}
                            slidesPerView={3} // Muestra 5 películas a la vez
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
                            {dataCategories.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className={styles.cardIcon} onClick={() => handleViewCategoriaProducto(item.slug)}>
                                        {
                                            item.icon && item.icon !== '' && (
                                                <Image src={item.icon || ''} alt={item.name} width={102} height={102} />
                                            )
                                        }

                                        <p><SanitizedHtml html={item.name} /></p>
                                    </div>
                                </SwiperSlide>

                            ))}

                        </Swiper>
                    </div>

                </div>
            </div>
            <div className={styles.viewProductosContainer} >
                <div className={styles.fondoCategoria}>
                    {
                        posterMobile && (
                            <Image src={posterMobile} width={2460} height={1302} alt='' />
                        )
                    }

                </div>
                <div className='containerFluid' >
                    {
                        infoCategory?.[0] && infoCategory?.length > 0 && infoCategory && (
                            <div className={styles.viewProductCategoriaHeader}>
                                <div>
                                    <button onClick={handleVolverProductos}>
                                        <Image src='/fff.svg' width={20} height={11} alt='' />
                                        <span>Volver a productos </span>
                                    </button>
                                    <h1><SanitizedHtml html={infoCategory[0].titulo} /></h1>
                                    <p>
                                        <SanitizedHtml html={infoCategory[0].description} />
                                    </p>
                                    <h3> {pagination.total} PRODUCTOS ENCONTRADOS </h3>
                                </div>
                                <div>
                                    {
                                        posterMain && (
                                            <Image src={posterMain} width={715} height={477} alt='' />
                                        )
                                    }

                                </div>
                            </div>
                        )
                    }
                    {
                        isLoading ? (
                            <p>Estamos procesando ...</p>
                        ) : error?.trim() !== '' ? (
                            <p>{error}</p>
                        ) : (
                            <div ref={productosRef} className={styles.viewProductBody}>
                                {dataProducts.map((item, index) => (
                                    <div
                                        key={index}
                                        onClick={() =>
                                            handleClickViewVideo(item.marca.slug || '', item.slug || '')
                                        }
                                        className={styles.cardProductContainer}
                                    >
                                        <div className={styles.cardHeader}>
                                            <Image
                                                src={item.poster}
                                                width={656}
                                                height={858}
                                                alt={item.title_large}
                                            />
                                        </div>

                                        <div className={styles.cardBody}>
                                            <h3>
                                                <SanitizedHtml html={item.title_large} />
                                            </h3>
                                            <h2>
                                                <SanitizedHtml html={item.title_small} />
                                            </h2>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )
                    }
                </div>
            </div>
            <div className={styles.paginadoContainer}>
                <div className={styles.containerPaginacion}>
                    <button
                        onClick={handleAnterior}
                        disabled={startPage === 1}
                        className={styles.arrowButtonPag}
                    >
                        <Image src="/arrowPP2.svg"
                            width={11}
                            height={20}
                            alt='anterior'
                            className={styles.arrowLeft}
                        />
                    </button>

                    {Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i).map((num) => (
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
                        disabled={endPage === totalPaginas}
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

export default ListadoProductosCategorias
