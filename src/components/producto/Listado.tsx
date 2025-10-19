'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from "next/navigation";

import styles from '@/styles/scss/producto.module.scss';
import CardComponent from "@/components/producto/Card";
import { ProductInterface } from '@/interfaces/producto';

interface Props {
    products: ProductInterface[];
    slugMarca: string;
}
const Listado = ({ products, slugMarca }: Props) => {
    const [productos, setProductos] = useState<ProductInterface[]>(products);
    const [pagina, setPagina] = useState(1);
    const [totalPaginas, setTotalPaginas] = useState(4); // Puedes ajustarlo luego desde API

    const router = useRouter();

    const handleClickViewVideo = (slug: string) => {
        router.push(`/${slugMarca}/producto/${slug}`)
    }
    const handleSiguiente = () => {
        if (pagina < totalPaginas) setPagina(pagina + 1);
    };

    const handleAnterior = () => {
        if (pagina > 1) setPagina(pagina - 1);
    };
    useEffect(() => {
        const fetchProductos = async () => {
            if (pagina != 0) {
                const res = await fetch(`/api/productos?page=${pagina}`);
                const data = await res.json();
                setProductos(data.items);
                setTotalPaginas(data.totalPaginas); // Si lo devuelve la API
            }
        };

        fetchProductos();
    }, [pagina]);
    return (
        <div className={styles.listadoProductoContainer}>
            <div className='containerFluid'>
                <div className={styles.headerContainer}>
                    <div className={styles.gridContiner}>
                        <div>
                            <h2 className={styles.titularMain}>
                                Explora nuestra <br />
                                selección de <br />
                                <span>productos:</span>
                            </h2>
                        </div>
                        <div>
                            <p className={styles.parrafoTitProductos}>
                                Nutritivos, deliciosos y perfectos para toda la familia. <br />Desliza y encuentra tus favoritos.
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
                            <div className={styles.buttonFilter}>
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

                            <button onClick={handleAnterior} disabled={pagina === 1}>
                                <Image src="/arrowPagi.svg" width={18} height={9} alt='' />
                            </button>

                            {Array.from({ length: totalPaginas }, (_, i) => i + 1).map((num) => (
                                <button
                                    key={num}
                                    onClick={() => setPagina(num)}
                                    className={`parrafoPequeno ${pagina === num ? styles.active : ''}`}
                                >
                                    {num}
                                </button>
                            ))}

                            <button onClick={handleSiguiente} disabled={pagina === totalPaginas}>
                                <Image src="/arrowPagi.svg" width={18} height={9} alt='' />
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Listado
