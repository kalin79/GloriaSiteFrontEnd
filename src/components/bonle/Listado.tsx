'use client';
import { useState, useEffect, useRef } from 'react';
import { getListadoMarcaProductos } from '@/actions/marca/producto/getListadoProductos';
import Image from 'next/image';
import { useRouter } from "next/navigation";

import CardComponent from "@/components/bonle/CardProductoProListado";
import { ProductListadoInterface } from '@/interfaces/producto';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import styles from '@/styles/scss/marcabonle.module.scss';

gsap.registerPlugin(ScrollToPlugin);
interface Props {
    // products: ProductListadoInterface[];
    slugMarca: string;
    // paginationData: PaginationHomeInterface;
}
const Listado = ({ slugMarca }: Props) => {
    const [productos, setProductos] = useState<ProductListadoInterface[]>([]);
    const [pagina, setPagina] = useState(1);
    const [totalPaginas, setTotalPaginas] = useState(1); // Puedes ajustarlo luego desde API
    const contenedorIniProdRef = useRef<HTMLDivElement>(null);
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
                const response = await getListadoMarcaProductos(pagina, slugMarca);
                const { productos: tempP, pagination: tempPP } = response.data.productos;

                setProductos(tempP);
                setTotalPaginas(tempPP.last_page);

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
    }, [pagina, slugMarca, isInit]);

    return (
        <div className={styles.listadoProductoContainer} ref={contenedorIniProdRef}>
            <div className='containerFluid'>
                <div className={styles.headerContainer}>
                    <div className={styles.gridContiner}>
                        <div>
                            <h2 className={styles.titularMain}>
                                <span>
                                    No tenemos a Brad Pitt <br />ni a Chayanne, pero si <br />
                                    tenemos lo que sí necesitas <br />
                                    para tu día a día
                                </span>
                            </h2>
                        </div>
                        <div>
                            <p className={styles.parrafoTitProductos}>
                                Productos prácticos, nutritivos y deliciosos.
                                Se ven bonitos en foto pero más bonitos en tu casa.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.bodyContainer}>
                    <div className={styles.filtrosContainer}>
                        <div>
                            <div className={styles.buttonFilter}>
                                <p className='parrafoMediano'>Filtrar productos</p>
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
                                    width={16}
                                    height={28}
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
                                    width={16}
                                    height={28}
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
