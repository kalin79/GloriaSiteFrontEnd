'use client';
import Image from 'next/image';

import styles from '@/styles/scss/corporativo.module.scss';

const Datos = () => {
    return (
        <div className={styles.datosGanaderosContainer}>
            <div className='containerFluid'>
                <div className={styles.gridContainerHeader}>
                    <div>
                        <p className='azulTxt titularMediano fontLight'>
                            Ganaderos en distintas regiones del Perú confían en nosotros y nosotros confiamos en ellos. Acompañamos su desarrollo con herramientas, asistencia técnica y compromiso mutuo para llevar leche de calidad a millones de hogares peruanos, de forma sostenible y responsable.
                        </p>
                    </div>
                </div>
                <div className={styles.gridContainer}>
                    <div>
                        <div className={styles.infoContainer}>
                            <div>
                                <div className={styles.iconBox}>
                                    <Image src='/iconganadero1.svg' width={92} height={96} alt='' />
                                </div>
                                <h3 className='tituloMediano2 azulTxt'>718 millones <br />de soles</h3>
                                <p className='titularPequeno fontLight azulTxt'>Ha invertito Gloria en la promoción y en el desarrollo ganadero en el Perú entre el 2012 y 2023.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={styles.infoContainer}>
                            <div>
                                <div className={styles.iconBox}>
                                    <Image src='/iconganadero2.svg' width={70} height={94} alt='' />
                                </div>
                                <h3 className='tituloMediano2 azulTxt'>Más de 400 <br />ganaderos</h3>
                                <p className='titularPequeno fontLight azulTxt'>Del centro, norte y sur del Perú han sido beneficiados con la implementación de tanques de enfiramiento de leche.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={styles.infoContainer}>
                            <div>
                                <div className={styles.iconBox}>
                                    <Image src='/iconganadero3.svg' width={88} height={91} alt='' />
                                </div>
                                <h3 className='tituloMediano2 azulTxt'>30 tanques de <br />enfriamiento de leche</h3>
                                <p className='titularPequeno fontLight azulTxt'>Con energía fotovoltaica, instalados desde el 2024 en establos que no cuentan con energía eléctrica convencional. Se prevee implementar
                                    30 tanques más en el 2025.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Datos
