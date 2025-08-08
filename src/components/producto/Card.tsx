'use client';
import Image from 'next/image'
import { ProductInterface } from '@/interfaces/producto';

import styles from '@/styles/scss/producto.module.scss';

interface productParameters {
    productContents: ProductInterface,
    onClick: (event: React.MouseEvent<HTMLDivElement>) => void,
}
const Card = ({ productContents, onClick }: productParameters) => {
    return (
        <div
            className={styles.cardPrduct}
            onClick={onClick}
        >
            {
                (productContents.receta_nombre) && (
                    <div className={styles.recetacontent}>
                        <Image src="/iconChef2.svg" width={42} height={40} alt='' />
                    </div>
                )
            }

            <div className={styles.bodyCardBox}>
                <Image src={productContents.imagemobile ?? '/pO1M.png'} width={656} height={858} alt={productContents.titulo ?? ''} />
            </div>
            <div className={styles.footerCardBox}>
                <h4 className=''>{productContents.titulo ?? ''}</h4>
                <h2 className='parrafoMediano celesteTxt'>{productContents.subtitulo ?? ''}</h2>
            </div>
        </div>
    )
}

export default Card
