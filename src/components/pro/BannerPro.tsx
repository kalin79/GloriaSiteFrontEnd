'use client';
import Image from 'next/image';
import styles from '@/styles/scss/marcapro.module.scss';
const BannerPro = () => {
    return (
        <div className={styles.bannerFull}>
            <Image src='/banner.webp' width={3280} height={1480} alt='Banner Pro' />
        </div>
    )
}

export default BannerPro
