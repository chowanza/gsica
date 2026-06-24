import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://gsica.com.ve"),
  title: "Global Services International, C.A – Próximamente | Coming Soon",
  description:
    "Global Services International, C.A (GSICA) – RIF J-30636196-0. Empresa de servicios profesionales en petróleo y gas. Nuestro sitio web estará listo pronto. Our website is coming soon.",
  keywords: [
    "Global Services International",
    "GSICA",
    "petróleo",
    "oil services",
    "Venezuela",
    "gsica.com.ve",
    "J-30636196-0",
  ],
  authors: [{ name: "Global Services International, C.A" }],
  creator: "Global Services International, C.A",
  publisher: "Global Services International, C.A",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: "https://gsica.com.ve",
    title: "Global Services International, C.A – Próximamente",
    description:
      "Empresa de servicios profesionales en petróleo y gas. Próximamente en línea.",
    siteName: "GSICA",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Global Services International, C.A",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Global Services International, C.A – Próximamente",
    description: "Empresa de servicios en petróleo y gas. Próximamente.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://gsica.com.ve",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <meta name="theme-color" content="#060618" />
        <meta name="color-scheme" content="dark" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
