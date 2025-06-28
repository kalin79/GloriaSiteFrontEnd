import BannerPrincipalComponent from "@/components/banners/Header";
import CarruselVideosComponent from "@/components/carrusel/CarruselVideos";
import CarruselCampanasComponent from "@/components/carrusel/CarruselCampanas";

import { BannerInterface } from '@/interfaces/banner';
import { VideoInterface, FiltroVideosInterface } from '@/interfaces/video';
import { VideoCampanaInterface } from '@/interfaces/campana';

import styles from '@/styles/scss/marca.module.scss';


export default function Marca() {
    const filtroVideos: FiltroVideosInterface[] = [
        {
            nombre: 'Nutrición Inteligente',
            slug: 'nutricion',
        },
        {
            nombre: 'Crianza en acción',
            slug: 'crianza',
        },
        {
            nombre: 'Aprender jugando',
            slug: 'aprender',
        },
        {
            nombre: 'Bienestar y Salud',
            slug: 'bienestar',
        },
        {
            nombre: 'Recetas saludables',
            slug: 'Recetas',
        },
        {
            nombre: 'Lactancia materna',
            slug: 'lactancia',
        }
    ];
    const videos: VideoInterface[] = [
        {
            title: 'Loncheras divertidas y nutritivas para tus pequeños',
            idMarca: 1,
            marca: 'Bonle',
            slug: 'lonceras-divertidas-y-nutricionales-para-tus-pequenos',
            imagen: '/videoimg.png',
            video: '/videocorto.mp4',
            colorMarca: 'color1'
        },
        {
            title: 'Cómo potenciar el aprendizaje de tus hijos desde casa',
            idMarca: 2,
            marca: 'ActiBio',
            slug: 'como-potenciar-el-aprendizaje-de-tus-hijos-desde-casa',
            imagen: '/videoimg2.png',
            video: '/videocorto.mp4',
            colorMarca: 'color2'
        },
        {
            title: 'Potencia tu actividad física con estos consejos PRO',
            idMarca: 3,
            marca: 'PRO',
            slug: 'potencia-tu-actividad-fisica-con-estos-consejos-pro',
            imagen: '/videoimg3.png',
            video: '/videocorto.mp4',
            colorMarca: 'color3'
        },
        {
            title: 'Loncheras divertidas y nutritivas para tus pequeños',
            idMarca: 4,
            marca: 'PRO',
            slug: 'loncheras-divertidas-y-nutritivas-para-tus-pequenos',
            imagen: '/videoimg.png',
            video: '/videocorto.mp4',
            colorMarca: 'color3'
        },
        {
            title: 'Loncheras divertidas y nutritivas para tus pequeños',
            idMarca: 5,
            marca: 'Bonle',
            slug: 'loncheras-divertidas-y-nutritivas-para-tus-pequenos',
            imagen: '/videoimg3.png',
            video: '/videocorto.mp4',
            colorMarca: 'color1'
        },
        {
            title: 'Loncheras divertidas y nutritivas para tus pequeños',
            idMarca: 1,
            marca: 'Bonle',
            slug: 'lonceras-divertidas-y-nutricionales-para-tus-pequenos',
            imagen: '/videoimg.png',
            video: '/videocorto.mp4',
            colorMarca: 'color1'
        },
        {
            title: 'Cómo potenciar el aprendizaje de tus hijos desde casa',
            idMarca: 2,
            marca: 'ActiBio',
            slug: 'como-potenciar-el-aprendizaje-de-tus-hijos-desde-casa',
            imagen: '/videoimg2.png',
            video: '/videocorto.mp4',
            colorMarca: 'color2'
        },
        {
            title: 'Potencia tu actividad física con estos consejos PRO',
            idMarca: 3,
            marca: 'PRO',
            slug: 'potencia-tu-actividad-fisica-con-estos-consejos-pro',
            imagen: '/videoimg3.png',
            video: '/videocorto.mp4',
            colorMarca: 'color3'
        },
        {
            title: 'Loncheras divertidas y nutritivas para tus pequeños',
            idMarca: 4,
            marca: 'PRO',
            slug: 'loncheras-divertidas-y-nutritivas-para-tus-pequenos',
            imagen: '/videoimg.png',
            video: '/videocorto.mp4',
            colorMarca: 'color3'
        },
        {
            title: 'Loncheras divertidas y nutritivas para tus pequeños',
            idMarca: 5,
            marca: 'Bonle',
            slug: 'loncheras-divertidas-y-nutritivas-para-tus-pequenos',
            imagen: '/videoimg2.png',
            video: '/videocorto.mp4',
            colorMarca: 'color1'
        },
    ];
    const banners: BannerInterface = {
        title: '¡Comienza un <br />nuevo regreso <br />a clases!',
        subTitle: '',
        descripcionCorta: 'Detrás de un niño volviendo al cole, hay una mamá y papá dándolo todo. Conoce la nueva campaña de Gloria.',
        idMarca: 1,
        marca: 'Gloria',
        slugMarca: '/gloria/',
        slug: '/gloria/',
        type: 'video',
        multimedia: '/bhome.webp',
        like: '32',
        duracion: '23 seg',
        logoMarca: '/gloria.svg',
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
            <BannerPrincipalComponent multimediaContents={banners} />
            <div className={styles.marcaContainerPage}>
                <CarruselVideosComponent videos={videos} titularVideo="Te Recomendamos" colorTxt='blanco' listFiltro={null} />
                <CarruselVideosComponent videos={videos} titularVideo="Categorías" colorTxt='blanco' listFiltro={filtroVideos} />
                <CarruselCampanasComponent videosCampana={videosCampana} titularCampana="CAMPAÑAS GLORIA" subtitularCampana="Videos que inspiran" />
            </div>

        </>
    );
}
