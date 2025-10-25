import InternoBannerComponent from '@/components/banners/Interno';
import DescripcionComponent from '@/components/contacto/Descripcion';

import { BannerInterface } from '@/interfaces/bannerInterno';

export default function Contacto() {
    const dataBanner: BannerInterface = {
        imgMobile: '/bcontactoM.webp',
        imgPc: '/bcontacto.webp',
        titulo: `Escucharte es <br /><span>nuestro <br />compromiso</span>`,
        descripcion: `Este es un canal directo para resolver tus dudas, atender tus reclamos y escuchar tus sugerencias.`,
        breadcrumb: 'CONTÁCTENOS',
        slugbread: '/contacto',
    };
    return (
        <div className='bgAzul'>
            <InternoBannerComponent dataBanner={dataBanner} />
            <DescripcionComponent />
        </div>
    );
}