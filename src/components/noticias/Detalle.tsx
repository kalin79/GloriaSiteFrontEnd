'use client';
import { useEffect, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';
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
    const pathname = usePathname();
    const [url, setUrl] = useState('');
    // Construir URL completa del sitio
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setUrl(window.location.origin + pathname);
        }
    }, [pathname]);
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
    // Funciones para compartir
    const compartirLinkedIn = () => {
        const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        window.open(shareUrl, '_blank', 'noopener,noreferrer');
    };

    const compartirFacebook = () => {
        const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        window.open(shareUrl, '_blank', 'noopener,noreferrer');
    };

    const compartirInstagram = () => {
        // ⚠️ Instagram no permite compartir directamente una URL desde web.
        // Lo más cercano es copiar el enlace para que el usuario lo publique manualmente.
        navigator.clipboard.writeText(url);
        alert('El enlace se copió al portapapeles. Puedes pegarlo en tu historia o publicación de Instagram.');
    };
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
                        <div className={styles.redesContainerFooter}>

                            <p>Comparte esta noticia:</p>
                            <div>
                                <button onClick={compartirLinkedIn}>
                                    <Image src='/share1.svg' width={32} height={32} alt='LinkedIn' />
                                </button>
                                <button onClick={compartirInstagram}>
                                    <Image src='/share2.svg' width={32} height={32} alt='LinkedIn' />
                                </button>
                                <button onClick={compartirFacebook}>
                                    <Image src='/share3.svg' width={32} height={32} alt='LinkedIn' />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detalle
