'use client';
import { useRouter } from "next/navigation";

import { CampanaInterface } from '@/interfaces/campana';


import Image from 'next/image'
import styles from '@/styles/scss/marcapro.module.scss';

interface Props {
    videosContents: CampanaInterface,
}
const CardPro = ({ videosContents }: Props) => {
    const router = useRouter();


    const handleClickViewVideo = (slug: string, marca: string) => {
        router.push(`/${marca}/campana/${slug}`)
    }
    return (
        <div
            className={`${styles.cardContainer} `}

            onClick={() => handleClickViewVideo(videosContents.slug, videosContents.marca.slug)}
        >
            <div className={styles.cardBody}>
                <div className={`${styles.playContainer}`}>
                    <Image src='/play5.svg' width={78} height={78} alt='Reproducir el video' />
                </div>
                <div className={`${styles.bgContainerVideo}`}>
                    <Image src={videosContents.image} width={2990} height={1678} alt='Loncheras divertidas y nutritivas para tus pequeños' />
                </div>
            </div>
            <div className={`${styles.cardFooter}`}>
                <div className={styles.cardInfo}>
                    <h2>
                        Campaña {videosContents.fecha_estreno} - {videosContents.marca.nombre}
                    </h2>
                    <h3>
                        {videosContents.title_large}
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default CardPro
