'use client';
// import Image from 'next/image'
// import Link from 'next/link'
import styles from '@/styles/scss/corporativo.module.scss';

const Descripcion = () => {
    return (
        <div className={styles.descripcionMainContainer}>
            <div className='containerFluid'>
                <div className={styles.gridContainer}>
                    <div>
                        <p>
                            Nuestro trabajo sostenido y esforzado a lo largo de casi ochenta años, nos ha ubicado entre las organizaciones más admiradas y nos ha permitido ser poseedores de la marca peruana más valiosa y de mayor recordación en nuestro país.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Descripcion
