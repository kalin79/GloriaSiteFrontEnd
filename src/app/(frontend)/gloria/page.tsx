import { getMarcaBySlug } from '@/actions/marca/getMarcaBySlug';
// import { VideosHomeInterface } from '@/interfaces/marca';
import { VideoInterface } from "@/interfaces/video";
// import { CampanaInterface } from '@/interfaces/campana';
import BannerPrincipalComponent from "@/components/banners/HeaderMarca";
import CarruselVideosComponent from "@/components/carrusel/CarruselVideos";
import CarruselCampanasComponent from "@/components/carrusel/CarruselCampanas";
import ListadoProductosComponent from "@/components/producto/Listado";
// import { ProductInterface } from '@/interfaces/producto';
import Image from 'next/image';

import styles from '@/styles/scss/marca.module.scss';


export default async function MarcaPage() {

    const response = await getMarcaBySlug('gloria');
    const { banner, slug: slugMarca }: { banner: VideoInterface, slug: string } = response.data;
    const { data } = response.data.videos;
    // const { data: dataCamapana, pagination: paginationCampana } = response.data.campanas;
    const { data: dataCamapana } = response.data.campanas;


    return (
        <>

            <BannerPrincipalComponent multimediaContents={banner} />
            <div className={styles.marcaContainerPage}>
                <div className={styles.fondoBg}>
                    <Image src="/5.webp" width={2460} height={2880} alt='' />
                </div>
                <CarruselVideosComponent videos={data} tipo="video" titularVideo="Contenido hecho para ti" listFiltro={null} />
                {/* <CarruselVideosComponent videos={videos} titularVideo="Categorías" colorTxt='blanco' listFiltro={categoria_videos} /> */}
                <CarruselCampanasComponent videosCampana={dataCamapana} titularCampana="Nuestras Campañas" subtitularCampana="Ser mamá o papá es una aventura que se vive con el corazón. Por eso, celebramos y reconocemos ese esfuerzo diario que construye un futuro lleno de amor y esperanza." />

            </div>
            <ListadoProductosComponent slugMarca={slugMarca} />

        </>
    );
}
