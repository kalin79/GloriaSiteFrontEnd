'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
// import Link from 'next/link'
import styles from '@/styles/scss/somos.module.scss';
gsap.registerPlugin(Draggable);
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
    return (
        <div className={styles.LineaContainer}>
            <div className='containerFluid'>
                <div className={styles.gridContainer}>
                    <div className={styles.headerLine}>
                        <h2>LÍNEA DE TIEMPO</h2>
                        <h3>
                            Más de 83 años de <br />
                            <span>historia y compromiso</span>
                        </h3>
                        <p>
                            Explora nuestra línea de tiempo y conoce los momentos que han marcado nuestro camino.
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
                </div>
            </div>
        </div>
    )
}

export default LineaTiempo
