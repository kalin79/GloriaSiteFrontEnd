'use client';
import { useEffect, useRef } from 'react';
import Player from '@vimeo/player';
import Image from 'next/image';
import styles from '@/styles/scss/noticias.module.scss';
const Detalle = () => {
    const videoRef = useRef<HTMLDivElement>(null);
    const videoData = useRef(1130404330);
    useEffect(() => {
        if (videoRef.current && videoData.current) {
            const player = new Player(videoRef.current, {
                id: Number(videoData.current),
                autoplay: false, // ✅ No inicia automáticamente
                muted: false,
                loop: false,
                controls: true, // ✅ Muestra los controles
                responsive: true,
            });

            // Opcional: ajustar a fullscreen por CSS
            player.ready().then(() => {
                player.pause(); // ✅ Asegura que empiece pausado
            });

            return () => {
                player.unload().catch(console.error);
            };
        }
    }, []);
    return (
        <div className={styles.infoContainer}>
            <div className='containerFluid contenidoNoticiasHTML'>
                <div className={styles.gridContainer}>
                    <div>
                        <div className={`descripcionMainContainer`}>
                            <h2>
                                Gloria relanza al mercado PRO, su línea de bebidas lácteas altas en proteína, ahora reforzada con nuevos productos con una alta concentración de proteínas, 0% lactosa, 0%
                                azúcares añadidos y bajo contenido de grasa.
                            </h2>
                            <p>
                                La línea está compuesta por bebidas lácteas, yogures bebibles y yogures cuchareables, todos enriquecidos con alta concentración de proteínas y nutrientes clave. Esta nueva versión de PRO consiste en dos líneas: PRO POWER, diseñada para aquellos con un mayor desgaste físico o mental, y PRO DAY, ideal para cubrir parte de los requerimientos diarios de proteína.
                            </p>
                            <div className='galeriaNoticiaDos'>
                                <div>
                                    <div className='galeriaImgContainer'>
                                        <Image src='/i1.webp' width={400} height={480} alt='' />
                                    </div>
                                    <p>
                                        PRO POWER incluye bebidas lácteas con 30 g de proteína y un yogurt cuchareable con 15 g. También contiene vitaminas B6 y B9, que ayudan al metabolismo energético.
                                    </p>
                                </div>
                                <div>
                                    <div className='galeriaImgContainer'>
                                        <Image src='/i2.webp' width={400} height={480} alt='' />
                                    </div>
                                    <p>
                                        PRO DAY ofrece bebidas lácteas y yogures bebibles con 20 g de proteína, y yogures cuchareables con avena que aportan 10 g. Ambas versiones contienen vitaminas A y D, zinc, calcio y fósforo, nutrientes clave para el sistema inmune, la salud ósea y la función muscular
                                    </p>
                                </div>
                            </div>
                            <h3>
                                Las proteínas de PRO provienen de fuentes lácteas de alto valor nutricional, lo que facilita su absorción y utilización por el cuerpo. Los beneficios principales de las proteínas son mantener y/o recuperar la masa muscular, fortalece el sistema de defensas y contribuyen a una mente activa.
                            </h3>
                        </div>
                        <div className={`${styles.autorContainerNoticia} autorContainerNoticia`}>
                            <div>
                                <Image src={`/comillas.svg`} height={86} width={85} alt='' />
                            </div>
                            <div>
                                <h2>
                                    Para nosotros, el consumidor está en el centro de todo lo que hacemos, por ello desde Gloria nuestro compromiso es alimentar el bienestar y el progreso de los peruanos. Así buscamos resaltar la importancia de consumir proteína diariamente, clave para mantener cuerpo y mente en equilibrio. Nuestras innovaciones materializan nuestra promesa de ofrecer productos que respondan a los nuevos estilos de vida y necesidades del consumidor que busca alimentarse mejor”, señaló Cristiano Sampaio, gerente general de Gloria.
                                </h2>
                                <div className={styles.viewAutorContent}>
                                    <div className={styles.imgAutor}>
                                        <Image src={`/autor2.png`} height={90} width={90} alt='' />
                                    </div>
                                    <div className={styles.infoAutor}>
                                        <h3>Cristiano Sampaio</h3>
                                        <h4>GERENTE GENERAL DE GLORIA</h4>
                                        <div className={styles.redesContainer}>
                                            <a href="" target='_blank'>
                                                <Image src={`/in.svg`} height={19} width={19} alt='' />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`descripcionMainContainer`}>
                            <p>
                                Esta propuesta se enmarca en una tendencia global en la industria alimentaria, donde la demanda por productos ricos en proteínas continúa creciendo de forma sostenida, y por tanto el aumento en la oferta de alimentos con etiquetas como “alto en proteínas” o “high protein”.
                            </p>
                            <p>
                                Con esta iniciativa, Gloria renueva su compromiso de ofrecer productos accesibles e innovadores que impulsen una vida activa y saludable.
                            </p>
                        </div>
                        <div className={styles.videoContent} ref={videoRef}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detalle
