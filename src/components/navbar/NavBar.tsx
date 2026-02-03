'use client';
import { useState, useRef } from "react";
import { useSession } from "next-auth/react";
import Image from 'next/image'
import Link from 'next/link'
import gsap from "gsap";
import styles from '@/styles/scss/navbar.module.scss';
const NavBar = () => {
    const [isMenuCooporativo, setIsMenuCoorporativo] = useState(false);
    const [isMenuMarcas, setIsMenuMarcas] = useState(false);
    const miDivRefMenu = useRef(null);
    const { data: session } = useSession();

    const handleViewMenu = () => {
        const tlMenu = gsap.timeline();
        tlMenu.to(miDivRefMenu.current, {
            x: 0,
            ease: "power2.out",
            duration: .5,
        })
    }
    const handleCloseMenu = () => {
        const tlMenu = gsap.timeline();
        tlMenu.to(miDivRefMenu.current, {
            x: '-100%',
            ease: "power2.out",
            duration: .5,
        }, .85)
    }
    return (
        <>
            <div className={`${styles.navContainer} navContainer`}>
                <div className='containerFluid'>
                    <div className={styles.gridContainer}>
                        <div>
                            <div className={styles.logoContainer}>
                                <Link href='/'>
                                    <Image src='/logogloria2.svg' width="102" height='34' alt='Gloria' />
                                </Link>
                            </div>
                        </div>
                        <div>
                            <a href="https://www.portalganaderogloria.com.pe/" target="_blank" className={styles.linkEnterno}>
                                <Image src={`/vaca.svg`} height={21} width={20} alt="Portal Ganaderos" />
                                <span>Portal Ganaderos</span>
                            </a>

                            {
                                (session) ? (
                                    <div className={styles.userContainer}>
                                        <div className={`${styles.letterUserContainer}`}>C</div>
                                    </div>
                                ) : (
                                    <div className={styles.userLoginContainer}>
                                        <Link href="/auth/login" className={`${styles.btnLogin}`}>
                                            <Image src="/btnlogin.svg" width={18} height={18} alt="login" />
                                            {/* <span className="">Iniciar sesión</span> */}
                                        </Link>
                                    </div>
                                )
                            }

                            <div className={`${styles.menuButton}`} onClick={handleViewMenu}>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.openMenuContainer} ref={miDivRefMenu}>
                <div className={`${styles.containerFluid}`}>
                    <a href="https://www.portalganaderogloria.com.pe/" target="_blank" className={styles.linkEnterno}>
                        <Image src={`/vaca.svg`} height={21} width={20} alt="Portal Ganaderos" />
                        <span>Portal Ganaderos</span>
                    </a>
                    <div className={styles.btnCloseContainer} onClick={handleCloseMenu}>
                        <Image src='/close.svg' width="58" height='54' alt='Gloria :: Cerrar Menu' />
                    </div>
                    <div className={styles.gridContainer}>
                        <div>
                            <div className={styles.logoContainer}>
                                <Link href='/' onClick={handleCloseMenu}>
                                    <Image src='/logoprincipal.svg' width="120" height='40' alt='Gloria' />
                                </Link>
                            </div>
                            <div className={styles.listaMenuContainer}>
                                <nav>
                                    <Link href='/' onClick={handleCloseMenu}>Inicio</Link>
                                    <div className={styles.menuMultiple}>
                                        <div className={`${styles.menuMultipleHeader} ${isMenuCooporativo ? `${styles.active}` : ''}`} onClick={() => {
                                            setIsMenuCoorporativo(prev => !prev)
                                            setIsMenuMarcas(false)
                                        }}>
                                            <h2>Nosotros</h2>
                                            <Image src='/arrow2.svg' width="28" height='14' alt='Gloria' />
                                        </div>
                                        <div className={`${styles.menuMultipleListado} ${isMenuCooporativo ? `${styles.active}` : ''}`} >
                                            <Link href='/corporativo/quienes-somos' onClick={handleCloseMenu}>Quienes Somos</Link>

                                            <Link href='/corporativo/sostenibilidad' onClick={handleCloseMenu}>Sostenibilidad</Link>

                                            <Link href='/noticias' onClick={handleCloseMenu}>Noticias</Link>
                                        </div>
                                    </div>
                                    <div className={styles.menuMultiple}>
                                        <div className={`${styles.menuMultipleHeader} ${isMenuMarcas ? `${styles.active}` : ''}`} onClick={() => {
                                            setIsMenuCoorporativo(false)
                                            setIsMenuMarcas(prev => !prev)
                                        }}>
                                            <h2>Marcas</h2>
                                            <Image src='/arrow2.svg' className={styles.arrowBox} width="28" height='14' alt='Gloria' />
                                        </div>
                                        <div className={`${styles.menuMultipleListado} ${isMenuMarcas ? `${styles.active}` : ''}`} >
                                            <Link href='/gloria' onClick={handleCloseMenu}>Gloria</Link>
                                            <Link href='/bonle' onClick={handleCloseMenu}>Bonle</Link>
                                            <Link href='/pro' onClick={handleCloseMenu}>PRO</Link>
                                            {/* <Link href='/actibio' onClick={handleCloseMenu}>ActiBio</Link> */}
                                            {/* <Link href='/batti-mix' onClick={handleCloseMenu}>Battimix</Link> */}
                                        </div>
                                    </div>
                                    <Link href='/productos' onClick={handleCloseMenu}>Productos</Link>
                                    <Link href='/contacto' onClick={handleCloseMenu}>Contacto</Link>
                                </nav>
                                <div className={styles.footerContainer}>
                                    <div>
                                        <div className={styles.item2}>
                                            <h3 className='titularPequeno celesteTxt'>Gloria responde</h3>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={styles.item}>
                                            <Image src='/call.svg' className={styles.iconPhone} width="23" height='20' alt='0800-1-84441' />
                                            <div>
                                                <h2>0800-1-4441</h2>
                                                <p className="celesteTxt titularPequeno">De lunes a viernes de 8:00 am a 6:00 pm, sábado de 8:00 am a 12:00 pm</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={styles.item}>
                                            <Image src='/mail.svg' className={styles.iconMail} width="20" height='16' alt='contactcenterinforma@gloria.com.pe' />
                                            <div>
                                                <a href="mailto:contactcenterinforma@gloria.com.pe">contactcenterinforma@gloria.com.pe</a>
                                                <p className="celesteTxt titularPequeno">De lunes a viernes de 8:00 am a 4:00 pm, sábado de 8:00 am a 11:00 am</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.eticaContainer}>
                                        <div>
                                            <a href="https://www.gloriateescucha.com/" target='_blank'>
                                                <Image src="/call2.svg" width={42} height={42} alt='Gloria' />
                                            </a>
                                        </div>
                                        <div>
                                            <a href="https://www.gloriateescucha.com/" target='_blank'>
                                                <h4 className='parrafoPequeno celesteTxt'>LÍNEA ÉTICA</h4>
                                                <h5 className='bannerParrafo'>Gloria te escucha</h5>
                                            </a>
                                        </div>
                                    </div>
                                    <div className={styles.redesContainer}>
                                        <a href="https://www.linkedin.com/company/gloria-peru/posts/?feedView=all" target='_blank'>
                                            <Image src="https://s3.us-east-1.amazonaws.com/img.qa.gloria.com.pe/multimedia/16/16-img-1761954294.svg" width={42} height={42} alt='Gloria' />
                                        </a>
                                        <p className='parrafoMediano celesteTxt'>
                                            Entérate de nuestras <br />
                                            noticias, logros y cultura.
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div>
                            <div className={styles.bgCurva}>
                                <Image src='/curvaPC.svg' width="155" height='880' alt='' />
                            </div>
                            <div className={styles.bgContainer}>
                                <Image src='/menu2.webp' width="1796" height='2360' alt='¡Comienza un nuevo regreso a clases! :: Detrás de un niño volviendo al cole, hay una mamá y papá dándolo todo. Conoce la nueva campaña de Gloria.' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar
