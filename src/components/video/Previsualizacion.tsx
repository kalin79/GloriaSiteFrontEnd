'use client';
import { forwardRef } from 'react';
import Image from 'next/image'
import LikeIcon from '@/svg/like2.svg';
import ClockIcon from '@/svg/clock.svg';
import { VideosHomeInterface } from '@/interfaces/marca';
import SanitizedHtml from '@/components/SanitizedHtml';
interface videoParameters {
    index: number,
    videosContents: VideosHomeInterface,
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
                    <SanitizedHtml html={videosContents.marca ?? ''} />
                </div>
                <Image src='/play3.svg' className={`playIcon`} width={52} height={52} alt={videosContents.title ?? ''} />
                {
                    (videosContents.image && videosContents.image.trim() !== '') && (
                        // <Image src={videosContents.image ?? ''} className={`imgContainer`} width={443} height={246} alt={videosContents.title ?? ''} />
                        <Image src='/play3.svg' className={`imgContainer`} width={443} height={246} alt={videosContents.title ?? ''} />
                    )
                }

            </div>
            <div className={`cardFooter`}>
                <h3 className='parrafoMediano notBr'>
                    <SanitizedHtml html={videosContents.title ?? ''} />
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
