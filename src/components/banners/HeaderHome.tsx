'use client';

import { BannerInterfaceAux } from '@/interfaces/banner';
import Image from 'next/image';
import Link from 'next/link';
import SantizedHtml from '@/components/SanitizedHtml';
// import HtmlSafeRender from '@/components/HtmlSafeRender';
import styles from '@/styles/scss/banner.module.scss';
interface multimediaParameters {
    multimediaContents: BannerInterfaceAux;
    viewLogo?: boolean;
}

const HeaderHome = ({ multimediaContents }: multimediaParameters) => {

    return (
        <>
            <div className={styles.bannerHomeMain}>
                <div className={styles.imageFull}>
                    <Image src={multimediaContents.imagemobile} width={2460} height={1425} alt='' />
                </div>
                <div className={styles.infoContainer}>
                    <div className="containerFluid">
                        <div className={styles.gridContainer}>
                            <div>
                                <h2 className={styles.titularBanner}><SantizedHtml html={multimediaContents.title || ''} /></h2>
                                <p className={styles.descripcionBanner}><SantizedHtml html={multimediaContents.subTitle || ''} /></p>
                                {
                                    (multimediaContents.type === 'imagen') ? (
                                        <Link href={`/${multimediaContents.link}`} className={`btnStandart`} >
                                            <span><SantizedHtml html={multimediaContents.accion || ''} /></span>
                                            {/* <Image src='/play4.svg' width={14} height={16} alt="" /> */}
                                        </Link>
                                    ) : (
                                        <Link href={`/${multimediaContents.slugMarca}/${multimediaContents.link}`} className={`btnStandart`} >
                                            <span>Ver video</span>
                                            {/* <Image src='/play4.svg' width={14} height={16} alt="" /> */}
                                        </Link>
                                    )
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeaderHome
