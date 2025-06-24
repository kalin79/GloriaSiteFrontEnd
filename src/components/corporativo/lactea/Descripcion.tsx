'use client';
import Image from 'next/image';

import HtmlSafeRender from '@/components/HtmlSafeRender';
import styles from '@/styles/scss/corporativo.module.scss';
interface infoInterface {
    descripcionCorta: string,
    photo: string,
    descripcion: string,
}
interface Props {
    dataInfo: infoInterface;
}
const Descripcion = ({ dataInfo }: Props) => {
    return (
        <div className={styles.descripcionMainContainer}>
            <div className='containerFluid'>
                <div className={`${styles.gridContainer} ${styles.columns}`}>
                    <div>
                        <div className={styles.logoContainer}>
                            <Image src={dataInfo.photo} width={295} height={295} alt='' />
                        </div>
                    </div>
                    <div>
                        <HtmlSafeRender html={dataInfo.descripcionCorta} />
                    </div>
                    <div>
                        <HtmlSafeRender html={dataInfo.descripcion} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Descripcion
