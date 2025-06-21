'use client';
import { useState } from "react";
import Image from 'next/image';
import styles from '@/styles/scss/corporativo.module.scss';
interface AccordionItem {
    title: string;
    content: string;
}
interface AccordionProps {
    items: AccordionItem[];
}
const LatasBeneficios = ({ items }: AccordionProps) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const toggleItem = (index: number) => {
        setOpenIndex((prev) => (prev === index ? null : index));
    };
    return (
        <div className={styles.latasContainer}>
            <div className='containerFluid'>
                <div className={styles.gridContainer}>
                    <div>
                        <div className={styles.imgContainer}>
                            <Image src='/lata.webp' width={600} height={1224} alt='' />
                        </div>
                    </div>
                    <div>
                        <h2 className='titularMediano celesteTxt fontLight'>Estos son sus principales beneficios</h2>
                        <div className={styles.AccordionContainer}>
                            {items.map((item, index) => (
                                <div key={index} className={`${styles.itemBox} ${openIndex === index ? styles.active : ''}`}>
                                    <div className={styles.headerContainer}>
                                        <button
                                            onClick={() => toggleItem(index)}
                                            className=""
                                        >
                                            <span className="celesteTxt titularPequeno2">{item.title}</span>
                                            <Image src='/arrow2.svg' width={16} height={8} alt="" />
                                        </button>
                                    </div>
                                    <div className={styles.viewContent}>
                                        {item.content}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LatasBeneficios
