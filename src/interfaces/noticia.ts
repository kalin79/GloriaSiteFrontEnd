export interface AutorInterface {
    nombre: string | null;
    cargo: string | null;
    imagen: string | null;
    linkedin: string | null;
    descripcion: string | null;
}

export interface NoticiaInterface {
    id: number;
    titulo: string;
    categoria: string;
    slug: string;
    subtitulo: string | null;
    contenido: string;
    descripcion_2?: string;
    banner: string | null;
    imagen_cover: string;
    fecha_publicacion: string; // formato ISO
    autor: AutorInterface;
    descripcion_corta: string;
    video: string | null; // puede venir null en otras noticias
    created_at: string;
    destacado: boolean;
}

export interface PaginationInterface {
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
    next_page_url: string | null;
    prev_page_url: string | null;
    has_more_pages: boolean;
}