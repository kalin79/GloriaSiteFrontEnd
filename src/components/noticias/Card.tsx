'use client';
import { NoticiaInterface } from '@/interfaces/noticia';
import Image from 'next/image';
import styles from '@/styles/scss/noticias.module.scss';

interface Props {
    noticiaContent: NoticiaInterface,
    onClick: (event: React.MouseEvent<HTMLDivElement>) => void,
}
const Card = ({ noticiaContent, onClick }: Props) => {
    const formatearFecha = (fechaIso: string): string => {
        const fecha = new Date(fechaIso);
        return new Intl.DateTimeFormat('es-ES', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        }).format(fecha);
    };
    return (
        <div className={styles.cardNoticiaContainer} onClick={onClick}>
            <div className={styles.noticiaHeader}>
                <Image src={noticiaContent.imagen_cover} height={443} width={443} alt='' />
            </div>
            <div className={styles.noticiaBody}>
                <div className={styles.curvaContainer}>
                    <Image src={`curvaM2.svg`} height={420} width={120} alt='' />
                </div>
                <div className={styles.infoContainer}>
                    <div className={styles.fechaContainer}>
                        <Image src='/fechaIcon.svg' height={16} width={16} alt='' />
                        <h4>{formatearFecha(noticiaContent.fecha_publicacion)}</h4>
                    </div>
                    <h2>{noticiaContent.titulo}</h2>
                    <h3>{noticiaContent.categoria}</h3>
                </div>
            </div>
        </div>
    )
}

export default Card
