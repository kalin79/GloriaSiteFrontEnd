'use client';
import Image from 'next/image';

import { BannerInterface } from '@/interfaces/banner';
import styles from '@/styles/scss/popup.module.scss';

interface Props {
    videoData: BannerInterface,
    onClose: () => void
}
const Video = ({ videoData, onClose }: Props) => {
    return (
        <div className={styles.popUpContainer}>
            <div className='containerFluid'>
                <div className={styles.viewContainerVideo}>
                    <button
                        onClick={onClose}
                        className={styles.buttonCloseContainer}
                        aria-label="Cerrar"
                    >
                        <Image src="/close.svg" width={58} height={54} alt='' />
                    </button>
                    <video width="100%" height="100%"
                        autoPlay // Reproducir automáticamente
                        controls={true} // Ocultar controles
                    >
                        <source src={videoData.multimedia} type="video/mp4" />
                        Tu navegador no soporta la etiqueta de video.
                    </video>
                </div>
            </div>
        </div>
    )
}

export default Video
