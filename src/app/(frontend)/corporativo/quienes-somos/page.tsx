import InternoBannerComponent from '@/components/banners/Interno';
import DescripcionComponent from '@/components/corporativo/Descripcion';
import LineaTiempoComponent from '@/components/corporativo/somos/LineaTiempo';
import PropositoComponent from '@/components/corporativo/somos/PropositoSinBtn';
import ComportamosComponent from '@/components/corporativo/somos/Comportamos';
import { BannerInterface } from '@/interfaces/bannerInterno';

export default function Somos() {
    const dataBanner: BannerInterface = {
        imgMobile: '/bsomosm.webp',
        imgPc: '/somos3bg.webp',
        titulo: `Somos una empresa <br />de alimentos y bebidas <br />orgullosamente <br />peruana`,
        descripcion: `Conoce nuestra historia, cómo trabajamos y el propósito <br />que nos impulsa a crear marcas de calidad que nutren e <br />inspiran a los peruanos desde hace generaciones.`,
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