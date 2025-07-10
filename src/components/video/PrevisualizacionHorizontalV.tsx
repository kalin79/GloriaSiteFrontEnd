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
const PrevisualizacionHorizontalV = forwardRef<HTMLDivElement, Props>(({ index, videosContents, onClick }, ref) => {
    return (
        <div
            ref={ref}
            // onMouseEnter={onMouseEnter}
            onClick={onClick}
            // onMouseMove={onMouseMove}
            className={`${styles.slideVideoCardV} `}
        >
            <div className={styles.cardBody}>
                <Image src={videosContents.imagen} className={styles.imgContainer} width={300} height={600} alt='Bonle :: Loncheras divertidas y nutritivas para tus pequeños' />
            </div>
            <div className={`${styles.etiquetaCard} ${videosContents.colorMarca}`}>
                {videosContents.marca}
            </div>
            <div className={styles.cardFooter}>
                <div className={styles.curvaContainer}>
                    <Image src='/minicurva.svg' width={400} height={57} alt='' />
                </div>
                <div className={styles.infoContainer}>
                    <div className='titularExtraGrande celesteTxt'>{index + 1}. </div>
                    <h3 className='parrafoGrande celesteTxt'>{videosContents.title}</h3>
                </div>
            </div>
        </div>
    )
}
)
PrevisualizacionHorizontalV.displayName = 'PrevisualizacionHorizontalV';
export default PrevisualizacionHorizontalV