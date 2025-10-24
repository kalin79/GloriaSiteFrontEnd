import InternoBannerComponent from '@/components/banners/Interno';
import DescripcionComponent from '@/components/corporativo/Descripcion';
import LineaTiempoComponent from '@/components/corporativo/somos/LineaTiempo';
import PropositoComponent from '@/components/corporativo/somos/PropositoSinBtn';
import ComportamosComponent from '@/components/corporativo/somos/Comportamos';
import { BannerInterface } from '@/interfaces/bannerInterno';

export default function Somos() {
    const dataBanner: BannerInterface = {
        imgMobile: '/bsomosm.webp',
        imgPc: '/bsomos.webp',
        titulo: `Somos una empresa de alimentos <span>orgullosamente peruana</span>`,
        descripcion: `Conoce nuestra historia, nuestra forma de trabajar y el propósito que nos impulsa a seguir acompañando a más peruanos, produciendo marcas de calidad que nutren, inspiran y fortalecen vínculos desde hace generaciones.`,
        breadcrumb: 'QUIENES SOMOS',
        slugbread: '/corporativo/quienes-somos',
    };
    return (
        <div className='bgAzul'>
            <InternoBannerComponent dataBanner={dataBanner} />
            <PropositoComponent />
            <ComportamosComponent />
            <LineaTiempoComponent />
            <DescripcionComponent />


        </div>
    );
}