"use client";
import { useState } from "react";
import { objUser } from "@/interfaces/user";
import { registerUserAction } from '@/actions/auth';
import dynamic from 'next/dynamic'

import { registerSchema } from '@/lib/validators';
import Link from 'next/link';
import styles from '@/styles/scss/login.module.scss';

const DynamicGraciasForm = dynamic(() => import('@/components/auth/Gracias'), { loading: () => <p>Loading...</p> })
const initialTodo = {
    nombres: "",
    apellido_paterno: "",
    apellido_materno: "",
    tipo_documento: "",
    nro_documento: "",
    register_from: "1",
    celular: "",
    email: "",
    fecha_nacimiento: "",
    password: "",
    password_confirmation: "",
    tyc: false,
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_content: "",
}

const Create = () => {
    const [userTodo, setUserTodo] = useState<objUser>(initialTodo);
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
    const [error, setError] = useState("");
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        try {
            // Validar con Zod en el cliente.
            const parsedData = registerSchema.safeParse(userTodo);
            // console.log(parsedData);
            if (!parsedData.success) {
                setError(parsedData.error.errors[0].message);
                setIsLoading(false);
                return;
            }
            // Llamar a la Server Action
            const result = await registerUserAction(userTodo);

            if (result.error) {
                setError(result.error);
            } else {
                // router.push('/login'); // Redirigir tras éxito
                setIsSubmitted(true);
            }


        } catch (err) {
            setError(` ${err} Error inesperado. Intenta de nuevo.`);
            setIsLoading(false);
        }

    }

    const handleChangeChecked = (value: boolean) => {

        setUserTodo((prev) => ({
            ...prev,
            tyc: value,
        }));
    }

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setUserTodo((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    return (
        <div className="">
            {
                isSubmitted ? (
                    <DynamicGraciasForm />
                ) : (
                    <>
                        <div className={styles.headerTitleLogin}>
                            <h1 className='misti'>
                                Crea una  <br />
                                nueva cuenta
                            </h1>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className={styles.gridContainer}>
                                <div>
                                    <h2 className='poppins'>
                                        Información personal:
                                    </h2>
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        value={userTodo.nombres}
                                        name="nombres"
                                        placeholder="Nombres"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        value={userTodo.apellido_paterno}
                                        name="apellido_paterno"
                                        placeholder="Apellido Paterno"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        value={userTodo.apellido_materno}
                                        name="apellido_materno"
                                        placeholder="Apellido Materno"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <input
                                        type="date"
                                        value={userTodo.fecha_nacimiento}
                                        name="fecha_nacimiento"
                                        placeholder="Fecha de Nacimiento dd/mm/yyyy"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <select
                                        value={userTodo.tipo_documento}
                                        name="tipo_documento"
                                        onChange={handleChange}
                                        className={styles.select}
                                    >
                                        <option value="" disabled>
                                            Tipo de documento
                                        </option>
                                        <option value="dni">DNI</option>
                                        <option value="ce">CE</option>
                                    </select>
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        value={userTodo.nro_documento}
                                        name="nro_documento"
                                        placeholder="Nro. de documento"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        value={userTodo.celular}
                                        name="celular"
                                        placeholder="Nro. de celular"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className={styles.gridContainer2}>
                                <div>
                                    <h2 className='poppins'>
                                        Información de inicio de sesión:
                                    </h2>
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        value={userTodo.email}
                                        name="email"
                                        placeholder="Correo electrónico"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className={styles.centerContent}>
                                    <p className="poppins">
                                        Tu correo electrónico será utilizado como tu usuario.
                                    </p>
                                </div>
                                <div>
                                    <input
                                        type="password"
                                        value={userTodo.password}
                                        name="password"
                                        placeholder="Contraseña"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className={styles.centerContent}>
                                    <p className="poppins">
                                        La longitud mínima de este campo debe ser igual o mayor a 8 caracteres. Mínimo de las diferentes clases de caracteres en la contraseña es 3. Las clases de caracteres son: minúsculas, mayúsculas, números, caracteres especiales.
                                    </p>
                                </div>
                                <div>
                                    <input
                                        type="password"
                                        value={userTodo.password_confirmation}
                                        name="password_confirmation"
                                        placeholder="Confirmar Contraseña"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div></div>
                                <div>
                                    <label className="customCheckbox">
                                        <input
                                            type="checkbox"
                                            checked={userTodo.tyc}
                                            onChange={() => handleChangeChecked(!userTodo.tyc)}
                                        />
                                        <span className="checkboxBox">
                                            {userTodo.tyc && (
                                                <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4 9.4L0 5.4L1.4 4L4 6.6L10.6 0L12 1.4L4 9.4Z" fill="white" />
                                                </svg>
                                            )}
                                        </span>
                                        <span className={`checkboxLabel ${styles.checkboxLabel}`}>He leído y acepto los <a href="/legales/terminos-y-condiciones" target="_blank">Términos y Condiciones,</a> Politicas de protección de datos personales</span>
                                    </label>
                                </div>
                                <div></div>
                                <div className={styles.buttonContainer}>
                                    {error &&
                                        (
                                            <div className="alert alert-danger">
                                                <p>{error}</p>
                                            </div>
                                        )
                                    }
                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className={`btnStandart ${styles.buttonBtnForm}`}
                                    >
                                        {isLoading ? 'Cargando...' : 'Iniciar Sesión'}
                                    </button>
                                </div>
                                <div></div>
                                <div className={styles.linkContainer}>
                                    <Link href="/auth/login" className={styles.buttonBtn}>¿Ya estás registrado? Accede desde aquí </Link>
                                </div>
                            </div>
                        </form>
                    </>
                )
            }

        </div>
    )
}

export default Create
