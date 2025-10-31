'use client';
import { useState, useEffect, useRef } from "react";
import Image from 'next/image';
import { ProductInterface } from '@/interfaces/producto';
import HtmlSafeRender from '@/components/HtmlSafeRender';
import SanitizedHtml from '@/components/SanitizedHtml';
import styles from '@/styles/scss/marcapro.module.scss';
import gsap from "gsap";

interface Props {
    productoData: ProductInterface;
}


const DetailMain = ({ productoData }: Props) => {
    const [imageActive, setImageActive] = useState<string | undefined>();
    const [expandido, setExpandido] = useState(false);
    const [textoVisible, setTextoVisible] = useState("");
    const textoRef = useRef<HTMLParagraphElement>(null);
    const limitText = 100;
    useEffect(() => {
        if (productoData.gallery && productoData.gallery.length > 0) {
            setImageActive(productoData.gallery[0]);
        }

        let _text = "";
        if (productoData && productoData.descripcion_corta) {
            _text = productoData.descripcion_corta.slice(0, limitText);
            if (productoData.descripcion_corta.length > limitText) _text += "...";
        }
        setTextoVisible(_text);
    }, [productoData, limitText]);


    // 👉 Actualiza el texto visible cuando cambia el estado
    useEffect(() => {
        const tl = gsap.timeline();

        if (expandido) {
            // animación de expansión
            tl.to(textoRef.current, { height: "auto", duration: 0.6, ease: "power2.out" });
            if (productoData && productoData.descripcion_corta) {
                setTextoVisible(productoData.descripcion_corta);
            }

        } else {
            if (productoData && productoData.descripcion_corta) {
                const alturaCorta = getAlturaTexto(productoData.descripcion_corta.slice(0, limitText) + "...");
                tl.to(textoRef.current, { height: alturaCorta, duration: 0.6, ease: "power2.in" });

                setTextoVisible(productoData.descripcion_corta.slice(0, limitText) + "...");
            }
            // animación de colapso

        }

        return () => {
            tl.kill();
        };
    }, [expandido, productoData, limitText]);

    // función auxiliar: mide la altura del texto corto
    const getAlturaTexto = (contenido: string) => {
        const temp = document.createElement("p");
        temp.style.position = "absolute";
        temp.style.visibility = "hidden";
        temp.style.width = textoRef.current?.offsetWidth + "px";
        temp.innerText = contenido;
        document.body.appendChild(temp);
        const altura = temp.offsetHeight;
        document.body.removeChild(temp);
        return altura;
    };
    return (
        <div className={styles.detailHeaderContainer}>
            <div className="containerFluid">
                <div className={styles.gridDetalleProd}>
                    <div>
                        <div className={styles.productoContainer}>
                            <div className={styles.bannerContainerProducto}>
                                {
                                    (productoData.categoria?.id === 19) ? (
                                        <Image src='/power.webp' width={743} height={1440} alt="ProPower" />
                                    ) : (
                                        <Image src='/bannerDay.webp' width={743} height={1440} alt="ProDay" />
                                    )
                                }

                            </div>
                            <div className={styles.containerProductMain}>
                                <Image src='/flecha.webp' className={styles.flechaImg} width={261} height={1185} alt="" />
                                <div className={styles.productoImg}>
                                    {
                                        (imageActive && imageActive?.trim() != '') && (
                                            <Image src={imageActive} width={1080} height={1380} alt="" />
                                        )
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        {
                            (productoData.categoria?.id === 19) ? (
                                <h2 className={styles.titularPro}><HtmlSafeRender html={productoData.categoria?.title || ''} /></h2>
                            ) : (
                                <h2 className={styles.titularDay}><HtmlSafeRender html={productoData.categoria?.title || ''} /></h2>
                            )
                        }

                        <h1><SanitizedHtml html={productoData.titulo || ''} /></h1>
                        <div className={styles.textComprimido}>
                            <div className={styles.parrafoInfo}>
                                <SanitizedHtml html={textoVisible} />
                            </div>
                            <div className={styles.botonTexto}>
                                <button
                                    onClick={() => setExpandido(!expandido)}
                                >
                                    {
                                        expandido ? (
                                            <Image src='/farriba.svg' width={14} height={7} alt="" />
                                        ) : (
                                            <Image src='/fabajo.svg' width={14} height={7} alt="" />
                                        )
                                    }
                                    <span>MÁS INFO</span>
                                </button>
                            </div>
                        </div>
                        <div className={styles.presentacionesContainer}>
                            <h3 className={styles.subTitulo}>PRESENTACIONES</h3>
                            <div className={styles.listadoContainer}>
                                {
                                    productoData.presentaciones?.map((item, index) => (
                                        <div className={styles.item} key={index}>
                                            <div className={styles.imageContainer}>
                                                <Image src={item.imagen || ''} width={25} height={52} alt="" />
                                            </div>
                                            <div className={styles.titularIcon}>
                                                <SanitizedHtml html={item.nombre} />
                                            </div>
                                        </div>
                                    ))
                                }

                            </div>
                        </div>
                        <div className={styles.presentacionesContainer2}>
                            <div>
                                <h2 className={styles.subTitulo2}>
                                    <SanitizedHtml html={productoData.titulo_caracteristica ?? ''} />
                                </h2>
                                <h3 className={styles.subTitulo}>
                                    <SanitizedHtml html={productoData.sub_titulo_caracteristica ?? ''} />
                                </h3>
                            </div>
                            <div className={styles.listadoItem}>
                                {
                                    productoData.caracteristica?.map((item, index) => (
                                        <div className={styles.item} key={index}>
                                            <div>
                                                <h4><SanitizedHtml html={item.valor} /></h4>
                                            </div>
                                            <p><SanitizedHtml html={item.descripcion} /></p>
                                        </div>
                                    ))
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailMain
