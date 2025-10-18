export interface BannerInterface {
    id: number;
    title_large: string;
    sub_title: string;
    marca: {
        id: number;
        name: string;
        slug: string;
        logo: string;
    };
    categoria: {
        id: number;
        titulo: string;
        slug: string;
    }
    categoria_nombre: string;
    descripcion: string;
    image: null;
    imagemobile: string;
    slug: string;
    link_video: string;
    previsualizacion_video: string;
    elenco: string;
    cantidad_like: number;
    duracion: string;
}

export interface MarcaInterface {
    logosrc?: string;
    slug?: string;
    id?: number;
    name?: string;
    icon?: string;
    color_marca?: string;
}
export interface VideosHomeInterface {
    id?: number;
    title_large?: string;
    sub_title?: string;
    slug?: string;
    marca: {
        id: number;
        name: string;
        slug: string;
        logo: string;
    };
    categoria: {
        id: number;
        titulo: string;
        slug: string;
    };
    categoria_nombre?: string;
    image?: string;
    imagemobile?: string;
    link_video?: string;
    previsualizacion_video?: string;
    cantidad_like?: number;
    duracion?: string;
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