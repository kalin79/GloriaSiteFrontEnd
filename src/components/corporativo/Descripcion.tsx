'use client';
import Image from 'next/image';
// import Link from 'next/link'
import HtmlSafeRender from '@/components/HtmlSafeRender';
import styles from '@/styles/scss/corporativo.module.scss';
interface Props {
    dataDescripcion: string;
}

const Descripcion = ({ dataDescripcion }: Props) => {
    return (
        <div className={styles.nuestraPlantaContainer}>
            <div className='containerFluid'>
                <div className={styles.gridContainer}>
                    <div>
                        <h3 className='parrafoMediano rojoTxt boldMedium'>NUESTRAS PLANTAS</h3>
                        <h2 className='titularExtraGrande azulTxt fontLight'>
                            Infraestructura que impulsa <span className='boldMedium'>nutrición y calidad</span>
                        </h2>
                        <p className='titularPequeno azulTxt fontLight'>
                            <HtmlSafeRender html={dataDescripcion} />
                        </p>
                    </div>
                    <div>
                        <div className={styles.plantaBox}>
                            <div className={styles.imgContainer}>
                                <Image src="/planta1.webp" width={878} height={585} alt='' />
                            </div>
                            <div className={styles.footerContainer}>
                                <div className={styles.bodyContainer}>
                                    <div className={styles.curvaHeader}>
                                        <Image src="/curvaHPC.svg" width={440} height={120} alt='' />
                                    </div>
                                    <div className={styles.infoContent}>
                                        <h2 className='parrafoMediano azulTxt boldMedium'>Planta en Lima (Huachipa)</h2>
                                        <div className={`${styles.btnTransparente} parrafoMediano azulTxt`}>Más información</div>
                                        <div className={`${styles.detalleContainer} parrafoMediano azulTxt`}>
                                            <p>
                                                Operativa desde 1999, esta planta es la más importante del Perú y la más grande de leche evaporada en el mundo. Desde aquí se producen diversos productos como leche UHT, yogures, néctares, mantequilla, quesos y más. Su capacidad, tecnología y alcance nos permiten llevar nuestros productos a millones de hogares a lo largo de todo el país.
                                            </p>
                                            <p>
                                                ¡Visita nuestra planta!
                                            </p>
                                            <p>
                                                Estudiantes y universidades, contáctennos a
                                            </p>
                                            <a href="mailto:visitasaplanta@gloria.com.pe.">visitasaplanta@gloria.com.pe.</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={styles.plantaBox}>
                            <div className={styles.imgContainer}>
                                <Image src="/planta1.webp" width={878} height={585} alt='' />
                            </div>
                            <div className={styles.footerContainer}>
                                <div className={styles.bodyContainer}>
                                    <div className={styles.curvaHeader}>
                                        <Image src="/curvaHPC.svg" width={440} height={120} alt='' />
                                    </div>
                                    <div className={styles.infoContent}>
                                        <h2 className='parrafoMediano azulTxt boldMedium'>Planta en Arequipa</h2>
                                        <div className={`${styles.btnTransparente} parrafoMediano azulTxt`}>Más información</div>
                                        <div className={`${styles.detalleContainer} parrafoMediano azulTxt`}>
                                            <p>
                                                Nuestra historia comenzó en Arequipa en 1941, con la construcción de nuestra primera planta. Hoy, es símbolo de innovación y progreso. Aquí implementamos la primera línea aséptica del país para elaborar productos lácteos que no necesitan refrigeración, como Yofresh, PRO y Shake. Desde el sur, seguimos avanzando para ofrecer nutrición de calidad, adaptada a las nuevas necesidades del consumidor.
                                            </p>
                                        </div>
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

export default Descripcion
