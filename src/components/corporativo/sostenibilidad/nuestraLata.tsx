'use client';
import Image from 'next/image';
import styles from '@/styles/scss/corporativo.module.scss';
const nuestraLata = () => {
    return (
        <div className={styles.nuestraLataContainer}>
            <div className='containerFluid'>
                <div className={styles.gridContainer}>
                    <div>
                        <h3 className='titularPequeno rojoTxt'>NUESTRA LATA</h3>
                        <h2 className='titularExtraGrande azulTxt'>
                            100% segura, <span className='boldMedium'>resistente y sostenible</span>
                        </h2>
                    </div>
                    <div>
                        <p className='titularPequeno2 fontLight azulTxt'>
                            Desde hace más de 83 años, elegimos este envase por su resistencia, seguridad y compromiso con el medio ambiente. Hoy, sigue siendo una de las formas más eficientes y sostenibles de llevar nuestros productos a todo el Perú.
                        </p>
                    </div>
                    <div>
                        <div className={styles.itemLata}>
                            <div className={styles.imgContainer}>
                                <Image src="/icolata1.svg" width={71} height={102} alt='' />
                            </div>
                            <div className={styles.infoContainer}>
                                <h3 className='tituloMediano2 azulTxt'>Conserva y protege</h3>
                                <p className='titularPequeno fontLight azulTxt'>Lata de acero resistente con recubrimiento interno que mantiene la calidad del alimento.</p>
                            </div>
                        </div>
                        <div className={styles.itemLata}>
                            <div className={styles.imgContainer}>
                                <Image src="/icolata2.svg" width={71} height={102} alt='' />
                            </div>
                            <div className={styles.infoContainer}>
                                <h3 className='tituloMediano2 azulTxt'>Resiste a cualquier <br /> condición climática</h3>
                                <p className='titularPequeno fontLight azulTxt'>
                                    Nuestra lata resiste climas extremos, garantizando leche de calidad en todo el Perú.
                                </p>
                            </div>
                        </div>
                        <div className={styles.itemLata}>
                            <div className={styles.imgContainer}>
                                <Image src="/icolata3.svg" width={71} height={102} alt='' />
                            </div>
                            <div className={styles.infoContainer}>
                                <h3 className='tituloMediano2 azulTxt'>Conserva y protege</h3>
                                <p className='titularPequeno fontLight azulTxt'>
                                    Certificación “Metal Recycles Forever”: el acero se recicla infinitamente sin perder calidad.
                                </p>
                            </div>
                            <div className={styles.imgMetaContainer}>
                                <Image src="/iconmeta.svg" width={91} height={95} alt='' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default nuestraLata
