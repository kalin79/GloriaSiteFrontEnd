'use client';
import { getNoticias } from '@/actions/noticia/getNoticias';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from "next/navigation";
import Image from 'next/image';
import styles from '@/styles/scss/noticias.module.scss';
import NoticiaCardComponent from "@/components/noticias/Card";
import { NoticiaInterface, PaginationInterface } from '@/interfaces/noticia';
import HtmlSafeRender from '@/components/HtmlSafeRender';
interface Props {
    noticiasData: NoticiaInterface[];
    paginacionData: PaginationInterface;
}
const Listado = ({ noticiasData, paginacionData }: Props) => {
    const router = useRouter();
    const [noticias, setNoticias] = useState<NoticiaInterface[]>(noticiasData);
    const [pagina, setPagina] = useState(1);
    const [totalPaginas, setTotalPaginas] = useState(paginacionData.last_page); // Puedes ajustarlo luego desde API
    const contenedorIniProdRef = useRef<HTMLDivElement>(null);
    const [isInit, setIsInit] = useState(false); // Puedes ajustarlo luego desde API

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
                const response = await getNoticias(pagina);
                const { noticias: dataNoticias, pagination } = response.data;

                setNoticias(dataNoticias);
                setTotalPaginas(pagination.last_page);

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
    }, [pagina, isInit]);

    // ✅ Filtra las demás noticias
    const otrasNoticias = noticias.filter(n => n.destacado !== true);
    // ✅ Encuentra la noticia destacada (solo una)

    const noticiaDestacada = noticias.find(n => n.destacado === true);

    const formatearFecha = (fechaIso: string): string => {
        const fechaLocal = new Date(fechaIso.replace('Z', '')); // quita UTC
        // const fecha = new Date(fechaIso);
        return new Intl.DateTimeFormat('es-ES', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        }).format(fechaLocal);
    };

    const handleClickNoticias = (slug: string) => {
        router.push(`/noticias/${slug}`)
    }

    return (
        <div className={styles.listadoContainer} ref={contenedorIniProdRef}>
            <div className='containerFluid'>
                {
                    noticiaDestacada && (
                        <div className={styles.noticiaMainContainer}>
                            <div className={styles.noticiaGrid}>
                                <div>
                                    <div className={styles.imgContainer}>
                                        <Image src={noticiaDestacada.imagen_cover} width={851} height={608} alt='' />
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <div className={styles.fechaContainer}>
                                            <div>PRENSA</div>
                                            <div>
                                                <Image src='/fechaIcon2.svg' height={16} width={16} alt='' />
                                                <h4>{formatearFecha(noticiaDestacada.fecha_publicacion)} </h4>
                                            </div>
                                        </div>
                                        <div className={styles.infoContainer}>
                                            <h2>
                                                {noticiaDestacada.titulo}
                                            </h2>
                                            <HtmlSafeRender html={noticiaDestacada.descripcion_corta} />
                                        </div>
                                        <div className={styles.btnContainer}>
                                            <button onClick={() => handleClickNoticias(noticiaDestacada.slug)}>
                                                <p>LEER NOTICIA</p>
                                                <Image src='/notarrow.svg' height={14} width={7} alt={noticiaDestacada.titulo} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
                <div className={styles.PaginadoNoticasContainer}>
                    {
                        otrasNoticias.map((item, index) => (
                            <NoticiaCardComponent
                                key={index}
                                noticiaContent={item}
                                onClick={() => handleClickNoticias(item.slug ?? '')}
                            />
                        ))
                    }

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
    )
}

export default Listado
