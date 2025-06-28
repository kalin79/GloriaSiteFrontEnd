import BannerComponent from "@/components/banners/BannerEstatico";
import DetalleComponent from "@/components/productos/DetalleProducto";
import TabsComponent from "@/components/productos/Tabs";
import RelacionadosComponent from "@/components/productos/Relacionados";
interface BannerEstaticoInternoInterface {
    title: string;
    idMarca: number;
    marca: string;
    logoMarca: string;
    slug: string;
    multimedia: string;
}
export default function Producto() {
    const multimedia: BannerEstaticoInternoInterface = {
        title: 'La leche <br />que prefiere <br />el Perú',
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
                    <TabsComponent />
                    <RelacionadosComponent />
                </div>
            </div>
        </>
    );
}