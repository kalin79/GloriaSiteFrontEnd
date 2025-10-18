'use client';

import { useEffect } from 'react';

const GTM_ID = 'GTM-M5NWGNMS';

export const GTM = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.id = 'gtm-script';
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
        document.body.appendChild(script);

        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            'gtm.start': new Date().getTime(),
            event: 'gtm.js',
        });
    }, []);

    return null;
};

export const GTMNoScript = () => (
    <noscript>
        <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
        />
    </noscript>
);
