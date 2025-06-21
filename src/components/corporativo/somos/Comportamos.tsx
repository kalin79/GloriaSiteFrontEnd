'use client';
import styles from '@/styles/scss/somos.module.scss';

const Comportamos = () => {
    return (
        <div className={`${styles.comportamosContainer} bgCeleste`}>
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
                                <li>
                                    Nos comprometemos con pasión y
                                    perseverancia para hacer que las cosas pasen.
                                </li>
                                <li>
                                    Actuamos con integridad y transparencia; respetando las leyes,
                                    normas y procesos.
                                </li>
                                <li>
                                    Ponemos a nuestros consumidores y
                                    clientes al centro de nuestras
                                    decisiones.
                                </li>
                                <li>
                                    Somos productivos, usamos de forma
                                    eficiente nuestros recursos y nunca
                                    sacrificamos la calidad.
                                </li>
                                <li>
                                    Estamos presentes donde las cosas
                                    suceden y decimos las cosas como son.
                                </li>
                                <li>
                                    Creemos en el liderazgo que empodera a
                                    las personas.
                                </li>
                                <li>
                                    Aprendemos para superarnos siempre.
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Comportamos
