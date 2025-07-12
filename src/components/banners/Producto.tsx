'use cliente';
import Image from 'next/image';

import styles from '@/styles/scss/banner.module.scss';
import { BannerInterface } from '@/interfaces/banner';

interface Props {
    multimediaContents: BannerInterface;
}
const Producto = ({ multimediaContents }: Props) => {

    return (
        <>
            <div className='LogoProductoHeader'>
                <Image src={multimediaContents.logoMarca ?? '/gloria.svg'} width={121} height={84} alt='' />
            </div>

            <div className={styles.BannerProductoContainer}>
                <div className={styles.bgFullPage}>
                    <Image src={multimediaContents.multimedia} width="3280" height={1900} alt='' />
                </div>
                <div className={`containerFluid ${styles.containerFluid}`}>
                    <div className={styles.gridContainer}>
                        <div>
                            <h1 className="bannerTitular" dangerouslySetInnerHTML={{ __html: multimediaContents.title }}></h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Producto
