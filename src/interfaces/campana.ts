export interface CampanaInterfaceAux {
    title: string;
    subTitle: string | null;
    idMarca: number;
    marca_slug: string;
    marca: string;
    slug: string;
    image: string;
    imagemobile: string;
    video: string; // ID de video (por ejemplo, Vimeo o YouTube)
    fecha_estreno?: string;
}
export interface CampanaLegalesInterfaces {
    id: number;
    titulo: string;
    descripcion: string;
    slug: string;
}

export interface CampanaInterface {
    id: number;
    title_large: string;
    sub_title: string;
    slug: string;
    marca: CampanaMarcaInterface;
    descripcion: string;
    image: string;
    imagemobile: string;
    link_video: string;
    previsualizacion_video: null;
    fecha_estreno: null;
    duracion: string;
    cantidad_like: number;
    gallery: string[];
}

export interface CampanaMarcaInterface {
    id: number;
    nombre: string;
    slug: string;
    logo: string;
    avatar_detalle: null;
    image_detalle: null;
    active: boolean;
    descripcion: null;
    created_at: string;
    updated_at: string;
    deleted_at: null;
    created_user_id: number;
    updated_user_id: number;
    deleted_user_id: null;
    tipo_archivo_id: number;
    link_video: null;
    tipo_color_id: number;
}