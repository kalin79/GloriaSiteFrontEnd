'use client';
import { useRouter } from "next/navigation";
import Image from 'next/image';
import styles from '@/styles/scss/noticias.module.scss';
import NoticiaCardComponent from "@/components/noticias/Card";

const Listado = () => {
    const router = useRouter();
    const handleClickNoticias = (slug: string) => {
        router.push(`/noticias/${slug}`)
    }
    const NoticiasData = [
        {
            img: '/111.webp',
            fecha: '14 de julio 2025',
            titulo: 'Gloria amplía “PRO”: portafolio extendido con proteínas enfocadas en la energía',
            categoria: 'PRENSA',
            slug: 'noticia'
        },
        {
            img: '/111.webp',
            fecha: '14 de julio 2025',
            titulo: 'Gloria amplía “PRO”: portafolio extendido con proteínas enfocadas en la energía',
            categoria: 'PRENSA',
            slug: 'noticia'
        },
        {
            img: '/n11.webp',
            fecha: '14 de julio 2025',
            titulo: 'Gloria amplía “PRO”: portafolio extendido con proteínas enfocadas en la energía',
            categoria: 'PRENSA',
            slug: 'noticia'
        },
        {
            img: '/n11.webp',
            fecha: '14 de julio 2025',
            titulo: 'Gloria amplía “PRO”: portafolio extendido con proteínas enfocadas en la energía',
            categoria: 'PRENSA',
            slug: 'noticia'
        },
        {
            img: '/n11.webp',
            fecha: '14 de julio 2025',
            titulo: 'Gloria amplía “PRO”: portafolio extendido con proteínas enfocadas en la energía',
            categoria: 'PRENSA',
            slug: 'noticia'
        }
    ]
    return (
        <div className={styles.listadoContainer}>
            <div className='containerFluid'>
                <div className={styles.noticiaMainContainer}>
                    <div className={styles.noticiaGrid}>
                        <div>
                            <div className={styles.imgContainer}>
                                <Image src={`/fotonot.webp`} width={851} height={608} alt='' />
                            </div>
                        </div>
                        <div>
                            <div>
                                <div className={styles.fechaContainer}>
                                    <div>PRENSA</div>
                                    <div>
                                        <Image src='/fechaIcon2.svg' height={16} width={16} alt='' />
                                        <h4>14 de julio 2025</h4>
                                    </div>
                                </div>
                                <div className={styles.infoContainer}>
                                    <h2>
                                        Gloria amplía “PRO”: portafolio extendido con proteínas enfocadas en la energía
                                    </h2>
                                    <p>
                                        La nueva propuesta de Gloria está pensada para quienes buscan energía saludable y rendimiento físico y mental en cualquier momento del día.
                                    </p>
                                </div>
                                <div className={styles.btnContainer}>
                                    <button onClick={() => handleClickNoticias('/noti')}>
                                        <p>LEER NOTICIA</p>
                                        <Image src='/notarrow.svg' height={14} width={7} alt='LEER NOTICIA' />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.PaginadoNoticasContainer}>
                    {
                        NoticiasData.map((item, index) => (
                            <NoticiaCardComponent
                                key={index}
                                noticiaContent={item}
                                onClick={() => handleClickNoticias(item.slug ?? '')}
                            />
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default Listado
