'use client';
import Image from 'next/image'
import Link from 'next/link'
import ArrowSvg from '@/svg/arrow.svg';
import ArrowDownSvg from '@/svg/arrow2.svg';
import styles from '@/styles/scss/banner.module.scss';

const Interno = () => {
    return (
        <div className={styles.bannerInternoContainer}>
            <div className='containerFluid'>
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
                            <ArrowDownSvg />
                        </div>
                    </div>
                    <div>
                        <div className={styles.imgContainer}>
                            <Image src="/bi1.webp" width={1217} height={1320} alt='QUIENES SOMOS - Somos la empresa líder en el mercado lácteo peruano' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Interno