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
            <div className='LogoProductoHeader Pro'>
                <Link href={`/${multimediaContents.marca?.slug}` || ''}>
                    <Image src={multimediaContents.marca?.avatar_detalle ?? '/gloria.svg'} width={121} height={84} alt='' />
                </Link>
            </div>
        </>
    )
}

export default Producto
