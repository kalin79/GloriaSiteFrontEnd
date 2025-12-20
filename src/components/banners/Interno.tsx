'use client';
import { useEffect, useState } from "react";
import Image from 'next/image'
import Link from 'next/link'
import ArrowSvg from '@/svg/arrow.svg';
// import ArrowDownSvg from '@/svg/arrow2.svg';
import styles from '@/styles/scss/banner.module.scss';
import { BannerInterface } from '@/interfaces/bannerInterno';
// import HtmlSafeRender from '@/components/HtmlSafeRender';
import SanitizedHtml from "@/components/SanitizedHtml";
interface Props {
    dataBanner: BannerInterface;
}
const Interno = ({ dataBanner }: Props) => {
    const { imgPc, imgMobile, breadcrumb, titulo, slugbread, descripcion, url } = dataBanner;
    const [srcImagen, setSrcImagen] = useState(imgPc);
    useEffect(() => {
        const cambiarImagen = () => {
            const isMobile = window.innerWidth <= 768;
            setSrcImagen(isMobile ? imgMobile : imgPc);
        };

        cambiarImagen();
        window.addEventListener("resize", cambiarImagen);
        return () => window.removeEventListener("resize", cambiarImagen);
    }, [imgMobile, imgPc]);
    return (
        <div className={styles.bannerInternoContainer}>
            <div className={styles.imgContainerFullPage}>
                <Image
                    src={srcImagen}
                    fill
                    sizes="100vw"
                    style={{ objectFit: "cover" }}
                    priority
                    alt='QUIENES SOMOS - Somos la empresa líder en el mercado lácteo peruano'
                />
            </div>
            <div className={`${styles.containerFluid}`}>
                <div className={styles.gridContainer}>
                    <div>
                        <div className={styles.breadcrumbContainer}>
                            {
                                (dataBanner.slugbreadHEADER) ? (
                                    <>
                                        {/* <p className={styles.migasTitular}>GLORIA</p> <ArrowSvg />  */}
                                        <Link className={styles.migasTitular} href={dataBanner.slugbreadHEADER}>{dataBanner.breadHeader}</Link> <ArrowSvg /> <Link className={styles.migasTitular} href={slugbread}>{breadcrumb}</Link>
                                    </>
                                ) : (
                                    <>
                                        {/* <p className={styles.migasTitular}>GLORIA</p> <ArrowSvg />  */}
                                        <Link className={styles.migasTitular} href={slugbread}>{breadcrumb}</Link>
                                    </>
                                )
                            }

                        </div>
                        <div className={styles.titularContainer}>
                            <h1 className={styles.titularBanner}>
                                <SanitizedHtml html={titulo} />
                            </h1>
                            {
                                descripcion && (
                                    <p className={styles.descripcionBanner}>
                                        <SanitizedHtml html={descripcion} />
                                    </p>
                                )
                            }

                            {
                                url && (
                                    <>
                                        <div className={styles.btnExternoContainer}>
                                            <a href={url} className="btnStandart" target="_blank">Ingresa aquí</a>
                                            <Image src="/logoGanadero.svg" width={85} height={82} alt="Ganaderos" />
                                        </div>
                                    </>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Interno