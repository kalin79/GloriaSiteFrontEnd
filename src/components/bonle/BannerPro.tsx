'use client';
import Image from 'next/image';
import styles from '@/styles/scss/marcabonle.module.scss';
const BannerPro = () => {
    return (
        <div className={styles.bannerFull}>
            <Image src='/fotopromo.webp' width={2460} height={1383} alt='Banner Pro' />
        </div>
    )
}

export default BannerPro
