'use client'
import { useState, useRef, useEffect } from "react";
import { ProductInterface } from '@/interfaces/producto';
import SanitizedHtml from "@/components/SanitizedHtml";
import HtmlSafeRender from "@/components/HtmlSafeRender";
import gsap from 'gsap';
import Draggable from 'gsap/Draggable';
import Player from '@vimeo/player';

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
    const videoRef = useRef<HTMLDivElement | null>(null);
    const [activeTab, setActiveTab] = useState(0);


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


    useEffect(() => {
        if (activeTab !== 3) return;
        if (!videoRef.current || !productoData?.receta_autor) return;

        const player = new Player(videoRef.current, {
            id: Number(productoData.receta_autor),
            autoplay: false,     // (opcional)
            muted: false,        // (opcional)
            loop: false,         // (opcional)
            responsive: true,
            controls: true,      // ✅ Muestra los controles de Vimeo
        });

        // Limpieza
        return () => {
            player.unload().catch(console.error);
        };
    }, [activeTab, productoData?.receta_autor]);
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
                        {
                            productoData.receta_nombre && productoData.receta_nombre != '' && (
                                <div
                                    className={`parrafoMediano celesteTxt ${3 === activeTab ? styles.active : ''}`}
                                    onClick={() => setActiveTab(3)}
                                >PRODUCTO CON RECETA</div>
                            )
                        }

                    </div>
                    <div className={styles.bodyContainer}>
                        {
                            (0 === activeTab) && (
                                <div className={`${0 === activeTab ? styles.activeContent : ''}`}>
                                    <div className={styles.infoBox2}>
                                        <div>
                                            <HtmlSafeRender html={productoData.descripcion ?? ''} className="contenidoHTML" />
                                        </div>
                                    </div>
                                </div>
                            )
                        }

                        {
                            (1 === activeTab) && (
                                <div className={`${1 === activeTab ? styles.activeContent : ''}`}>
                                    <div className={styles.infoBox2}>
                                        <div>
                                            <HtmlSafeRender html={productoData.ingredientes ?? ''} className="contenidoHTML" />
                                        </div>
                                    </div>
                                </div>
                            )
                        }

                        {
                            (2 === activeTab) && (
                                <div className={`${2 === activeTab ? styles.activeContent : ''}`}>
                                    <div className={`${styles.infoBox2}`}>
                                        <HtmlSafeRender html={productoData.informacion_nutricional ?? ''} className="contenidoHTML" />
                                    </div>
                                </div>
                            )
                        }

                        {
                            (3 === activeTab) && (
                                <div className={`${3 === activeTab ? styles.activeContent : ''}`}>
                                    <div className={styles.infoBox2}>
                                        <div className={styles.recetasContainer}>
                                            <div className={styles.videoFullPage}>
                                                <div ref={videoRef} />
                                            </div>
                                            <h2 className={styles.titularReceta}><SanitizedHtml html={productoData.receta_nombre ?? ''} /></h2>
                                            <div className={styles.viewRecetaPanel}>
                                                <HtmlSafeRender html={productoData.receta_ingredientes ?? ''} className="contenidoHTML" />
                                                <HtmlSafeRender html={productoData.receta_instrucciones ?? ''} className="contenidoHTML" />
                                            </div>

                                            <h3 className={styles.subtituloReceta}>Información nutricional</h3>
                                            <div className={styles.nutricionalInfocontainer}>
                                                {
                                                    Array.isArray(productoData.receta_informacion_nutricional) &&
                                                    productoData.receta_informacion_nutricional?.map((item, index) => {
                                                        const info = item as { nutriente: string; valor: number };
                                                        return (
                                                            <div key={index}>
                                                                <h2>{info.valor}</h2>
                                                                <p>{info.nutriente}</p>
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
