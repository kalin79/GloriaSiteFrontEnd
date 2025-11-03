'use client';
import { useEffect, useRef, useState } from 'react';
// import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
// import Link from 'next/link'
import SanitizedHtml from "@/components/SanitizedHtml";
// import HtmlSafeRender from '@/components/HtmlSafeRender';

import styles from '@/styles/scss/somos.module.scss';
gsap.registerPlugin(Draggable);
interface Area {
    id: string;
    x: number;
    y: number;
    titulo: string;
    anno: string;
    xlabel: number;
    ylabel: number;
    xp: number;
    yp: number;
    active: boolean;
    descripcion: string;
}
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

    const [activeArea, setActiveArea] = useState<Area | null>(null);

    const areas: Area[] = [
        { id: 'area1', x: 409, y: 201, titulo: 'Nuestro Origen', anno: '1941', xlabel: 354, ylabel: 116, active: true, xp: 416, yp: -49, descripcion: `La empresa General Milk Company Inc constituyó Leche Gloria S.A. en la Ciudad de Arequipa, que posteriormente sería adquirida por Carnation Company.` },
        { id: 'area2', x: 492, y: 216, titulo: 'Inicia la producción', anno: '1942', xlabel: 419, ylabel: 263, active: false, xp: 502, yp: -168, descripcion: `Se empieza a fabricar Leche Gloria, con una producción de 52 mil cajas de 48 tarros. La leche era provista por 320 ganaderos y la empresa contaba con solo 65 empleados.` },
        { id: 'area3', x: 576, y: 212, titulo: 'Planta de <br />envasado', anno: '1945', xlabel: 543, ylabel: 130, active: false, xp: 589, yp: -57, descripcion: `Se construye la primera planta evaporada de Gloria, en la ciudad de Arequipa.` },
        { id: 'area4', x: 668, y: 182, titulo: 'Garantía de <br />calidad', anno: '1968', xlabel: 623, ylabel: 233, active: false, xp: 673, yp: -156, descripcion: `El Instituto Peruano de la Leche avala el consumo de leche pasteurizada por sus beneficios a la salud, frente a la leche fresca.` },
        { id: 'area5', x: 756, y: 140, titulo: 'Innovación', anno: '1970', xlabel: 694, ylabel: 66, active: false, xp: 740, yp: 16, descripcion: `Se pone en marcha el uso de esterilizadores y evaporadores de proceso continuo, para incrementar la capacidad productiva y satisfacer la demanda nacional.` },
        { id: 'area6', x: 840, y: 96, titulo: 'Una alianza para <br />la gloria', anno: '1978', xlabel: 787, ylabel: 146, active: false, xp: 852, yp: -68, descripcion: `La empresa José Rodriguez Banda S.A. (Jorbsa) se convierte en proveedora de Gloria S.A. para el transporte nacional de sus productos.` },
        { id: 'area7', x: 920, y: 67, titulo: 'Diversificación <br />del negocio', anno: '1978', xlabel: 870, ylabel: -25, active: false, xp: 927, yp: 101, descripcion: `El acopio de leche supera los 100 millones de kilos. Gloria S.A. lanza al mercado conservas de pescado, avena y café embolsado.` },
        { id: 'area8', x: 1012, y: 56, titulo: 'El inicio de una <br />nueva etapa', anno: '1986', xlabel: 959, ylabel: 111, active: false, xp: 1018, yp: -37, descripcion: `Los hermanos arequipeños Vito y Jorge Rodriguez adquieren Gloria S.A., que pasa a ser de capital 100% peruano.` },
        { id: 'area9', x: 1097, y: 69, titulo: 'Record de acopio <br />de leche', anno: '1988', xlabel: 1028, ylabel: -16, active: false, xp: 1102, yp: 91, descripcion: `Se inicia una etapa de mejora de procesos que nos permitió impulsar el acopio de leche fresca, recolectando más de 149 millones de kilos en solo un año.` },
        { id: 'area10', x: 1182, y: 94, titulo: 'Ampliación <br />de portafolio', anno: '1993<br/>1994', xlabel: 1133, ylabel: 146, active: false, xp: 1189, yp: -91, descripcion: `Se adquieren empresas líderes en derivados lácteos, iniciando así la producción de yogurt, leche en caja, crema de leche y quesos.` },
        { id: 'area11', x: 1276, y: 131, titulo: 'Nuevas plantas <br />de acopio', anno: '1998', xlabel: 1224, ylabel: 51, active: false, xp: 1291, yp: 19, descripcion: `Inicia la operación de las plantas de acopio de leche en Cajamarca, Trujillo, Huacho y Lurín.` },
        { id: 'area12', x: 1353, y: 160, titulo: 'La planta <br />soñada', anno: '1999', xlabel: 1310, ylabel: 204, active: false, xp: 1357, yp: -129, descripcion: `Se inicia la operación de leche evaporada en la planta Huachipa. La planta de leche evaporada más grande del mundo.` },
        { id: 'area13', x: 1445, y: 187, titulo: 'Cruzando <br />fronteras', anno: '1999', xlabel: 1406, ylabel: 111, active: false, xp: 1447, yp: -40, descripcion: `Comienza la exportación de leche evaporada a Haití y a otros mercados del Caribe y Sudamérica.` },
        { id: 'area14', x: 1532, y: 200, titulo: 'Descentralizamos <br />nuestras<br/>operaciones', anno: '2004<br />2007', xlabel: 1466, ylabel: 248, active: false, xp: 1538, yp: -176, descripcion: `Inauguramos plantas de acopio en las ciudades de Lambayeque, La Libertad, Ica, Cajamarca, Huancayo, Puno, Ancash y Huancavelica. Se inauguró una planta de quesos en Tarapoto.` },
        { id: 'area15', x: 1643, y: 54, titulo: 'Compromiso con <br />el medio ambiente', anno: '2009<br />2010', xlabel: 1573, ylabel: -53, active: false, xp: 1649, yp: 102, descripcion: `Se realizó el cambio de matriz energética de petróleo a gas natural en la planta de Huachipa, convirtiéndola en una planta de emisiones limpias.` },
        { id: 'area16', x: 1705, y: 200, titulo: 'Producción de <br />yogurt y refrescos', anno: '2012', xlabel: 1638, ylabel: 252, active: false, xp: 1719, yp: -172, descripcion: `Se inauguran las plantas de yogurt y refrescos en la ciudad de Arequipa para abastecer a la región sur del país.` },
        { id: 'area17', x: 1791, y: 211, titulo: 'Leche <br />Condensada', anno: '2013', xlabel: 1746, ylabel: 133, active: false, xp: 1804, yp: -62, descripcion: `Inauguramos nuestra planta de leche condensada.` },
        { id: 'area18', x: 1879, y: 195, titulo: 'Panificadora <br />Gloria', anno: '2014', xlabel: 1832, ylabel: 243, active: false, xp: 1896, yp: -170, descripcion: `Implementamos la planta panificadora Gloria, dentro de nuestro complejo de Huachipa, donde empezamos la producción de Panetones.` },
        { id: 'area19', x: 1955, y: 163, titulo: 'Alimentando al <br />Perú', anno: '2016', xlabel: 1895, ylabel: 85, active: false, xp: 1970, yp: -10, descripcion: `Se implementa una línea de producción de leche evaporada para atender exclusivamente pensando aportar a los programas sociales.` },
        { id: 'area20', x: 2028, y: 124, titulo: 'Línea Aséptica', anno: '2019', xlabel: 1986, ylabel: 166, active: false, xp: 2047, yp: -87, descripcion: `Instalamos una línea aséptica de soplado, llenado y envasado en un ambiente cerrado y esterilizado. Esta línea garantiza que los productos mantengan sus propiedades sin el uso de preservantes ni refrigeración.` },
        { id: 'area21', x: 2092, y: 93, titulo: 'Apoyando al Perú <br />durante la <br />pandemia', anno: '2021', xlabel: 2022, ylabel: 0, active: false, xp: 2103, yp: 71, descripcion: `Fuimos reconocidos por Hombro a Hombro e INDECI como una de las empresas e instituciones que más han aportado a la lucha contra el COVID-19 en Perú.` },
        { id: 'area22', x: 2191, y: 59, titulo: 'Adquisición de <br />Soporte', anno: '2023', xlabel: 2137, ylabel: 96, active: false, xp: 2198, yp: -23, descripcion: `Se concretó la adquisición de Soprole, empresa chilena líder en lácteos.` },
        { id: 'area23', x: 2278, y: 51, titulo: 'Compra de <br />Ecuajugos', anno: '2024', xlabel: 2237, ylabel: -16, active: false, xp: 2282, yp: 90, descripcion: `Se realizó la compra de Ecuajugos, consolidando nuestra presencia en Ecuador.` },
        { id: 'area24', x: 2360, y: 58, titulo: 'Nueva imagen <br />de Gloria', anno: '2025', xlabel: 2306, ylabel: 94, active: false, xp: 2367, yp: -19, descripcion: `` },
    ];

    const handleClick = (area: Area) => {
        setActiveArea(area);
    };

    const handleClose = () => {
        setActiveArea(null);
    };
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
                    {/* <div>
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
                    </div> */}
                    <div>
                        <div className={styles.carruselLineaContainer} ref={containerRef}>

                            <div className={styles.viewLinePc} ref={imageRef}>
                                <Image
                                    src="/onda5.svg"
                                    alt="Mapa interactivo"
                                    width={2795}
                                    height={296}
                                    priority
                                />
                                {areas.map((area) => (
                                    <button
                                        key={area.id}
                                        style={{
                                            top: `${area.y}px`,
                                            left: `${area.x}px`,
                                        }}
                                        onClick={() => handleClick(area)}
                                    >
                                    </button>

                                ))}
                                {areas.map((area) => (
                                    <div
                                        key={area.id}
                                        className={`${styles.cabeceraContainer}`}
                                        style={{
                                            top: `${area.ylabel}px`,
                                            left: `${area.xlabel}px`,
                                        }}
                                        onClick={() => handleClick(area)}
                                    >
                                        <h2><SanitizedHtml html={area.anno} /></h2>
                                        <h3 className={`${area.active ? styles.active : ''}`}><SanitizedHtml html={area.titulo} /></h3>
                                    </div>

                                ))}
                                {activeArea && (
                                    <div className={styles.toolTipContainer}
                                        style={{
                                            bottom: `${activeArea.yp}px`,
                                            left: `${activeArea.xp}px`,
                                        }}
                                    >
                                        <div className={styles.pingContainer}></div>
                                        <div className={styles.toolInfo}>
                                            <p>
                                                <SanitizedHtml html={activeArea.descripcion} />
                                            </p>
                                            <button
                                                onClick={handleClose}
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LineaTiempo
