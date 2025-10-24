'use client';
import Image from 'next/image'
import styles from '@/styles/scss/somos.module.scss';
const PropositoSinBtn = () => {
    return (
        <div className={`${styles.propositoContainer}`}>
            <div className='containerFluid'>
                <div className={`${styles.gridContainer}`}>
                    <div>
                        <div className={styles.containerBoy}>
                            <Image src="/boy.webp" width={711} height={1127} alt='Niña tomando leche Gloria' />
                        </div>
                    </div>
                    <div>
                        <div className={styles.headerContainer}>
                            <h3 className={styles.subTitularMain}>NUESTRO PROPÓSITO</h3>
                            <h2 className={styles.titularMain}>
                                Alimentamos el progreso, el bienestar y los <span className='boldMedium'>sueños de todos los peruanos</span>
                            </h2>
                        </div>
                        <div className={styles.listadoBox}>

                            <div>
                                <div className={styles.infoBox}>
                                    <h4>VISIÓN</h4>
                                    <p>
                                        Aspiramos a que la alimentación sea un eje central para el
                                        desarrollo del país.
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className={styles.infoBox}>
                                    <h4>MISIÓN</h4>
                                    <p>
                                        Garantizamos el acceso a alimentos ricos, nutritivos y de calidad para todos los peruanos mediante nuestras marcas, capacidad industrial y estrategia go to market.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PropositoSinBtn
