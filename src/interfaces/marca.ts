export interface MarcaInterface {
    logosrc: string;
    slug: string;
}
export interface VideosHomeInterface {
    title?: string;
    idMarca?: number;
    marca?: string;
    slug?: string;
    image?: string;
    imagemobile?: string;
    video?: string;
    colorMarca?: string;
}

export interface ProductosHomeInterface {
    title?: string;
    idMarca?: number;
    marca?: string;
    slug?: string;
    image?: string;
    imagemobile?: string;
    presentacion?: string;
    receta?: boolean;
}

export interface CampanasHomeInterface {
    title?: string;
    subTitle?: string;
    idMarca?: number;
    marca?: string;
    slug?: string;
    image?: string;
    imagemobile?: string;
    video?: string;
}

export interface CategoriaVideosHomeInterface {
    id?: number;
    name?: string;
    slug?: string;
}

export interface TagsHomeInterface {
    id?: number;
    name?: string;
    slug?: string;
}