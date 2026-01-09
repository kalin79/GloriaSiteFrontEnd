import { getCategorias, getTiposFiltros, setResultFilters } from '@/actions/tienda/getFiltros';


import HeaderProductos from '@/components/banners/HeaderProductos';

import ListadoProductos from '@/components/tienda/ListadoProductos';
// import { ProductInterface } from '@/interfaces/producto';
// import Image from 'next/image';

import styles from '@/styles/scss/producto.module.scss';


export default async function MarcaPage() {

    const responseCategoria = await getCategorias();
    const responseFiltros = await getTiposFiltros();
    const responseProductus = await setResultFilters('');

    const { marcas, nutrientes: tipo_producto, presentaciones, atributos } = responseFiltros.data;
    const { pagination, items: listProducts } = responseProductus.data;
    // const { data: dataCamapana } = response.data.campanas;
    return (
        <>
            <div className={styles.pageProductoContainer}>
                <HeaderProductos />
                <ListadoProductos pagination={pagination} listProducts={listProducts} dataCategories={responseCategoria} marcas={marcas} tipo_producto={tipo_producto} presentaciones={presentaciones} atributos={atributos} />
            </div>
        </>
    );
}
