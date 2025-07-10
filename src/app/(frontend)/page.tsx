

import CarruselBannerFullComponent from "@/components/carrusel/FullPage"

import MarcasComponent from "@/components/marcas/Listado";
import CarruselVideosComponent from "@/components/carrusel/CarruselVideos";
import CarruselCampanasComponent from "@/components/carrusel/CarruselCampanas";

import CarruselVideosHorizontalComponent from "@/components/carrusel/CarruselVideosHorizontal";
import CarruselProductsComponent from "@/components/carrusel/CarruselProductos";
import PropositoComponet from "@/components/corporativo/somos/Proposito";

// import CarruselNoticiasComponent from "@/components/carrusel/CaruselNoticias";
import LecherosComponet from "@/components/banners/Lecheros";

import { BannerInterface } from '@/interfaces/banner';
import { VideoInterface } from '@/interfaces/video';
import { VideoCampanaInterface } from '@/interfaces/campana';
// import { NoticiaInterface } from '@/interfaces/noticia';

export default function Home() {
    const videos: VideoInterface[] = [
        {
            title: 'Loncheras divertidas y nutritivas para tus pequeños',
            idMarca: 1,
            marca: 'Bonlé',
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
            marca: 'Bonlé',
            slug: 'loncheras-divertidas-y-nutritivas-para-tus-pequenos',
            imagen: '/videoimg3.png',
            video: '/videocorto.mp4',
            colorMarca: 'color1'
        },
        {
            title: 'Loncheras divertidas y nutritivas para tus pequeños',
            idMarca: 1,
            marca: 'Bonlé',
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
            marca: 'Bonlé',
            slug: 'loncheras-divertidas-y-nutritivas-para-tus-pequenos',
            imagen: '/videoimg2.png',
            video: '/videocorto.mp4',
            colorMarca: 'color1'
        },
    ];
    const banners: BannerInterface[] = [
        {
            title: 'Somos la <br /> empresa líder <br />en el mercado <br />lácteo peruano',
            subTitle: '',
            descripcionCorta: 'Con casi 80 años de esfuerzo, somos una de las organizaciones más admiradas y contamos con la marca peruana más valiosa y recordada.',
            idMarca: 1,
            marca: '',
            slugMarca: '',
            slug: '/corporativo/quienes-somos',
            type: 'imagen',
            multimedia: '/bhome.webp',
            like: '',
            duracion: '',
            logoMarca: '',
        },
        {
            title: 'Esta es una <br />prueba',
            subTitle: '',
            descripcionCorta: 'ok esta bien',
            idMarca: 1,
            marca: 'Gloria',
            slugMarca: 'gloria',
            slug: 'como-potenciar-el-aprendizaje-de-tus-hijos-desde-casa',
            type: 'video',
            multimedia: '/videocorto.mp4',
            like: '',
            duracion: '',
            logoMarca: '/gloria.svg',
        },

    ]
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
    const videosHorizontales: VideoInterface[] = [
        {
            title: 'Nutrición para Crecer:',
            idMarca: 1,
            marca: 'Gloria',
            slug: 'nutricion-para-crecer',
            imagen: '/videohor1.png',
            video: '/videocorto.mp4',
            colorMarca: 'color1'
        },
        {
            title: 'Energía en Cada Cucharada: El Poder del Yogurt y los Cereales',
            idMarca: 2,
            marca: 'ActiBio',
            slug: 'energia-en-cada-cucharada-el-poder-del-yogurt-y-los-cereales',
            imagen: '/videohor2.png',
            video: '/videocorto.mp4',
            colorMarca: 'color2'
        },
        {
            title: 'Ganar Masa Muscular: ¿Cómo Te Ayuda Tu Batido Energético?',
            idMarca: 3,
            marca: 'PRO',
            slug: 'ganar-masa-muscular-¿como-te-ayuda-tu-batido-energetico',
            imagen: '/videohor3.png',
            video: '/videocorto.mp4',
            colorMarca: 'color3'
        },
        {
            title: 'Nutrición para Crecer: Los Mejores Alimentos para Cada Etapa de Tu Hijo',
            idMarca: 4,
            marca: 'Gloria',
            slug: 'nutricion-para-crecer-los-mejores-alimentos-para-cada-etapa-de-tu-hijo',
            imagen: '/videohor4.png',
            video: '/videocorto.mp4',
            colorMarca: 'color1'
        },
        {
            title: 'Nutrición para Crecer:',
            idMarca: 1,
            marca: 'Gloria',
            slug: 'nutricion-para-crecer',
            imagen: '/videohor1.png',
            video: '/videocorto.mp4',
            colorMarca: 'color1'
        },
        {
            title: 'Energía en Cada Cucharada: El Poder del Yogurt y los Cereales',
            idMarca: 2,
            marca: 'ActiBio',
            slug: 'energia-en-cada-cucharada-el-poder-del-yogurt-y-los-cereales',
            imagen: '/videohor2.png',
            video: '/videocorto.mp4',
            colorMarca: 'color2'
        },
        {
            title: 'Ganar Masa Muscular: ¿Cómo Te Ayuda Tu Batido Energético?',
            idMarca: 3,
            marca: 'PRO',
            slug: 'ganar-masa-muscular-¿como-te-ayuda-tu-batido-energetico',
            imagen: '/videohor3.png',
            video: '/videocorto.mp4',
            colorMarca: 'color3'
        },
        {
            title: 'Nutrición para Crecer: Los Mejores Alimentos para Cada Etapa de Tu Hijo',
            idMarca: 4,
            marca: 'Gloria',
            slug: 'nutricion-para-crecer-los-mejores-alimentos-para-cada-etapa-de-tu-hijo',
            imagen: '/videohor4.png',
            video: '/videocorto.mp4',
            colorMarca: 'color1'
        },

    ]
    // const noticias: NoticiaInterface[] = [
    //     {
    //         title: 'Ganadería: orgullo y unidad familiar que perdura en el tiempo.',
    //         slug: 'ganaderia-orgullo-y-unidad-familiar-que-perdura-en-el-tiempo',
    //         imagen: '/n1.png',
    //     },
    //     {
    //         title: 'Renuevan certificaciones BASC y OEA',
    //         slug: 'renuevan-certificaciones-basc-y-oea',
    //         imagen: '/n2.png',
    //     },
    //     {
    //         title: 'Leche Gloria regstra incremento de ventas en 32.9% en el 2024',
    //         slug: 'leche-gloria-regstra-incremento-de-ventas-en-329-en-el-2024',
    //         imagen: '/n3.png',
    //     },
    //     {
    //         title: 'Ganadería: orgullo y unidad familiar que perdura en el tiempo.',
    //         slug: 'ganaderia-orgullo-y-unidad-familiar-que-perdura-en-el-tiempo',
    //         imagen: '/n4.png',
    //     },
    //     {
    //         title: 'Renuevan certificaciones BASC y OEA',
    //         slug: 'renuevan-certificaciones-basc-y-oea',
    //         imagen: '/n2.png',
    //     },
    //     {
    //         title: 'Leche Gloria regstra incremento de ventas en 32.9% en el 2024',
    //         slug: 'leche-gloria-regstra-incremento-de-ventas-en-329-en-el-2024',
    //         imagen: '/n3.png',
    //     },

    // ]
    return (
        <div className='bgBody'>
            <CarruselBannerFullComponent multimediaContents={banners} viewLogo={false} />
            <div className="containerHomeMain">
                <MarcasComponent />
                <CarruselVideosComponent videos={videos} titularVideo="Gloria Contigo: " colorTxt='' listFiltro={null} />
                <CarruselCampanasComponent videosCampana={videosCampana} titularCampana="Nuestras campañas:" subtitularCampana="" />
                <CarruselVideosHorizontalComponent videosHorizontales={videosHorizontales} titularVideoH="Tendencia en la" subTitularVideoH="comunidad Gloria Contigo" />
                <CarruselProductsComponent />
                <PropositoComponet />
                <LecherosComponet />
                {/* <CarruselNoticiasComponent noticias={noticias} /> */}

            </div>

        </div>
    );
}