import { BannerInterface } from '@/interfaces/bannerInterno';
import InternoBannerComponent from '@/components/banners/Interno';
import DatosComponent from '@/components/corporativo/ganaderos/Datos';
const Ganaderos = () => {
    const dataBanner: BannerInterface = {
        imgMobile: '/bi3.webp',
        imgPc: '/bi3.webp',
        titulo: `Junto a nuestros ganaderos lo <br />
        <span class='boldRegular'>hacemos posible</span>`,
        descripcion: `Consulta tu historial de leche acopiada, servicios y beneficios por ser proveedor de Gloria.`,
        breadcrumb: 'GANADEROS',
        url: 'https://www.portalganaderogloria.com.pe/',
        slugbread: '/corporativo/ganaderos',
    };

    return (
        <div className='bgAzul'>
            <InternoBannerComponent dataBanner={dataBanner} />
            <DatosComponent />
        </div>
    )
}

export default Ganaderos
