import { getNoticias } from '@/actions/noticia/getNoticias';

import InternoBannerComponent from '@/components/banners/Interno';
import ListadoNoticiasComponent from '@/components/noticias/Listado';
import { BannerInterface } from '@/interfaces/bannerInterno';
import styles from '@/styles/scss/noticias.module.scss';
export default async function NoticiasPage() {

    const response2 = await getNoticias();
    const { noticias, paginacion } = response2.data;


    const dataBanner: BannerInterface = {
        imgMobile: '/bbnotm2.webp',
        imgPc: '/bbnotm4.webp',
        titulo: `Novedades que nos <br/> inspiran a <span>seguir <br/>creciendo</span>`,
        descripcion: `Conoce nuestras últimas iniciativas, lanzamientos y acciones que nos impulsan a seguir llevando alimentos de calidad a todo el Perú.`,
        breadcrumb: 'NOTICIAS GLORIA',
        slugbread: '/noticias',
    };
    return (
        <div className={styles.pageNoticiasContainer}>
            <InternoBannerComponent dataBanner={dataBanner} />
            <ListadoNoticiasComponent noticiasData={noticias} paginacionData={paginacion} />
        </div>


    );
}
