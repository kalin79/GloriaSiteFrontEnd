import { getMarcaBySlug } from '@/actions/marca/getMarcaBySlug';
// import { VideosHomeInterface } from '@/interfaces/marca';
import { VideoInterface } from "@/interfaces/video";
import { CampanaInterface } from '@/interfaces/campana';
import BannerPrincipalComponent from "@/components/bonle/HeaderMarca";
import CarruselVideosComponent from "@/components/bonle/CarruselVideos";
import CarruselCampanasComponent from "@/components/bonle/CarruselProCampanas";
import BannerProComponent from "@/components/bonle/BannerPro";
import ListadoProductosComponent from "@/components/bonle/Listado";
// import { ProductInterface } from '@/interfaces/producto';
// import Image from 'next/image';

import styles from '@/styles/scss/marcabonle.module.scss';


export default async function MarcaPage() {

    const response = await getMarcaBySlug('bonle');

    const { banner, slug: slugMarca }: { campanas: CampanaInterface[], banner: VideoInterface, slug: string } = response.data;
    const { data } = response.data.videos;
    const { data: dataCamapana } = response.data.campanas;
    return (
        <>

            <BannerPrincipalComponent multimediaContents={banner} />
            <div className={styles.marcaContainerPage}>
                <div className={styles.fondoBg}>
                    <div className={styles.imgBg}></div>
                </div>
                <CarruselVideosComponent videos={data} tipo="video" titularVideo="Si te identificas, vamos en buen camino." listFiltro={null} />
                <CarruselCampanasComponent videosCampana={dataCamapana} titularCampana="Nos inspiramos en ti" subtitularCampana="Celebramos a mamás y a papás que resuelven el día a día todos los días. Estamos contigo en ese disfraz a última hora." />
                <BannerProComponent />
            </div>
            <ListadoProductosComponent slugMarca={slugMarca} />

        </>
    );
}
