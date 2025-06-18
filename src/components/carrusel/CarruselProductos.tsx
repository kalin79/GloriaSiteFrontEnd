'use client';
import Image from 'next/image'
import { useRouter } from "next/navigation";

import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from 'swiper/modules';
// import VideoBanner from "@/components/videos/Banner"
import CardComponent from "@/components/producto/Card";
import dynamic from "next/dynamic";
import { ProductInterface } from '@/interfaces/producto';
// Carga react-select sin SSR
const Select = dynamic(() => import("react-select"), { ssr: false });

// Estilos swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styles from '@/styles/scss/producto.module.scss';
type OptionType = {
    value: string;
    label: string;
};


const CarruselProductos = () => {
    const router = useRouter();
    const products: ProductInterface[] = [
        {
            title: 'Leche Gloria UHT Entera',
            presentacion: 'Presentación caja de 1 L',
            idMarca: 1,
            marca: 'Gloria',
            slug: 'leche-gloria-uht-entera',
            imagen: '/p4.png',
            receta: true
        },
        {
            title: 'LECHE EN POLVO INSTANTÁNEA',
            presentacion: 'Presentación botella de 946 mL',
            idMarca: 1,
            marca: 'Gloria',
            slug: 'leche-en-polvo-instantanea',
            imagen: '/p5.png',
            receta: false
        },
        {
            title: 'Yogurt Gloria Durazno',
            presentacion: 'Presentación botella de 1 kg',
            idMarca: 2,
            marca: 'BONLE',
            slug: 'bonle-uht-sin-lactosa',
            imagen: '/p6.png',
            receta: true
        },
        {
            title: 'Leche Gloria UHT Entera',
            presentacion: 'Presentación caja de 1 L',
            idMarca: 1,
            marca: 'Gloria',
            slug: 'leche-gloria-uht-entera',
            imagen: '/p4.png',
            receta: true
        },
        {
            title: 'LECHE EN POLVO INSTANTÁNEA',
            presentacion: 'Presentación botella de 946 mL',
            idMarca: 1,
            marca: 'Gloria',
            slug: 'leche-en-polvo-instantanea',
            imagen: '/p5.png',
            receta: false
        },
        {
            title: 'Yogurt Gloria Durazno',
            presentacion: 'Presentación botella de 1 kg',
            idMarca: 2,
            marca: 'BONLE',
            slug: 'bonle-uht-sin-lactosa',
            imagen: '/p6.png',
            receta: true
        },

    ]
    const options: OptionType[] = [
        { value: "Gloria", label: "Gloria" },
        { value: "Pro", label: "Pro" },
        { value: "ActiBio", label: "ActiBio" },
        { value: "Bonle", label: "Bonle" },
        { value: "Battimix", label: "Battimix" },
    ];
    const handleChange = (selectedOption: OptionType | null) => {
        console.log("Selected:", selectedOption);
    };
    const handleClickViewVideo = (slug: string, marca: string) => {
        router.push(`/${marca}/producto/${slug}`)
    }
    return (
        <div className={`containerFluidLeft`}>
            <div className={`${styles.productoCarruselContainer}`}>
                <div>
                    <h3 className='titularPequeno boldMedium'>NUESTROS PRODUCTOS</h3>
                    <h2 className='titularExtraGrande'>
                        Explora nuestra <br />
                        selección de <br />
                        productos:
                    </h2>
                    <p className='parrafoGrande'>
                        Nutritivos, deliciosos y <br />
                        perfectos para toda la familia. <br />
                        Desliza y encuentra tus <br />
                        favoritos.
                    </p>
                    <div className={`${styles.chefContent}`}>
                        <Image src="/iconChef.svg" width={42} height={47} alt='Receta' />
                        <p className='parrafoMediano celesteTxt'>
                            Producto <br />con receta
                        </p>
                    </div>
                </div>
                <div>
                    <div className={`${styles.headerContainer}`}>
                        <div>
                            <p className='parrafoMediano'>
                                Filtrar productos por marca:
                            </p>
                            <Select
                                inputId="searchableProductHome"
                                options={options}
                                onChange={(newValue) => handleChange(newValue as OptionType | null)}
                                isSearchable={true}
                                placeholder="Buscar..."
                                classNamePrefix="customSelectHomeProducts"
                            />
                        </div>
                        {/* <div>
                            <Link href={`/marca/producto/gloria`} className='buttonBtn' title='Ir a productos'>Ver todos los productos</Link>
                        </div> */}
                    </div>
                    <div className={`${styles.bodyContainer}`}>
                        <Swiper
                            spaceBetween={10}
                            slidesPerView={"auto"} // Permite ajustar el tamaño según el contenido
                            freeMode={true} // Activa el desplazamiento libre
                            grabCursor={true} // Muestra el cursor tipo "agarre"
                            style={{ overflowX: "auto" }} // Permite el scroll horizontal
                            className={`swiperScrollHorizontal`}
                        >
                            {products.map((item, index) => (
                                <SwiperSlide
                                    // style={{ width: "auto" }}
                                    key={index}
                                    className={styles.slide}
                                >
                                    <CardComponent
                                        productContents={item}
                                        onClick={() => handleClickViewVideo(item.slug, item.marca)}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default CarruselProductos
