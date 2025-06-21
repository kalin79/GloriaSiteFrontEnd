import InternoBannerComponent from '@/components/banners/Interno';
import DescripcionComponent from '@/components/corporativo/Descripcion';
import LineaTiempoComponent from '@/components/corporativo/somos/LineaTiempo';
import PropositoComponent from '@/components/corporativo/somos/PropositoSinBtn';
import ComportamosComponent from '@/components/corporativo/somos/Comportamos';
import { BannerInterface } from '@/interfaces/bannerInterno';

export default function Somos() {
    const dataBanner: BannerInterface = {
        imgMobile: '/mama.webp',
        imgPc: '/mamapc.webp',
        titulo: `Somos la empresa <br />
                                líder en el <span class='boldRegular'>mercado <br />
                                    lácteo peruano</span>`,
        breadcrumb: 'QUIENES SOMOS',
        slugbread: '/corporativo/quienes-somos',
    };

    const dataDescripcion = `<p>
                            Nuestro trabajo sostenido y esforzado a lo largo de casi ochenta años, nos ha ubicado entre las organizaciones más admiradas y nos ha permitido ser poseedores de la marca peruana más valiosa y de mayor recordación en nuestro país.
                        </p>`;
    return (
        <div className='bgAzul'>
            <InternoBannerComponent dataBanner={dataBanner} />
            <DescripcionComponent dataDescripcion={dataDescripcion} />
            <LineaTiempoComponent />
            <PropositoComponent />
            <ComportamosComponent />
        </div>
    );
}