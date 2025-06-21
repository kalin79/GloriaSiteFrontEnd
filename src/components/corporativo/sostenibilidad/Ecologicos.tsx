'use client';
import Image from 'next/image';
import styles from '@/styles/scss/corporativo.module.scss';
const Ecologicos = () => {
    return (
        <div className={styles.ecologicoContainer}>
            <div className="containerFluid">
                <div className={styles.gridContainer}>
                    <div>
                        <h2 className="titularExtraGrande boldRegular azulCTxt">Envases ecológicos <br /><span className="fontLight">por excelencia</span></h2>
                    </div>
                    <div>
                        <p className="parrafoMediano2">
                            Diseñados para proteger el planeta, nuestros envases combinan resistencia, reutilización y reciclabilidad, reduciendo el impacto ambiental sin comprometer la calidad.
                        </p>
                    </div>
                </div>
                <div className={styles.gridIcons}>
                    <div>
                        <div className={styles.iconContainer}>
                            <Image src='/iconCamion.svg' width={86} height={80} alt="" />
                        </div>
                        <h3>El origen de una tradición
                            que une a todo el Perú</h3>
                        <p className="parrafoMediano ">
                            En 1942, en nuestra planta de Arequipa, empezamos a fabricar envases de hojalata con tecnología vent hole para nuestra leche evaporada, asegurando alimentos esenciales en zonas de geografía y clima diversos.
                        </p>
                    </div>
                    <div>
                        <div className={styles.iconContainer}>
                            <Image src='/iconLata.svg' width={59} height={77} alt="" />
                        </div>
                        <h3>Protección y conservación en cada lata</h3>
                        <p className="parrafoMediano ">
                            Las latas son envases metálicos resistentes que preservan alimentos y bebidas, protegiéndolos de impactos, luz, oxígeno y microorganismos para mantener su frescura por más tiempo.
                        </p>
                    </div>
                    <div>
                        <div className={styles.iconContainer}>
                            <Image src='/iconReciclaje.svg' width={83} height={85} alt="" />
                        </div>
                        <h3>Comprometidos con el reciclaje y el liderazgo industria</h3>
                        <p className="parrafoMediano ">
                            Las latas de acero son 100% reciclables y se degradan en solo 1 a 15 años, mucho menos que el aluminio, plástico o vidrio. Por eso, es un orgullo ser la principal importadora de hojalata en Perú y tener la planta de leche evaporada más grande del mundo.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ecologicos
