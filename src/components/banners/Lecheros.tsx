'use client';
import Image from 'next/image';
import styles from '@/styles/scss/banner.module.scss';
const Lecheros = () => {
    return (
        <div className={styles.lecherosContainer}>
            <div className={styles.bgFullPage}>
                <Image src="/lecheros.webp" width="2460" height={1170} alt='Consulta tu historial, la leche acopiada, servicios y beneficios por ser proveedor de Gloria.' />
            </div>
            <div className={`containerFluid ${styles.containerFluid}`}>
                <div className={styles.gridContainer}>
                    <div>
                        <div className={styles.mantoContainer}>
                            <div className={styles.titularContainer}>
                                <h2 className='titularExtraGrande fontLight'>
                                    Día a dia con nuestros <span className='boldRegular celesteTxt'>productores lecheros</span>
                                </h2>
                            </div>
                            <p className='parrafoMediano2 blancoTxt'>
                                Consulta tu historial, la leche acopiada, servicios y beneficios por ser proveedor de Gloria.
                            </p>
                            <div className={styles.footerContainer}>
                                <div className={styles.btnContainer}>
                                    <a href="https://www.portalganaderogloria.com.pe/" className='btnStandart' target='_blank'>Ingresa aquí</a>
                                </div>
                                <div className={styles.logoGanadero}>
                                    <Image src="/logoGanadero.svg" width={112} height={107} alt='Desarrollo Ganadero' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Lecheros
