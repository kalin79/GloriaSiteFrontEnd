'use client';
import { forwardRef } from 'react';
import Image from 'next/image'
import LikeIcon from '@/svg/like2.svg';
import ClockIcon from '@/svg/clock.svg';
import { VideosHomeInterface } from '@/interfaces/marca';
import SanitizedHtml from '@/components/SanitizedHtml';
import styles from '@/styles/scss/marcapro.module.scss';
interface videoParameters {
    index: number,
    videosContents: VideosHomeInterface,
    onClick: (event: React.MouseEvent<HTMLDivElement>) => void,
    // onClick: (event: React.MouseEvent<HTMLDivElement>) => void,
    // onMouseEnter: (event: React.MouseEvent<HTMLDivElement>) => void,
    // onMouseLeave: (event: React.MouseEvent<HTMLDivElement>) => void
}
const Previsualizacion = forwardRef<HTMLDivElement, videoParameters>(({ videosContents, onClick }, ref) => {

    return (
        <div
            ref={ref}
            // onMouseEnter={onMouseEnter}
            className={`slideVideoCard ${styles.slideVideoCard}`}
            onClick={onClick}
        // onMouseMove={onMouseLeave}
        >
            <div className={`cardBody`}>
                <Image src='/play3.svg' className={`playIcon`} width={52} height={52} alt={videosContents.title_large ?? ''} />
                {
                    (videosContents.image && videosContents.image.trim() !== '') && (
                        // <Image src={videosContents.image ?? ''} className={`imgContainer`} width={443} height={246} alt={videosContents.title ?? ''} />
                        <Image src={videosContents.image} className={`imgContainer`} width={443} height={246} alt={videosContents.title_large ?? ''} />
                    )
                }

            </div>
            <div className={`cardFooter ${styles.cardFooter}`}>
                <h3>
                    <SanitizedHtml html={videosContents.title_large ?? ''} />
                </h3>
                <div className={`dataVideoContent ${styles.dataVideoContent}`}>
                    <div>
                        <LikeIcon />
                        <p className={`parrafoPequeno ${styles.parrafoPequeno}`}>{videosContents.cantidad_like ?? 0}</p>
                    </div>
                    <div>
                        <ClockIcon />
                        <p className={`parrafoPequeno ${styles.parrafoPequeno}`}>{videosContents.duracion ?? ''}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
)
Previsualizacion.displayName = 'Previsualizacion'; // Añadimos el displayName para cumplir con ESLint
export default Previsualizacion
