'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import Image from 'next/image';
import styles from '@/styles/scss/corporativo.module.scss';

// Estilos swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const Ganaderos = () => {
    const itemComportamos = [
        {
            img: 'icongana1.svg',
            title: 'Establos con energía solar',
            descripcion: '100% de la energía eléctrica de los tanques de enfriamiento de leche de nuestros socios ganaderos son cubierta con energía solar.',
        },
        {
            img: 'icongana2.svg',
            title: 'Más de 400 ganaderos',
            descripcion: 'De todo el país, han sido beneficiados con la implementación de tanques de enfriamiento de leche.',
        },
        {
            img: 'icongana3.svg',
            title: '60 tanques de enfriamiento de leche',
            descripcion: ' Con energía fotovoltaica, instalados desde el 2024 en establos que no cuentan con energía eléctrica convencional.',
        },
        {
            img: 'icongana4.svg',
            title: 'Acompañamiento y capacitación permanente',
            descripcion: 'Buscamos el desarrollo del sector ganadero, por eso contamos con un equipo de asesores especializados que los acompañan para fortalecer su producción e implementar procesos que la hagan más sostenible.',
        },
        {
            img: 'icongana5.svg',
            title: 'Pagos transparentes y puntuales',
            descripcion: 'Impulsamos a nuestros ganaderos a alcanzar los más altos estándares de producción con un esquema de pagos que premia la calidad higiénica, el volumen, las certificaciones y el buen manejo de la cadena de frío en la recolección.',
        },
        {
            img: 'icongana6.svg',
            title: 'Programa de Productividad Ganadera PPG',
            descripcion: ' Trabajamos por construir un sector más fuerte con un programa que pone en primer lugar dos pilares esenciales para su crecimiento: la nutrición y la reproducción animal.',
        },
    ]
    return (
        <div className={styles.ganaderosContainer}>
            <div className={styles.headerGanaderos}>
                <div>
                    <div className='containerFluid'>
                        <div className={styles.infoHeaderContainer}>
                            <h3>DESARROLLO GANADERO</h3>
                            <h2>
                                Impulsamos el <br /><span>desarrollo ganadero <br />de nuestro país</span>
                            </h2>
                            <p>
                                En cada región del país, los ganaderos confían en nosotros y nosotros en ellos. Los acompañamos con asistencia técnica, herramientas y compromiso mutuo para que la mejor leche pueda llegar a millones de familias peruanas, de forma sostenible y responsable.
                            </p>
                        </div>
                        <div className={styles.portalGanaderosContainer}>
                            <div className={styles.portalBox}>
                                <div>
                                    <Image src={`/logoga.svg`} width={140} height={134} alt='' />
                                </div>
                                <div>
                                    <h2>
                                        ¿Eres uno de nuestros aliados ganaderos?
                                    </h2>
                                    <p>
                                        Consulta tu historial de leche acopiada, servicios y beneficios por ser proveedor
                                        de Gloria.
                                    </p>
                                    <a href="https://www.portalganaderogloria.com.pe/" target='_blank'>PORTAL GANADEROS</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.imgFullPage}>
                    <Image src={`/bgganaderos2.webp`} width={3280} height={2120} alt='' />
                </div>
            </div>

            <div className={styles.carruselComportamos}>
                <Swiper
                    spaceBetween={10}
                    centeredSlides={false}
                    slidesPerView={1} // Muestra 5 películas a la vez
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    loop={false}
                    modules={[Navigation, Autoplay]}
                    className={`${styles.SwiperComportamos} SwiperGanaderos`}
                    breakpoints={{
                        750: {
                            slidesPerView: 3
                        },
                        992: {
                            slidesPerView: 4
                        },
                        1400: {
                            slidesPerView: 5
                        }
                    }}

                >
                    {itemComportamos.map((item, index) => (
                        <SwiperSlide
                            key={index}
                            className={``}
                        >
                            <div className={styles.cardComportamosContainer}>
                                <div className={styles.body}>
                                    <div className={styles.iconContainer}>
                                        <Image src={`/${item.img}`} alt='' width={90} height={109} />
                                    </div>
                                </div>
                                <div className={styles.Footer}>
                                    <h2>{item.title}</h2>
                                    <p>{item.descripcion}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>
        </div>
    )
}

export default Ganaderos
