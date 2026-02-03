import { getCategorias, getTiposFiltros, setResultFilterCategory } from '@/actions/tienda/getFiltros';
// import HeaderProductos from '@/components/banners/HeaderProductos';
import ListadoProductosCategorias from '@/components/tienda/ListadoProductosCategorias';
import styles from '@/styles/scss/producto.module.scss';
interface TiendaCategoriaPageProps {
    params: Promise<{ slug: string }>;
}

export default async function TiendaCategoriaPage({ params }: TiendaCategoriaPageProps) {

    // export default async function ProductoPage(props: SlugInterface) {
    // ✅ Desestructurar antes, sin anidamiento
    const { slug } = await params; // 👈 importante: espera el Promise
    if (!slug) {
        throw new Error('Slug no disponible');
    }


    const responseCategoria = await getCategorias();
    const responseFiltros = await getTiposFiltros();
    const responseProductus = await setResultFilterCategory(`categorias_slug=${slug}`);

    const { marcas, nutrientes: tipo_producto, presentaciones, atributos } = responseFiltros.data;
    const { pagination, items: listProducts, categories: infoCategory } = responseProductus.data;
    // const response = await getProductoBySlug(slug);
    // const { producto, productos_relacionados }: { producto: ProductInterface, productos_relacionados: ProductInterface[] } = response.data;
    // console.log(productos_relacionados)


    return (
        <>
            <div className={styles.pageProductoContainer}>
                {/* <HeaderProductos /> */}
                <ListadoProductosCategorias infoCategory={infoCategory} slug={slug} pagination={pagination} listProducts={listProducts} dataCategories={responseCategoria} marcas={marcas} tipo_producto={tipo_producto} presentaciones={presentaciones} atributos={atributos} />
            </div>
        </>
    );
}