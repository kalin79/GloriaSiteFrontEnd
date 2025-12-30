import { getVideoBySlug } from '@/actions/marca/video/getVideoBySlug';
import BannerPrincipalComponent from "@/components/banners/Header";
import DetalleComponent from "@/components/video/Descripcion";
import CarruselVideosComponent from "@/components/video/CarruselVideos";
import RedesSociales from "@/components/redes/Gloria";

// import TabsComponent from "@/components/video/Tabs";
import { VideoInterface } from "@/interfaces/video";
// import { SlugInterface } from '@/interfaces/slug';

import styles from '@/styles/scss/campanas.module.scss';

interface CampanaPageProps {
    params: Promise<{ slug: string }>;
}
export default async function VideoPage({ params }: CampanaPageProps) {
    // export default async function VideoPage(props: SlugInterface) {
    // ✅ Desestructurar antes, sin anidamiento
    const { slug } = await params; // 👈 importante: espera el Promise

    const response = await getVideoBySlug(slug);
    const { video, related_video }: { video: VideoInterface, related_video: VideoInterface[] } = response.data;
    // console.log(video)

    return (
        <>
            <RedesSociales />
            <div className="bgGloria">
                <BannerPrincipalComponent multimediaContents={video} />
                <div className={`${styles.campanaContainerPage}`}>
                    <DetalleComponent multimediaContents={video} />
                    <div className="containerFluid">
                        <CarruselVideosComponent videosCampana={related_video} titularCampana="Contenido hecho para ti" subtitularCampana="Videos hechos por especialistas para guiarte y acompañarte." />
                    </div>
                </div>
            </div>

            {/* <div className="bgGloria">
                <BannerPrincipalComponent multimediaContents={video} />
                <div className={`${styles.productoContainerPage}`}>
                    <div className="containerFluid">
                        <TabsComponent video={video} relatedVideo={related_video} />
                    </div>
                </div>
            </div> */}
        </>
    )
}


