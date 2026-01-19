'use client';
import Image from 'next/image';
const Pro = () => {
    return (
        <div className='redesContainerMundo pro'>
            <a href="https://web.facebook.com/ProPeruu/?_rdc=1&_rdr#" target="_blank">
                <Image src='/m_facebook.svg' width={42} height={42} alt='' />
            </a>
            <a href="https://www.instagram.com/_properu/?hl=es" target="_blank">
                <Image src='/m_instagram.svg' width={42} height={42} alt='' />
            </a>
            <a href="https://www.youtube.com/@pro_peru" target="_blank">
                <Image src='/youtube2.svg' width={42} height={42} alt='' />
            </a>
            <a href="https://www.tiktok.com/@pro_peru" target="_blank">
                <Image src='/tiktok.svg' width={42} height={42} alt='' />
            </a>
        </div>
    )
}

export default Pro
