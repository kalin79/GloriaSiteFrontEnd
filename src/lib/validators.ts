import { z } from 'zod';

export const signInSchema = z.object({
    email: z
        .string()
        .email({ message: 'Por favor, ingrese un correo electrónico válido' })
        .trim(),
    password: z
        .string()
        .min(6, { message: 'La contraseña debe tener al menos 8 caracteres' })
        .regex(/[A-Z]/, { message: 'La contraseña debe contener al menos una letra mayúscula' })
        .regex(/[a-z]/, { message: 'La contraseña debe contener al menos una letra minúscula' })
        .regex(/[0-9]/, { message: 'La contraseña debe contener al menos un número' })
        .regex(/[^A-Za-z0-9]/, { message: 'La contraseña debe contener al menos un símbolo' }),
    terms: z.literal(true, {
        errorMap: () => ({ message: 'Debes aceptar los términos y condiciones' }),
    }),
});

export const registerSchema = z.object({
    nombres: z
        .string()
        .min(2, "El nombre debe tener al menos 2 caracteres")
        .max(50, "El nombre no puede exceder los 50 caracteres")
        .regex(/^[A-Za-z\s]+$/, "El nombre solo puede contener letras y espacios"),
    apellido_paterno: z
        .string()
        .min(2, "El apellido paterno debe tener al menos 2 caracteres")
        .max(50, "El apellido paterno no puede exceder los 50 caracteres")
        .regex(/^[A-Za-z\s]+$/, "El apellido paterno solo puede contener letras y espacios"),
    apellido_materno: z
        .string()
        .min(2, "El apellido materno debe tener al menos 2 caracteres")
        .max(50, "El apellido materno no puede exceder los 50 caracteres")
        .regex(/^[A-Za-z\s]+$/, "El apellido materno solo puede contener letras y espacios"),
    celular: z
        .string()
        .min(9, "El celular debe tener al menos 9 dígitos"),
    tipo_documento: z
        .enum(["dni", "ce"], {
            errorMap: () => ({ message: "Seleccione el tipo de documento" }),
        }),
    nro_documento: z
        .string()
        .regex(/^\d+$/, "El DNI/CE debe contener solo dígitos"),
    email: z
        .string()
        .email({ message: 'Por favor, ingrese un correo electrónico válido' })
        .trim(),
    password: z
        .string()
        .min(6, { message: 'La contraseña debe tener al menos 8 caracteres' })
        .regex(/[A-Z]/, { message: 'La contraseña debe contener al menos una letra mayúscula' })
        .regex(/[a-z]/, { message: 'La contraseña debe contener al menos una letra minúscula' })
        .regex(/[0-9]/, { message: 'La contraseña debe contener al menos un número' })
        .regex(/[^A-Za-z0-9]/, { message: 'La contraseña debe contener al menos un símbolo' }),
    password_confirmation: z
        .string()
        .min(6, "La confirmación de contraseña es requerida"),
    tyc: z
        .literal(true, {
            errorMap: () => ({ message: 'Debes aceptar los términos y condiciones' }),
        }),
}).refine((data) => data.password === data.password_confirmation, {
    message: "Las contraseñas no coinciden",
    path: ["password_confirmation"],
}).refine(
    (data) =>
        data.tipo_documento === "dni" ? data.nro_documento.length === 8 : data.nro_documento.length === 9,
    {
        message: "El DNI debe tener 8 dígitos y el CE 9 dígitos",
        path: ["nro_documento"],
    }
);

