'use client';
import Image from 'next/image';
import styles from '@/styles/scss/marcabonle.module.scss';
const BannerPro = () => {
    return (
        <div className={styles.bannerFull}>
            <Image src='/bb1.webp' width={3280} height={1480} alt='Banner Pro' />
        </div>
    )
}

export default BannerPro
