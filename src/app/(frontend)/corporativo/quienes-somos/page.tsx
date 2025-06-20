import InternoBannerComponent from '@/components/banners/Interno';
import DescripcionComponent from '@/components/corporativo/Descripcion';
import LineaTiempoComponent from '@/components/corporativo/somos/LineaTiempo';
import PropositoComponent from '@/components/corporativo/somos/PropositoSinBtn';
import ComportamosComponent from '@/components/corporativo/somos/Comportamos';
export default function Home() {

    return (
        <div className='bgAzul'>
            <InternoBannerComponent />
            <DescripcionComponent />
            <LineaTiempoComponent />
            <PropositoComponent />
            <ComportamosComponent />
        </div>
    );
}