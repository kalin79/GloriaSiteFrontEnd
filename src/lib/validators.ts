import { z } from 'zod';


export const validateParticipantSchema = z.object({
    tipo_documento: z
        .enum(["dni", "ce"], {
            errorMap: () => ({ message: "Seleccione el tipo de documento" }),
        }),
    nro_documento: z
        .string()
        .regex(/^\d+$/, "El DNI/CE debe contener solo dígitos"),
    tyc: z.literal(true, {
        errorMap: () => ({ message: 'Debes aceptar los términos y condiciones' }),
    }),
    tyc_vacaciones: z.literal(true, {
        errorMap: () => ({ message: 'Debes aceptar las politicas de privacidad' }),
    }),
});

export const registerSchema = z.object({
    nombres: z
        .string()
        .min(2, "El nombre debe tener al menos 2 caracteres")
        .max(50, "El nombre no puede exceder los 50 caracteres")
        .regex(/^[A-Za-z\s]+$/, "El nombre solo puede contener letras y espacios"),
    apellidos: z
        .string()
        .min(2, "El apellido debe tener al menos 2 caracteres")
        .max(50, "El apellido no puede exceder los 50 caracteres")
        .regex(/^[A-Za-z\s]+$/, "El apellido paterno solo puede contener letras y espacios"),
    fecha_cumple: z
        .string()
        .nonempty({ message: 'La fecha de cumpleaños es obligatoria' })
        // Regex para YYYY-MM-DD
        .regex(/^\d{4}-\d{2}-\d{2}$/, {
            message: 'Formato de fecha inválido, debe ser YYYY-MM-DD',
        })
        // Convertir a Date
        .transform((val) => new Date(val)),
    tipo_documento: z
        .enum(["dni", "ce"], {
            errorMap: () => ({ message: "Seleccione el tipo de documento" }),
        }),
    nro_documento: z
        .string()
        .regex(/^\d+$/, "El DNI/CE debe contener solo dígitos"),
    departamento: z
        .string()
        .regex(/^[A-Za-z\s]+$/, "Departamento es oobligatorio"),
    provincia: z
        .string()
        .regex(/^[A-Za-z\s]+$/, "Provincia es oobligatorio"),
    distrito: z
        .string()
        .regex(/^[A-Za-z\s]+$/, "Distrito es oobligatorio"),
    email: z
        .string()
        .email({ message: 'Por favor, ingrese un correo electrónico válido' })
        .trim(),
    movil: z
        .string()
        .min(9, "El celular debe tener al menos 9 dígitos"),
    tyc: z
        .literal(true, {
            errorMap: () => ({ message: 'Debes aceptar los términos y condiciones' }),
        }),
    tyc_vacaciones: z.literal(true, {
        errorMap: () => ({ message: 'Debes aceptar las politicas de privacidad' }),
    }),
});

