'use client';
import Image from 'next/image'
import { ProductListadoInterface } from '@/interfaces/producto';

import styles from '@/styles/scss/marcapro.module.scss';
import SanitizedHtml from '@/components/SanitizedHtml';

interface productParameters {
    productContents: ProductListadoInterface,
    onClick: (event: React.MouseEvent<HTMLDivElement>) => void,
}
const CardProductoProListado = ({ productContents, onClick }: productParameters) => {
    return (
        <div
            className={styles.cardPrduct}
            onClick={onClick}
        >
            {
                (productContents.receta) && (
                    <div className={styles.recetacontent}>
                        <Image src="/iconChef2.svg" width={42} height={40} alt='' />
                    </div>
                )
            }

            <div className={styles.bodyCardBox}>
                <Image src={productContents.image || '/pO1M.png'} width={656} height={858} alt={productContents.title || 'producto'} />
            </div>
            <div className={styles.footerCardBox}>
                <h4 className=''><SanitizedHtml html={productContents.title ?? ''} /></h4>
                <h2 className=''><SanitizedHtml html={productContents.subtitulo ?? ''} /></h2>
            </div>
        </div>
    )
}

export default CardProductoProListado
