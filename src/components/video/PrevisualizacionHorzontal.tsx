'use client';
import { forwardRef } from 'react';
import Image from 'next/image';
import { VideoInterface } from '@/interfaces/video';

import styles from '@/styles/scss/video.module.scss';

interface Props {
    index: number,
    videosContents: VideoInterface,
    onClick: (event: React.MouseEvent<HTMLDivElement>) => void,
    // onMouseEnter: (event: React.MouseEvent<HTMLDivElement>) => void,
    // onMouseMove: (event: React.MouseEvent<HTMLDivElement>) => void
}
const PrevisualizacionHorizontal = forwardRef<HTMLDivElement, Props>(({ index, videosContents, onClick }, ref) => {

    return (
        <div
            ref={ref}
            // onMouseEnter={onMouseEnter}
            onClick={onClick}
            // onMouseMove={onMouseMove}
            className={`${styles.slideVideoCard} `}
        >
            <div className={styles.cardBody}>
                <Image src={videosContents.imagen} className={styles.imgContainer} width={300} height={600} alt='Bonle :: Loncheras divertidas y nutritivas para tus pequeños' />
            </div>
            {/* <div className={styles.playBoxHori}>
                <Image src='/play3.svg' className={styles.playIcon} width={52} height={52} alt='Bonle :: Reproducir el video' />
            </div> */}
            <div className={`${styles.etiquetaCard} ${videosContents.colorMarca}`}>
                {videosContents.marca}
            </div>
            <div className={styles.cardFooter}>
                <h3 className='parrafoGrande'>{videosContents.title}</h3>
            </div>
            <div className={styles.cardFooterNumber}>
                <h4>{index + 1}</h4>
            </div>
        </div>
    )
}
)
PrevisualizacionHorizontal.displayName = 'PrevisualizacionHorizontal';
export default PrevisualizacionHorizontal
