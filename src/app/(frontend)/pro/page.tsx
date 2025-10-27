import { getMarcaBySlug } from '@/actions/marca/getMarcaBySlug';
// import { VideosHomeInterface } from '@/interfaces/marca';
import { VideoInterface } from "@/interfaces/video";
// import { CampanaInterface } from '@/interfaces/campana';
import BannerPrincipalComponent from "@/components/pro/HeaderMarca";
import CarruselVideosComponent from "@/components/pro/CarruselVideos";
import CarruselCampanasComponent from "@/components/pro/CarruselProCampanas";
import BannerProComponent from "@/components/pro/BannerPro";
import ListadoProductosComponent from "@/components/pro/Listado";
// import { ProductInterface } from '@/interfaces/producto';
// import Image from 'next/image';

import styles from '@/styles/scss/marcapro.module.scss';


export default async function MarcaPage() {

    const response = await getMarcaBySlug('pro');

    const { banner, slug: slugMarca }: { banner: VideoInterface, slug: string } = response.data;
    const { data } = response.data.videos;
    const { data: dataCamapana } = response.data.campanas;
    return (
        <>

            <BannerPrincipalComponent multimediaContents={banner} />
            <div className={styles.marcaContainerPage}>
                <div className={styles.fondoBg}>
                    <div className={styles.imgBg}></div>
                </div>
                <CarruselVideosComponent videos={data} tipo="video" titularVideo="Contenido hecho para ti" listFiltro={null} />
                <CarruselCampanasComponent videosCampana={dataCamapana} titularCampana="Nuestras Campañas" subtitularCampana="¿Quiénes necesitan PROteína? Todos. Te acompañamos con PROteina para todo lo que PROpongas." />
                <BannerProComponent />
            </div>
            <ListadoProductosComponent slugMarca={slugMarca} />

        </>
    );
}
