// types/filters.ts
export type FilterCategory = {
    key: number;               // e.g. "marcas", "formato", "beneficios", "atributos"
    title: string;             // e.g. "MARCAS", "FORMATO PRESENTACIÓN"
    options: FilterOption[];
};

export type FilterOption = {
    value: number;             // valor que envías a la API, e.g. "bonle"
    label: string;             // texto mostrado, e.g. "Bonle"
    checked?: boolean;         // opcional para estado inicial
};

export type FilterKey = 'formato' | 'marcas' | 'atributos' | 'tipo';

export type SelectedFilters = Partial<Record<FilterKey, number[]>>;
// Ejemplo: { marcas: ["bonle", "gio"], beneficios: ["alto-proteina", "bajo-grasa"] }
