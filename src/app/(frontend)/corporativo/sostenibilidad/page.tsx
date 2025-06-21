import { BannerInterface } from '@/interfaces/bannerInterno';
import InternoBannerComponent from '@/components/banners/Interno';
import DescripcionComponent from '@/components/corporativo/Descripcion';
import ComprometidosComponent from '@/components/corporativo/sostenibilidad/Comprometidos';
const Sostenibilidad = () => {
    const dataBanner: BannerInterface = {
        imgMobile: '/biM.webp',
        imgPc: '/bi4.webp',
        titulo: `Comprometidos <br />con el impacto de <br />
                <span class='boldRegular'>nuestras acciones</span>`,
        breadcrumb: 'SOSTENIBILIDAD',
        slugbread: '/corporativo/sostenibilidad',
    };
    const dataDescripcion = `
        <p class='celesteTxt'>En Gloria somos conscientes del impacto que generan nuestras acciones y por eso nos preocupamos en operar bajo sólidos estándares de protección del medioambiente y de los recursos naturales. </p>
        <p>Gloria reconoce el impacto ambiental que genera la industria derivada del crecimiento de la producción, del manejo de sus residuos, así como de la posición frente a la competitividad y ahorro. En un contexto en el que el cambio climático está mostrando los límites a los que ha llegado el planeta con fenómenos ambientales de fuerte envergadura, estamos comprometidos a realizar acciones sostenibles que reviertan esa situación y minimicen el impacto en la huella de carbono de nuestra industria.</p>
        <span class='legalContent'>Tenemos una alta preocupación por innovar nuestros procesos y cumplir con la responsabilidad ambiental que nos convoca más allá de lo que la normatividad exige; reconociendo oportunidades de eficiencia a través de inversiones que conlleven a una mejoría ambiental, sin mellar nuestra competitividad orientada a generar un impacto positivo en toda nuestra cadena de valor.</span>`;
    return (
        <div className='bgAzul'>
            <InternoBannerComponent dataBanner={dataBanner} />
            <DescripcionComponent dataDescripcion={dataDescripcion} />
            <ComprometidosComponent />
        </div>
    )
}

export default Sostenibilidad


