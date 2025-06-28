import CreateForm from '@/components/auth/Create';
import styles from '@/styles/scss/login.module.scss';

const Create = () => {
    return (
        <div className={`${styles.containerCreate}`}>
            <div className='containerFluid'>
                <CreateForm />
            </div>
        </div >
    )
}

export default Create
