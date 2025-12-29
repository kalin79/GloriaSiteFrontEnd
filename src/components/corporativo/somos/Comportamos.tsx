'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import Image from 'next/image';


// Estilos swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styles from '@/styles/scss/somos.module.scss';

const Comportamos = () => {
    const itemComportamos = [
        {
            img: 'compro1.webp',
            title: 'Compromiso',
            descripcion: 'Nos comprometemos con pasión y perseverancia para convertir nuestras ideas en productos que mejoren la vida de nuestros consumidores.',
        },
        {
            img: 'compro2.webp',
            title: 'Integridad',
            descripcion: 'Actuamos con integridad y transparencia; respetando las leyes, normas y procesos para garantizar confianza y seguridad en todo lo que ofrecemos.',
        },
        {
            img: 'compro3.webp',
            title: 'Enfoque en el Cosumidor',
            descripcion: 'Ponemos siempre a nuestros consumidores y clientes en el centro de nuestras decisiones, para responder a sus necesidades y superar sus expectativas.',
        },
        {
            img: 'compro4.webp',
            title: 'Productividad y calidad',
            descripcion: 'Somos productivos y eficientes en el uso de recursos, buscamos la máxima calidad en cada producto.',
        },
        {
            img: 'compro5.webp',
            title: 'Responsabilidad y transparencia',
            descripcion: 'Estamos presentes donde las cosas suceden y decimos las cosas como son para generar relaciones genuinas.',
        },
        // {
        //     img: 'imgc6.webp',
        //     title: 'Empoderamiento',
        //     descripcion: 'Practicamos un liderazgo que empodera a las personas, para que cada acción se convierta en un mejor servicio para nuestros clientes.',
        // },
        // {
        //     img: 'imgc7.webp',
        //     title: 'Aprendizaje',
        //     descripcion: 'Aprendemos y mejoramos constantemente para ofrecer siempre lo mejor de nosotros.',
        // },
    ]
    return (
        <div className={styles.sectionComportamosContainer}>
            <div className='containerFluid'>
                <h3 className={styles.subTitularMain}>¿CÓMO NOS COMPORTAMOS?</h3>
                <h2 className={styles.titularMain}>
                    La manera Gloria <br />
                    de <span>hacer las cosas</span>
                </h2>
            </div>
            <div className='containerFluid'>
                <div className={styles.carruselComportamos}>
                    <Swiper
                        spaceBetween={10}
                        centeredSlides={false}
                        slidesPerView={2} // Muestra 5 películas a la vez
                        navigation
                        pagination={{ clickable: true }}
                        // autoplay={{ delay: 3000, disableOnInteraction: false }}
                        // loop={false}
                        modules={[Navigation, Autoplay]}
                        className={`${styles.SwiperComportamos} SwiperComportamos`}
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
                                        <Image src={`/${item.img}`} alt='' width={590} height={970} />
                                    </div>
                                    <div className={styles.Footer}>
                                        <div>
                                            <h2>{item.title}</h2>
                                            <p>{item.descripcion}</p>
                                        </div>
                                        <button><Image src={`/flecha8.svg`} alt='' width={12} height={6} /></button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}

                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Comportamos
