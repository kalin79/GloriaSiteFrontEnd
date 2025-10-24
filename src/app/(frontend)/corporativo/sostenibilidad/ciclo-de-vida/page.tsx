import { BannerInterface } from '@/interfaces/bannerInterno';
import InternoBannerComponent from '@/components/banners/Interno';

// import DescripcionComponent from '@/components/corporativo/Descripcion';
import CicloVidaComponent from '@/components/corporativo/sostenibilidad/CicloVida';
const CicloDeVida = () => {
    const dataBanner: BannerInterface = {
        imgMobile: '/bgCiclo.webp',
        imgPc: '/bgCiclo.webp',
        titulo: `Ciclo de vida de <br />
                la leche evaporada <br />Gloria`,
        breadHeader: '',
        breadcrumb: 'CICLO DE VIDA DE LA LECHE',
        slugbreadHEADER: '',
        slugbread: '/corporativo/sostenibilidad/ciclo-de-vida',
    };
    // const dataInfo = `<p class=''>Conoce el ciclo de vida de nuestra leche evaporada gloria y el impacto ambiental en cada fase de su producción.</p>`;
    const dataFase = [
        {
            icon: '/fase1.svg',
            number: '01',
            titulo: 'Recolección de leche fresca',
            descripcion: `<p class='azulCTxt titularFase'>La ganadería es una de las actividades que genera mayor
            impacto ambiental; sin embargo, en el Perú es una de las
            principales actividades productivas de poblaciones rurales
            vulnerables.</p> <p>Conscientes de ello, en Gloria apoyamos la
            sostenibilidad agropecuaria de más de 19000 ganaderos
            lecheros como medio alternativo de aseguramiento de
            disponibilidad alimenticia, a través de capacitaciones sobre
            el uso de la tierra, el consumo de agua y la producción
            eficiente.</p> <p>Asimismo, estamos trabajando en dos iniciativas
            piloto que esperamos replicar en varios puntos del país: el
            uso de paneles solares en las zonas de acopio y el proyecto
            de biogás con estiércol de ganado.</p>`,
        },
        {
            icon: '/fase2.svg',
            number: '02',
            titulo: 'Proceso de producción',
            descripcion: `Hace diez años decidimos apostar por el cuidado ambiental y cambiar toda nuestra matriz energética de petróleo a gas natural, el combustible fósil más limpio del mundo. Además, nos convertimos en la única empresa de alimentos en Perú que posee una planta de Cogeneración…
        Esto nos ha ayudado a disminuir anualmente en 40% la emisión de gases de efecto invernadero.`,
        },
        {
            icon: '/fase3.svg',
            number: '03',
            titulo: 'Envasado',
            descripcion: `Nuestra distribución a mayoristas y distribuidores exclusivos está plenamente optimizada para llevar nuestras latas de leche Gloria con la menor cantidad de emisiones de gases de efecto invernadero. Para ello, utilizamos un software especializado en la planificación dinámica de rutas que nos ha permitido diseñar eficientemente los caminos de distribución, minimizando la cantidad de kilómetros recorridos en el reparto y maximizando la capacidad de nuestros camiones.`,
        },
        {
            icon: '/fase4.svg',
            number: '04',
            titulo: 'Distribución',
            descripcion: `Nuestra distribución a mayoristas y distribuidores exclusivos está plenamente optimizada para llevar nuestras latas de leche Gloria con la menor cantidad de emisiones de gases de efecto invernadero. Para ello, utilizamos un software especializado en la planificación dinámica de rutas que nos ha permitido diseñar eficientemente los caminos de distribución, minimizando la cantidad de kilómetros recorridos en el reparto y maximizando la capacidad de nuestros camiones.`,
        },
        {
            icon: '/fase5-2.svg',
            number: '05',
            titulo: 'Consumo',
            descripcion: `Gloria es miembro internacional del <span class="rojoTxt">Marco de Sostenibilidad Láctea.</span> Esto garantiza que cada etapa de acopio, producción y distribución respeten los estándares de sostenibilidad ambiental. 
      Estas cualidades están alineadas con la tendencia cada vez mayor de los consumidores por comprar productos nutritivos, ecológicos y biodegradables, que estén alineados con su estilo de vida saludable y su preocupación 
      por la conservación del medioambiente`,
        },
        {
            icon: '/fase6.svg',
            number: '06',
            titulo: 'Fin del ciclo',
            descripcion: `Sabemos que el reciclaje cumple un rol importante en la reducción de la huella de carbono. Por ese motivo, promovemos campañas de reciclaje y reutilización de latas para que los consumidores contribuyan en una gestión sostenible del consumo, al mismo tiempo que minimizamos la generación de hojalata en nuestra cadena de producción.`,
        },
    ]
    return (
        <div className='bgAzul'>
            <InternoBannerComponent dataBanner={dataBanner} />
            {/* <DescripcionComponent dataDescripcion={dataInfo} /> */}
            <CicloVidaComponent dataFase={dataFase} />
        </div>
    )
}

export default CicloDeVida


