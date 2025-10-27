'use client';
import Image from 'next/image'
import styles from '@/styles/scss/noticias.module.scss';
interface NoticiaInterface {
    img: string,
    fecha: string,
    titulo: string,
    categoria: string,
    slug: string
}

interface Props {
    noticiaContent: NoticiaInterface,
    onClick: (event: React.MouseEvent<HTMLDivElement>) => void,
}
const Card = ({ noticiaContent, onClick }: Props) => {
    return (
        <div className={styles.cardNoticiaContainer} onClick={onClick}>
            <div className={styles.noticiaHeader}>
                <Image src={noticiaContent.img} height={443} width={443} alt='' />
            </div>
            <div className={styles.noticiaBody}>
                <div className={styles.curvaContainer}>
                    <Image src={`curvaM2.svg`} height={420} width={120} alt='' />
                </div>
                <div className={styles.infoContainer}>
                    <div className={styles.fechaContainer}>
                        <Image src='/fechaIcon.svg' height={16} width={16} alt='' />
                        <h4>14 de julio 2025</h4>
                    </div>
                    <h2>{noticiaContent.titulo}</h2>
                    <h3>{noticiaContent.categoria}</h3>
                </div>
            </div>
        </div>
    )
}

export default Card
