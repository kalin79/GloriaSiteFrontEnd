'use server';
// import { VideoInterface } from "@/interfaces/video";
// import { BannerInterface } from '@/interfaces/banner';


export async function getListadoMarcaProductos(page: number, marca: string, tag?: number) {
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
    let _url_ = `${apiUrl}marca/${marca}?page=${page}`;
    if (tag && tag > 0) {
        _url_ = `${apiUrl}marca/${marca}?page=${page}&tags[]=${tag}`;
    }
    const response = await fetch(_url_, {
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

export async function getListadoProductos(page: number, tag?: number) {
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
    let _url_ = `${apiUrl}productos/filtro-tags?page=${page}`;
    if (tag && tag > 0) {
        _url_ = `${apiUrl}productos/filtro-tags?page=${page}&tags[]=${tag}`;
    }

    const response = await fetch(_url_, {
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

export async function getListadoProductosMarca(page: number, slugmarca: string, tag?: number) {
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
    let _url_ = '';
    if (tag && tag > 0) {
        _url_ = `${apiUrl}productos/filtro-tags?marca=${slugmarca}&page=${page}&categoria_id=${tag}`;
    } else {
        _url_ = `${apiUrl}productos/filtro-tags?marca=${slugmarca}&page=${page}`;
    }

    const response = await fetch(_url_, {
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
    console.log(_url_)
    console.log(resultado)

    if (resultado.status === 'error') {
        return resultado;
    }

    return resultado;
}

