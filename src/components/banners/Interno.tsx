'use client';
import { useEffect, useState } from "react";
import Image from 'next/image'
import Link from 'next/link'
import ArrowSvg from '@/svg/arrow.svg';
import ArrowDownSvg from '@/svg/arrow2.svg';
import styles from '@/styles/scss/banner.module.scss';
interface BannerInterface {
    imgMobile: string;
    imgPc: string;
}
interface Props {
    dataBanner: BannerInterface;
}
const Interno = ({ dataBanner }: Props) => {
    const { imgPc, imgMobile } = dataBanner;
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
                            <p className='parrafoMediano celesteTxt boldMedium'>GLORIA</p> <ArrowSvg /> <Link className='parrafoMediano celesteTxt boldMedium' href="/corporativo/quienes-somos">QUIENES SOMOS</Link>
                        </div>
                        <div className={styles.titularContainer}>
                            <h1 className='bannerTitular fontLight'>
                                Somos la empresa <br />
                                líder en el <span className='boldRegular'>mercado <br />
                                    lácteo peruano</span>
                            </h1>
                        </div>
                        <div className={styles.btnContainer}>
                            <p className='parrafoMediano2 rojoTxt boldMedium'>Más información</p>
                            <ArrowDownSvg className={styles.iconArrow} />
                        </div>
                    </div>
                    <div>
                        <div className={styles.imgContainer}>
                            {srcImagen}
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