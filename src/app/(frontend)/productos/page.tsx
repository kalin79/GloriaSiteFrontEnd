// import { getMarcaBySlug } from '@/actions/marca/getMarcaBySlug';
// import { VideosHomeInterface } from '@/interfaces/marca';
// import { VideoInterface } from "@/interfaces/video"; 
// import { CampanaInterface } from '@/interfaces/campana';

import HeaderProductos from '@/components/banners/HeaderProductos';

import ListadoProductos from '@/components/tienda/ListadoProductos';
// import { ProductInterface } from '@/interfaces/producto';
// import Image from 'next/image';

import styles from '@/styles/scss/producto.module.scss';


export default async function MarcaPage() {

    // const response = await getMarcaBySlug('pro');

    // const { banner, slug: slugMarca, avatar_detalle: logo }: { banner: VideoInterface[], slug: string, avatar_detalle: string } = response.data;
    // const { data } = response.data.videos;
    // const { data: dataCamapana } = response.data.campanas;
    return (
        <>
            <div className={styles.pageProductoContainer}>
                <HeaderProductos />
                <ListadoProductos />
            </div>
        </>
    );
}
