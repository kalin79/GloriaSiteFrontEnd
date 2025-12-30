'use client';
// import { useEffect, useRef } from 'react';
// import Player from '@vimeo/player';
import Image from 'next/image';

// import Link from 'next/link'
// import HtmlSafeRender from '@/components/HtmlSafeRender';

import styles from '@/styles/scss/corporativo.module.scss';
const Lactea = () => {
    return (
        <div className={styles.sostenibilidadContainer}>
            <div className={styles.imgLacteaContainer}>
                <Image src={`/bgsos3.webp`} height={3280} width={1726} alt='Cada vez más cerca de nuestra meta: Cero Residuos' />
            </div>
            <div className={`containerFluid ${styles.containerFluid}`}>
                <div className={styles.gridContainer}>
                    <div className={styles.infoLactea}>
                        <h3>SOSTENIBILIDAD LÁCTEA</h3>
                        <h2>
                            Comprometidos con <br />una <span>producción láctea <br />responsable</span>
                        </h2>
                        <p>
                            Somos parte del Marco de Sostenibilidad Láctea (DSF) y <br />reportamos cada año nuestros avances en sostenibilidad, desde <br />emisiones y agua hasta bienestar animal y calidad del producto.
                        </p>
                        <h4>
                            Esto significa que cada vaso de leche que llega a tu mesa ha sido <br />producido de forma responsable, respetando a la naturaleza, a <br />las personas y a los animales.
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Lactea
