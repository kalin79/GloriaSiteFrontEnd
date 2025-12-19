'use cliente';
import Image from 'next/image';
import Link from 'next/link';
// import styles from '@/styles/scss/banner.module.scss';
import { ProductInterface } from '@/interfaces/producto';
// import SanitizedHtml from '@/components/SanitizedHtml';

interface Props {
    multimediaContents: ProductInterface;
}
const Producto = ({ multimediaContents }: Props) => {

    return (
        <>
            <div className='LogoProductoHeader'>
                <Link href={`/${multimediaContents.marca?.slug}` || ''}>
                    <Image src={multimediaContents.marca?.avatar_detalle ?? '/gloria.svg'} width={121} height={84} alt='' />
                </Link>
            </div>

            {/* <div className={styles.BannerProductoContainer}>
                <div className={styles.bgFullPage}>
                    <Image src={multimediaContents.imagen_banner ?? ''} width="3280" height={1900} alt={multimediaContents.titulo ?? ''} />
                </div>
                <div className={`containerFluid ${styles.containerFluid}`}>
                    <div className={styles.gridContainer}>
                        <div>
                            <h1 className="bannerTitular"><SanitizedHtml html={multimediaContents.titulo ?? ''} /></h1>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default Producto
