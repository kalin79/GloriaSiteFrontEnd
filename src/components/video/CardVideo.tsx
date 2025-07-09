'use client';
import { useRouter } from "next/navigation";
import Image from 'next/image';
import LikeIcon from '@/svg/like2.svg';
import ClockIcon from '@/svg/clock.svg';
interface VideoContent {
    title: string;
    idMarca: number;
    marca: string;
    slug: string;
    imagen: string;
    video: string;
    colorMarca: string; // colorGloria
    duracion: string;
    like: number;
}
interface videoParameters {
    videosContents: VideoContent,
}
const CardVideo = ({ videosContents }: videoParameters) => {
    const router = useRouter();
    const handleClickViewVideo = (slug: string, marca: string) => {
        router.push(`/${marca}/video/${slug}`)
    }
    return (
        <div

            className={`slideVideoCard `}
            onClick={() => handleClickViewVideo(videosContents.slug, videosContents.marca)}
        >
            <div className={`cardBody`}>

                <Image src='/play3.svg' className={`playIcon`} width={52} height={52} alt='Bonle :: Reproducir el video' />
                <Image src={videosContents.imagen} className={`imgContainer`} width={443} height={246} alt='Bonle :: Loncheras divertidas y nutritivas para tus pequeños' />
            </div>

            <div className={`cardFooter`}>
                <h3 className='parrafoMediano'>
                    {videosContents.title}
                </h3>
                <div className={`dataVideoContent`}>
                    <div>
                        <LikeIcon />
                        <p className='parrafoPequeno'>25</p>
                    </div>
                    <div>
                        <ClockIcon />
                        <p className='parrafoPequeno'>01:24</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CardVideo
