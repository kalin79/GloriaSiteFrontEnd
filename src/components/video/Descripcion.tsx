'use client';
import { VideoInterface } from "@/interfaces/video";
import SantizedHtml from "@/components/SanitizedHtml";
import HtmlSafeRender from '@/components/HtmlSafeRender';

// import Link from 'next/link';
import Image from 'next/image';

import styles from '@/styles/scss/campanas.module.scss';

interface Props {
    multimediaContents: VideoInterface,
    // legalesData: CampanaLegalesInterfaces[]
}

const Descripcion = ({ multimediaContents }: Props) => {
    return (
        <div className={styles.bgDescripcionContainer}>
            <div className={styles.backGroundFull}>
                <Image src='/bgGloria.webp' width={2460} height={2880} alt='fondo' />
            </div>
            <div className='containerFluid'>
                <div className={styles.descriptionCampanaContainer}>
                    <div>
                        <h2><SantizedHtml html={multimediaContents.sub_title || ''} /></h2>
                        <h1><SantizedHtml html={multimediaContents.title_large || ''} /></h1>
                        <HtmlSafeRender html={multimediaContents.descripcion || ''} className='contenidoHTML' />
                    </div>
                    <div>
                        <div className={styles.btnContainers}>
                            <button className='btnStandart'>
                                <Image src="/corazon.svg" height={20} width={17} alt='Me gusta' />
                                <span>Me gusta</span>
                            </button>
                        </div>
                        <div className={styles.infoShareCampana}>
                            <div>
                                <div className={styles.iconContainer}>
                                    <Image src="/ojo.svg" height={24} width={24} alt='Me gusta' />
                                </div>
                                <p>5,457 vistas</p>
                            </div>
                            <div>
                                <div className={styles.iconContainer}>
                                    <Image src="/corazon.svg" height={21} width={21} alt='Me gusta' />
                                </div>
                                <p>127 Me gusta</p>
                            </div>
                            {/* <div>
                                <div className={styles.iconContainer}>
                                    <Image src="/mundo.svg" height={22} width={22} alt='Me gusta' />
                                </div>
                                <a href={multimediaContents.duracion} target='_blank'>{multimediaContents.duracion}</a>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Descripcion
