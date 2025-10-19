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

export interface BannerInterfaceAux {
    id: number;
    title: string;
    subTitle: string;
    idMarca: number;
    marca: string;
    slugMarca: string;
    type: string; // tipo de contenido, ejemplo: "imagen" o "video"
    multimedia: string; // URL principal del recurso multimedia
    image: string; // imagen de escritorio
    imagemobile: string; // imagen para móvil
    link: string; // enlace al hacer clic
    like: string | null;
    duracion: number | null;
    abrir_en_otra_ventana: boolean; // si abre en una nueva pestaña
    accion: string;
    es_video: string;
    es_campana: string;
}