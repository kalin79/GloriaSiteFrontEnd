'use client';
import Image from 'next/image';
const Bonle = () => {
    return (
        <div className='redesContainerMundo'>
            <a href="https://web.facebook.com/bonleperu/?_rdc=1&_rdr#" target="_blank">
                <Image src='/m_facebook.svg' width={42} height={42} alt='' />
            </a>
            <a href="https://www.instagram.com/bonle_peru/?hl=es" target="_blank">
                <Image src='/m_instagram.svg' width={42} height={42} alt='' />
            </a>
            <a href="https://www.youtube.com/@BonlePeru" target="_blank">
                <Image src='/youtube2.svg' width={42} height={42} alt='' />
            </a>
            <a href="https://www.tiktok.com/@bonle_peru" target="_blank">
                <Image src='/tiktok.svg' width={42} height={42} alt='' />
            </a>
        </div>
    )
}

export default Bonle
