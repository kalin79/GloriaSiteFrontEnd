export interface BannerInterface {
    title: string;
    subTitle: string;
    descripcionCorta?: string;
    idMarca: number;
    marca: string;
    slugMarca?: string;
    slug?: string;
    type?: string; // [video, imagen,contenido]
    multimedia: string;
    like?: string;
    duracion?: string;
    logoMarca?: string;
}