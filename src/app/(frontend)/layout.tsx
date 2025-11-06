
import type { Metadata, Viewport } from "next";
import { GTM, GTMNoScript } from '@/components/GTM';
import CookieBanner from '@/components/CookieBanner';
import SessionAuthProvider from '@/context/SessionAuthProvider'
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa el CSS de Bootstrap
import "@/styles/scss/global.scss";
import NavBarComponent from "@/components/navbar/NavBar";
// import DomChangeWatcher from "@/components/DomChangeWatcher";
import FooterComponent from "@/components/footer/Footer";
// import SuscribeteComponent from "@/components/suscribete/Formulario";

import { Poppins } from 'next/font/google';
import localFont from "next/font/local";

// Configura las variantes que necesites
const poppins = Poppins({
  subsets: ['latin'],         // subtítulos de caracteres
  weight: ['400', '500', '700'], // pesos que vayas a usar
  variable: '--font-poppins',   // nombre de la variable CSS
  display: 'swap',
});
const misti = localFont({
  src: [
    { path: "../../../public/fonts/MistiFont-Black.woff2", weight: "900", style: "black" },
    { path: "../../../public/fonts/MistiFont-BlackItalic.woff2", weight: "900", style: "italic" },
    { path: "../../../public/fonts/MistiFont-Bold.woff2", weight: "700", style: "bold" },
    { path: "../../../public/fonts/MistiFont-BoldItalic.woff2", weight: "700", style: "italic" },
    { path: "../../../public/fonts/MistiFont-Light.woff2", weight: "300", style: "light" },
    { path: "../../../public/fonts/MistiFont-LightItalic.woff2", weight: "300", style: "italic" },
    { path: "../../../public/fonts/MistiFont-Medium.woff2", weight: "500", style: "medium" },
    { path: "../../../public/fonts/MistiFont-MediumItalic.woff2", weight: "500", style: "italic" },
    { path: "../../../public/fonts/MistiFont-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../../public/fonts/MistiFont-RegularItalic.woff2", weight: "400", style: "italic" },
  ],
  variable: "--font-misti",
  display: "swap",
});

const round8 = localFont({
  src: [
    { path: "../../../public/fonts/round8/ROUND8-FOUR.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-round8",
  display: "swap",
});

const obvio = localFont({
  src: [
    { path: "../../../public/fonts/obvio/Obviously-NarwBold.woff2", weight: "700", style: "normal" },
    { path: "../../../public/fonts/obvio/Obviously-NarwMedi.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-obvio",
  display: "swap",
});


export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Gloria",
  description: "Site Principal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${obvio.variable} ${poppins.variable} ${misti.variable} ${round8.variable}`}>
      <body>
        {/* <DomChangeWatcher /> */}
        <GTM />
        <GTMNoScript />
        <SessionAuthProvider>
          <NavBarComponent />
          {children}
          {/* <SuscribeteComponent /> */}
          <FooterComponent />
        </SessionAuthProvider>
        <div id="modal-root" />
        <CookieBanner />
      </body>
    </html>
  );
}
