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
    banner: string | null;
    imagen_cover: string;
    fecha_publicacion: string; // formato ISO
    autor: AutorInterface;
    descripcion_corta: string;
    video: string | null; // puede venir null en otras noticias
    created_at: string;
}