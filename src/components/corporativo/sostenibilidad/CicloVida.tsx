'use client';
import { useRef, useState, useEffect } from 'react';
import HtmlSafeRender from '@/components/HtmlSafeRender';
import gsap from 'gsap';
import Image from 'next/image';
import styles from '@/styles/scss/corporativo.module.scss';
interface FasesInterface {
    icon: string,
    number: string,
    titulo: string,
    descripcion: string,
}
interface Props {
    dataFase: FasesInterface[],
}
const CicloVida = ({ dataFase }: Props) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const boxRefs = useRef<(HTMLDivElement | null)[]>([]);
    useEffect(() => {
        dataFase.forEach((item, index) => {
            const el = boxRefs.current[index];
            if (!el) return;

            if (openIndex === index) {
                el.style.display = 'block';
                gsap.fromTo(
                    el,
                    { height: 0, opacity: 0 },
                    { height: 'auto', opacity: 1, duration: 0.4, ease: 'power2.out' }
                );
            } else {
                gsap.to(el, {
                    height: 0,
                    opacity: 0,
                    duration: 0.3,
                    ease: 'power2.inOut',
                    onComplete: () => {
                        if (el) el.style.display = 'none';
                    },
                });
            }
        });
    }, [openIndex, dataFase]);
    return (
        <div className={styles.faseContainer}>
            <div className='containerFluid'>
                <div className={styles.gridContainer}>
                    {
                        dataFase.map((item, index) => (
                            index % 2 === 0 ? (
                                <div key={index}>
                                    <div className={styles.gridContainer2}>
                                        <div>
                                            <Image src={item.icon} className={styles.iconFase} width={322} height={322} alt='' />
                                        </div>
                                        <div className={styles.panelInfo}>
                                            <h2>{item.number}</h2>
                                            <p>{item.titulo}</p>
                                            <button onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                                                <Image src='/mas.svg' className={styles.iconInfo} width={16} height={16} alt='' />
                                                <span>INFO</span>
                                            </button>
                                            <div className={styles.infoPopup} ref={(el) => {
                                                boxRefs.current[index] = el;
                                            }}>
                                                <div className={styles.closePopup} onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                                                    <Image src='/closeC.svg' className={styles.iconInfo} width={16} height={16} alt='' />
                                                </div>
                                                <div className={styles.contentInfo}>
                                                    <HtmlSafeRender html={item.descripcion} />
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            {
                                                index != (dataFase.length - 1) && (
                                                    <>
                                                        <svg width="301" height="123" className={styles.flechaBox} viewBox="0 0 301 123" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM298 123L300.887 118H295.113L298 123ZM3 3V3.5H258V3V2.5H3V3ZM298 43H297.5V118.5H298H298.5V43H298ZM258 3V3.5C279.815 3.5 297.5 21.1848 297.5 43H298H298.5C298.5 20.6325 280.368 2.5 258 2.5V3Z" fill="#8FD2EA" />
                                                        </svg>
                                                        <svg width="12" height="86" className={styles.flechaBoxM} viewBox="0 0 12 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M0.666667 6C0.666666 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666667 6 0.666667C3.05448 0.666666 0.666667 3.05448 0.666667 6ZM6 86L11.7735 76L0.226494 76L6 86ZM6 6L5 6L5 25.749L6 25.749L7 25.749L7 6L6 6ZM6 25.749L5 25.749L5 77L6 77L7 77L7 25.749L6 25.749Z" fill="#8FD2EA" />
                                                        </svg>
                                                    </>
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>

                            ) : (
                                <div key={index}>
                                    <div className={styles.gridContainer2}>
                                        <div>
                                            {
                                                index != (dataFase.length - 1) && (
                                                    <>
                                                        <svg width="301" height="123" className={styles.flechaBox} viewBox="0 0 301 123" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M300.667 3C300.667 4.47276 299.473 5.66667 298 5.66667C296.527 5.66667 295.333 4.47276 295.333 3C295.333 1.52724 296.527 0.333333 298 0.333333C299.473 0.333333 300.667 1.52724 300.667 3ZM3 123L0.113251 118H5.88675L3 123ZM298 3V3.5H43V3V2.5H298V3ZM3 43H3.5V118.5H3H2.5V43H3ZM43 3V3.5C21.1848 3.5 3.5 21.1848 3.5 43H3H2.5C2.5 20.6325 20.6325 2.5 43 2.5V3Z" fill="#8FD2EA" />
                                                        </svg>
                                                        <svg width="12" height="86" className={styles.flechaBoxM} viewBox="0 0 12 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M0.666667 6C0.666666 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666667 6 0.666667C3.05448 0.666666 0.666667 3.05448 0.666667 6ZM6 86L11.7735 76L0.226494 76L6 86ZM6 6L5 6L5 25.749L6 25.749L7 25.749L7 6L6 6ZM6 25.749L5 25.749L5 77L6 77L7 77L7 25.749L6 25.749Z" fill="#8FD2EA" />
                                                        </svg>
                                                    </>
                                                )
                                            }
                                        </div>
                                        <div className={styles.panelInfo}>
                                            <h2>{item.number}</h2>
                                            <p>{item.titulo}</p>
                                            <button onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                                                <Image src='/mas.svg' className={styles.iconInfo} width={16} height={16} alt='' />
                                                <span>INFO</span>
                                            </button>
                                            <div className={styles.infoPopup} ref={(el) => {
                                                boxRefs.current[index] = el;
                                            }}>
                                                <div className={styles.closePopup} onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                                                    <Image src='/closeC.svg' className={styles.iconInfo} width={16} height={16} alt='' />
                                                </div>
                                                <div className={styles.contentInfo}>
                                                    <HtmlSafeRender html={item.descripcion} />
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <Image src={item.icon} className={styles.iconFase} width={322} height={322} alt='' />
                                        </div>
                                    </div>
                                </div>
                            )
                        ))
                    }



                </div>
            </div>
        </div>
    )
}

export default CicloVida
