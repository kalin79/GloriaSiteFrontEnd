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
                            <Image src='/sos1.png' width={758} height={765} alt='' />
                        </div>
                    </div>
                    <div>
                        <div>
                            <h3 className='titularPequeno rojoTxt'>NUESTRO PROPÓSITO</h3>
                            <h2 className='titularExtraGrande azulTxt'>
                                Comprometidos con una <br />
                                <span className='boldMedium'>producción láctea responsable</span>
                            </h2>
                            <p className='parrafoMediano2 negroTxt'>
                                Desde el uso eficiente de recursos hasta el bienestar de los animales, trabajamos con aliados globales para que la leche que llega a las mesas peruanas también cuide el planeta.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comprometidos
