// import dynamic from 'next/dynamic';
import { BannerInterface } from '@/interfaces/bannerInterno';
import InternoBannerComponent from '@/components/banners/Interno';
import EnergiaLimpiaComponent from '@/components/corporativo/sostenibilidad/EnergiaLimpia';
// const EnergiaLimpiaComponent = dynamic(() => import('@/components/corporativo/sostenibilidad/EnergiaLimpia'), {
//     ssr: false,
// });
import CicloVidaComponent from '@/components/corporativo/sostenibilidad/CicloVida';
import EconomiaCircularComponent from '@/components/corporativo/sostenibilidad/EconomiaCircular';
import LataComponent from '@/components/corporativo/sostenibilidad/nuestraLata';
import GanaderosComponent from '@/components/corporativo/sostenibilidad/Ganaderos';
import LacteaComponent from '@/components/corporativo/sostenibilidad/Lactea';
const Sostenibilidad = () => {
    const dataBanner: BannerInterface = {
        imgMobile: '/sos222.webp',
        imgPc: '/bgsos5.webp',
        titulo: `Nuestras acciones <br />también alimentan <br />el futuro`,
        descripcion: `Buscamos generar un impacto positivo en el desarrollo <br />del país, actuando con integridad, cuidando el entorno, <br />las personas y comunidades.`,
        breadcrumb: 'SOSTENIBILIDAD',
        slugbread: '/corporativo/sostenibilidad',
    };

    return (
        <div>
            <InternoBannerComponent dataBanner={dataBanner} />
            <CicloVidaComponent />
            <EnergiaLimpiaComponent />
            <EconomiaCircularComponent />
            <LataComponent />
            <GanaderosComponent />
            <LacteaComponent />
        </div>
    )
}

export default Sostenibilidad


