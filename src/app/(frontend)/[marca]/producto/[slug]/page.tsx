import BannerPrincipalComponent from "@/components/banners/Producto";
import DetallePrincipalComponent from "@/components/producto/DetailMain";
import TabsComponent from "@/components/producto/Tabs";
import CarruselProductsRelacionadosComponent from "@/components/carrusel/CarruselProductosRelacionados";

import { BannerInterface } from '@/interfaces/banner';
import { ProductInterface } from '@/interfaces/producto';
import styles from '@/styles/scss/producto.module.scss';

export default function Producto() {
    const banners: BannerInterface = {
        title: 'Leche Entera <br />UHT Gloria',
        subTitle: '',
        idMarca: 1,
        marca: 'Gloria',
        multimedia: '/productob2.webp',
        logoMarca: '/gloriaMarca.svg',
    };
    const producto: ProductInterface = {
        title: 'Leche Entera UHT Gloria',
        presentaciones: [
            {
                descripcion: 'Caja 1 L',
                imagen: '/p1.svg',
            },
            {
                descripcion: 'Botella <br />946 ml',
                imagen: '/p2.svg',
            },
            {
                descripcion: 'Bolsa <br />900 ml',
                imagen: '/p3.svg',
            }
        ],
        idMarca: 1,
        marca: 'Gloria',
        receta: true,
        imagenes: [
            {
                imagen: '/t4.png',
            },
            {
                imagen: '/t2.png',
            },
            {
                imagen: '/t3.png',
            }
        ],
        caracteristicas: [
            {
                descripcion: 'Grasas',
                valor: '6.3 g',
            },
            {
                descripcion: 'Carbohidratos',
                valor: '9.6 g',
            },
            {
                descripcion: 'Proteínas',
                valor: '5.8 g',
            },
            {
                descripcion: 'Energía',
                valor: '236 kCal',
            }
        ]
    }
    return (
        <>
            <div className="bgGloria">
                <BannerPrincipalComponent multimediaContents={banners} />
                <div className={`${styles.productoContainerPage}`}>
                    <div className="containerFluid">
                        <DetallePrincipalComponent productoData={producto} />
                        <TabsComponent />
                        <CarruselProductsRelacionadosComponent />
                    </div>
                </div>
            </div>
        </>
    );
}