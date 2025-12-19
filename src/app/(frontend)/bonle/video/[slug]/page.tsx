import { getVideoBySlug } from '@/actions/marca/video/getVideoBySlug';
import BannerPrincipalComponent from "@/components/bonle/HeaderVideoMain";
import DetalleComponent from "@/components/bonle/VideoDescripcion";
import CarruselVideosComponent from "@/components/bonle/CarruselVideosRelacionados";

// import TabsComponent from "@/components/video/Tabs";
import { VideoInterface } from "@/interfaces/video";
// import { SlugInterface } from '@/interfaces/slug';


import styles from '@/styles/scss/marcabonle.module.scss';
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
            <div>
                <BannerPrincipalComponent multimediaContents={video} />
                <div className={`${styles.campanaContainerPage}`}>
                    <DetalleComponent multimediaContents={video} />
                    <div className={styles.bgProContainer}>
                        <div className="containerFluid">
                            <CarruselVideosComponent videosCampana={related_video} titularCampana="Contenido hecho para ti " subtitularCampana="Nuestros especialistas resuelven todas tus dudas sobre la proteína y cómo <br />alcanzar todo lo que te PROpongas." />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


