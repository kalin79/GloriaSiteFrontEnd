'use client';
// import { useEffect, useRef } from 'react';
// import Player from '@vimeo/player';
import Image from 'next/image';

// import Link from 'next/link'
// import HtmlSafeRender from '@/components/HtmlSafeRender';

import styles from '@/styles/scss/corporativo.module.scss';
const Lactea = () => {
    return (
        <div className={styles.economiaContainer}>
            <div className='containerFluid'>
                <div className={styles.gridContainer}>
                    <div>
                        <div className={styles.imgContainer}>
                            <Image src={`/flactea.webp`} height={915} width={780} alt='Cada vez más cerca de nuestra meta: Cero Residuos' />
                        </div>
                    </div>
                    <div>
                        <h3>SOSTENIBILIDAD LÁCTEA</h3>
                        <h2>
                            Comprometidos con una <span>producción láctea responsable</span>
                        </h2>
                        <p>
                            Somos parte del Marco de Sostenibilidad Láctea (DSF), una iniciativa global que impulsa buenas prácticas en toda la cadena de valor del sector. A través de este compromiso, reportamos anualmente nuestros avances en temas como reducción de emisiones, uso eficiente del agua, manejo del suelo, bienestar animal, condiciones laborales y calidad del producto.
                        </p>
                        <h4>
                            Esto significa que cada vaso de leche que llega a tu mesa ha sido producido de forma responsable, respetando a la naturaleza, a las personas y a los animales.
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Lactea
