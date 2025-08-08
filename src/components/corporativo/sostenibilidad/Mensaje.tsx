'use client';
import styles from '@/styles/scss/corporativo.module.scss';
const Mensaje = () => {
    return (
        <div className={styles.mensajeContainerSeccion}>
            <div className='containerFluid'>
                <div className={styles.gridContainer}>
                    <div>
                        <p className='blancoTxt titularMediano fontLight'>
                            Nuestra leche está <span className='boldMedium'>hecha con 100% leche de vaca</span>, y aporta un sabor y
                            consistencia perfecta que la ha convertido en la favorita de los peruanos.
                            Descubre todo lo que necesitas saber sobre ella: su origen,
                            cómo la cuidamos y por qué puedes confiar en ella.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mensaje
