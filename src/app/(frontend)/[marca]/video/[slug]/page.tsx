import BannerComponent from "@/components/banners/PreviewVideo";
import TabsComponent from "@/components/videos/Tabs";
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
export default function Video() {
    const multimedia: BannerInternoInterface = {
        title: 'Cómo potenciar el aprendizaje de tus hijos desde casa',
        subTitle: 'Una campaña que celebra el amor y la nutrición que solo una mamá puede dar, con la calidad de Leche Gloria.',
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
                    <TabsComponent />
                </div>
            </div>
        </>
    );
}
