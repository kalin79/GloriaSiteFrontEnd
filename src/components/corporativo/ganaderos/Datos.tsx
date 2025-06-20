'use client';
import Image from 'next/image';

import styles from '@/styles/scss/corporativo.module.scss';

const Datos = () => {
    return (
        <div className={styles.datosGanaderosContainer}>
            <div className='containerFluid'>
                <div className={styles.gridContainer}>
                    <div>
                        <div className={styles.infoContainer}>
                            <div>
                                <div className={styles.iconBox}>
                                    <Image src='/toro.svg' width={105} height={99} alt='' />
                                </div>
                                <h3>718 millones <br />de soles</h3>
                                <p>Ha invertito Gloria en la promoción y en el desarrollo ganadero en el Perú entre el 2012 y 2023.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={styles.infoContainer}>
                            <div>
                                <div className={styles.iconBox}>
                                    <Image src='/ganadero.svg' width={98} height={112} alt='' />
                                </div>
                                <h3>Más de 400 <br />ganaderos</h3>
                                <p>Del centro, norte y sur del Perú han sido beneficiados con la implementación de tanques de enfiramiento de leche.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={styles.infoContainer}>
                            <div>
                                <div className={styles.iconBox}>
                                    <Image src='/maquina.svg' width={98} height={112} alt='' />
                                </div>
                                <h3>30 tanques de <br />enfriamiento de leche</h3>
                                <p>Con energía fotovoltaica, instalados desde el 2024 en establos que no cuentan con energía eléctrica convencional. Se prevee implementar
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
