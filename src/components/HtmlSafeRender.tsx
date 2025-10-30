// components/HtmlSafeRender.tsx
'use client';
import { useEffect, useState } from 'react';
import createDOMPurify from 'dompurify';

interface Props {
    html: string;
    className?: string;
}

const HtmlSafeRender: React.FC<Props> = ({ html, className }) => {
    const [safeHtml, setSafeHtml] = useState<string | null>(null);



    useEffect(() => {
        const DOMPurify = createDOMPurify(window);
        // ✅ Habilita explícitamente el atributo `class`
        DOMPurify.setConfig({
            ALLOWED_ATTR: ['class', 'href', 'target', 'src', 'alt', 'style', 'title', 'id', 'colspan', 'rowspan', 'colSpan', 'rowSpan'], // puedes añadir más según necesites
        });
        const clean = DOMPurify.sanitize(html);
        setSafeHtml(clean);
    }, [html]);

    if (!safeHtml) return null; // Evita render hasta que esté listo en cliente

    return <div className={className} dangerouslySetInnerHTML={{ __html: safeHtml }} />;
};

export default HtmlSafeRender;
