export interface ProductInterface {
    title: string;
    presentaciones?: {
        descripcion: string;
        imagen: string;
    }[];
    descirpcionCorta?: string;
    idMarca: number;
    marca: string;
    slug?: string;
    imagen?: string;
    receta?: boolean;
    imagenes?: {
        imagen: string;
    }[]; // ← cambio aquí
    caracteristicas?: {
        descripcion: string;
        valor: string;
    }[];
}