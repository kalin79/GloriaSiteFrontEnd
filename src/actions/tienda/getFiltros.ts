'use server';

export async function getCategorias() {
    const API_TOKEN = process.env.NEXT_PUBLIC_AUTHORIZATION_FORM; // Acceso a variable de entorno
    const apiUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
    const username = process.env.BASIC_AUTH_USER;
    const password = process.env.BASIC_AUTH_PASS;
    // Codificar credenciales en Base64
    const auth = Buffer.from(`${username}:${password}`).toString('base64');
    if (!API_TOKEN) {
        throw new Error('API_TOKEN no está definido');
    }

    // Ejemplo de envío a una API externa
    const response = await fetch(`${apiUrl}categorias-productos`, {
        method: 'GET',
        cache: 'no-store', // evita cachear si necesitas siempre lo último
        headers: {
            "Authorization": `Basic ${auth}`,  // 👈 Aquí va la autenticación básica
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
export async function getTiposFiltros() {
    const API_TOKEN = process.env.NEXT_PUBLIC_AUTHORIZATION_FORM; // Acceso a variable de entorno
    const apiUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
    const username = process.env.BASIC_AUTH_USER;
    const password = process.env.BASIC_AUTH_PASS;
    // Codificar credenciales en Base64
    const auth = Buffer.from(`${username}:${password}`).toString('base64');
    if (!API_TOKEN) {
        throw new Error('API_TOKEN no está definido');
    }

    // Ejemplo de envío a una API externa
    const response = await fetch(`${apiUrl}productos/filtros-disponibles`, {
        method: 'GET',
        cache: 'no-store', // evita cachear si necesitas siempre lo último
        headers: {
            "Authorization": `Basic ${auth}`,  // 👈 Aquí va la autenticación básica
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

export async function setResultFilters(payload: string) {
    const API_TOKEN = process.env.NEXT_PUBLIC_AUTHORIZATION_FORM; // Acceso a variable de entorno
    const apiUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
    const username = process.env.BASIC_AUTH_USER;
    const password = process.env.BASIC_AUTH_PASS;
    // Codificar credenciales en Base64
    const auth = Buffer.from(`${username}:${password}`).toString('base64');
    if (!API_TOKEN) {
        throw new Error('API_TOKEN no está definido');
    }

    // Ejemplo de envío a una API externa
    let urlApi = `${apiUrl}productos/filtrar`;
    if (payload != '') {
        urlApi = `${apiUrl}productos/filtrar?${payload}`;
    }
    const response = await fetch(urlApi, {
        method: 'GET',
        cache: 'no-store', // evita cachear si necesitas siempre lo último
        headers: {
            "Authorization": `Basic ${auth}`,  // 👈 Aquí va la autenticación básica
            "Authorization-secret": `${API_TOKEN}`,
            "Content-Type": 'application/json',
            "Accept": 'application/json',
        }
    });

    const resultado = await response.json();
    console.log(resultado)
    console.log(urlApi)

    if (resultado.status === 'error') {
        return resultado;
    }

    return resultado;
}

export async function setResultFilterCategory(payload: string, categories: string) {
    const API_TOKEN = process.env.NEXT_PUBLIC_AUTHORIZATION_FORM; // Acceso a variable de entorno
    const apiUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
    const username = process.env.BASIC_AUTH_USER;
    const password = process.env.BASIC_AUTH_PASS;
    // Codificar credenciales en Base64
    const auth = Buffer.from(`${username}:${password}`).toString('base64');
    if (!API_TOKEN) {
        throw new Error('API_TOKEN no está definido');
    }

    // Ejemplo de envío a una API externa
    let urlApi = `${apiUrl}productos/filtrar-categorias?categorias_slug=${categories}`;
    if (payload != '') {
        urlApi = `${apiUrl}productos/filtrar-categorias?categorias_slug=${categories}&${payload}`;
    }
    const response = await fetch(urlApi, {
        method: 'GET',
        cache: 'no-store', // evita cachear si necesitas siempre lo último
        headers: {
            "Authorization": `Basic ${auth}`,  // 👈 Aquí va la autenticación básica
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