import BannerPrincipalComponent from "@/components/banners/Header";

import TabsComponent from "@/components/video/Tabs";

import { BannerInterface } from '@/interfaces/banner';
import styles from '@/styles/scss/producto.module.scss';
const Video = () => {
    const banner: BannerInterface = {
        title: 'Cómo potenciar <br />el aprendizaje de <br />nuestros hijos',
        subTitle: '',
        descripcionCorta: 'Una campaña que celebra el amor y la nutrición que solo una mamá puede dar, con la calidad de Leche Gloria.',
        idMarca: 1,
        marca: 'Gloria',
        logoMarca: '/gloriaMarca.svg',
        slugMarca: '',
        slug: '/corporativo/quienes-somos',
        type: 'video',
        multimedia: '/bhome.webp',
        like: '',
        duracion: '',
    };

    return (
        <>
            <div className="bgGloria">
                <BannerPrincipalComponent multimediaContents={banner} />
                <div className={`${styles.productoContainerPage}`}>
                    <div className="containerFluid">
                        <TabsComponent />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Video
