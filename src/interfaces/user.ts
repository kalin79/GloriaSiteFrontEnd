export interface objUser {
    id?: number;
    nombres: string;
    apellido_paterno: string;
    apellido_materno?: string;
    celular: string;
    fecha_nacimiento?: string;
    tipo_documento?: string;
    email: string;
    nro_documento: string;
    register_from: string;
    active?: number;
    password: string;
    password_confirmation?: string;
    direccion?: string;
    tyc?: boolean;
    utm_source?: string;
    utm_medium?: string;
    utm_campaign?: string;
    utm_content?: string;
}