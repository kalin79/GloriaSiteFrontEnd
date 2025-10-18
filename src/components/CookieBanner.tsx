'use client';

import CookieConsent from 'react-cookie-consent';
import Script from 'next/script';
import { useState, useEffect } from 'react';

const GTM_ID = 'GTM-M5NWGNMS';

export default function CookieBanner() {
    const [consentGiven, setConsentGiven] = useState(false);

    useEffect(() => {
        if (consentGiven) {
            // Inyectar GTM después de la hidratación y aceptación
            const script = document.createElement('script');
            script.src = `https://www.googletagmanager.com/gtag/js?id=${GTM_ID}`;
            script.async = true;
            document.head.appendChild(script);

            script.onload = () => {
                window.dataLayer = window.dataLayer || [];
                function gtag(...args: unknown[]) {
                    window.dataLayer.push(args);
                }
                gtag('js', new Date());
                gtag('config', GTM_ID, { anonymize_ip: true });
            };
        }
    }, [consentGiven]);

    const gtagConsentUpdate = (consentObj: Record<string, string>) => {
        if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
            window.gtag('consent', 'update', consentObj);
        }
    };

    const acceptAnalytics = () => {
        gtagConsentUpdate({
            analytics_storage: 'granted',
            ad_storage: 'denied',
        });
        setConsentGiven(true);
    };

    const rejectAll = () => {
        gtagConsentUpdate({
            analytics_storage: 'denied',
            ad_storage: 'denied',
        });
    };

    return (
        <>
            {/* Consent Mode por defecto */}
            <Script
                id="consent-default"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('consent', 'default', {
                          'ad_storage': 'denied',
                          'analytics_storage': 'denied'
                        });
                    `,
                }}
            />

            <CookieConsent
                location="bottom"
                buttonText="Aceptar"
                enableDeclineButton
                declineButtonText="Rechazar"
                onAccept={acceptAnalytics}
                onDecline={rejectAll}
                style={{ background: '#1A172B', fontSize: '14px' }}
                buttonStyle={{ background: '#F7E6CD', color: '#1A172B', fontSize: '13px', padding: '8px 12px' }}
                declineButtonStyle={{ background: '#DD1A20', color: '#fff', fontSize: '13px', padding: '8px 12px' }}
            >
                Utilizamos cookies analíticas para mejorar tu experiencia. Puedes aceptar o rechazar tu consentimiento.
                <br />
                Lee más en nuestra{' '}
                <a href="/politicas-de-privacidad" style={{ color: '#8FD2EA' }} className="underline text-blue-300" target="_blank" rel="noopener noreferrer">
                    política de cookies
                </a>.
            </CookieConsent>
        </>
    );
}
