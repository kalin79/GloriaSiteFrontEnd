'use client';
import Image from 'next/image';

import styles from '@/styles/scss/somos.module.scss';

const Comportamos = () => {
    return (
        <div className={`${styles.comportamosContainer}`}>
            <div className='containerFluid'>
                <div className={styles.bgContainerData}>
                    <div className={styles.gridContainer}>
                        <div>
                            <h3 className='parrafoMediano celesteTxt'>¿CÓMO NOS COMPORTAMOS?</h3>
                            <h2 className='titularExtraGrande fontLight'>
                                Nuestra manera <br />
                                de <span className='boldRegular'>hacer las cosas</span>
                            </h2>
                            <ul>
                                <li className='fontLight'>
                                    Nos comprometemos con pasión y
                                    perseverancia para hacer que las cosas pasen.
                                </li>
                                <li className='fontLight'>
                                    Actuamos con integridad y transparencia; respetando las leyes,
                                    normas y procesos.
                                </li>
                                <li className='fontLight'>
                                    Ponemos a nuestros consumidores y
                                    clientes al centro de nuestras
                                    decisiones.
                                </li>
                                <li className='fontLight'>
                                    Somos productivos, usamos de forma
                                    eficiente nuestros recursos y nunca
                                    sacrificamos la calidad.
                                </li>
                                <li className='fontLight'>
                                    Estamos presentes donde las cosas
                                    suceden y decimos las cosas como son.
                                </li>
                                <li className='fontLight'>
                                    Creemos en el liderazgo que empodera a
                                    las personas.
                                </li>
                                <li className='fontLight'>
                                    Aprendemos para superarnos siempre.
                                </li>
                            </ul>
                        </div>
                        <div>
                            <Image src="/comportamos.webp" width={758} height={765} alt='' />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Comportamos
