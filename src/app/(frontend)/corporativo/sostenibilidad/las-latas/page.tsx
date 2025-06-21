import { BannerInterface } from '@/interfaces/bannerInterno';
import InternoBannerComponent from '@/components/banners/Interno';
import BeneficiosComponent from '@/components/corporativo/sostenibilidad/LatasBeneficios';
import EcologicoComponent from '@/components/corporativo/sostenibilidad/Ecologicos';
const LasLatas = () => {
    const dataBanner: BannerInterface = {
        imgMobile: '/biM.webp',
        imgPc: '/bi5.webp',
        titulo: `El envase que lo  <br />hace posible:<br />
                <span class='boldRegular'>resistente, seguro <br />y sostenible</span>`,
        breadHeader: 'SOSTENIBILIDAD',
        breadcrumb: 'LAS LATAS',
        slugbreadHEADER: '/corporativo/sostenibilidad/',
        slugbread: '/corporativo/sostenibilidad/las-latas',
    };
    const dataAcordion = [
        {
            title: "Material Resistente",
            content: "Es el material con mayor resistencia mecánica a los golpes. ",
        },
        {
            title: "Diseño Inviolable",
            content: "No se puede abrir sin que se aprecie que ha sido manipulada.",
        },
        {
            title: "Opaco",
            content: "Su opacidad impide la destrucción de las vitaminas de los alimentos que transporta, que se ven afectadas por la luz. ",
        },
        {
            title: "Estanco",
            content: "Es un envase herméticamente cerrado, lo que resulta esencial para la conservación y utilidad de todos los productos. ",
        },
        {
            title: "Reciclable",
            content: "Se reutiliza el 100% de su material en la fabricación de nuevo acero. Además, posee la mayor tasa de reciclaje entre los envases de alimentos en el mundo. ",
        },
        {
            title: "Reutilizable",
            content: "Es uno de los productos con más posibilidades de reúso en diversos ámbitos. ",
        },
        {
            title: "Magnético",
            content: "Puede recuperarse fácilmente de la corriente de desechos mediante electroimanes. ",
        },
        {
            title: "Desgradable",
            content: "Expuesto a la intemperie, un envase desaparece en pocos años, convirtiéndose en óxido de hierro, inocuo para el suelo. ",
        },
        {
            title: "Minimiza el desperdicio",
            content: "Las latas proporcionan la vida útil más larga de cualquier alimento. El alimento envasado en latas está protegido del aire, de los gérmenes, la luz, oxígeno y de otros factores, logrando generar menos desperdicio. ",
        },
        {
            title: "Eficiente",
            content: "Su eficiencia cúbica ligera y la falta de necesidad de refrigeración permiten su envío y almacenamiento a un bajo costo.  ",
        },
    ]
    return (
        <div className='bgAzul'>
            <InternoBannerComponent dataBanner={dataBanner} />
            <BeneficiosComponent items={dataAcordion} />
            <EcologicoComponent />
        </div>
    )
}

export default LasLatas


