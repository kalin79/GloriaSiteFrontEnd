'use client';
// import Image from 'next/image'
// import Link from 'next/link'
import HtmlSafeRender from '@/components/HtmlSafeRender';
import styles from '@/styles/scss/corporativo.module.scss';
interface Props {
    dataDescripcion: string;
}

const Descripcion = ({ dataDescripcion }: Props) => {
    return (
        <div className={styles.descripcionMainContainer}>
            <div className='containerFluid'>
                <div className={styles.gridContainer}>
                    <HtmlSafeRender html={dataDescripcion} />
                </div>
            </div>
        </div>
    )
}

export default Descripcion
