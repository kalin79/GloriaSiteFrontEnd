export interface CategoryInterface {
    id: number;
    name: string;
    slug: string;
    productos_count: number;
    icon: string | null;
}

export interface MarcaInterface {
    id: number;
    nombre: string;
    slug?: string;
}

export interface PresentacionInterface {
    id: number;
    name: string;
}

export interface TipoProductoInterface {
    id: number;
    name: string;
}

export interface AtributoInterface {
    id: number;
    name: string;
}

export interface CategoriaProductoInterface {
    id: number;
    titulo: string;
}


export interface ProductoInterfaceInterface {
    id: number;
    title_small: string;
    title_large: string;
    slug: string;
    poster: string;
    poster_mobile: string;
    marca: MarcaInterface;
    categoria: CategoriaProductoInterface;
}

export interface PaginationInterface {
    total: number;
    per_page: number;
    current_page: number;
    last_page: number;
    from: number;
    to: number;
}

export interface InfoCategorieInterface {
    id: number;
    titulo: string;
    subtitulo: string | null;
    slug: string;
    icon: string;
    poster: string;
    poster_mobile: string;
    description: string;
    cantidad: string;
}