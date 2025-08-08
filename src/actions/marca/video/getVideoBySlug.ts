'use server';
// import { VideoInterface } from "@/interfaces/video";
// import { BannerInterface } from '@/interfaces/banner';


export async function getVideoBySlug(slug: string) {
    const API_TOKEN = process.env.NEXT_PUBLIC_AUTHORIZATION_FORM; // Acceso a variable de entorno
    const apiUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
    if (!API_TOKEN) {
        throw new Error('API_TOKEN no está definido');
    }

    // Ejemplo de envío a una API externa
    const response = await fetch(`${apiUrl}video/${slug}`, {
        method: 'GET',
        cache: 'no-store', // evita cachear si necesitas siempre lo último
        headers: {
            "Authorization-secret": `${API_TOKEN}`,
            "Content-Type": 'application/json',
            "Accept": 'application/json',
        }
    });

    const resultado = await response.json();


    if (resultado.status === 'error') {
        return resultado;
    }

    return resultado;
}

