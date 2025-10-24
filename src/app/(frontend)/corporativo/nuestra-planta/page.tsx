import { BannerInterface } from '@/interfaces/bannerInterno';
import InternoBannerComponent from '@/components/banners/Interno';
// import DescripcionComponent from '@/components/corporativo/Descripcion';
import PlantaComponent from '@/components/corporativo/planta/Planta';

const Planta = () => {
    const dataBanner: BannerInterface = {
        imgMobile: '/bi2.webp',
        imgPc: '/bi2.webp',
        titulo: `Infraestructura que <br />
                                impulsa <span class='boldRegular'>nutrición <br />
                                    y calidad</span>`,
        breadcrumb: 'NUESTRA PLANTA',
        slugbread: '/corporativo/quienes-somos',
    };
    return (
        <div className='bgAzul'>
            <InternoBannerComponent dataBanner={dataBanner} />
            {/* <DescripcionComponent dataDescripcion={dataDescripcion} /> */}
            <PlantaComponent />
        </div>
    )
}

export default Planta
