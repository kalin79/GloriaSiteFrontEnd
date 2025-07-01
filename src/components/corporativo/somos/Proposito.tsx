'use client';
import Image from 'next/image'
import Link from 'next/link';
import styles from '@/styles/scss/somos.module.scss';
const Proposito = () => {
    return (
        <div className={styles.propositoContainer}>

            <div className='containerFluid'>
                <div className={`${styles.gridContainer}`}>
                    <div>
                        <Image src="/nino.png" width={1136} height={1599} alt='Niña tomando leche Gloria' />
                    </div>
                    <div>
                        <div className={styles.headerContainer}>
                            <h3 className='titularPequeno rojoTxt'>ESTRATEGIA GLORIA</h3>
                            <h2 className='titularExtraGrande azulTxt'>
                                Alimentando el progreso <br />
                                <span className='boldMedium'>de los peruanos</span>
                            </h2>
                        </div>
                        <p className='parrafoMediano2'>
                            En Gloria, trabajamos con pasión para llevar nutrición y bienestar a cada hogar peruano. Con integridad y calidad, impulsamos el desarrollo del país a través de nuestros productos.
                        </p>
                        <div className={styles.listadoBox}>
                            <div>
                                <div className={styles.iconBox}>
                                    <Image src="/pro1.svg" width={100} height={100} alt='PROPÓSITO' />
                                </div>
                                <div className={styles.infoBox}>
                                    <h4 className='parrafoGrande azulCTxt boldMedium'>PROPÓSITO</h4>
                                    <p className='parrafoMediano2 azulTxt'>
                                        Alimentamos el progreso, el
                                        bienestar y los sueños de todos los
                                        peruanos.
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className={styles.iconBox}>
                                    <Image src="/pro2.svg" width={100} height={100} alt='PROPÓSITO' />
                                </div>
                                <div className={styles.infoBox}>
                                    <h4 className='parrafoGrande azulCTxt boldMedium'>VISIÓN</h4>
                                    <p className='parrafoMediano2 azulTxt'>
                                        Aspiramos a que la alimentación sea un eje central para el
                                        desarrollo del país.
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className={styles.iconBox}>
                                    <Image src="/pro3.svg" width={100} height={100} alt='PROPÓSITO' />
                                </div>
                                <div className={styles.infoBox}>
                                    <h4 className='parrafoGrande azulCTxt boldMedium'>MISIÓN</h4>
                                    <p className='parrafoMediano2 azulTxt'>
                                        Garantizamos el acceso a alimentos ricos, nutritivos y de calidad para todos los peruanos mediante nuestras marcas, capacidad industrial y estrategia go to market.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.btnContainer}>
                            <Link className='btnStandart' href="/corporativo/quienes-somos">Quienes somos</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Proposito
