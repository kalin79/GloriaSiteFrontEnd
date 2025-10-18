import { getHome } from '@/actions/home/getHome';
import CarruselBannerFullComponent from "@/components/carrusel/FullPage"
// import Image from 'next/image';
import MarcasComponent from "@/components/marcas/Listado";
import CarruselVideosHomeComponent from "@/components/carrusel/CarruselVideosHome";
import CarruselCampanasComponent from "@/components/carrusel/CarruselCampanasHome";

// import CarruselVideosHorizontalComponent from "@/components/carrusel/CarruselVideosHorizontal";
import CarruselProductsComponent from "@/components/carrusel/CarruselProductos";
// import PropositoComponet from "@/components/corporativo/somos/Proposito";

// import CarruselNoticiasComponent from "@/components/carrusel/CaruselNoticias";
// import LecherosComponet from "@/components/banners/Lecheros";

import { MarcaInterface } from '@/interfaces/marca';
import { VideoInterfaceAux } from '@/interfaces/video';
import { TagsAux } from '@/interfaces/producto';
import { BannerInterfaceAux } from '@/interfaces/banner';
import { CampanaInterfaceAux } from '@/interfaces/campana';

export default async function Home() {
    const response = await getHome();
    const { marcas, videos, banners, campanas, tags }: { marcas: MarcaInterface[], videos: VideoInterfaceAux[], banners: BannerInterfaceAux[], campanas: CampanaInterfaceAux[], tags: TagsAux[] } = response.data;
    const { productos, pagination } = response.data.productos;

    return (
        <div className='bodyContainerMain'>

            <CarruselBannerFullComponent multimediaContents={banners} />
            <div className="containerHomeMain">
                <MarcasComponent marcas={marcas} />
                <CarruselVideosHomeComponent videos={videos} titularVideo="Contenido hecho para ti" tipo="video" />
                <CarruselCampanasComponent videosCampana={campanas} titularCampana="Contenido hecho para ti" subtitularCampana="Descubre lo que hacemos y los mensajes que nos inspiran y nos acercan a ti." />
                {/* <CarruselVideosHorizontalComponent videosHorizontales={videosHorizontales} titularVideoH="Tendencia en la" subTitularVideoH="comunidad Gloria Contigo" /> */}
                <CarruselProductsComponent productosData={productos} paginationData={pagination} tagsData={tags} />
                {/* <PropositoComponet /> */}
                {/* <LecherosComponet /> */}
                {/* <CarruselNoticiasComponent noticias={noticias} /> */}

            </div>

        </div>
    );
}