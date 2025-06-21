import { BannerInterface } from '@/interfaces/bannerInterno';
import InternoBannerComponent from '@/components/banners/Interno';
import DescripcionComponent from '@/components/corporativo/Descripcion';
import LecherosComponent from '@/components/banners/Lecheros';
import DatosComponent from '@/components/corporativo/ganaderos/Datos';
const Ganaderos = () => {
    const dataBanner: BannerInterface = {
        imgMobile: '/biM.webp',
        imgPc: '/bi3.webp',
        titulo: `Día a día con <br />nuestros <br />
                                <span class='boldRegular'>productores lecheros</span>`,
        breadcrumb: 'GANADEROS',
        slugbread: '/corporativo/ganaderos',
    };
    const dataDescripcion = `
        <p class='celesteTxt'>Desde 1942, Gloria viene acompañando a los ganaderos peruanos con el recojo de la leche de sus vacas, los 365 días del año.
La empresa Leche Gloria S.A. se constituye como tal el 5 de febrero de 1941. </p>
        <p>El apoyo constante a nuestros ganaderos peruanos va desde el crecimiento, desarrollo y modernización de sus unidades productivas a través de la implementación de equipos, infraestructura, servicios diversos, etc., complementado con asesorías técnicas especializadas en forma grupal e individual; así como herramientas para el cuidado y bienestar de sus animales.</p>
        <span class='legalContent'>Gloria, a la vanguardia en el sector ganadero, viene trabajando en sinergia con el productor lechero peruano de la zona norte, centro y sur del país, lo cual redunda en un ecosistema sólido y responsable para alcanzar mejores fuentes de ingresos y calidad de vida para miles de familias ganaderas peruanas.</span>`;
    return (
        <div className='bgAzul'>
            <InternoBannerComponent dataBanner={dataBanner} />
            <DescripcionComponent dataDescripcion={dataDescripcion} />
            <DatosComponent />
            <LecherosComponent />
        </div>
    )
}

export default Ganaderos
