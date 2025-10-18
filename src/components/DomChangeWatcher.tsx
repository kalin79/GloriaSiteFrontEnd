'use client';

import { useEffect } from 'react';

export default function DomChangeWatcher() {
    useEffect(() => {
        if (process.env.NODE_ENV !== 'development') return;

        const observer = new MutationObserver((mutations) => {
            for (const mutation of mutations) {
                if (mutation.type === 'attributes' || mutation.type === 'childList') {
                    console.warn('⚠️ Posible cambio de DOM detectado antes de la hidratación:', mutation);
                }
            }
        });

        observer.observe(document.documentElement, {
            attributes: true,
            childList: true,
            subtree: true
        });

        return () => observer.disconnect();
    }, []);

    return null;
}
