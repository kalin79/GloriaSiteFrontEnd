'use client';
import { useRouter } from "next/navigation";

import Image from 'next/image'
import styles from '@/styles/scss/campanas.module.scss';
interface VideoContentCampana {
    title: string;
    subTitle: string;
    idMarca: number;
    marca: string;
    slug: string;
    imagen: string;
    video: string;
}
interface Props {
    videosContents: VideoContentCampana,
}
const Card = ({ videosContents }: Props) => {
    const router = useRouter();


    const handleClickViewVideo = (slug: string, marca: string) => {
        router.push(`/${marca}/campana/${slug}`)
    }
    return (
        <div
            className={`${styles.cardContainer} `}

            onClick={() => handleClickViewVideo(videosContents.slug, videosContents.marca)}
        >
            <div className={styles.cardBody}>
                <Image src={videosContents.imagen} width={2990} height={1678} alt='Bonle :: Loncheras divertidas y nutritivas para tus pequeños' />
            </div>
            <div className={styles.cardFooter}>
                <Image src='/play.svg' className={styles.playIcon} width={34} height={34} alt='Bonle :: Reproducir el video' />
                <h2>
                    {videosContents.subTitle} - {videosContents.marca}
                </h2>
                <h3>
                    {videosContents.title}
                </h3>
            </div>
        </div>
    )
}

export default Card
