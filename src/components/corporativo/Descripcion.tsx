'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
// import Link from 'next/link'
import HtmlSafeRender from '@/components/HtmlSafeRender';
import gsap from 'gsap';
import Draggable from 'gsap/Draggable';
gsap.registerPlugin(Draggable);
import styles from '@/styles/scss/corporativo.module.scss';


const Descripcion = () => {
    const [btnActive, setBtnActive] = useState(0);
    const contentRef = useRef<HTMLDivElement | null>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const plantaData = [
        {
            img: '_planta1.webp',
            descripcion: `<h2>
                                    Operativa desde 1999, esta planta es el centro de innovación que nos permite crear, diseñar y desarrollar productos que alimentan a millones de peruanos.
                                </h2>
                                <p>
                                    No solo es la planta lechera más importante del Perú, sino también la planta de leche evaporada más grande del mundo. Aquí elaboramos, con mucha dedicación, los mejores productos: leche UHT, yogures, néctares, mantequilla, quesos y mucho más, combinando tecnología de punta con nuestro compromiso con la innovación y nutrición. Gracias a su capacidad y alcance, esta planta nos permite llevar lo mejor de Gloria a todo el país.
                                </p>
                                <h3>
                                    ¿Te gustaría visitar nuestra planta?
                                    Escríbenos a <a href="mailto:visitasplanta@gloria.com.pe" target='_blank'>visitasplanta@gloria.com.pe</a> para organizar una visita de estudiantes o universitarios.
                                </h3>`
        },
        {
            img: 'Arequipa.webp',
            descripcion: `<h2>
            Nuestra primera casa y también la primera planta con una línea aséptica en todo el país.
            </h2>
                                <p>
                                Operativa desde 1941, ha sido y es un símbolo de innovación y progreso al servicio de la nutrición peruana. Contar con la primera línea aséptica nos permitió crear productos que no necesitan refrigeración pensando en las difíciles y variadas condiciones del Perú. Hoy se elaboran productos como Yofresh, PRO y Shake, y desde el sur peruano seguimos innovando, impulsados por nuestro compromiso de mejorar la nutrición y ofrecer la mejor calidad para responder a las nuevas necesidades de todos nuestros consumidores.
                                </p>
                                <h3>
                                    ¿Te gustaría visitar nuestra planta?
                                    Escríbenos a <a href="mailto:visitasplanta@gloria.com.pe" target='_blank'>visitasplanta@gloria.com.pe</a> para organizar una visita de estudiantes o universitarios.
                                </h3>`
        },
        {
            img: 'PlantaTrujillo.webp',
            descripcion: `<h2>Nuestra planta de Trujillo, inaugurada en 2003, es un orgullo para Gloria y para todo el norte del país.</h2>
                                <p>
                                Es la planta de concentración de leche más grande de la región. Aquí recibimos la leche de mayor calidad de la zona y, bajo los más estrictos estándares de inocuidad, la transformamos en productos confiables, nutritivos y capaces de mantenerse frescos por largos periodos. Además, seguimos innovando con la próxima implementación de líneas de producción de jugos naturales y néctares, junto con el desarrollo de nuevos envases, siempre pensando en ofrecer lo mejor para las mesas del Perú.
                                </p>
                                <h3>
                                    ¿Te gustaría visitar nuestra planta?
                                    Escríbenos a <a href="mailto:visitasplanta@gloria.com.pe" target='_blank'>visitasplanta@gloria.com.pe</a> para organizar una visita de estudiantes o universitarios.
                                </h3>`
        },

        {
            img: 'Cajamarca.webp',
            descripcion: `<h2>
                Inspirados por la rica tradición cajamarquina, nuestra planta Cajamarca es un verdadero punto de encuentro entre la herencia, la cultura y la innovación
            </h2>
                                <p>
                                    Aquí, el conocimiento de los maestros queseros de la zona se une a la tecnología más avanzada para crear y perfeccionar productos que responden a las necesidades de nuestros consumidores. Cada queso envasado en esta planta nace del respeto por las raíces cajamarquinas y de nuestro compromiso con la innovación, la calidad y la nutrición peruana.
                                </p>
                                <h3>
                                    ¿Te gustaría visitar nuestra planta?
                                    Escríbenos a <a href="mailto:visitasplanta@gloria.com.pe" target='_blank'>visitasplanta@gloria.com.pe</a> para organizar una visita de estudiantes o universitarios.
                                </h3>`
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
        <div className={styles.nuestraPlantaContainer}>
            <div className='containerFluid'>
                <div className={styles.plantaHeaderContainer}>
                    <div>
                        <h3>NUESTRAS PLANTAS</h3>
                        <h2>
                            Innovación y tecnología
                            que <span>nutre el progeso</span>
                        </h2>
                    </div>
                    <div>
                        <p>
                            Cada planta es parte de nuestro compromiso con
                            la nutrición y el progreso del país.
                            Conoce donde trabajamos día a día para entregarte lo mejor.
                        </p>
                    </div>
                </div>
                <div className={styles.tabsMovil} ref={wrapperRef}>
                    <div className={styles.listTabs} ref={containerRef}>
                        <button onClick={() => setBtnActive(0)} className={btnActive === 0 ? styles.active : ''}>Planta en Lima</button>
                        <button onClick={() => setBtnActive(1)} className={btnActive === 1 ? styles.active : ''}>Planta en Arequipa</button>
                        <button onClick={() => setBtnActive(2)} className={btnActive === 2 ? styles.active : ''}>Planta en Trujillo</button>
                        <button onClick={() => setBtnActive(3)} className={btnActive === 3 ? styles.active : ''}>Planta en Cajamarca</button>
                    </div>
                </div>
                <div className={styles.tabsContainer}>
                    <div>
                        <button onClick={() => setBtnActive(0)} className={btnActive === 0 ? styles.active : ''}>Planta en Lima</button>
                        <button onClick={() => setBtnActive(1)} className={btnActive === 1 ? styles.active : ''}>Planta en Arequipa</button>
                        <button onClick={() => setBtnActive(2)} className={btnActive === 2 ? styles.active : ''}>Planta en Trujillo</button>
                        <button onClick={() => setBtnActive(3)} className={btnActive === 3 ? styles.active : ''}>Planta en Cajamarca</button>
                    </div>
                    <div>
                        <div className={styles.infoTabContainer}>
                            {/* Contenido animado con GSAP */}
                            <div className={styles.infoTabContainer} ref={contentRef}>
                                <div className={styles.bannerContainer}>
                                    <Image
                                        src={`/${plantaData[btnActive].img}`}
                                        width={1411}
                                        height={665}
                                        alt=''
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
        </div>
    )
}

export default Descripcion
