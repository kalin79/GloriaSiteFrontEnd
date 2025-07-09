'use client';
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/scss/footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.footerPC}>
                <div className="containerFluid">
                    <div className={styles.gridContainer}>
                        <div>
                            <Link href="/">
                                <Image src="/logoCorp.svg" width={120} height={40} alt='Gloria' />
                            </Link>
                        </div>
                        <div>
                            <h3 className='titularPequeno'>Leche Gloria</h3>
                            <div className={styles.navMenu}>
                                <Link href="/corporativo/quienes-somos" className='parrafoMediano fontLight'>Quienes Somos</Link>
                                <Link href="/corporativo/nuestro-compromiso" className='parrafoMediano fontLight'>Nuestro compromiso</Link>
                                <Link href="/corporativo/ganaderos" className='parrafoMediano fontLight'>Ganaderos</Link>
                                <Link href="/corporativo/sostenibilidad" className='parrafoMediano fontLight'>Sostenibilidad</Link>
                                {/* <Link href="/noticias" className='parrafoMediano fontLight'>Noticias</Link> */}
                            </div>
                        </div>
                        <div>
                            <h3 className='titularPequeno'>Marcas</h3>
                            <div className={styles.navMenu}>
                                <Link href="/gloria" className='parrafoMediano fontLight'>Gloria</Link>
                                <Link href="/pro" className='parrafoMediano fontLight'>PRO</Link>
                                <Link href="/actibio" className='parrafoMediano fontLight'>ActiBio</Link>
                                <Link href="/bonle" className='parrafoMediano fontLight'>Bonlé</Link>
                                <Link href="/batti-mix" className='parrafoMediano fontLight'>BattiMix</Link>
                            </div>
                        </div>
                        <div>
                            <h3 className='titularPequeno'>Legales</h3>
                            <div className={styles.navMenu}>
                                <Link href="/legales/terminos-y-condiciones" className='parrafoMediano fontLight'>T&eacute;rminos y Condiciones</Link>
                                <Link href="/legales/politicias-de-proteccion-de-datos" className='parrafoMediano fontLight'>Pol&iacute;ticias de Protecci&oacute;n de Datos</Link>
                            </div>
                        </div>
                        <div className={styles.gloriaAyudaContainer}>
                            <div>
                                <h3 className='titularPequeno celesteTxt'>Atención al cliente:</h3>
                            </div>
                            <div>
                                {/* <h3 className='bannerParrafo'>Línea telefónica gratuita:</h3> */}
                                <h2 className='titularMedianoFooter fontLight'>0800-1-4441</h2>
                                <p className='parrafoPequeno'>De lunes a viernes de 8:00 am a 6:00 pm, sábado de 8:00 am a 12:00 pm</p>
                            </div>
                            <div>
                                {/* <h3 className='bannerParrafo'>Línea telefónica gratuita:</h3> */}
                                <a href="mailto:contactcenterinforma@gloria.com.pe" className='titularMedianoFooter fontLight'>contactcenterinforma@gloria.com.pe</a>
                                <p className='parrafoPequeno'>De lunes a viernes de 8:00 am a 4:00 pm, sábado de 8:00 am a 11:00 am</p>
                            </div>
                            <div className={styles.eticaContainer}>
                                <div>
                                    <a href="https://www.gloriateescucha.com/" target='_blank'>
                                        <Image src="/etica.svg" width={54} height={44} alt='Gloria' />
                                    </a>
                                </div>
                                <div>
                                    <a href="https://www.gloriateescucha.com/" target='_blank'>
                                        <h4 className='parrafoPequeno celesteTxt'>LÍNEA ÉTICA</h4>
                                        <h5 className='bannerParrafo'>Gloria te escucha</h5>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className={`${styles.cierreFooter}`}>
                        <div></div>
                        {/* <div className={styles.redesBox}>
                            <a href="/" target='_blank'>
                                <Image src="/facebook.svg" width={32} height={32} alt='Facebook' />
                            </a>
                            <a href="/" target='_blank'>
                                <Image src="/instagram.svg" width={32} height={32} alt='Instagram' />
                            </a>
                            <a href="/" target='_blank'>
                                <Image src="/youtube.svg" width={32} height={32} alt='Youtube' />
                            </a>
                            <a href="/" target='_blank'>
                                <Image src="/linkedin.svg" width={32} height={32} alt='Linkedin' />
                            </a>
                        </div> */}
                        <div className={styles.CopyBox}>
                            <h4 className='parrafoMediano celesteTxt fontLight'>© GLORIA. Todos los derechos reservados.</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.footerM}>
                <div className='containerFluid'>
                    <div className={styles.logoContainer}>
                        <Link href="/">
                            <Image src="/logoCorp.svg" width={120} height={40} alt='Gloria' />
                        </Link>
                    </div>
                    <div className={styles.redesBox}>
                        <a href="/" target='_blank'>
                            <Image src="/facebook.svg" width={32} height={32} alt='Facebook' />
                        </a>
                        <a href="/" target='_blank'>
                            <Image src="/instagram.svg" width={32} height={32} alt='Instagram' />
                        </a>
                        <a href="/" target='_blank'>
                            <Image src="/youtube.svg" width={32} height={32} alt='Youtube' />
                        </a>
                        <a href="/" target='_blank'>
                            <Image src="/linkedin.svg" width={32} height={32} alt='Linkedin' />
                        </a>
                    </div>
                    <div className={styles.gloriaAyudaContainer}>
                        <div>
                            <h3 className='bannerParrafo'>Línea telefónica gratuita:</h3>
                            <h2 className='titularMedianoFooter fontLight'>0800-1-4441</h2>
                            <p className='parrafoMediano celesteTxt'>De lunes a viernes de 8:00 am a 6:00 pm, sábado de 8:00 am a 12:00 pm</p>
                        </div>
                        <div>
                            <h3 className='bannerParrafo'>Línea telefónica gratuita:</h3>
                            <a href="mailto:contactcenterinforma@gloria.com.pe" className='titularMedianoFooter fontLight'>contactcenterinforma@gloria.com.pe</a>
                            <p className='parrafoMediano celesteTxt'>De lunes a viernes de 8:00 am a 4:00 pm, sábado de 8:00 am a 11:00 am</p>
                        </div>
                        <div className={styles.eticaContainer}>
                            <div>
                                <a href="https://www.gloriateescucha.com/" target='_blank'>
                                    <Image src="/etica.svg" width={54} height={44} alt='Gloria' />
                                </a>
                            </div>
                            <div>
                                <a href="https://www.gloriateescucha.com/" target='_blank'>
                                    <h4 className='parrafoPequeno celesteTxt'>LÍNEA ÉTICA</h4>
                                    <h5 className='bannerParrafo'>Gloria te escucha</h5>
                                </a>
                            </div>
                        </div>

                    </div>
                    <div className={styles.legalesContainer}>
                        <Link href="/legales/terminos-y-condiciones" className='parrafoMediano celesteTxt fontLight'>T&eacute;rminos y Condiciones</Link>
                        <Link href="/legales/politicias-de-proteccion-de-datos" className='parrafoMediano celesteTxt fontLight'>Pol&iacute;ticias de Protecci&oacute;n de Datos</Link>
                    </div>
                    <div className={`${styles.cierreFooter}`}>
                        <h4 className='parrafoMediano celesteTxt fontLight'>© GLORIA. Todos los derechos reservados.</h4>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer
