// types/filters.ts
export type FilterCategory = {
    key: string;               // e.g. "marcas", "formato", "beneficios", "atributos"
    title: string;             // e.g. "MARCAS", "FORMATO PRESENTACIÓN"
    options: FilterOption[];
};

export type FilterOption = {
    value: string;             // valor que envías a la API, e.g. "bonle"
    label: string;             // texto mostrado, e.g. "Bonle"
    checked?: boolean;         // opcional para estado inicial
};

export type SelectedFilters = Record<string, string[]>;
// Ejemplo: { marcas: ["bonle", "gio"], beneficios: ["alto-proteina", "bajo-grasa"] }