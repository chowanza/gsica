import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  metadataBase: new URL("https://gsica.com.ve"),
  title: "Global Services International, C.A | Soluciones Integrales de Ingeniería y Logística",
  description:
    "GSICA – Consolidamos la continuidad operativa de la industria energética y pesada mediante soluciones integrales de ingeniería, mantenimiento especializado y logística de alto impacto. RIF J-30636196-0.",
  keywords: [
    "Global Services International", "GSICA", "petróleo", "gas", "petroquímica",
    "mantenimiento industrial", "ingeniería", "logística", "Venezuela", "gsica.com.ve",
    "J-30636196-0", "Anaco", "Anzoátegui",
  ],
  authors: [{ name: "Global Services International, C.A" }],
  creator: "Global Services International, C.A",
  publisher: "Global Services International, C.A",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://gsica.com.ve",
    title: "Global Services International, C.A | GSICA",
    description: "Soluciones integrales de ingeniería, mantenimiento especializado y logística para la industria energética y pesada.",
    siteName: "GSICA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Global Services International, C.A" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Global Services International, C.A | GSICA",
    description: "Soluciones integrales de ingeniería, mantenimiento y logística industrial.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png", sizes: "512x512" }],
    apple: [{ url: "/favicon.png", sizes: "512x512", type: "image/png" }],
    shortcut: "/favicon.png",
  },
  alternates: { canonical: "https://gsica.com.ve" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <meta name="theme-color" content="#0a1628" />
        <meta name="color-scheme" content="light" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,400;0,600;0,700;0,800;0,900;1,700&family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
