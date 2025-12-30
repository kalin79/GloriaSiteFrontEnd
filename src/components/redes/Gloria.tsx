'use client';
import Image from 'next/image';
const Gloria = () => {
    return (
        <div className='redesContainerMundo gloria'>
            <a href="#" target="_blank">
                <Image src='/m_facebook.svg' width={42} height={42} alt='' />
            </a>
            <a href="#" target="_blank">
                <Image src='/m_instagram.svg' width={42} height={42} alt='' />
            </a>
            <a href="#" target="_blank">
                <Image src='/m_x.svg' width={42} height={42} alt='' />
            </a>
        </div>
    )
}

export default Gloria
