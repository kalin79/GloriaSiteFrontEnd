'use client';
import Image from 'next/image';
const Gloria = () => {
    return (
        <div className='redesContainerMundo gloria'>
            <a href="https://www.facebook.com/GloriaPeru/" target="_blank">
                <Image src='/m_facebook.svg' width={42} height={42} alt='' />
            </a>
            <a href="https://www.instagram.com/gloria_peru/" target="_blank">
                <Image src='/m_instagram.svg' width={42} height={42} alt='' />
            </a>
            <a href="https://www.youtube.com/channel/UCjpfosPtvFXMv4jGIDZX36A" target="_blank">
                <Image src='/youtube2.svg' width={42} height={42} alt='' />
            </a>
        </div>
    )
}

export default Gloria
