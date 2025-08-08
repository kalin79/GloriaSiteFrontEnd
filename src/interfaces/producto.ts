export interface ProductInterface {
    id?: number;
    titulo?: string;
    subtitulo?: string;
    marca?: Marca;
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
    gallery?: string[];
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



