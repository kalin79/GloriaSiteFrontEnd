'use client';
import { useEffect, useRef } from 'react';
import Player from '@vimeo/player';
import Image from 'next/image';
import { VideoInterfaceAux } from '@/interfaces/video';
import SanitizedHtml from '@/components/SanitizedHtml';
import Link from 'next/link';
interface Props {
    videoData: VideoInterfaceAux;
    isVisible: boolean;
    isHovered: boolean;
    tipo: string;
}

const PreviewVideoHome = ({ videoData, isVisible, isHovered, tipo }: Props) => {
    // const [isReady, setIsReady] = useState(false);
    const videoRefPopUp = useRef<HTMLDivElement>(null);
    const playerRefPopUp = useRef<Player | null>(null);
    const placeholderPopupRef = useRef<HTMLImageElement>(null);
    useEffect(() => {
        if (!isVisible || !isHovered) {
            // Si no está visible o no hay hover, liberar el player
            if (playerRefPopUp.current) {
                playerRefPopUp.current.unload().catch(console.error);
                playerRefPopUp.current = null;
            }
            return;
        }

        // Verificación extra para evitar WeakMap error
        if (!videoRefPopUp.current) {
            console.warn('videoRefPopUp no está listo todavía');
            return;
        }

        // Montar el player solo si está visible + hover
        if (videoRefPopUp.current) {
            const playerPopUp = new Player(videoRefPopUp.current, {
                id: Number(videoData.previsualizacion_video),
                autoplay: true,
                muted: true,
                background: true,
                playsinline: true,
                controls: false,
                loop: false, // 
            });

            // Cuando el video está cargado
            playerPopUp.on("play", () => {
                if (placeholderPopupRef.current) {
                    const timeout = setTimeout(() => {
                        if (placeholderPopupRef.current) { // 👈 Verificación dentro del timeout
                            placeholderPopupRef.current!.style.opacity = '0';
                            placeholderPopupRef.current!.style.display = 'none';
                        }
                    }, 500);
                    return () => clearTimeout(timeout); // 👈 Limpieza por si se desmonta el componente
                }
            });

            playerPopUp.on('ended', async () => {
                if (placeholderPopupRef.current) {
                    const timeout = setTimeout(() => {
                        if (placeholderPopupRef.current) { // 👈 Verificación dentro del timeout
                            placeholderPopupRef.current!.style.display = 'block';
                            placeholderPopupRef.current!.style.opacity = '1';
                        }
                    }, 50);
                    return () => clearTimeout(timeout); // 👈 Limpieza por si se desmonta el componente
                }
            })

            playerRefPopUp.current = playerPopUp;

            playerPopUp.play().catch(() => {
                console.warn('Autoplay bloqueado');
            });
        }

        return () => {
            if (playerRefPopUp.current) {
                playerRefPopUp.current.unload().catch(console.error);
                playerRefPopUp.current = null;
            }
        };
    }, [isVisible, isHovered, videoData.previsualizacion_video]);

    return (
        <div className={`previewVideoContent`}>
            <Link href={`/${videoData.marca_slug}/${tipo}/${videoData.slug}` || ''}>
                <div className={`bodyVideoContent`}>
                    <div className='imgVideoPreivew' ref={placeholderPopupRef}>
                        <Image
                            src={videoData.image || ''}
                            alt={videoData.title || ''}
                            width={320}
                            height={180}
                        />
                    </div>

                    <div ref={videoRefPopUp} className={`playerPopUp`} />



                    <h3 className='titularVideoPopup'>
                        <SanitizedHtml html={videoData.title ?? ''} />
                    </h3>
                </div>
                <div className={`footerVideoContent`}>
                    <Image src={'/play.svg'} width={42} height={42} alt='' />
                </div>
            </Link>
        </div>
    );
};

export default PreviewVideoHome;
