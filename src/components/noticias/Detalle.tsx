'use client';
import { useEffect, useRef } from 'react';
import Player from '@vimeo/player';
import Image from 'next/image';
import styles from '@/styles/scss/noticias.module.scss';
import { NoticiaInterface } from '@/interfaces/noticia';
import HtmlSafeRender from '@/components/HtmlSafeRender';
import SanitizedHtml from '@/components/SanitizedHtml';
interface Props {
    dataNoticia: NoticiaInterface;
}
const Detalle = ({ dataNoticia }: Props) => {
    const videoRef = useRef<HTMLDivElement>(null);
    const videoData = useRef(dataNoticia.video);
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
                            <HtmlSafeRender html={dataNoticia.contenido} />
                        </div>
                        {
                            (dataNoticia.autor && dataNoticia.autor.nombre?.trim() != '') && (
                                <div className={`${styles.autorContainerNoticia} autorContainerNoticia`}>
                                    <div>
                                        <Image src={`/comillas.svg`} height={86} width={85} alt='' />
                                    </div>
                                    <div>
                                        <h2>
                                            <SanitizedHtml html={dataNoticia.autor.descripcion || ''} />
                                        </h2>
                                        <div className={styles.viewAutorContent}>
                                            <div className={styles.imgAutor}>
                                                {
                                                    (dataNoticia.autor && dataNoticia.autor.imagen) && (
                                                        <Image src={dataNoticia.autor.imagen} height={90} width={90} alt='' />
                                                    )
                                                }

                                            </div>
                                            <div className={styles.infoAutor}>
                                                <h3> <SanitizedHtml html={dataNoticia.autor.nombre || ''} /></h3>
                                                <h4> <SanitizedHtml html={dataNoticia.autor.cargo || ''} /></h4>
                                                <div className={styles.redesContainer}>
                                                    <a href={dataNoticia.autor.linkedin || '#'} target='_blank'>
                                                        <Image src={`/in.svg`} height={19} width={19} alt='' />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }

                        <div className={`descripcionMainContainer`}>
                            <HtmlSafeRender html={dataNoticia.descripcion_2 || ''} />
                        </div>
                        {
                            (dataNoticia.autor && dataNoticia.video?.trim() != null) && (
                                <div className={styles.videoContent} ref={videoRef}></div>
                            )
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detalle
