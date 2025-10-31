import CardComponent from "@/components/marcas/Card";
import { MarcaInterface } from '@/interfaces/marca';

import styles from '@/styles/scss/marca.module.scss';

interface multimediaParameters {
    marcas: MarcaInterface[];
}
const Listado = ({ marcas }: multimediaParameters) => {
    return (
        <div className="containerFluid">
            <div className="headerTitle">
                <h3 className={styles.titularMarcaHome}>Nuestras Marcas</h3>
                <h2 className={styles.descripcionMarcaHome}>Conoce las marcas que han crecido junto a millones de peruanos.</h2>
            </div>
            <div className={styles.listadoCard}>
                {
                    marcas.map((item, index) => (
                        <CardComponent key={index} logosrc={item.icon} slug={item.slug} />
                    ))
                }
            </div>
        </div>
    )
}

export default Listado
