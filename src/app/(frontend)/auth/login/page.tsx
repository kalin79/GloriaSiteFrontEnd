
import LoginForm from '@/components/auth/Login';
import BannerLogin from '@/components/auth/Banner';
import styles from '@/styles/scss/login.module.scss';


const Login = () => {
    return (
        <div className={`${styles.containerLogin}`}>

            <div className='containerFluid'>
                <div className={styles.headerTitleLogin}>
                    <h1 className='misti'>
                        Bienvenidos <br />
                        a Gloria
                    </h1>
                </div>
                <div className={styles.gridContainer}>
                    <BannerLogin />
                    <div></div>
                    <LoginForm />
                </div>
            </div>
        </div >
    )
}

export default Login


