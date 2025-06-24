'use client';
import { useEffect, useState, useRef } from "react";
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
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const handleClick = (index: number) => {
        setActiveIndex(index === activeIndex ? null : index); // Toggle
    };
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
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                gsap.to(".navContainer", { backgroundColor: "rgba(26, 23, 43,0.85) ", duration: 0.3 });
            } else {
                gsap.to(".navContainer", { backgroundColor: "transparent", duration: 0.3 });
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <>
            <div className={`${styles.navContainer} navContainer`}>
                <div className='containerFluid'>
                    <div className={styles.gridContainer}>
                        <div>
                            <div className={styles.logoContainer}>
                                <Link href='/'>
                                    <Image src='/logoCorp.svg' width="120" height='40' alt='Gloria' />
                                </Link>
                            </div>
                        </div>
                        <div>
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
                    <div className={styles.btnCloseContainer} onClick={handleCloseMenu}>
                        <Image src='/close.svg' width="58" height='54' alt='Gloria :: Cerrar Menu' />
                    </div>
                    <div className={styles.gridContainer}>
                        <div>
                            <div className={styles.logoContainer}>
                                <Link href='/' onClick={handleCloseMenu}>
                                    <Image src='/logoCorp.svg' width="120" height='40' alt='Gloria' />
                                </Link>
                            </div>
                            <div className={styles.listaMenuContainer}>
                                <nav>
                                    <Link href='/' onClick={handleCloseMenu}>Home</Link>
                                    <div className={styles.menuMultiple}>
                                        <div className={`${styles.menuMultipleHeader} ${isMenuCooporativo ? `${styles.active}` : ''}`} onClick={() => {
                                            setIsMenuCoorporativo(prev => !prev)
                                            setIsMenuMarcas(false)
                                        }}>
                                            <h2>Gloria</h2>
                                            <Image src='/arrow2.svg' width="28" height='14' alt='Gloria' />
                                        </div>
                                        <div className={`${styles.menuMultipleListado} ${isMenuCooporativo ? `${styles.active}` : ''}`} >
                                            <Link href='/corporativo/quienes-somos' onClick={handleCloseMenu}>Quienes Somos</Link>
                                            <Link href='/corporativo/nuestra-planta' onClick={handleCloseMenu}>Nuestra Planta</Link>
                                            <Link href='/corporativo/ganaderos' onClick={handleCloseMenu}>Ganaderos</Link>
                                            {/* <Link href='/informacion-financiera' onClick={handleCloseMenu}>Informaci&oacute;n financiera</Link> */}
                                            <div className={styles.subMenuContainer}>
                                                <div className={`${styles.headerSubMenu} ${activeIndex === 1 ? styles.active : ''}`} onClick={() => handleClick(1)}>
                                                    <h2>Sostenibilidad</h2>
                                                    <p className="boldMedium"></p>
                                                </div>
                                                <ul>
                                                    <li>
                                                        <Link href='/corporativo/sostenibilidad' onClick={handleCloseMenu}>Sostenibilidad</Link>
                                                    </li>
                                                    {/* <li>
                                                    <Link href='/corporativo/sostenibilidad/ciclo-de-vida' onClick={handleCloseMenu}>Ciclo de Vida</Link>
                                                </li> */}
                                                    <li>
                                                        <Link href='/corporativo/sostenibilidad/las-latas' onClick={handleCloseMenu}>Las Latas</Link>
                                                    </li>
                                                    <li>
                                                        <Link href='/corporativo/sostenibilidad/lactea' onClick={handleCloseMenu}>Lactea</Link>
                                                    </li>
                                                </ul>
                                            </div>
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
                                            <Link href='/quienes-somos' onClick={handleCloseMenu}>Gloria</Link>
                                            <Link href='/bonle' onClick={handleCloseMenu}>Bonl&eacute;</Link>
                                            <Link href='/pro' onClick={handleCloseMenu}>Pro</Link>
                                            <Link href='/actibio' onClick={handleCloseMenu}>ActiBio</Link>
                                            <Link href='/batti-mix' onClick={handleCloseMenu}>Batti mix</Link>
                                        </div>
                                    </div>
                                    <Link href='/contacto'>Contacto</Link>
                                </nav>
                                <div className={styles.footerContainer}>
                                    <div>
                                        <div className={styles.item}>
                                            <Image src='/call.svg' className={styles.iconPhone} width="23" height='20' alt='0800-1-84441' />
                                            <div>
                                                <h2>0800-1-4441</h2>
                                                <p>De lunes a viernes de 8:00 am a 6:00 pm, sábado de 8:00 am a 12:00 pm</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={styles.item}>
                                            <Image src='/mail.svg' className={styles.iconMail} width="20" height='16' alt='contactcenterinforma@gloria.com.pe' />
                                            <div>
                                                <a href="mailto:contactcenterinforma@gloria.com.pe">contactcenterinforma@gloria.com.pe</a>
                                                <p>De lunes a viernes de 8:00 am a 4:00 pm, sábado de 8:00 am a 11:00 am</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className={styles.eticaContainer}>
                                        <div>
                                            <a href="https://www.gloriateescucha.com/" target='_blank'>
                                                <Image src="/etica.svg" width={54} height={44} alt='Gloria' />
                                            </a>
                                        </div>
                                        <div>
                                            <a href="https://www.gloriateescucha.com/" target='_blank'>
                                                <h4>LÍNEA ÉTICA</h4>
                                                <h5>Gloria te escucha</h5>
                                            </a>
                                        </div>
                                    </div> */}
                                    <div className={`${styles.cierreFooter}`}>
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
                                        <div className={styles.LegalBox}>
                                            <Link href='/terminos-y-condiciones' >Términos y condiciones</Link>
                                            <Link href='/politica-de-tratamiento-de-datos'>Política de tratamiento de datos</Link>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className={styles.bgCurva}>
                                <Image src='/curvaPC.svg' width="155" height='880' alt='' />
                            </div>
                            <div className={styles.bgContainer}>
                                <Image src='/bgMenu.webp' width="1796" height='2360' alt='¡Comienza un nuevo regreso a clases! :: Detrás de un niño volviendo al cole, hay una mamá y papá dándolo todo. Conoce la nueva campaña de Gloria.' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar
