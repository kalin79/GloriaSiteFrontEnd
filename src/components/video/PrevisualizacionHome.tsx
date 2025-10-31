'use client';
import { forwardRef } from 'react';
import Image from 'next/image'
import LikeIcon from '@/svg/like2.svg';
import ClockIcon from '@/svg/clock.svg';
import { VideoInterfaceAux } from '@/interfaces/video';
import SanitizedHtml from '@/components/SanitizedHtml';
interface videoParameters {
    index: number,
    videosContents: VideoInterfaceAux,
    onClick: (event: React.MouseEvent<HTMLDivElement>) => void,
    // onClick: (event: React.MouseEvent<HTMLDivElement>) => void,
    // onMouseEnter: (event: React.MouseEvent<HTMLDivElement>) => void,
    // onMouseLeave: (event: React.MouseEvent<HTMLDivElement>) => void
}
const PrevisualizacionHome = forwardRef<HTMLDivElement, videoParameters>(({ videosContents, onClick }, ref) => {

    return (
        <div
            ref={ref}
            // onMouseEnter={onMouseEnter}
            className={`slideVideoCard `}
            onClick={onClick}
        // onMouseMove={onMouseLeave}
        >
            {
                (videosContents.marca_logo && videosContents.marca_logo.trim() !== '') && (
                    <div className={`cardLogoMarga`}>
                        <Image src={videosContents.marca_logo} width={52} height={52} alt={videosContents.title ?? ''} />
                    </div>
                )
            }

            <div className={`cardBody`}>
                <Image src='/play3.svg' className={`playIcon`} width={52} height={52} alt={videosContents.title ?? ''} />
                {
                    (videosContents.image && videosContents.image.trim() !== '') && (
                        // <Image src={videosContents.image ?? ''} className={`imgContainer`} width={443} height={246} alt={videosContents.title ?? ''} />
                        <Image src={videosContents.image} className={`imgContainer`} width={443} height={246} alt={videosContents.title ?? ''} />
                    )
                }

            </div>
            <div className={`cardFooter`}>
                <h3>
                    <SanitizedHtml html={videosContents.title ?? ''} />
                </h3>
                <div className={`dataVideoContent`}>
                    <div>
                        <LikeIcon />
                        <p className='parrafoPequeno'>{videosContents.cantidad_like ?? 0}</p>
                    </div>
                    <div>
                        <ClockIcon />
                        <p className='parrafoPequeno'>{videosContents.duracion ?? ''}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
)
PrevisualizacionHome.displayName = 'PrevisualizacionHome'; // Añadimos el displayName para cumplir con ESLint
export default PrevisualizacionHome
