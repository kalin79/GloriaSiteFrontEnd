import { BannerInterface } from '@/interfaces/bannerInterno';
import InternoBannerComponent from '@/components/banners/Interno';
import DescripcionComponent from '@/components/corporativo/lactea/Descripcion';
const Lactea = () => {
    const dataBanner: BannerInterface = {
        imgMobile: '/bglactea.webp',
        imgPc: '/bglactea.webp',
        titulo: `Compromiso global con la sostenibilidad del <br />
                <span class='boldRegular'>sector lácteo</span>`,
        breadHeader: 'SOSTENIBILIDAD',
        breadcrumb: 'LÁCTEA',
        slugbreadHEADER: '/corporativo/sostenibilidad/',
        slugbread: '/corporativo/sostenibilidad/lactea',
    };
    const dataInfo = {
        photo: '/logoSF.svg',
        descripcionCorta: `<p class=''>Somos miembro internacion del Marco de Sostenibilidad Láctea </p>
        <p>Con la finalidad de colaborar con el sector lácteo y abordar los criterios claves de sostenibilidad, desde mayo de 2018, Gloria es miembro internacional del Marco de Sostenibilidad Láctea (DSF por sus siglas en inglés), organización internacional que promueve el compromiso con el alineamiento sostenible del sector lácteo en el mundo.</p>`,
        descripcion: `<span class='legalContent azulTxt'>El DSF es un proyecto global y colaborativo, iniciado en noviembre del 2013, que brinda un mecanismo coordinado para que organizaciones de toda la cadena láctea puedan planificar y conectar sus actividades de sustentabilidad para proporcionar productos seguros y nutritivos a partir de ganado saludable, mientras se preservan los recursos naturales y los medios de vida decentes en toda la industria. Esta iniciativa garantiza que sus integrantes se comprometan a alinearse bajo la visión del sector para la sostenibilidad, a conectarse con otras experiencias que permitan aumentar la velocidad de búsqueda de soluciones y contribuir al progreso social a través de un marco colaborativo.</span>
        <span class='legalContent azulTxt'>Como miembros plenos y activos de este proyecto, presentamos anualmente un informe de gestión donde mostramos haber cumplido con los criterios de sustentabilidad acordados: reducción de las emisiones de gases de efecto invernadero, nutrientes del suelo, gestión de residuos, manejo de agua y/o suelo, promoción de la biodiversidad, desarrollo del mercado, fomento de economías rurales, mejora de condiciones laborales, optimización de la seguridad, calidad del producto y cuidado animal.</span>`
    };

    return (
        <div className='bgAzul'>
            <InternoBannerComponent dataBanner={dataBanner} />
            <DescripcionComponent dataInfo={dataInfo} />
        </div>
    )
}

export default Lactea


