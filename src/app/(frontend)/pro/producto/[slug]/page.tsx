import { getProductoBySlug } from '@/actions/marca/producto/getProductoBySlug';

import BannerPrincipalComponent from "@/components/pro/BannerProductoMain";
import DetallePrincipalComponent from "@/components/pro/DetalleMainProducto";
import BannerInternoComponent from "@/components/pro/BannerProInterna";
import TabsComponent from "@/components/pro/TabsPro";
import CarruselProductsRelacionadosComponent from "@/components/pro/CarruselProductosRelacionados";
// import { SlugInterface } from '@/interfaces/slug';

import { ProductInterface } from '@/interfaces/producto';
import styles from '@/styles/scss/marcapro.module.scss';

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

    const response = await getProductoBySlug(slug);
    const { producto, productos_relacionados }: { producto: ProductInterface, productos_relacionados: ProductInterface[] } = response.data;
    console.log(productos_relacionados)


    return (
        <>
            <div>
                <BannerPrincipalComponent multimediaContents={producto} />
                <div className={`${styles.productoContainerPage}`}>
                    <DetallePrincipalComponent productoData={producto} />
                    <TabsComponent productoData={producto} />
                    <BannerInternoComponent productoData={producto} />
                    <CarruselProductsRelacionadosComponent productosRelacionados={productos_relacionados} />
                </div>

            </div>
        </>
    );
}