import BannerComponent from "@/components/banners/BannerLegal";
import DetalleComponent from "@/components/legal/Descripcion";
interface BannerEstaticoInternoInterface {
    title: string;
    subTitle: string;
    idMarca: number;
    marca: string;
    logoMarca: string;
    slug: string;
    multimedia: string;
}
export default function Legal() {
    const multimedia: BannerEstaticoInternoInterface = {
        title: 'Términos y <br />condiciones',
        subTitle: 'Comienza un nuevo regreso a clases!',
        idMarca: 1,
        marca: 'Gloria',
        logoMarca: 'gloria.svg',
        slug: 'mama-que-nutre-mama-en-su-gloria',
        multimedia: '/bgproducto.png',
    }
    return (
        <>
            <BannerComponent multimediaContents={multimedia} />
            <div className="containerInternaMain2">
                <div className="containerFluid">
                    <DetalleComponent />
                </div>
            </div>
        </>
    );
}