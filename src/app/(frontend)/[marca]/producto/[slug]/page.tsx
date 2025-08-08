import { getProductoBySlug } from '@/actions/marca/producto/getProductoBySlug';

import BannerPrincipalComponent from "@/components/banners/Producto";
import DetallePrincipalComponent from "@/components/producto/DetailMain";
import TabsComponent from "@/components/producto/Tabs";
import CarruselProductsRelacionadosComponent from "@/components/carrusel/CarruselProductosRelacionados";
import { SlugInterface } from '@/interfaces/slug';

import { ProductInterface } from '@/interfaces/producto';
import styles from '@/styles/scss/producto.module.scss';

export default async function ProductoPage(props: SlugInterface) {
    // ✅ Desestructurar antes, sin anidamiento
    const params = await Promise.resolve(props.params); // ✅ workaround válido
    const { slug, marca } = params;

    console.log(`Marca recibida: ${marca}`);
    if (!slug) {
        throw new Error('Slug no disponible');
    }

    const response = await getProductoBySlug(slug);
    const { producto, productos_relacionados }: { producto: ProductInterface, productos_relacionados: ProductInterface[] } = response.data;
    // console.log(productos_relacionados)


    return (
        <>
            <div className="bgGloria">
                <BannerPrincipalComponent multimediaContents={producto} />
                <div className={`${styles.productoContainerPage}`}>
                    <DetallePrincipalComponent productoData={producto} />
                    <TabsComponent productoData={producto} />
                    <CarruselProductsRelacionadosComponent productosRelacionados={productos_relacionados} />
                </div>
            </div>
        </>
    );
}