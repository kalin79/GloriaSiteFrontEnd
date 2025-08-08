import { getMarcaBySlug } from '@/actions/marca/getMarcaBySlug';
import { SlugInterface } from '@/interfaces/slug';
import { VideosHomeInterface, ProductosHomeInterface, CampanasHomeInterface, CategoriaVideosHomeInterface, TagsHomeInterface } from '@/interfaces/marca';

// import BannerPrincipalComponent from "@/components/banners/Header";
import CarruselVideosComponent from "@/components/carrusel/CarruselVideos";
// import CarruselCampanasComponent from "@/components/carrusel/CarruselCampanas";
// import ListadoProductosComponent from "@/components/producto/Listado";


import styles from '@/styles/scss/marca.module.scss';


export default async function MarcaPage(props: SlugInterface) {
    // ✅ Desestructurar antes, sin anidamiento
    const params = await Promise.resolve(props.params); // ✅ workaround válido
    const { marca } = params;
    console.log(`Marca recibida: ${marca}`);
    if (!marca) {
        throw new Error('Slug no disponible');
    }
    const response = await getMarcaBySlug(marca);
    const { videos, productos, campanas, categoria_videos, tags }: { videos: VideosHomeInterface[], productos: ProductosHomeInterface[], campanas: CampanasHomeInterface[], categoria_videos: CategoriaVideosHomeInterface[], tags: TagsHomeInterface[] } = response.data;


    return (
        <>

            {/* <BannerPrincipalComponent multimediaContents={banners} /> */}
            <div className={styles.marcaContainerPage}>
                <CarruselVideosComponent videos={videos} titularVideo="Te Recomendamos" colorTxt='blanco' listFiltro={null} />
                <CarruselVideosComponent videos={videos} titularVideo="Categorías" colorTxt='blanco' listFiltro={categoria_videos} />
                {/* <CarruselCampanasComponent videosCampana={campanas} titularCampana="CAMPAÑAS GLORIA" subtitularCampana="Videos que inspiran" /> */}
                {/* <ListadoProductosComponent products={products} /> */}
            </div>

        </>
    );
}
