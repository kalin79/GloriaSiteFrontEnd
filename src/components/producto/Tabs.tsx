'use client'
import { useState, useRef, useEffect } from "react";
import Image from 'next/image';
import { ProductInterface } from '@/interfaces/producto';
import SanitizedHtml from "@/components/SanitizedHtml";
import HtmlSafeRender from "@/components/HtmlSafeRender";
import gsap from 'gsap';
import Draggable from 'gsap/Draggable';
gsap.registerPlugin(Draggable);
import styles from '@/styles/scss/tabs.module.scss';

interface Props {
    productoData: ProductInterface;
}
const Tabs = ({ productoData }: Props) => {
    // const pathname = usePathname(); // Obtiene la ruta actual (ej: "/productos")
    // const searchParams = useSearchParams(); // Obtiene los query params (ej: "?id=123")
    const containerRef = useRef<HTMLDivElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const fullURL = typeof window !== "undefined" ? window.location.href : "";

    const [activeTab, setActiveTab] = useState(0);
    const handleShare = (socialMedia: string) => {
        let shareUrl = "";

        switch (socialMedia) {
            case "facebook":
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(fullURL)}`;
                break;
            // case "twitter":
            //     shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
            //     break;
            case "tiktok":
                shareUrl = "https://www.tiktok.com/@tuusuario"; // Cambia por tu perfil o contenido
                break;

            default:
                return;
        }

        window.open(shareUrl, "_blank", "width=600,height=400");
    };
    const handlePrint = () => {
        window.print();
    };
    useEffect(() => {
        if (containerRef.current && wrapperRef.current) {
            const tabElements = Array.from(containerRef.current.children) as HTMLElement[];
            // Calcular ancho total dinámico
            const totalWidth = tabElements.reduce((acc, el) => acc + el.offsetWidth + 30, 0); // 12 = gap
            containerRef.current.style.width = `${totalWidth}px`; // ⬅️ asignamos el ancho real

            Draggable.create(containerRef.current, {
                type: 'x',
                edgeResistance: 0.85,
                bounds: wrapperRef.current,
                inertia: true,
                dragClickables: true,
            })
        }
    }, [])
    return (
        <>
            <div className={styles.tabsContainer}>
                <div className="containerFluid">
                    <div className={styles.headerContainerMovil} ref={wrapperRef}>
                        <div className={styles.listTabs} ref={containerRef}>
                            <div
                                className={`parrafoMediano ${0 === activeTab ? styles.active : ''}`}
                                onClick={() => setActiveTab(0)}
                            >
                                DESCRIPCIÓN
                            </div>
                            <div
                                className={`parrafoMediano ${1 === activeTab ? styles.active : ''}`}
                                onClick={() => setActiveTab(1)}
                            >INGREDIENTES
                            </div>
                            <div
                                className={`parrafoMediano ${2 === activeTab ? styles.active : ''}`}
                                onClick={() => setActiveTab(2)}
                            >INFORMACIÓN NUTRICIONAL
                            </div>
                            <div
                                className={`parrafoMediano ${3 === activeTab ? styles.active : ''}`}
                                onClick={() => setActiveTab(3)}
                            >PRODUCTO CON RECETA
                            </div>
                        </div>
                    </div>
                    <div className={styles.headerContainer}>
                        <div
                            className={`parrafoMediano celesteTxt ${0 === activeTab ? styles.active : ''}`}
                            onClick={() => setActiveTab(0)}
                        >
                            DESCRIPCIÓN
                        </div>
                        <div
                            className={`parrafoMediano celesteTxt ${1 === activeTab ? styles.active : ''}`}
                            onClick={() => setActiveTab(1)}
                        >INGREDIENTES</div>
                        <div
                            className={`parrafoMediano celesteTxt ${2 === activeTab ? styles.active : ''}`}
                            onClick={() => setActiveTab(2)}
                        >INFORMACIÓN NUTRICIONAL</div>
                        <div
                            className={`parrafoMediano celesteTxt ${3 === activeTab ? styles.active : ''}`}
                            onClick={() => setActiveTab(3)}
                        >PRODUCTO CON RECETA</div>
                    </div>
                    <div className={styles.bodyContainer}>
                        {
                            (0 === activeTab) && (
                                <div className={`${0 === activeTab ? styles.activeContent : ''}`}>
                                    <div className={styles.infoBox2}>
                                        <div>
                                            <div className={styles.imageBox}>
                                                <Image src='/photo.png' fill alt="" />
                                            </div>
                                            <div className={styles.curvaV}>
                                                <Image src='/curvaM2.svg' width={440} height={120} alt="" />
                                            </div>
                                        </div>
                                        <div className={styles.spaceColumn}>
                                            <HtmlSafeRender html={productoData.descripcion ?? ''} className="parrafoMedianoPop" />
                                        </div>
                                    </div>
                                </div>
                            )
                        }

                        {
                            (1 === activeTab) && (
                                <div className={`${1 === activeTab ? styles.activeContent : ''}`}>
                                    <div className={styles.infoBox3}>
                                        <div>
                                            <h2 className="titularGrande mbot0_5">Ingredientes</h2>
                                            <HtmlSafeRender html={productoData.ingredientes ?? ''} className="parrafoMedianoPop" />
                                        </div>
                                    </div>
                                </div>
                            )
                        }

                        {
                            (2 === activeTab) && (
                                <div className={`${2 === activeTab ? styles.activeContent : ''}`}>
                                    <div className={`${styles.infoBox3} ${styles.full}`}>
                                        <HtmlSafeRender html={productoData.informacion_nutricional ?? ''} className="parrafoMedianoPop" />
                                    </div>
                                </div>
                            )
                        }

                        {
                            (3 === activeTab) && (
                                <div className={`${3 === activeTab ? styles.activeContent : ''}`}>
                                    <div className={styles.infoBox4}>
                                        <div>
                                            <div className={styles.imageBox}>
                                                <Image src='/receta.png' fill alt="" />
                                            </div>
                                            <div className={styles.curvaV}>
                                                <Image src='/curvaM2.svg' width={440} height={120} alt="" />
                                            </div>
                                        </div>
                                        <div className={styles.spaceColumn}>
                                            <div className={styles.autorBox}>
                                                <div>
                                                    <h2 className="titularGrande"><SanitizedHtml html={productoData.receta_nombre ?? ''} /></h2>
                                                    <div className={styles.autorData}>
                                                        <Image src={productoData.receta_foto_autor ?? '/chef.png'} width={52} height={52} alt="" />
                                                        <h5 className="parrafoMedianoPop"><SanitizedHtml html={productoData.receta_autor ?? ''} /></h5>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div onClick={() => handleShare("facebook")}>
                                                        <Image src='/share.svg' width={82} height={82} alt="" />
                                                        <h4 className="parrafoMedianoPop celesteTxt centerTxt">Compartir</h4>
                                                    </div>
                                                    <div onClick={handlePrint}>
                                                        <Image src='/print.svg' width={82} height={82} alt="" />
                                                        <h4 className="parrafoMedianoPop celesteTxt centerTxt">Imprimir</h4>
                                                    </div>
                                                </div>

                                            </div>
                                            <h3 className="parrafoGrande celesteTxt">Ingredientes</h3>
                                            <HtmlSafeRender html={productoData.receta_ingredientes ?? ''} className="parrafoMedianoPop" />
                                            <h3 className="parrafoGrande celesteTxt">Instrucciones</h3>
                                            <HtmlSafeRender html={productoData.receta_instrucciones ?? ''} className="parrafoMedianoPop" />
                                            <h3 className="parrafoGrande celesteTxt">Información nutricional</h3>
                                            <div className={styles.nutricionalInfocontainer}>
                                                {
                                                    Array.isArray(productoData.receta_informacion_nutricional) &&
                                                    productoData.receta_informacion_nutricional?.map((item, index) => {
                                                        const info = item as { nutriente: string; valor: number };
                                                        return (
                                                            <div key={index}>
                                                                <h2 className="titularMediano fontLight centerTxt">{info.valor}</h2>
                                                                <p className="parrafoMediano celesteTxt centerTxt">{info.nutriente}</p>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default Tabs
