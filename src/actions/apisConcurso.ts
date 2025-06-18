'use server';
import { objUser } from "@/interfaces/user";


export async function registerFiles(formData: FormData) {
    const API_TOKEN = process.env.NEXTAUTH_SECRET; // Acceso a variable de entorno
    const apiUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

    // const formDataFiles = new FormData();
    // formData.file.forEach((img) => formDataFiles.append("files", img.file));

    if (!API_TOKEN) {
        throw new Error('API_TOKEN no está definido');
    }

    console.log(formData)

    // Ejemplo de envío a una API externa
    const response = await fetch(`${apiUrl}sendFiles`, {
        method: 'POST',
        headers: {
            "Application-Authorization": `${API_TOKEN}`,
            // "Content-Type": 'application/json',
            "Accept": 'application/json',
        },
        body: formData,
    });

    const resultado = await response.json();

    console.log(resultado);

    if (!response.ok) {
        throw new Error('Error al enviar los datos');
    }

    return { success: true };
}

export async function registerParticipant(formData: objUser) {
    const API_TOKEN = process.env.NEXTAUTH_SECRET; // Acceso a variable de entorno
    const apiUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
    if (!API_TOKEN) {
        throw new Error('API_TOKEN no está definido');
    }

    console.log(formData)

    // Ejemplo de envío a una API externa
    const response = await fetch(`${apiUrl}storeCliente`, {
        method: 'POST',
        headers: {
            "Application-Authorization": `${API_TOKEN}`,
            "Content-Type": 'application/json',
            "Accept": 'application/json',
        },
        body: JSON.stringify(
            formData
        ),
    });

    const resultado = await response.json();

    console.log(resultado);

    if (resultado.status === 'error') {
        return resultado;
    }

    return resultado;
}


export async function checkDNI(formData: objUser) {
    const dni = formData.nro_documento;
    const API_TOKEN = process.env.NEXTAUTH_SECRET; // Acceso a variable de entorno
    const apiUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
    // console.log(API_TOKEN);
    console.log(apiUrl);
    // console.log(dni);
    if (!API_TOKEN) {
        throw new Error('API_TOKEN no está definido');
    }

    // Ejemplo de envío a una API externa
    const response = await fetch(`${apiUrl}findCliente?nro_documento=${dni}`, {
        method: 'GET',
        headers: {
            "Application-Authorization": `${API_TOKEN}`,
            "Content-Type": 'application/json',
            "Accept": 'application/json',
        }
    });
    const resultado = await response.json();

    console.log(resultado);

    if (resultado.status === 'error') {
        return resultado;
    }

    return resultado;
}
