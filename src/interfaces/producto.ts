export interface TagsAux {
    id: number;
    name: string;
}

export interface ProductListadoInterface {
    title: string;
    subtitulo: string;
    idMarca: number;
    marca: string;
    marca_slug: string;
    slug: string;
    image: string;
    imagemobile: string;
    presentacion: string;
    receta: boolean;
}

export interface ProductoCategoriaInterface {
    id: number;
    name: string;
    slug: string;
}

export interface ProductoHomeInterface {
    title: string;
    subtitulo: string;
    idMarca: number;
    marca: string;
    marca_slug: string;
    slug: string;
    image: string;
    imagemobile: string;
    presentacion: string;
    receta: boolean;
}

export interface PaginationHomeInterface {
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
    next_page_url: string | null;
    prev_page_url: string | null;
    has_more_pages: boolean;
}

export interface ProductosResponseAux {
    productos: {
        productos: ProductoHomeInterface;
        pagination: PaginationHomeInterface;
    };
}

export interface ProductInterface {
    id?: number;
    titulo?: string;
    subtitulo?: string;
    marca?: Marca;
    slug?: string;
    categoria?: Categoria;
    sub_categoria?: Subcategoria;
    descripcion_corta?: string;
    caracteristica?: Caracteristica[];
    presentaciones?: Presentacione[];
    descripcion?: string;
    imagen_descripcion?: null;
    ingredientes?: null;
    informacion_nutricional?: string;
    receta_nombre?: null;
    receta_autor?: null;
    receta_archivo?: null;
    receta_foto_autor?: null;
    receta_ingredientes?: null;
    receta_instrucciones?: null;
    receta_informacion_nutricional?: unknown[];
    image?: string;
    imagemobile?: string;
    imagen_banner?: string;
    image_producto?: string;
    gallery?: string[];
    titulo_caracteristica?: string;
    sub_titulo_caracteristica?: string;
}

interface Presentacione {
    id: number;
    nombre: string;
    imagen: null;
}

interface Caracteristica {
    descripcion: string;
    valor: string;
}

interface Subcategoria {
    id: number;
    title: string;
    link: string;
}

interface Categoria {
    id: number;
    title: string;
    link: string;
}

interface Marca {
    name: string;
    slug: string;
    logo: string;
}



