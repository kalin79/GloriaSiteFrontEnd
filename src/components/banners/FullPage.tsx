'use client';
import Image from 'next/image'
import HtmlSafeRender from '@/components/HtmlSafeRender';

import styles from '@/styles/scss/banner.module.scss';

interface legalInterface {
    titular: string,
    titularCampana?: string,
    description?: string,
    logoMarca?: string,
}
interface Props {
    dataLegal: legalInterface;
}
const FullPage = ({ dataLegal }: Props) => {
    return (
        <>
            <div className='LogoProductoHeader'>
                <Image src={dataLegal.logoMarca ?? '/gloria.svg'} width={121} height={84} alt='' />
            </div>

            <div className={styles.fullPageBanner}>
                <div className={styles.imageContainer}>
                    <Image src='/bgfull.webp' width={2460} height={1425} alt='' />
                </div>
                <div className={`containerFluid ${styles.containerFluid}`}>
                    <div className={styles.gridContainer}>
                        <div className={styles.centerContent}>
                            <div className={styles.titleHeader}>
                                <h1 className='bannerTitular'><HtmlSafeRender html={dataLegal.titular} /></h1>
                                {
                                    dataLegal.titularCampana && (
                                        <p className='parrafoGrande'><HtmlSafeRender html={dataLegal.titularCampana} /></p>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FullPage
