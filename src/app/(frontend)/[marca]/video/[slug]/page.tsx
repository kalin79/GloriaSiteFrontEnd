import { getVideoBySlug } from '@/actions/marca/video/getVideoBySlug';
import BannerPrincipalComponent from "@/components/banners/Header";
import TabsComponent from "@/components/video/Tabs";
import { VideoInterface } from "@/interfaces/video";
import { SlugInterface } from '@/interfaces/slug';

import styles from '@/styles/scss/producto.module.scss';

export default async function VideoPage(props: SlugInterface) {
    // ✅ Desestructurar antes, sin anidamiento
    const params = await Promise.resolve(props.params); // ✅ workaround válido
    const { slug, marca } = params;

    console.log(`Marca recibida: ${marca}`);
    if (!slug) {
        throw new Error('Slug no disponible');
    }

    const response = await getVideoBySlug(slug);
    const { video, related_video }: { video: VideoInterface, related_video: VideoInterface[] } = response.data;


    return (
        <>
            <div className="bgGloria">
                <BannerPrincipalComponent multimediaContents={video} />
                <div className={`${styles.productoContainerPage}`}>
                    <div className="containerFluid">
                        <TabsComponent video={video} relatedVideo={related_video} />
                    </div>
                </div>
            </div>
        </>
    )
}


