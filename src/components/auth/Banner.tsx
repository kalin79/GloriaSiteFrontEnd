'use client'
import Link from 'next/link';
import styles from '@/styles/scss/login.module.scss';
const BannerLogin = () => {
    return (
        <div className={styles.bannerLogin}>
            <p>Registrate a nuestra web para:</p>
            <ul>
                <li>
                    <p>Videos educativos exclusivos sobre nutrición y bienestar.</p>
                </li>
                <li>
                    <p>Acumulación de monedas para canjear descuentos en productos Gloria.</p>
                </li>
                <li>
                    <p>Recetas deliciosas con productos Gloria para cada ocasión.</p>
                </li>
                <li>
                    <p>Novedades y promociones exclusivas del Grupo Gloria.</p>
                </li>
            </ul>
            <Link href="/auth/create" className={`${styles.buttonBtn}`}>Crea tu cuenta</Link>
        </div>
    )
}

export default BannerLogin
