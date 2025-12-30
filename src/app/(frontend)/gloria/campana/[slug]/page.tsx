import { getCampanaBySlug } from '@/actions/marca/campana/getCamapanaBySlug';

import BannerPrincipalComponent from "@/components/banners/HeaderCampana";
import DetalleComponent from "@/components/campanas/Descripcion";
import CarruselCampanasComponent from "@/components/carrusel/CarruselCampanas";
import RedesSociales from "@/components/redes/Gloria";

import { CampanaInterface } from '@/interfaces/campana';
// import { SlugInterface } from '@/interfaces/slug';
import styles from '@/styles/scss/campanas.module.scss';

interface CampanaPageProps {
    params: Promise<{ slug: string }>;
}

export default async function CampanaPage({ params }: CampanaPageProps) {
    const { slug } = await params; // 👈 importante: espera el Promise


    console.log(`Marca recibida: ${slug}`);


    if (!slug) {
        throw new Error('Slug no disponible');
    }

    if (slug.endsWith('.map')) {
        return null; // o algún manejo especial
    }

    const response = await getCampanaBySlug(slug);

    const { campana, related_video }: { campana: CampanaInterface, related_video: CampanaInterface[] } = response.data;


    return (
        <>
            <RedesSociales />
            <div className="bgGloria">
                <BannerPrincipalComponent multimediaContents={campana} />
                <div className={`${styles.campanaContainerPage}`}>
                    <DetalleComponent multimediaContents={campana} />
                    <CarruselCampanasComponent videosCampana={related_video} titularCampana="Nuestras Campañas" subtitularCampana="Ser mamá o papá es una aventura que se vive con el corazón. Por eso, celebramos y reconocemos ese esfuerzo diario que construye un futuro lleno de amor y esperanza." />
                </div>
            </div>
        </>
    )
}
