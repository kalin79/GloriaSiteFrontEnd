'use client';
import { useState, useEffect, useRef } from 'react';
import { getListadoMarcaProductos, getListadoProductosMarca } from '@/actions/marca/producto/getListadoProductos';
import Image from 'next/image';
import { useRouter } from "next/navigation";

import styles from '@/styles/scss/producto.module.scss';
import CardComponent from "@/components/producto/CardProductoListado";
import { ProductListadoInterface, ProductoCategoriaInterface } from '@/interfaces/producto';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import SanitizedHtml from '@/components/SanitizedHtml';

gsap.registerPlugin(ScrollToPlugin);
interface Props {
    // products: ProductListadoInterface[];
    slugMarca: string;
    // paginationData: PaginationHomeInterface;
}
const Listado = ({ slugMarca }: Props) => {
    const [productos, setProductos] = useState<ProductListadoInterface[]>([]);
    const [categorias, setCategorias] = useState<ProductoCategoriaInterface[]>([]);
    const [pagina, setPagina] = useState(1);
    const [catSelect, setCatSelect] = useState(0);
    const [totalPaginas, setTotalPaginas] = useState(1); // Puedes ajustarlo luego desde API
    const contenedorIniProdRef = useRef<HTMLDivElement>(null);
    const contenedorFilterPopup = useRef<HTMLDivElement>(null);
    const router = useRouter();

    const [isInit, setIsInit] = useState(false); // Puedes ajustarlo luego desde API

    const handleClickViewVideo = (slug: string) => {
        router.push(`/${slugMarca}/producto/${slug}`)
    }
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
        const fetchProductos = async () => {
            if (pagina !== 0) {
                const response = await getListadoProductosMarca(pagina, slugMarca, catSelect);
                const { productos: tempP, pagination: tempPP } = response;

                const response2 = await getListadoMarcaProductos(pagina, slugMarca);
                const { categoria_productos } = response2.data;

                setProductos(tempP);
                setTotalPaginas(tempPP.last_page);
                setCategorias(categoria_productos);

                if (isInit) {
                    setTimeout(() => {
                        if (contenedorIniProdRef.current) {
                            gsap.to(window, {
                                duration: 1,
                                scrollTo: { y: contenedorIniProdRef.current, offsetY: 80 },
                                ease: "power2.out",
                            });
                        }
                    }, 500);
                }

            }
        };

        fetchProductos(); // ✅ no olvides ejecutarla
    }, [pagina, slugMarca, isInit, catSelect]);

    const handleFilterCategory = (id: number) => {
        setCatSelect(id);
    }

    const handleOcultarFiltro = () => {
        if (contenedorFilterPopup.current) {
            gsap.to(contenedorFilterPopup.current, {
                opacity: 0,
                y: -20,
                duration: 0.4,
                ease: 'power2.out',
                onComplete: () => {
                    // Opcional: ocultarlo completamente del flujo del DOM
                    contenedorFilterPopup.current!.style.display = 'none';
                },
            });
        }
    }
    const handleMostrarFiltro = () => {
        if (contenedorFilterPopup.current) {
            contenedorFilterPopup.current.style.display = 'block';
            gsap.fromTo(
                contenedorFilterPopup.current,
                { opacity: 0, y: -20 },
                { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }
            );
        }
    }
    return (
        <div className={styles.listadoProductoContainer} ref={contenedorIniProdRef}>
            <div className='popupContentFilterProducts' ref={contenedorFilterPopup}>
                <div className='popupContentFilterProductsView'>
                    <div className='popupCenterContainer'>
                        <h3>Filtrar productos</h3>
                        <h2>Por categoría</h2>
                        <div className='filtroOpcionesContent'>
                            {categorias && categorias.map((cat, index) => (
                                <button key={index} className={`${catSelect === cat.id ? 'active' : ''}`} onClick={() => handleFilterCategory(cat.id)}><SanitizedHtml html={cat.name} /></button>
                            ))}
                        </div>
                        <div className='footerPopupContainer'>
                            <button onClick={handleOcultarFiltro}>Mostrar resultados</button>
                        </div>
                    </div>
                </div>

            </div>
            <div className='containerFluid'>
                <div className={styles.headerContainer}>
                    <div className={styles.gridContiner}>
                        <div>
                            <h2 className={styles.titularMain}>
                                Hechos y pensados <br />
                                para toda la <br />
                                <span>familia</span>
                            </h2>
                        </div>
                        <div>
                            <p className={styles.parrafoTitProductos}>
                                Estamos con quienes lo dan todo por los suyos, a través de productos deliciosos, nutritivos y perfectos para acompañar momentos que unen e inspiran.
                            </p>
                            {/* <div className={styles.recetaContainer}>
                                <Image src="/iconChef.svg" width={42} height={37} alt='Recetas de Producto' />
                                <h3 className='parrafoMediano celesteTxt'>Producto <br />con receta</h3>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className={styles.bodyContainer}>
                    <div className={styles.filtrosContainer}>
                        <div>
                            <div className={styles.buttonFilter} onClick={handleMostrarFiltro}>
                                <p className='parrafoMediano celesteTxt'>Filtrar productos</p>
                                <Image src="/filtro.svg" width={32} height={32} alt='Filtrar' />
                            </div>
                        </div>
                    </div>
                    <div className={styles.paginationProductosContainer}>
                        <div className={styles.visualizacionProducto}>
                            {productos.map((item, index) => (
                                <CardComponent
                                    key={index}
                                    productContents={item}
                                    onClick={() => { handleClickViewVideo(item.slug || '') }}
                                />
                            ))}
                        </div>
                        <div className={styles.paginadoContainer}>

                            <button
                                onClick={handleAnterior}
                                disabled={pagina === 1}
                                className={styles.arrowButton}
                            >
                                <Image src="/arrowP1.svg"
                                    width={18}
                                    height={9}
                                    alt='anterior'
                                    className={styles.arrowLeft}
                                />
                            </button>
                            {Array.from({ length: totalPaginas }, (_, i) => i + 1).map((num) => (
                                <button
                                    key={num}
                                    onClick={() => handlePagina(num)}
                                    className={`parrafoPequeno ${pagina === num ? styles.active : ''}`}
                                >
                                    {num}
                                </button>
                            ))}

                            <button
                                onClick={handleSiguiente}
                                disabled={pagina === totalPaginas}
                                className={styles.arrowButton}
                            >
                                <Image
                                    src="/arrowP2.svg"
                                    width={18}
                                    height={9}
                                    alt="Siguiente"
                                />
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Listado
