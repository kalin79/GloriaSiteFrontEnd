'use client';
import Image from 'next/image';
import styles from '@/styles/scss/corporativo.module.scss';
const Leche = () => {
    return (
        <div className={styles.lecheContainerSeccion}>
            <div className='containerFluid'>
                <div className={styles.gridContainer}>
                    <div>
                        <h3 className='titularPequeno rojoTxt'>NUESTRA LECHE</h3>
                        <h2 className='titularExtraGrande celesteTxt'>
                            Así llega nuestra leche a <span className='boldMedium'>todo el Perú</span>
                        </h2>
                    </div>
                    <div>
                        <p className='titularPequeno2 fontLight blancoTxt'>
                            Conoce el recorrido que hace nuestra leche antes de legar a las mesas peruanas: desde su origen y cómo aseguramos su calidad y valor nutricional.
                        </p>
                    </div>
                    <div>
                        <div className={styles.itemLata}>
                            <div className={styles.imgContainer}>
                                <Image src="/lecheIcon1.svg" width={295} height={197} alt='' />
                            </div>
                            <div className={styles.infoContainer}>
                                <h3 className='tituloMediano2 azulTxt'>Recolección</h3>
                                <div className={styles.panelInfo}>
                                    <button className='btnStandart azulTxt'>Más información</button>
                                    <div className={styles.detalleLecheBox}>
                                        <p className='titularPequeno azulTxt'>
                                            Gracias a nuestro socios ganaderos, recolectamos leche fresca. Cuando la leche sale de la vaca, sube a los camiones cisterna y viaja por las rutas del Perú.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.itemLata}>
                            <div className={styles.imgContainer}>
                                <Image src="/lecheIcon2.svg" width={182} height={182} alt='' />
                            </div>
                            <div className={styles.infoContainer}>
                                <h3 className='tituloMediano2 azulTxt'>
                                    Producción y <br />
                                    envasado
                                </h3>
                                <div className={styles.panelInfo}>
                                    <button className='btnStandart azulTxt'>Más información</button>
                                    <div className={styles.detalleLecheBox}>
                                        <p className='titularPequeno azulTxt'>
                                            Llega a nuestra planta y pasa por un proceso llamado pasteurización, eliminando bacterias y microorganismos peligrosos. Después se enriquece con nutrientes como las vitaminas y minerales, y se adicionan aditivos que ayudan a mantener sus características propias, como por ejemplo su consistencia.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.itemLata}>
                            <div className={styles.imgContainer}>
                                <Image src="/lecheIcon3.svg" width={225} height={225} alt='' />
                            </div>
                            <div className={styles.infoContainer}>
                                <h3 className='tituloMediano2 azulTxt'>Distribución</h3>
                                <div className={styles.panelInfo}>
                                    <button className='btnStandart azulTxt'>Más información</button>
                                    <div className={styles.detalleLecheBox}>
                                        <p className='titularPequeno azulTxt'>
                                            A través de nuestra red de logista, llegamos a cada rincón del país, incluso a los lugares más alejados.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className={styles.itemLata}>
                            <div className={styles.imgContainer}>
                                <Image src="/lecheIcon4.svg" width={245} height={163} alt='' />
                            </div>
                            <div className={styles.infoContainer}>
                                <h3 className='tituloMediano2 azulTxt'>¡A tu mesa!</h3>
                                <div className={styles.panelInfo}>
                                    <button className='btnStandart azulTxt'>Más información</button>
                                    <div className={styles.detalleLecheBox}>
                                        <p className='titularPequeno azulTxt'>
                                            Así, nuestra leche, como también nuestra amplia gama de productos, llega a más de 7MM de hogares peruanos.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Leche
