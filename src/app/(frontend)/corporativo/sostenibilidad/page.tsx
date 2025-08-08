import { BannerInterface } from '@/interfaces/bannerInterno';
import InternoBannerComponent from '@/components/banners/Interno';
import DescripcionComponent from '@/components/corporativo/sostenibilidad/Descripcion';
import ComprometidosComponent from '@/components/corporativo/sostenibilidad/Comprometidos';
import ImgComponent from '@/components/corporativo/sostenibilidad/Imagen';
import LataComponent from '@/components/corporativo/sostenibilidad/nuestraLata';
const Sostenibilidad = () => {
    const dataBanner: BannerInterface = {
        imgMobile: '/bi4.webp',
        imgPc: '/bi4.webp',
        titulo: `Nuestras acciones <br />también <span class='boldRegular'>alimentan el futuro</span>`,
        descripcion: `Buscamos generar un impacto positivo en el desarrollo del país, actuando con integridad, cuidando el entorno, las personas y comunidades.
Descubre y explora nuestras prácticas sostenibles`,
        breadcrumb: 'SOSTENIBILIDAD',
        slugbread: '/corporativo/sostenibilidad',
    };

    return (
        <div className='bgAzul'>
            <InternoBannerComponent dataBanner={dataBanner} />
            <ComprometidosComponent />
            <DescripcionComponent />
            <ImgComponent />
            <LataComponent />
        </div>
    )
}

export default Sostenibilidad


