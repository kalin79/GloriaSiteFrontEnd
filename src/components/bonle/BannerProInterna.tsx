'use client';
import { ProductInterface } from '@/interfaces/producto';
import Image from 'next/image';
import styles from '@/styles/scss/marcapro.module.scss';
interface Props {
    productoData: ProductInterface;
}

const BannerPro = ({ productoData }: Props) => {
    return (
        <div className={styles.bannerFull}>
            {
                (productoData.categoria?.id === 19) ? (
                    <Image src={'/proB1.webp'} width={3280} height={1480} alt='Banner Pro' />
                ) : (
                    <Image src={'/proB2.webp'} width={3280} height={1480} alt='Banner Pro' />
                )
            }

        </div>
    )
}

export default BannerPro
