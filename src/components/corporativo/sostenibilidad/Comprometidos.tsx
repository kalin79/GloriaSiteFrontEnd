'use client';
import Image from 'next/image';
import styles from '@/styles/scss/corporativo.module.scss';

const Comprometidos = () => {
    return (
        <div className={styles.plantaContainer}>
            <div className='containerFluid'>
                <div className={styles.gridContainer}>
                    <div>
                        <div className={styles.imgContainer}>
                            <Image src='/bgsosteni.png' width={1185} height={1290} alt='' />
                        </div>
                    </div>
                    <div>
                        <div>
                            <h3 className='titularPequeno rojoTxt'>SOSTENIBILIDAD</h3>
                            <h2 className='titularExtraGrande azulTxt'>
                                Comprometidos con un <br />
                                <span className='boldMedium'>futuro más sostenible</span>
                            </h2>
                            <p className='parrafoMediano2 negroTxt'>
                                Ante un escenario cada vez más diverso y desafiante, donde las empresas están tomando mayor conciencia sobre el impacto ambiental de sus operaciones, en nuestra organización decidimos ser parte activa del cambio.
                            </p>
                            <p className='parrafoMediano2 negroTxt marginTop30'>
                                Desde inicios de 2018, formamos parte del Marco de Sostenibilidad Láctea (Dairy Sustainability Framework), una iniciativa global que impulsa una visión común para mitigar los efectos ambientales de la ganadería lechera a nivel mundial.
                                Además, adoptamos como guía los Objetivos de Desarrollo Sostenible (ODS) de las Naciones Unidas, lo que nos compromete a trabajar de manera colaborativa con distintos actores y enfoques. Esta visión nos impulsa a no solo producir alimentos de alta calidad, sino también a operar de forma responsable con el medioambiente, integrando prácticas sostenibles en toda nuestra cadena de valor
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comprometidos
