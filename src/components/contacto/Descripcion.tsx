'use client';

import Image from 'next/image';
import styles from '@/styles/scss/contacto.module.scss';
const Descripcion = () => {
    return (
        <div className={styles.containerContacto}>
            <div className='containerFluid'>
                <div className={styles.gridContacto}>
                    <div>
                        Siempre estamos pensando en mejorar la relación contigo. Por eso, contamos con un área de servicio al cliente, consumidor y colaborador, siempre lista para ofrecer una atención directa y personalizada, resolviendo tus consultas, atendiendo tus reclamos y recibiendo tus sugerencias.
                    </div>
                </div>
                <div className={styles.listadoContactoContainer}>
                    <div className={styles.cardContacto}>
                        <div className={styles.iconContainer}>
                            <Image src={`/iconContacto1.svg`} className={styles.icon1} width={94} height={87} alt='Línea telefónica gratuitas' />
                        </div>
                        <div className={styles.infoContainer}>
                            <h2>Línea telefónica gratuitas</h2>
                            <h4>0800-1-4441</h4>
                            <p className={styles.separate}>Horario de atención: </p>
                            <p>Lunes a Viernes</p>
                            <p>De 8:00 a.m. a 6:00 p.m.</p>
                            <p>Sábados</p>
                            <p>De 8:00 a.m. a 12:00 p.m.</p>
                        </div>
                    </div>
                    <div className={styles.cardContacto}>
                        <div className={styles.iconContainer}>
                            <Image src={`/iconContacto2.svg`} className={styles.icon2} width={101} height={70} alt='Correo electrónico:' />
                        </div>
                        <div className={styles.infoContainer}>
                            <h2>Correo electrónico:</h2>
                            <p>Escríbenos a:</p>
                            <a href="mailto:contactcenterinforma@gloria.com.pe">contactcenterinforma@gloria.com.pe</a>
                            <p className={styles.separate2}>Horario de atención: </p>
                            <p>Lunes a Viernes</p>
                            <p>De 8:00 a.m. a 4:00 p.m.</p>
                            <p>Sábados</p>
                            <p>De 8:00 a.m. a 11:00 a.m.</p>
                        </div>
                    </div>
                    <div className={`${styles.cardContacto} ${styles.bgAzul}`}>
                        <div className={styles.iconContainer}>
                            <Image src={`/iconContacto3.svg`} className={styles.icon3} width={79} height={106} alt='Correo electrónico:' />
                        </div>
                        <div className={styles.infoContainer}>
                            <h2>Línea ética*</h2>
                            <p>
                                Plataforma para reportar actos ilícitos o no éticos, investigados por el Comité de Ética.
                            </p>
                            <h3>*Para colaboradores Gloria</h3>
                            <div className={styles.btnContainer}>
                                <a href="https://www.gloriateescucha.com/" target='_blank'>Ingresa aquí</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Descripcion
