'use client'

import { useEffect, useState, ReactNode } from 'react'
import { createPortal } from 'react-dom'

interface PortalProps {
    children: ReactNode
}

export default function Portal({ children }: PortalProps) {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    const modalRoot = document.getElementById('modal-root')
    return modalRoot ? createPortal(children, modalRoot) : null
}
