"use client";
import Link from 'next/link';
import styles from '@/styles/scss/login.module.scss';
const Gracias = () => {
    return (
        <>
            <div className={styles.headerTitleLogin}>
                <h1 className='misti font-normal'>
                    Gracias por  <br />
                    Registrate
                </h1>
                <div className={styles.infoGracias}>
                    <p>
                        🎉 ¡Bienvenido/a al Mundo Gloria! 🎉
                    </p>
                    <p>Gracias por unirte a nuestra comunidad. <br />
                        Aquí encontrarás mucho más que productos: <br />
                        🎓 Videos educativos que inspiran, <br />
                        👨‍👩‍👧 Consejos para acompañar a tus hijos en cada etapa, <br />
                        🍽 Recetas deliciosas para cada ocasión, <br />
                        🎁 Concursos, sorpresas... ¡y mucho más por descubrir!
                    </p>
                    <p>
                        Nos alegra tenerte con nosotros. <br />
                        ¡Prepárate para vivir la experiencia Gloria al máximo!
                    </p>

                    <Link href="/auth/login" className={`buttonBtn ${styles.buttonBtnForm}`}>Iniciar Sesion</Link>
                </div>
            </div>
        </>
    )
}

export default Gracias
