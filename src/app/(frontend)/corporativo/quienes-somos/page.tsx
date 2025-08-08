import InternoBannerComponent from '@/components/banners/Interno';
import DescripcionComponent from '@/components/corporativo/Descripcion';
import LineaTiempoComponent from '@/components/corporativo/somos/LineaTiempo';
import PropositoComponent from '@/components/corporativo/somos/PropositoSinBtn';
import ComportamosComponent from '@/components/corporativo/somos/Comportamos';
import { BannerInterface } from '@/interfaces/bannerInterno';

export default function Somos() {
    const dataBanner: BannerInterface = {
        imgMobile: '/bgSomos.webp',
        imgPc: '/bgSomos.webp',
        titulo: `Somos una empresa <br />de alimentos que <br/>
        <span class='boldRegular'>crece contigo</span>`,
        descripcion: `Conoce nuestra historia, nuestra forma de trabajar y el propósito que nos impulsa a seguir acompañando a más peruanos con marcas de calidad que nutren, inspiran y conectan. `,
        breadcrumb: 'QUIENES SOMOS',
        slugbread: '/corporativo/quienes-somos',
    };

    const dataDescripcion = `<p>
                            Cada planta es parte de nuestro compromiso con la nutrición y el progreso del país. <br />
Conoce dos de los espacios donde todo comienza
                        </p>`;
    return (
        <div className='bgAzul'>
            <InternoBannerComponent dataBanner={dataBanner} />
            <PropositoComponent />
            <ComportamosComponent />
            <LineaTiempoComponent />
            <DescripcionComponent dataDescripcion={dataDescripcion} />


        </div>
    );
}