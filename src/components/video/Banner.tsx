"use client";
import styles from '@/styles/scss/video.module.scss';

const Banner = () => {
    return (
        <>
            <div className={styles.videoFullPage}>
                <video width="100%" height="100%"
                    autoPlay // Reproducir automáticamente
                    loop    // (Opcional) Repetir el video en bucle
                    controls={false} // Ocultar controles
                    muted
                    playsInline
                >
                    <source src="/videocorto.mp4" type="video/mp4" />
                    Tu navegador no soporta la etiqueta de video.
                </video>
            </div>
        </>
    );
}

export default Banner
