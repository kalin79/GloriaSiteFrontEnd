'use client';
import { forwardRef } from 'react';
import Image from 'next/image'
import LikeIcon from '@/svg/like2.svg';
import ClockIcon from '@/svg/clock.svg';
import { VideoInterface } from '@/interfaces/video';

interface videoParameters {
    index: number,
    videosContents: VideoInterface,
    onClick: (event: React.MouseEvent<HTMLDivElement>) => void,
    onMouseEnter: (event: React.MouseEvent<HTMLDivElement>) => void,
    onMouseMove: (event: React.MouseEvent<HTMLDivElement>) => void
}
const Previsualizacion = forwardRef<HTMLDivElement, videoParameters>(({ videosContents, onMouseEnter, onMouseMove, onClick }, ref) => {
    return (
        <div
            ref={ref}
            onMouseEnter={onMouseEnter}
            className={`slideVideoCard `}
            onClick={onClick}
            onMouseMove={onMouseMove}
        >
            <div className={`cardBody`}>
                <div className={`etiquetaCard ${videosContents.colorMarca}`}>
                    {videosContents.marca}
                </div>
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
)
Previsualizacion.displayName = 'Previsualizacion'; // Añadimos el displayName para cumplir con ESLint
export default Previsualizacion
