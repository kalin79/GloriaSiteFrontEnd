'use client';
import { useEffect, useRef } from 'react';
import Player from '@vimeo/player';
import Image from 'next/image';
import { VideosHomeInterface } from '@/interfaces/marca';
import SanitizedHtml from '@/components/SanitizedHtml';
import Link from 'next/link';
interface Props {
    videoData: VideosHomeInterface;
    isVisible: boolean;
    isHovered: boolean;
    tipo: string;
}

const PreviewVideo = ({ videoData, isVisible, isHovered, tipo }: Props) => {
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
                console.log('entro');
                if (placeholderPopupRef.current) {
                    setTimeout(() => {
                        placeholderPopupRef.current!.style.opacity = '0';
                        placeholderPopupRef.current!.style.display = 'none';
                    }, 500);
                }
            });

            playerPopUp.on('ended', async () => {
                console.log('entro')
                console.log(placeholderPopupRef.current)
                if (placeholderPopupRef.current) {
                    setTimeout(() => {
                        placeholderPopupRef.current!.style.display = 'block';
                        placeholderPopupRef.current!.style.opacity = '1';
                    }, 50);
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
            <Link href={`/${videoData.marca?.slug}/${tipo}/${videoData.slug}` || ''}>
                <div className={`bodyVideoContent`}>
                    <div className='imgVideoPreivew' ref={placeholderPopupRef}>
                        <Image
                            src={videoData.image || ''}
                            alt={videoData.title_large || ''}
                            width={320}
                            height={180}
                        />
                    </div>

                    <div ref={videoRefPopUp} className={`playerPopUp`} />



                    <h3 className='titularVideoPopup'>
                        <SanitizedHtml html={videoData.title_large ?? ''} />
                    </h3>
                </div>
                <div className={`footerVideoContent`}>
                    <Image src={'/play.svg'} width={42} height={42} alt='' />
                </div>
            </Link>
        </div>
    );
};

export default PreviewVideo;
