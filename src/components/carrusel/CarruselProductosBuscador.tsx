'use client';
import { useCallback, useEffect, useRef, useState, useLayoutEffect } from "react";
import Image from 'next/image';
// import { debounce } from 'lodash';
import { getListadoProductos, getListadoProductosInput, getListadoProductosCategorias, getListadoTodosProductosCateogria } from '@/actions/marca/producto/getListadoProductos';
import { useRouter } from "next/navigation";
import { ProductoHomeInterface, PaginationHomeInterface, CategoriaInterface } from '@/interfaces/producto';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// import type { SwiperRef } from "swiper/react";
import CardComponent from "@/components/producto/CardHome";
import SanitizedHtml from "@/components/SanitizedHtml";

import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';

// Estilos swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
gsap.registerPlugin(Draggable);


import styles from '@/styles/scss/producto.module.scss';
export interface ApiResponse {
    categorias: CategoriaInterface[];
    productos: ProductoHomeInterface[];
    pagination: PaginationHomeInterface;
}
interface Props {
    productosData: ProductoHomeInterface[];
    paginationData: PaginationHomeInterface;
    // tagsData: TagsAux[];
}
interface ArrowButtonProps {
    direction: 'left' | 'right'; // Especificamos que solo puede ser 'left' o 'right'
    onClick: () => void;         // Especificamos que es una función sin argumentos que no retorna nada
}
const CarruselProductosBuscador = ({ productosData, paginationData }: Props) => {
    const router = useRouter();
    const [productos, setProductos] = useState<ProductoHomeInterface[]>([]);
    const [categorias, setCategorias] = useState<CategoriaInterface[]>([]);
    const [activeCategory, setActiveCategory] = useState(0);
    const [pagination, setPagination] = useState<PaginationHomeInterface>(paginationData);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const abortControllerRef = useRef<AbortController | null>(null);
    const abortControllerRef2 = useRef<AbortController | null>(null);
    const [query, setQuery] = useState("");
    const containerRef = useRef<HTMLDivElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);
    // 💡 NUEVO ESTADO: Bandera para indicar que las categorías se renderizaron
    const [hasCategoriesRendered, setHasCategoriesRendered] = useState(false);
    const handleClickViewVideo = (slug: string, marca: string) => {
        router.push(`/${marca}/producto/${slug}`)
    }
    // Cargar todos los productos (sin filtro)
    const cargarTodos = useCallback(() => {
        setProductos(productosData);
    }, [productosData]); // ← depende solo de productosIniciales
    // Búsqueda en API

    // const cargarTodasCategorias = useCallback(() => {
    //     setCategorias(categorias);
    // }, [categorias]);

    const handleFiltraCategoria = async (id: number) => {
        try {
            const response = await getListadoTodosProductosCateogria(id);
            const productos = response.productos || [];
            // 3. Actualizar estado
            setProductos(productos);
            setPagination(response.pagination);
            setActiveCategory(id);
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
    }


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
            } else {
                setActiveCategory(0);
            }

            // 3. Actualizar estado
            setProductos(productos);
            setPagination(response.pagination);

            if (productos.length === 0) {
                setError('No se encontraron productos');
            } else {
                setActiveCategory(0);
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





    const buscarApiCategoria = useCallback(async () => {
        if (abortControllerRef2.current) {
            abortControllerRef2.current.abort();
        }
        const controller = new AbortController();
        abortControllerRef2.current = controller;

        // setIsLoading(true);
        // setError(null);

        try {
            // 1. Búsqueda por NOMBRE
            const response = await getListadoProductosCategorias();
            const categoriasResult = response || [];

            // 3. Actualizar estado
            setCategorias(categoriasResult);

            if (categoriasResult.length === 0) {
                setError('No se encontraron productos');
            }

        } catch (err: unknown) {
            if (err instanceof Error && err.name !== 'AbortError') {
                // setError('Error en la búsqueda');
                setCategorias([]);
            }
        } finally {
            // setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        buscarApiCategoria()
        // cargarTodasCategorias()
    }, [buscarApiCategoria])

    const currentDragX = useRef(0);

    // **********************************************
    // 1. FUNCIÓN DE SCROLL: Definida para ser llamada por las flechas
    // **********************************************
    const scrollCarousel = (direction: 'left' | 'right') => {
        const wrapper = wrapperRef.current;
        const container = containerRef.current;

        if (!wrapper || !container) return;

        const containerWidth = container.clientWidth;
        // Definimos un paso de desplazamiento (ej: 75% del ancho visible)
        const step = containerWidth * 0.75;

        // Obtenemos la posición X actual. Si Draggable está activo, usa la posición de transform.
        const currentX = gsap.getProperty(wrapper, "x") as number;

        let newX;

        if (direction === 'left') {
            newX = currentX + step;
            // Limitar en el extremo derecho (máx. 0)
            newX = Math.min(newX, 0);
        } else { // direction === 'right'
            const maxScroll = wrapper.scrollWidth - containerWidth;

            newX = currentX - step;
            // Limitar en el extremo izquierdo
            newX = Math.max(newX, -maxScroll);
        }

        currentDragX.current = newX;

        // Animamos el desplazamiento con GSAP
        gsap.to(wrapper, {
            x: newX,
            duration: 0.5,
            ease: "power2.out"
        });
    };
    // **********************************************
    // 2. LÓGICA DE DRAGGABLE: Dentro de useLayoutEffect
    // **********************************************
    useLayoutEffect(() => {
        const wrapper = wrapperRef.current;
        const container = containerRef.current;

        // CRÍTICO: Si no se han renderizado o no hay datos, salimos.
        if (!hasCategoriesRendered || !wrapper || !container) {
            const existingDraggable = Draggable.get(wrapper);
            if (existingDraggable) existingDraggable.kill();
            return;
        }

        // Asegurarse de que el wrapper exista
        if (!wrapper || !container || categorias.length === 0) {
            // Si no hay categorías, no hay nada que medir
            const existingDraggable = Draggable.get(wrapper);
            if (existingDraggable) existingDraggable.kill();
            return;
        }

        // 💡 Aquí, el scrollWidth DEBE ser correcto porque categorias.length > 0
        const maxScroll = wrapper.scrollWidth - container.clientWidth;

        console.log(maxScroll)

        // Si sigue siendo cero, el problema es 100% de CSS o de caché.
        // Para diagnosticar:
        // console.log("Ancho Wrapper:", wrapper.scrollWidth);
        // console.log("Ancho Contenedor:", container.clientWidth);
        // console.log("Max Scroll:", maxScroll);


        // --- Lógica Draggable (La que ya tienes) ---
        gsap.set(wrapper, { x: 0 });
        currentDragX.current = 0;

        if (maxScroll <= 5) {
            const existingDraggable = Draggable.get(wrapper);
            if (existingDraggable) existingDraggable.kill();
            return;
        }

        const existingDraggable = Draggable.get(wrapper);
        if (existingDraggable) existingDraggable.kill();

        const dragInstance = Draggable.create(wrapper, { // Usar 'wrapper' directo
            type: 'x',
            bounds: {
                minX: -maxScroll,
                maxX: 0,
            },
            inertia: true,
            dragClickables: true,
            minimumMovement: 5,
            onThrowComplete: function () {
                currentDragX.current = this.x;
            },
            onDrag: function () {
                currentDragX.current = this.x;
            }
        });

        return () => {
            if (dragInstance[0]) {
                dragInstance[0].kill();
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [hasCategoriesRendered]); //

    // 💡 NUEVO useEffect para detectar cuándo 'categorias' se llena
    useEffect(() => {
        if (categorias.length > 0) {
            // Esto asegura que la función Draggable se ejecutará en el siguiente
            // useLayoutEffect después de que los botones estén en el DOM.
            setHasCategoriesRendered(true);
        }
    }, [categorias]); // Se ejecuta cuando la lista de categorías cambia

    const ArrowButton: React.FC<ArrowButtonProps> = ({ direction, onClick }) => (
        <button
            className={`${styles.arrowButton2} ${direction === 'left' ? styles.left : styles.right}`}
            onClick={onClick}
        >
            {
                direction === 'left' ? (
                    <svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"></path></svg>
                ) : (
                    <svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"></path></svg>
                )
            }

        </button>
    );
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
                                {/* <p className={styles.parrofoTagHome}>
                                    {JSON.stringify(categorias)}
                                </p> */}
                                <div className={styles.buscadorInfo}>
                                    <input
                                        type="text"
                                        value={query}
                                        placeholder="¿Buscas algún producto o categoría?"
                                        onChange={(e) => setQuery(e.target.value)}
                                    />
                                    <Image src='/imgsearch2.svg' className={styles.imgBuscar} width='52' height='52' alt='' />
                                </div>

                            </div>

                            <div className={styles.carruselCategoriasContainer}>
                                <ArrowButton direction="left" onClick={() => { scrollCarousel('left') }} />
                                <ArrowButton direction="right" onClick={() => { scrollCarousel('right') }} />
                                <div className={styles.viewCarrusel}>
                                    <div className={styles.carouselContainer} ref={containerRef}>

                                        <div
                                            ref={wrapperRef}
                                            className={`${styles.carouselWrapper}`}// Añade estilos de agarre para UX
                                            style={{ width: 'max-content' }} // Importante: fuerza al wrapper a ser tan ancho como sus hijos
                                        >
                                            {categorias.map((category) => (
                                                <button
                                                    key={category.id}
                                                    onClick={() => handleFiltraCategoria(category.id)}
                                                    className={`${styles.categoryButton} ${activeCategory === category.id ? styles.active : ''}`}
                                                >
                                                    <SanitizedHtml html={category.name} />
                                                </button>
                                            ))}
                                        </div>

                                    </div>
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
                                className={`swiperNetflix celeste swiperNetflixProductoHome`}
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
