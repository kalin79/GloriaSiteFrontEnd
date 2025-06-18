'use server';

import { objUser } from '@/interfaces/user';

export async function registerUserAction(formData: objUser) {

    try {
        // Llamar a la API interna con fetch
        console.log(`${process.env.AUTHORIZATION_FORM}`);

        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}participante/store`, {
            method: 'POST',
            headers: {
                'Authorization-secret': `${process.env.AUTHORIZATION_FORM}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const data = await response.json();
        console.log(data);
        if (data.status != 'success') {
            return { error: data.error || 'Error al crear usuario' };
        }
        return { message: data.message, user: data.data };
    } catch (error) {
        console.error('Error en Server Action:', error);
        return { error: 'Error interno del servidor' };
    }
}