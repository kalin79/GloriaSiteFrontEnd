export interface VideoInterfaceAux {
    title?: string;
    idMarca?: number;
    marca?: string;
    marca_slug?: string;
    marca_logo?: string;
    slug?: string;
    image?: string; // imagen para desktop
    imagemobile?: string; // imagen para mobile
    video?: string; // id de video (ej. Vimeo)
    colorMarca?: string; // nombre de color/identificador de marca
    duracion?: string;
    cantidad_like?: number;
    previsualizacion_video?: string;
    description?: string;
}

export interface VideoInterface {
    id?: number;
    title_large?: string;
    sub_title?: string;
    slug?: string;
    marca?: Marca;
    categoria?: Categoria;
    categoria_nombre?: string;
    descripcion?: string;
    image?: string;
    imagemobile?: string;
    link_video?: string;
    previsualizacion_video?: string;
    fecha_estreno?: string;
    duracion?: string;
    elenco?: string;
    clasificacion?: string;
    autor_nombre?: string;
    autor_profesion?: string;
    autor_imagen?: string;
    gallery?: unknown[];
    cantidad_like?: number;
    description?: string;
    type?: string;
    accion?: string;
    abrir_en_otra_ventana?: boolean

}

interface Categoria {
    id?: number;
    titulo?: string;
    slug?: string;
    icon?: null;
    poster?: null;
    poster_mobile?: null;
    description?: null;
    active?: number;
    created_at?: string;
    updated_at?: string;
    deleted_at?: null;
    created_user_id?: number;
    updated_user_id?: null;
    deleted_user_id?: null;
    marca_id?: number;
}

interface Marca {
    id?: number;
    nombre?: string;
    slug?: string;
    logo?: string;
    avatar_detalle?: null;
    image_detalle?: null;
    active?: boolean;
    descripcion?: null;
    created_at?: string;
    updated_at?: string;
    deleted_at?: null;
    created_user_id?: number;
    updated_user_id?: number;
    deleted_user_id?: null;
    tipo_archivo_id?: number;
    link_video?: null;
    tipo_color_id?: number;
}

export interface FiltroVideosInterface {
    nombre: string;
    slug: string;
}



