import { BannerInterface } from '@/interfaces/bannerInterno';
import InternoBannerComponent from '@/components/banners/Interno';
import DescripcionComponent from '@/components/corporativo/Descripcion';
import PlantaComponent from '@/components/corporativo/planta/Planta';

const Planta = () => {
    const dataBanner: BannerInterface = {
        imgMobile: '/biM.webp',
        imgPc: '/bi1.webp',
    };
    const dataDescripcion = `
        <p class='celesteTxt'>La empresa Leche Gloria S.A. se constituye como tal el 5 de febrero de 1941. </p>
        <p>Nuestro trabajo sostenido y esforzado a lo largo de casi ochenta años, nos ha ubicado entre las organizaciones más admiradas y nos ha permitido ser poseedores de la marca peruana más valiosa y de mayor recordación en nuestro país.</p>
        <span class='legalContent'>De igual forma, la Planta de Huachipa (Lima) comienza a producir el 7 de enero de 1999, convirtiéndose en la más importante del Perú y la más grande de leche evaporada del mundo. Allí también se fabrica leche UHT, leches saborizadas, yogurt, néctares, leche condensada, mantequilla, quesos y otros productos que abastecen todo el territorio. Por otro lado, en la planta de Cajamarca se elabora manjar blanco y los quesos madurados Bonlé.</span>
        <span class='legalContent'>Actualmente, nuestra planta de Cajamarca elabora una diversa gama de quesos para las marcas Gloria y Bonlé, que incluyen variedades como maduros, en tajadas, artesanales, parmesano, de pasta hilada y fundidos. Además, se elabora nuestro delicioso manjar blanco, bajo la marca Bonlé.</span>`;
    return (
        <div className='bgAzul'>
            <InternoBannerComponent dataBanner={dataBanner} />
            <DescripcionComponent dataDescripcion={dataDescripcion} />
            <PlantaComponent />
        </div>
    )
}

export default Planta
