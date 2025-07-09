import BannerPrincipalComponent from "@/components/banners/Header";
import DetalleComponent from "@/components/campanas/Descripcion";
import CarruselCampanasComponent from "@/components/carrusel/CarruselCampanas";

import { BannerInterface } from '@/interfaces/banner';
import { VideoCampanaInterface } from '@/interfaces/campana';

import styles from '@/styles/scss/campanas.module.scss';

const page = () => {
    const banner: BannerInterface = {
        title: '¡Comienza un <br />nuevo regreso <br />a clases!',
        subTitle: '',
        descripcionCorta: 'Detrás de un niño volviendo al cole, hay una mamá y papá dándolo todo. Conoce la nueva campaña de Gloria.',
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
    const videosCampana: VideoCampanaInterface[] = [
        {
            title: 'Estas vacaciones a un click de distancia',
            subTitle: 'Yogurt',
            idMarca: 1,
            marca: 'Gloria',
            slug: 'lo-estas-haciendo-bien',
            imagen: '/campa1.png',
            video: '/videocorto.mp4',
        },
        {
            title: 'Ideas que nos unen por navidad',
            subTitle: 'Paneton',
            idMarca: 1,
            marca: 'Gloria',
            slug: 'mama-que-nutre-mama-en-su-gloria',
            imagen: '/campa2.png',
            video: '/videocorto.mp4',
        },
        {
            title: 'La Promo Gloriosa',
            subTitle: 'Lecheros',
            idMarca: 1,
            marca: 'Gloria',
            slug: 'lo-estas-haciendo-bien',
            imagen: '/campa3.png',
            video: '/videocorto.mp4',
        },
        {
            title: 'Lo estas haciendo bien',
            subTitle: 'Día de la Madre',
            idMarca: 1,
            marca: 'Gloria',
            slug: 'mama-que-nutre-mama-en-su-gloria',
            imagen: '/campa4.png',
            video: '/videocorto.mp4',
        },
        {
            title: 'Gloria Superman”',
            subTitle: 'Superman',
            idMarca: 1,
            marca: 'Gloria',
            slug: 'campana-navidena-todos-vuelven',
            imagen: '/campa5.png',
            video: '/videocorto.mp4',
        },
    ]
    return (
        <>
            <div className="bgGloria">
                <BannerPrincipalComponent multimediaContents={banner} />
                <div className={`${styles.campanaContainerPage}`}>
                    <div className="containerFluid">
                        <DetalleComponent />
                        <CarruselCampanasComponent videosCampana={videosCampana} titularCampana="CAMPAÑAS GLORIA:" subtitularCampana="Videos que inspiran" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default page
