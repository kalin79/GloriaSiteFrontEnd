'use client';
import HtmlSafeRender from '@/components/HtmlSafeRender';

import styles from '@/styles/scss/legal.module.scss';
interface legalInterface {
    titular: string,
    titularCampana?: string,
    description?: string,
}
interface Props {
    dataLegal: legalInterface;
}
const Descripcion = ({ dataLegal }: Props) => {
    return (
        <div className={styles.legalContentContainer}>
            <div className='containerFluid'>
                <div className={styles.gridContainer}>
                    <div>
                        <HtmlSafeRender html={dataLegal.description ?? ''} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Descripcion
