'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
// import Link from 'next/link'
import HtmlSafeRender from '@/components/HtmlSafeRender';
import gsap from 'gsap';
import Draggable from 'gsap/Draggable';
gsap.registerPlugin(Draggable);
import styles from '@/styles/scss/corporativo.module.scss';

const CicloVida = () => {
    const [btnActive, setBtnActive] = useState(0);
    const contentRef = useRef<HTMLDivElement | null>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const plantaData = [
        {
            img: '/vaca11.svg',
            descripcion: `<h2>
            Apoyamos la sostenibilidad agropecuaria de más de 19,000 ganaderos,  capacitándolos en el buen uso de la tierra, el cuidado del agua y la producción responsable de alimentos. 
            </h2>
                                <p>
                                Además, impulsamos prácticas sostenibles como el uso de energía solar en nuestros centros de acopio, el aseguramiento de la cadena de frío desde el ordeño hasta la planta, y la transformación del estiércol del ganado en biogás, una energía limpia que convierte lo que antes era un desecho en una fuente que puede reemplazar al gas o la electricidad tradicional.
                                </p>
                                `
        },
        {
            img: '/ciclo2.svg',
            descripcion: `<h2>
            Cambiamos toda nuestra matriz energética de petróleo a gas natural, el combustible fósil más limpio del mundo.
            </h2>
                                <p>
                                Además, contamos con la única planta de cogeneración en el sector de alimentos en el Perú, que nos permite producir al mismo tiempo electricidad y calor a partir de una sola fuente de energía. Gracias a ello, logramos reducir en 40% nuestras emisiones de gases de efecto invernadero cada año.  
                                </p>`
        },
        {
            img: '/ciclo3.svg',
            descripcion: `<h2>
                Transportamos nuestros productos a todo el país optimizando las rutas de distribución para reducir la emisión de gases de efecto invernadero.
            </h2>
                                <p>
                                Lo hacemos a través de un software de planificación dinámica, que nos permite diseñar caminos más eficientes, recorrer menos kilómetros y aprovechar al máximo cada uno de nuestros camiones.
                                </p>
                                `
        },

        {
            img: '/ciclo4.svg',
            descripcion: `<h2>
            Gracias a una cadena de frío eficiente y nuestra tecnología aséptica, llevamos frescura y calidad a cada rincón del país.
            </h2>
                                <p>
                                Nuestros envases, diseñados con eficiencia y sostenibilidad, aseguran que cada producto llegue a tu mesa tan nutritivo y delicioso como el primer día. 
                                </p>`
        },

    ]
    // Animación GSAP al cambiar de planta
    useEffect(() => {
        if (!contentRef.current) return;

        const tl = gsap.timeline();

        tl.fromTo(
            contentRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
        );

        return () => {
            tl.kill();
        };
    }, [btnActive]);

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
        <div className={styles.cicloVidaContainer}>
            <div className='containerFluid'>
                <div className={styles.plantaHeaderContainer}>
                    <div>
                        <h3>CICLO DE VIDA</h3>
                        <h2>
                            Conoce nuestras principales <span>prácticas sostenibles en cada fase de producción</span>
                        </h2>
                    </div>
                </div>
                <div className={styles.tabsMovil} ref={wrapperRef}>
                    <div className={styles.listTabs} ref={containerRef}>
                        <button onClick={() => setBtnActive(0)} className={btnActive === 0 ? styles.active : ''}>1. Recolección</button>
                        <button onClick={() => setBtnActive(1)} className={btnActive === 1 ? styles.active : ''}>2. Producción y envasado</button>
                        <button onClick={() => setBtnActive(2)} className={btnActive === 2 ? styles.active : ''}>3. Distribución</button>
                        <button onClick={() => setBtnActive(3)} className={btnActive === 3 ? styles.active : ''}>4. ¡A tu mesa!</button>
                    </div>
                </div>
                <div className={styles.tabsContainer}>
                    <div>
                        <button onClick={() => setBtnActive(0)} className={btnActive === 0 ? styles.active : ''}>1. Recolección</button>
                        <button onClick={() => setBtnActive(1)} className={btnActive === 1 ? styles.active : ''}>2. Producción y envasado</button>
                        <button onClick={() => setBtnActive(2)} className={btnActive === 2 ? styles.active : ''}>3. Distribución</button>
                        <button onClick={() => setBtnActive(3)} className={btnActive === 3 ? styles.active : ''}>4. ¡A tu mesa!</button>
                    </div>
                    <div>
                        <div className={styles.infoTabContainer} ref={contentRef}>
                            <div className={styles.bannerContainer}>
                                <Image
                                    src={`${plantaData[btnActive].img}`}
                                    width={245}
                                    height={210}
                                    alt=''
                                    unoptimized
                                />
                            </div>
                            <div className={styles.mantaContainer}>
                                <HtmlSafeRender html={plantaData[btnActive].descripcion} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CicloVida
