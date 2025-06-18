'use client';

import CookieConsent from 'react-cookie-consent';
import Script from 'next/script';

const GTM_ID = 'GTM-M5NWGNMS'; // 👈 Reemplaza con tu ID real

export default function CookieBanner() {
    const gtagConsentUpdate = (consentObj: Record<string, string>) => {
        if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
            window.gtag('consent', 'update', consentObj);
        }
    };

    const acceptAnalytics = () => {
        gtagConsentUpdate({
            analytics_storage: 'granted',
            ad_storage: 'denied', // Solo activamos analytics, no publicidad
        });
    };

    const rejectAll = () => {
        gtagConsentUpdate({
            analytics_storage: 'denied',
            ad_storage: 'denied',
        });
    };

    return (
        <>
            {/* Inicializa el Consent Mode por defecto en "denied" */}
            <Script
                id="gtag-init"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'analytics_storage': 'denied'
            });
            gtag('js', new Date());
            gtag('config', '${GTM_ID}');
          `,
                }}
            />

            {/* Cookie Banner */}
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
