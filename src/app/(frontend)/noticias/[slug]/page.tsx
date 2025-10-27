// import { getProductoBySlug } from '@/actions/marca/producto/getProductoBySlug';

import InternoBannerComponent from '@/components/banners/InternoNoticia';
import DetalleComponent from '@/components/noticias/Detalle';
import { BannerInterface } from '@/interfaces/bannerInterno';

import styles from '@/styles/scss/noticias.module.scss';


interface CampanaPageProps {
    params: Promise<{ slug: string }>;
}

export default async function ProductoPage({ params }: CampanaPageProps) {

    // export default async function ProductoPage(props: SlugInterface) {
    // ✅ Desestructurar antes, sin anidamiento
    const { slug } = await params; // 👈 importante: espera el Promise
    if (!slug) {
        throw new Error('Slug no disponible');
    }

    // const response = await getProductoBySlug(slug);
    // const { producto, productos_relacionados }: { producto: ProductInterface, productos_relacionados: ProductInterface[] } = response.data;
    // console.log(productos_relacionados)

    const dataBanner: BannerInterface = {
        imgMobile: '/dnotm.webp',
        imgPc: '/dnot.webp',
        titulo: `Gloria amplía “PRO”: <br />portafolio extendido <br />con proteínas <br />enfocadas en la <br />energía`,
        descripcion: ``,
        breadcrumb: 'Mundo Gloria abre sus puertas...',
        slugbread: `/noticias/${slug}`,
        slugbreadHEADER: '/noticias',
        breadHeader: 'NOTICIAS',
        categoria: 'PRENSA',
        fecha: '14 de julio 2025',
    };
    return (
        <>
            <div className={styles.pageNoticiaDetalle}>
                <InternoBannerComponent dataBanner={dataBanner} />
                <DetalleComponent />
            </div>
        </>
    );
}