
// import Image from 'next/image';
import LoginForm from '@/components/auth/Login';
import BannerLogin from '@/components/auth/Banner';
import styles from '@/styles/scss/login.module.scss';


const Login = () => {
    return (
        <div className={`${styles.containerLogin}`}>
            <div className='containerFluid'>
                <div className={styles.headerTitleLogin}>
                    <h1 className='misti font-normal'>
                        Bienvenidos <br />
                        al Grupo Gloria
                    </h1>
                </div>
                <div className={styles.gridContainer}>
                    <BannerLogin />
                    <LoginForm />
                </div>
            </div>
        </div >
    )
}

export default Login


