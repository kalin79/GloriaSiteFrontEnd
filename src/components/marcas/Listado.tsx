import CardComponent from "@/components/marcas/Card";
import styles from '@/styles/scss/marca.module.scss';

const Listado = () => {
    return (
        <div className="containerFluid">
            <div className="headerTitle">
                <h3 className="titularPequeno">NUESTROS MUNDOS</h3>
                <h2 className="titularMediano">Cuidamos tu mundo, <span className="celesteTxt">alimentamos tu vida.</span></h2>
            </div>
            <div className={styles.listadoCard}>
                <CardComponent logosrc="/gloria.svg" slug="gloria" />
                <CardComponent logosrc="/Bonle.png" slug="gloria-bonle" />
                <CardComponent logosrc="/logoPro.svg" slug="pro" />
                <CardComponent logosrc="/Actibio.png" slug="actibio" />
                <CardComponent logosrc="/Battimix.png" slug="batti-mix" />
            </div>
        </div>
    )
}

export default Listado
