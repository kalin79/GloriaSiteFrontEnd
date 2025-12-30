import { getCampanaBySlug } from '@/actions/marca/campana/getCamapanaBySlug';

import BannerPrincipalComponent from "@/components/bonle/HeaderCampanaMain";
import DetalleComponent from "@/components/bonle/CampanaDescripcion";
import CarruselCampanasComponent from "@/components/bonle/CarruselProCampanas";
import RedesSociales from "@/components/redes/Bonle";
import { CampanaInterface } from '@/interfaces/campana';
// import { SlugInterface } from '@/interfaces/slug';
import styles from '@/styles/scss/marcabonle.module.scss';

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
            <div>
                <BannerPrincipalComponent multimediaContents={campana} />
                <div className={`${styles.campanaContainerPage}`}>
                    <DetalleComponent multimediaContents={campana} />
                    <div className={styles.bgProContainer}>
                        <CarruselCampanasComponent videosCampana={related_video} titularCampana="Otras campañas" subtitularCampana="Videos hechos por especialistas para guiarte y acompañarte." />
                    </div>
                </div>
            </div>
        </>
    )
}
