'use client';
import { useRouter } from "next/navigation";
import Image from 'next/image';
import VideoBanner from "@/components/video/Banner"
import { BannerInterface } from '@/interfaces/banner';

import styles from '@/styles/scss/banner.module.scss';
interface multimediaParameters {
    multimediaContents: BannerInterface;
}
const Header = ({ multimediaContents }: multimediaParameters) => {
    const router = useRouter();
    // const [isOpen, setIsOpen] = useState(false);
    // const irVerVideo = (items: BannerInterface) => {
    //     router.push(`/${items.slugMarca}/video/${items.slug}`)
    // }
    const irVerContenido = (items: BannerInterface) => {
        router.push(`${items.slug}`)
    }
    return (
        <>
            {
                multimediaContents.logoMarca?.trim() && (
                    <div className='LogoProductoHeader'>
                        <Image src={(multimediaContents.logoMarca ?? '/gloria.svg') as string} width={121} height={84} alt='' />
                    </div>
                )
            }

            <div className={styles.bannerContainer}>
                {
                    multimediaContents.type === 'image' ? (
                        <>
                            <VideoBanner />
                            <div className={styles.infoCenter}>
                                <div className={styles.infoContainer}>
                                    <div className="containerFluid">
                                        <div className={styles.gridContainer}>
                                            <div>
                                                <h1 className="bannerTitular" dangerouslySetInnerHTML={{ __html: multimediaContents.title }}></h1>
                                                <p className="bannerParrafo" dangerouslySetInnerHTML={{ __html: multimediaContents.descripcionCorta || '' }}></p>
                                                <button className="btnStandart" onClick={() => irVerContenido(multimediaContents)}>Más información</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        multimediaContents.marca === '' ? (
                            <>
                                <VideoBanner />
                                <div className={styles.infoCenter}>
                                    <div className={styles.infoContainer}>
                                        <div className="containerFluid">
                                            <div className={styles.gridContainer}>
                                                <div>
                                                    <h1 className="bannerTitular" dangerouslySetInnerHTML={{ __html: multimediaContents.title }}></h1>
                                                    <p className="bannerParrafo" dangerouslySetInnerHTML={{ __html: multimediaContents.descripcionCorta || '' }}></p>
                                                    <button className="btnStandart" onClick={() => irVerContenido(multimediaContents)}>Más información</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <VideoBanner />
                                <div className={styles.infoCenter}>
                                    <div className={styles.infoContainer}>
                                        <div className="containerFluid">
                                            <div className={styles.gridContainer}>
                                                <div>
                                                    <h1 className="bannerTitular" dangerouslySetInnerHTML={{ __html: multimediaContents.title }}></h1>
                                                    <p className="bannerParrafo" dangerouslySetInnerHTML={{ __html: multimediaContents.descripcionCorta || '' }}></p>
                                                    <div className={styles.infoVideo}>
                                                        <div>
                                                            <Image src='/estrella.svg' width={24} height={24} alt="" />
                                                            <p className="bannerParrafo">1245</p>
                                                        </div>
                                                        <div>
                                                            <Image src='/time.svg' width={24} height={24} alt="" />
                                                            <p className="bannerParrafo">Duración: 23 seg</p>
                                                        </div>
                                                    </div>
                                                    <button className={`btnStandart ${styles.btnStandart}`} onClick={() => irVerContenido(multimediaContents)}>
                                                        <span>Reproducir</span>
                                                        <Image src='/play4.svg' width={14} height={16} alt="" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    )
                }

            </div>
        </>
    )
}

export default Header
