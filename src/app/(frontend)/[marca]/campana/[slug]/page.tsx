import BannerComponent from "@/components/banners/PreviewVideo";
import DetalleComponent from "@/components/campanas/Descripcion";
import RelacionadosComponent from "@/components/campanas/Relacionados";
interface BannerInternoInterface {
    title: string;
    subTitle: string;
    idMarca: number;
    marca: string;
    logoMarca: string;
    slugMarca: string;
    slug: string;
    type: string; // video o imagen
    multimedia: string;
    like: string;
    duracion: string;
}
export default function Campana() {
    const multimedia: BannerInternoInterface = {
        title: '¡Comienza un <br />nuevo regreso <br />a clases!',
        subTitle: 'Detrás de un niño volviendo al cole, hay una mamá y papá <br />dándolo todo. Conoce la nueva campaña de Gloria.',
        idMarca: 1,
        marca: 'Gloria',
        logoMarca: 'gloria.svg',
        slugMarca: 'gloria',
        slug: 'mama-que-nutre-mama-en-su-gloria',
        type: 'video', // video o imagen
        multimedia: '/videocorto.mp4',
        like: '8.2  |  1245',
        duracion: '23 seg',
    }
    return (
        <>
            <BannerComponent multimediaContents={multimedia} />
            <div className="containerInternaMain2">
                <div className="containerFluid">
                    <DetalleComponent />
                    <RelacionadosComponent />
                </div>
            </div>
        </>
    );
}