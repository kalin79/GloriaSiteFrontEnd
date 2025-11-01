'use client';
import { useEffect, useRef } from 'react';
import Player from '@vimeo/player';
import Image from 'next/image';

// import Link from 'next/link'
// import HtmlSafeRender from '@/components/HtmlSafeRender';

import styles from '@/styles/scss/corporativo.module.scss';
const EnergiaLimpia = () => {
    const videoRef = useRef<HTMLDivElement>(null);
    const videoData = useRef(1130235015);
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
        <div className={styles.energiaContainer}>
            <div className='containerFluid'>
                <div className={styles.energiaHeader}>
                    <div>
                        <div className={styles.videoContainer}>
                            <div ref={videoRef} />
                        </div>
                    </div>
                    <div>
                        <h3>ENERGÍA LIMPIA</h3>
                        <h2>
                            Damos un paso firme hacia un futuro más sostenible incorporando
                            <span> paneles solares en nuestras operaciones</span>
                        </h2>
                        <p>
                            Aprovechamos la radiación solar para generar energía, producir de manera responsable, reducir nuestra huella de carbono y cuidar el planeta.
                        </p>
                    </div>
                </div>
                <div className={styles.energiaFooter}>
                    <div>
                        <div className={styles.iconContainer}>
                            <Image src={`/iconcasa.svg`} height={95} width={97} alt='Más de 40 establos en Arequipa' />
                        </div>
                        <div className={styles.infoContainer}>
                            <span>Más de 40 establos en Arequipa</span> y varios en Cajamarca, La Libertad y Lambayeque ya usan energía solar para enfriar la leche que luego llega
                            a tu mesa.
                        </div>
                    </div>
                    <div>
                        <div className={styles.iconContainer}>
                            <Image src={`/iconpanel.svg`} height={107} width={82} alt='Más de 40 establos en Arequipa' />
                        </div>
                        <div className={styles.infoContainer}>
                            <span>Nuestra planta en Arequipa</span> ya genera parte de su electricidad con energía solar, para la producción de derivados lácteos.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EnergiaLimpia
