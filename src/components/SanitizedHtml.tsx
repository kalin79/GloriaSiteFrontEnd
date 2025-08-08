'use client';
import { useEffect, useState } from 'react';
import createDOMPurify from 'dompurify';
import parse from 'html-react-parser';

interface Props {
    html: string;
}

const SanitizedHtml = ({ html }: Props) => {
    const [cleanHtml, setCleanHtml] = useState<string | null>(null);

    useEffect(() => {
        const DOMPurify = createDOMPurify(window);
        const clean = DOMPurify.sanitize(html);
        setCleanHtml(clean);
    }, [html]);

    if (!cleanHtml) return null;

    return <>{parse(cleanHtml)}</>; // ✅ Renderiza múltiples nodos sin contenedor extra
};

export default SanitizedHtml;
