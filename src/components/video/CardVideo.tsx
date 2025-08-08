'use client';
import { useRouter } from "next/navigation";
import Image from 'next/image';
import LikeIcon from '@/svg/like2.svg';
import ClockIcon from '@/svg/clock.svg';
import { VideoInterface } from "@/interfaces/video";

interface videoParameters {
    videosContents: VideoInterface,
}
const CardVideo = ({ videosContents }: videoParameters) => {
    const router = useRouter();
    const handleClickViewVideo = (slug: string, marca: string) => {
        router.push(`/${marca}/video/${slug}`)
    }
    return (
        <div

            className={`slideVideoCard `}
            onClick={() => handleClickViewVideo(videosContents.slug ?? '', videosContents.marca?.nombre ?? '')}
        >
            <div className={`cardBody`}>

                <Image src='/play3.svg' className={`playIcon`} width={52} height={52} alt='Bonle :: Reproducir el video' />
                <Image src={videosContents.image ?? '/camp.png'} className={`imgContainer`} width={443} height={246} alt={`${videosContents.marca?.nombre} ${videosContents.title_large}`} />
            </div>

            <div className={`cardFooter`}>
                <h3 className='parrafoMediano'>
                    {videosContents.title_large}
                </h3>
                <div className={`dataVideoContent`}>
                    <div>
                        <LikeIcon />
                        <p className='parrafoPequeno'>25</p>
                    </div>
                    <div>
                        <ClockIcon />
                        <p className='parrafoPequeno'>{videosContents.duracion}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CardVideo
