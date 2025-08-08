'use client';
import { useEffect, useState } from "react";
import Image from 'next/image'
import Link from 'next/link'
import ArrowSvg from '@/svg/arrow.svg';
// import ArrowDownSvg from '@/svg/arrow2.svg';
import styles from '@/styles/scss/banner.module.scss';
import { BannerInterface } from '@/interfaces/bannerInterno';
import HtmlSafeRender from '@/components/HtmlSafeRender';

interface Props {
    dataBanner: BannerInterface;
}
const Interno = ({ dataBanner }: Props) => {
    const { imgPc, imgMobile, breadcrumb, titulo, slugbread, descripcion } = dataBanner;
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
            <div className={`${styles.containerFluid}`}>
                <div className={styles.gridContainer}>
                    <div>
                        <div className={styles.breadcrumbContainer}>
                            {
                                (dataBanner.slugbreadHEADER) ? (
                                    <>
                                        <p className='parrafoMediano celesteTxt boldMedium'>GLORIA</p> <ArrowSvg /> <Link className='parrafoMediano celesteTxt boldMedium' href={dataBanner.slugbreadHEADER}>{dataBanner.breadHeader}</Link> <ArrowSvg /> <Link className='parrafoMediano celesteTxt boldMedium' href={slugbread}>{breadcrumb}</Link>
                                    </>
                                ) : (
                                    <>
                                        <p className='parrafoMediano celesteTxt boldMedium'>GLORIA</p> <ArrowSvg /> <Link className='parrafoMediano celesteTxt boldMedium' href={slugbread}>{breadcrumb}</Link>
                                    </>
                                )
                            }

                        </div>
                        <div className={styles.titularContainer}>
                            <h1 className='bannerTitular fontLight'>
                                <HtmlSafeRender html={titulo} />
                            </h1>
                            {
                                descripcion && (
                                    <p className="blancoTxt titularPequeno2 fontLight">
                                        <HtmlSafeRender html={descripcion} />
                                    </p>
                                )
                            }

                        </div>
                        {/* <div className={styles.btnContainer}>
                            <p className='parrafoMediano2 rojoTxt boldMedium'>Más información</p>
                            <ArrowDownSvg className={styles.iconArrow} />
                        </div> */}
                    </div>
                    <div>
                        <div className={styles.curvaImg}>
                            <Image src='/curvaPC.svg' width={156} height={880} alt="" />
                        </div>
                        <div className={styles.curvaImgM}>
                            <Image src='/curvaM.svg' width={440} height={120} alt="" />
                        </div>
                        <div className={styles.imgContainer}>
                            <Image
                                src={srcImagen}
                                fill
                                sizes="100vw"
                                style={{ objectFit: "cover" }}
                                priority
                                alt='QUIENES SOMOS - Somos la empresa líder en el mercado lácteo peruano'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Interno