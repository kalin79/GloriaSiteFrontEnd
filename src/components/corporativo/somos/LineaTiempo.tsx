'use client';
// import { useEffect, useRef, useState } from 'react';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
// import Link from 'next/link'
import styles from '@/styles/scss/somos.module.scss';
gsap.registerPlugin(Draggable);
// interface Area {
//     id: string;
//     x: number;
//     y: number;
//     r: number;
//     label: string;
// }
const LineaTiempo = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);
    useEffect(() => {
        // Registrar el plugin Draggable
        gsap.registerPlugin(Draggable);

        const container = containerRef.current;
        const image = imageRef.current;

        if (!container || !image) return;

        // Obtener dimensiones
        const containerRect = container.getBoundingClientRect();
        const imageRect = image.getBoundingClientRect();

        // Límites para el movimiento
        const minX = containerRect.width - imageRect.width;
        const minY = containerRect.height - imageRect.height;
        const maxX = 0;
        const maxY = 0;
        const step = 100; // Distancia de movimiento por flecha

        // Inicializar Draggable
        Draggable.create(image, {
            bounds: {
                minX,
                minY,
                maxX,
                maxY,
            },
            type: 'x,y',
            inertia: true, // Suaviza el movimiento al soltar
            onDrag: function () {
                gsap.set(image, {
                    x: this.x,
                    y: this.y,
                });
            },
        });

        // Controles de flechas
        const moveLeft = () => {
            let newX = Number(gsap.getProperty(image, 'x')) + step;
            if (newX > maxX) newX = maxX;
            gsap.to(image, { x: newX, duration: 0.3 });
        };

        const moveRight = () => {
            let newX = Number(gsap.getProperty(image, 'x')) - step;
            if (newX < minX) newX = minX;
            gsap.to(image, { x: newX, duration: 0.3 });
        };

        const moveUp = () => {
            let newY = Number(gsap.getProperty(image, 'y')) + step;
            if (newY > maxY) newY = maxY;
            gsap.to(image, { y: newY, duration: 0.3 });
        };

        const moveDown = () => {
            let newY = Number(gsap.getProperty(image, 'y')) - step;
            if (newY < minY) newY = minY;
            gsap.to(image, { y: newY, duration: 0.3 });
        };

        // Asignar eventos a los botones
        const leftButton = document.getElementById('left');
        const rightButton = document.getElementById('right');
        const upButton = document.getElementById('up');
        const downButton = document.getElementById('down');

        leftButton?.addEventListener('click', moveLeft);
        rightButton?.addEventListener('click', moveRight);
        upButton?.addEventListener('click', moveUp);
        downButton?.addEventListener('click', moveDown);

        // Limpiar eventos al desmontar
        return () => {
            leftButton?.removeEventListener('click', moveLeft);
            rightButton?.removeEventListener('click', moveRight);
            upButton?.removeEventListener('click', moveUp);
            downButton?.removeEventListener('click', moveDown);
        };
    }, []);

    // const [activeArea, setActiveArea] = useState<Area | null>(null);

    // const areas: Area[] = [
    //     { id: 'area1', x: 345, y: 411, r: 61, label: 'Punto 1' },
    //     { id: 'area2', x: 550, y: 449, r: 61, label: 'Punto 2' },
    // ];

    // const handleClick = (area: Area) => {
    //     setActiveArea(area);
    // };

    // const handleClose = () => {
    //     setActiveArea(null);
    // };
    return (
        <div className={styles.LineaContainer}>
            <div className='containerFluid'>
                <div className={styles.gridContainer}>
                    <div className={styles.headerLine}>
                        <h2>LÍNEA DE TIEMPO</h2>
                        <h3>
                            Más de 83 años de <br />
                            <span>creciendo juntos</span>
                        </h3>
                        <p>
                            Acompáñanos a revivir los momentos que han marcado nuestra historia. Desde nuestro nacimiento en Arequipa hasta nuestra consolidación en el mundo.
                        </p>
                    </div>
                    <div>
                        <div className={styles.carruselLineaContainer} ref={containerRef}>

                            <Image
                                ref={imageRef}
                                className={styles.imageBox}
                                src="/linea.svg"
                                alt="Imagen grande"
                                width={4096}
                                height={857}
                                priority
                            />
                            <div className={styles.controls}>
                                <button id="left"><Image src="/arrowL.svg" width={30} height={60} alt='' /></button>
                                <button id="right"><Image src="/arrowL.svg" width={30} height={60} alt='' /></button>
                            </div>
                        </div>
                    </div>
                    {/* <div>
                        <div className={styles.carruselLineaContainer} ref={containerRef}>

                            <div className={styles.viewLinePc} ref={imageRef}>
                                <Image
                                    src="/onda2.svg"
                                    alt="Mapa interactivo"
                                    width={2643}
                                    height={249}
                                    priority
                                />
                                {areas.map((area) => (
                                    <button
                                        key={area.id}
                                        className="absolute bg-blue-500/20 hover:bg-blue-500/30 rounded-full border border-blue-400 transition"
                                        style={{
                                            top: `${area.y - area.r}px`,
                                            left: `${area.x - area.r}px`,
                                            width: `${area.r * 2}px`,
                                            height: `${area.r * 2}px`,
                                        }}
                                        onClick={() => handleClick(area)}
                                    >
                                    </button>
                                ))}
                                {activeArea && (
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                                        <div className="bg-white rounded-2xl p-6 shadow-xl max-w-sm">
                                            <h2 className="text-lg font-semibold mb-2">{activeArea.label}</h2>
                                            <p className="text-gray-700 mb-4">
                                                Aquí puedes mostrar información del área seleccionada, o cualquier
                                                contenido dinámico.
                                            </p>
                                            <button
                                                onClick={handleClose}
                                                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                                            >
                                                Cerrar
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className={styles.controls}>
                                <button id="left"><Image src="/arrowL.svg" width={30} height={60} alt='' /></button>
                                <button id="right"><Image src="/arrowL.svg" width={30} height={60} alt='' /></button>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default LineaTiempo
