import { getMarcaBySlug } from '@/actions/marca/getMarcaBySlug';
import { VideosHomeInterface } from '@/interfaces/marca';
import { VideoInterface } from "@/interfaces/video";
import { CampanaInterface } from '@/interfaces/campana';
import BannerPrincipalComponent from "@/components/pro/HeaderMarca";
import CarruselVideosComponent from "@/components/pro/CarruselVideos";
import CarruselCampanasComponent from "@/components/carrusel/CarruselCampanas";
import ListadoProductosComponent from "@/components/producto/Listado";
// import { ProductInterface } from '@/interfaces/producto';
import Image from 'next/image';

import styles from '@/styles/scss/marcapro.module.scss';


export default async function MarcaPage() {

    const response = await getMarcaBySlug('gloria');

    const { videos, campanas, banner, slug: slugMarca }: { videos: VideosHomeInterface[], campanas: CampanaInterface[], banner: VideoInterface, slug: string } = response.data;

    return (
        <>

            <BannerPrincipalComponent multimediaContents={banner} />
            <div className={styles.marcaContainerPage}>
                <div className={styles.fondoBg}>
                    <Image src="/bgpro.webp" width={2460} height={2880} alt='' />
                </div>
                <CarruselVideosComponent videos={videos} tipo="video" titularVideo="Contenido hecho para ti" listFiltro={null} />
                <CarruselCampanasComponent videosCampana={campanas} titularCampana="Nuestras Campañas" subtitularCampana="¿Quiénes necesitan PROteína? Todos. Te acompañamos con PROteina para todo lo que PROpongas." />
            </div>
            <ListadoProductosComponent slugMarca={slugMarca} />

        </>
    );
}
