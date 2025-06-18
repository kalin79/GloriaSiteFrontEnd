'use client';
import { useRouter } from "next/navigation";
// import Image from 'next/image';
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
            <div className={styles.bannerContainer}>
                <VideoBanner />
                <div className={styles.infoCenter}>
                    <div className={styles.infoContainer}>
                        <div className="containerFluid">
                            <div className={styles.gridContainer}>
                                <div>
                                    <h1 className="bannerTitular" dangerouslySetInnerHTML={{ __html: multimediaContents.title }}></h1>
                                    <p className="bannerParrafo" dangerouslySetInnerHTML={{ __html: multimediaContents.descripcionCorta }}></p>
                                    <button className="btnStandart" onClick={() => irVerContenido(multimediaContents)}>Más información</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
