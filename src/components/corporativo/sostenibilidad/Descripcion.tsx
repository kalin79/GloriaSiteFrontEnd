'use client';
import styles from '@/styles/scss/corporativo.module.scss';


const Descripcion = () => {
    return (
        <div className={styles.sostenibilidadDescripcionContainer}>
            <div className={styles.gridContainer}>
                <div>
                    <p className='blancoTxt titularMediano fontLight'>
                        <span className='celesteTxt'>Somos parte del Marco de Sostenibilidad Láctea (DSF),</span> una iniciativa global que impulsa buenas prácticas en toda la cadena de valor del sector. A través de este compromiso, reportamos anualmente nuestros avances en temas como reducción de emisiones, uso eficiente del agua, manejo del suelo, bienestar animal, condiciones laborales y calidad del producto.
                    </p>
                    <h2 className='titularMediano celesteTxt blancoTxt'>
                        Esto significa que cada vaso de leche que llega a tu mesa ha sido producido de forma responsable, respetando a la naturaleza, a las personas y a los animales.
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default Descripcion
