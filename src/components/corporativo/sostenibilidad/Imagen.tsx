'use client';
import Image from 'next/image';
import styles from '@/styles/scss/corporativo.module.scss';

const Imagen = () => {
    return (
        <div className={styles.imgSostenibilidadContainer}>
            <Image src="/imgSos2.webp" width={3280} height={1324} alt='' />
        </div>
    )
}

export default Imagen
