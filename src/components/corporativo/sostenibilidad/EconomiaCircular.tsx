'use client';
// import { useEffect, useRef } from 'react';
// import Player from '@vimeo/player';
import Image from 'next/image';

// import Link from 'next/link'
// import HtmlSafeRender from '@/components/HtmlSafeRender';

import styles from '@/styles/scss/corporativo.module.scss';
const EconomiaCircular = () => {
    return (
        <div className={styles.economiaContainer}>
            <div className='containerFluid'>
                <div className={styles.gridContainer}>
                    <div>
                        <div className={styles.imgContainer}>
                            <Image src={`/eco.webp`} height={915} width={780} alt='Cada vez más cerca de nuestra meta: Cero Residuos' />
                        </div>
                    </div>
                    <div>
                        <h3>ECONOMÍA CIRCULAR</h3>
                        <h2>
                            Cada vez más cerca de nuestra meta: <span>Cero Residuos</span>
                        </h2>
                        <p>
                            El 90% de los residuos de nuestras plantas no se desecha:
                            se transforma. Cartón, metales, madera y plásticos encuentran
                            una segunda vida en nuevas industrias.
                            Gracias a una segregación responsable, entregamos estos
                            materiales a Empresas Operadoras de Residuos (EOR) certificadas,
                            asegurando trazabilidad y un manejo con propósito.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EconomiaCircular
