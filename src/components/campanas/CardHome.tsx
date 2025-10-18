'use client';
import { useRouter } from "next/navigation";

import { CampanaInterfaceAux } from '@/interfaces/campana';



import Image from 'next/image'
import styles from '@/styles/scss/campanas.module.scss';

interface Props {
    videosContents: CampanaInterfaceAux,
}
const CardHome = ({ videosContents }: Props) => {
    const router = useRouter();


    const handleClickViewVideo = (slug: string, marca: string) => {
        router.push(`/${marca}/campana/${slug}`)
    }
    return (
        <div
            className={`${styles.cardContainer} `}

            onClick={() => handleClickViewVideo(videosContents.slug, videosContents.marca_slug)}
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
                        Campaña {videosContents.fecha_estreno} - {videosContents.marca}
                    </h2>
                    <h3>
                        {videosContents.title}
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default CardHome
