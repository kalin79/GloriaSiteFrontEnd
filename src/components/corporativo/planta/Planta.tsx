'use client';
import Image from 'next/image';
import styles from '@/styles/scss/corporativo.module.scss';

const Planta = () => {
    return (
        <div className={styles.plantaContainer}>
            <div className='containerFluid'>
                <div className={styles.gridContainer}>
                    <div>
                        <div className={styles.imgContainer}>
                            <Image src='/huachipa.png' width={1099} height={1290} alt='' />
                        </div>
                    </div>
                    <div>
                        <h3 className='titularPequeno rojoTxt'>VISITA NUESTRA PLANTA</h3>
                        <h2 className='titularExtraGrande azulTxt'>
                            Visitas educativas <br />
                            y corporativas a <br />
                            <span className='boldMedium'>nuestra planta</span>
                        </h2>
                        <p className='parrafoMediano2 negroTxt'>
                            Gloria S.A permite la visita a sus instalaciones fabriles a estudiantes de niveles primaria, secundaria, universitarios, institutos o similares, así como a personal de empresas privadas y estatales.
                        </p>
                        <h4 className='titularPequeno2'>Planta en Lima (Huachipa)</h4>
                        <div className={styles.ubicacionContainer}>
                            <div>
                                <Image src='/location.svg' width={32} height={32} alt='Dirección: La Capitana 190, Lurigancho-Chosica 15461<' />
                                <p className='parrafoMediano2'>Dirección: La Capitana 190, Lurigancho-Chosica 15461</p>
                            </div>
                            <div>
                                <Image src='/info.svg' width={32} height={32} alt='Para información de visitas a Planta Huachipa contactar a: visitasaplanta@gloria.com.pe' />
                                <p className='parrafoMediano2'>Para información de visitas a Planta Huachipa contactar a: <a href="mailto:visitasaplanta@gloria.com.pe" className='parrafoMediano2' target='_blank'>visitasaplanta@gloria.com.pe</a></p>
                            </div>
                        </div>
                        <div className={styles.buttonContainer}>
                            <a href="#" className='btnStandart'>Ubicar en Google Maps</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Planta
