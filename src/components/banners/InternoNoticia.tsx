'use client';
import { useEffect, useState } from "react";
import Image from 'next/image'
import Link from 'next/link'
import ArrowSvg from '@/svg/arrow.svg';
// import ArrowDownSvg from '@/svg/arrow2.svg';
import styles from '@/styles/scss/banner.module.scss';
import { NoticiaInterface } from '@/interfaces/noticia';
// import HtmlSafeRender from '@/components/HtmlSafeRender';
import SanitizedHtml from "@/components/SanitizedHtml";
interface Props {
    dataBanner: NoticiaInterface;
}
const Interno = ({ dataBanner }: Props) => {
    const [srcImagen, setSrcImagen] = useState(dataBanner.banner);
    useEffect(() => {
        const cambiarImagen = () => {
            const isMobile = window.innerWidth <= 768;
            setSrcImagen(isMobile ? dataBanner.imagen_cover : dataBanner.banner);
        };

        cambiarImagen();
        window.addEventListener("resize", cambiarImagen);
        return () => window.removeEventListener("resize", cambiarImagen);
    }, [dataBanner]);

    const formatearFecha = (fechaIso: string): string => {
        const fechaLocal = new Date(fechaIso.replace('Z', '')); // quita UTC
        // const fecha = new Date(fechaIso);
        return new Intl.DateTimeFormat('es-ES', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        }).format(fechaLocal);
    };
    function recortarTexto(texto: string, limite: number = 30): string {
        if (!texto) return '';
        return texto.length > limite ? texto.slice(0, limite) + '...' : texto;
    }
    return (
        <div className={styles.bannerInternoContainer}>
            <div className={styles.imgContainerFullPage}>
                {
                    (srcImagen && srcImagen != '') && (
                        <Image
                            src={srcImagen}
                            fill
                            sizes="100vw"
                            style={{ objectFit: "cover" }}
                            priority
                            alt={dataBanner.titulo}
                        />
                    )
                }
            </div>
            <div className={`${styles.containerFluid}`}>
                <div className={styles.gridContainer}>
                    <div>
                        <div className={styles.breadcrumbContainer}>
                            <p className={styles.migasTitular}>GLORIA</p> <ArrowSvg /> <Link className={styles.migasTitular} href='/noticias'>NOTICIAS</Link> <ArrowSvg /> <Link className={`${styles.migasTitular} ${styles.principal}`} href={dataBanner.slug} ><SanitizedHtml html={recortarTexto(dataBanner.titulo, 40)} /></Link>
                        </div>
                        <div className={styles.fechaContainer}>
                            <div><SanitizedHtml html={dataBanner.categoria} /></div>
                            <div>
                                <Image src='/fechaIcon3.svg' height={16} width={16} alt='' />
                                <h4>{formatearFecha(dataBanner.fecha_publicacion)}</h4>
                            </div>
                        </div>
                        <div className={styles.titularContainer}>
                            <h1 className={styles.titularBanner}>
                                <SanitizedHtml html={dataBanner.titulo} />
                            </h1>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Interno