'use client';
import Image from 'next/image';
import styles from '@/styles/scss/banner.module.scss';
const Lecheros = () => {
    return (
        <div className='bgAzul'>
            <div className='containerFluidLeft'>
                <div className={styles.lecherosContainer}>
                    <div>
                        <div className={styles.logoGanadero}>
                            <Image src="/logoGanadero.svg" width={112} height={107} alt='Desarrollo Ganadero' />
                        </div>
                        <div className={styles.titularContainer}>
                            <h2 className='titularExtraGrande fontLight'>
                                Día a dia con nuestros <span className='boldRegular celesteTxt'>productores lecheros</span>
                            </h2>
                        </div>
                        <p className='parrafoMediano2 blancoTxt'>
                            Consulta tu historial, la leche acopiada, servicios y beneficios por ser proveedor de Gloria.
                        </p>
                        <div className={styles.btnContainer}>
                            <a href="https://www.portalganaderogloria.com.pe/" target="_blank" className='btnStandart'>Ingresa aquí</a>
                        </div>
                    </div>
                    <div>
                        <Image src="/ganadero.webp" width="2175" height={1160} alt='Día a dia con nuestros productores lecheros' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Lecheros
