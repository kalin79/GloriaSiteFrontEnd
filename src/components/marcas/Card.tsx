'use client';
import { MarcaInterface } from '@/interfaces/marca';

import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/scss/marca.module.scss';

const Card = ({ logosrc, slug }: MarcaInterface) => {
    return (
        <Link href={`/${slug}`} className={styles.btnMarca}>
            {
                (logosrc && logosrc.trim()) && (
                    <Image src={logosrc} width={300} height={300} alt="Gloria" />
                )
            }

        </Link>
    )
}

export default Card
