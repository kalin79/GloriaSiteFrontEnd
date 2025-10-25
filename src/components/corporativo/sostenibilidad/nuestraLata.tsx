'use client';
import Image from 'next/image';
import styles from '@/styles/scss/corporativo.module.scss';
const nuestraLata = () => {
    return (
        <div className={styles.nuestraLataContainer}>
            <div className={styles.lataHeader}>
                <div className='containerFluid'>
                    <div className={styles.gridContainer}>
                        <div>
                            <h2>
                                <span>Nuestra Lata:</span> La mejor manera de
                                llevar nutrición a cada <span>rincón del país</span>
                            </h2>
                        </div>
                        <div>
                            <p>
                                Elegimos este envase por su resistencia, seguridad y
                                compromiso con el medio ambiente.
                                Hoy, sigue siendo una de las formas más eficientes y
                                sostenibles de llevar nuestros productos a todo el Perú.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.bannerLata}>
                <Image src={`/latabg.webp`} height={3280} width={1324} alt='La mejor manera de llevar nutrición a cada rincón del país' />
            </div>
            <div className={styles.itemLatasContainer}>
                <div className='containerFluid'>
                    <div className={styles.gridContainer}>
                        <div className={styles.cardItemContainer}>
                            <div className={styles.iconContainer}>
                                <Image src={`/iconlata1.svg`} height={103} width={108} alt='Conserva y protege' />
                            </div>
                            <div className={styles.descripcionContainer}>
                                <h3>Conserva y protege</h3>
                                <p>
                                    Nuestra lata está hecha de acero, un material altamente resistente que protege el alimento incluso si se raya, se abolla o se cae. Por dentro, cuenta con un recubrimiento sanitario que mantiene intacta la calidad de nuestros alimentos.
                                </p>
                            </div>
                        </div>
                        <div className={styles.cardItemContainer}>
                            <div className={styles.iconContainer}>
                                <Image src={`/iconlata2.svg`} height={103} width={108} alt='Conserva y protege' />
                            </div>
                            <div className={styles.descripcionContainer}>
                                <h3>Resiste a cualquier condición climática</h3>
                                <p>
                                    Del calor intenso de la costa al frío de los Andes, nuestra lata soporta sin problema las condiciones más exigentes del país. Lo que nos permite llevar leche de calidad a todos los rincones del Perú.
                                </p>
                            </div>
                        </div>
                        <div className={styles.cardItemContainer}>
                            <div className={styles.iconContainer}>
                                <Image src={`/iconlata3.svg`} height={103} width={108} alt='Conserva y protege' />
                            </div>
                            <div className={styles.descripcionContainer}>
                                <h3>Se recicla para siempre</h3>
                                <p>
                                    Contamos con la certificación internacional “Metal Recycles Forever”, lo que significa que puede reciclarse infinitas veces sin perder su valor ni calidad. Incluso si está aplastada, rajada o dañada, su acero puede transformarse en nuevos productos, una y otra vez.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default nuestraLata
