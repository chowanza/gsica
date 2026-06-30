"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

const labels = {
  es: { inicio: "Inicio", servicios: "Servicios", nosotros: "Nosotros", contacto: "Contacto", cta: "Solicitar Cotización" },
  en: { inicio: "Home",   servicios: "Services",  nosotros: "About Us", contacto: "Contact",  cta: "Request Quote" },
};

export default function Navbar({ theme = "white" }: { theme?: "white" | "blue" }) {
  const { lang, setLang } = useLang();
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const t = labels[lang];

  const isActive = (path: string) => pathname === path;

  const navLinks = [
    { href: "/",          label: t.inicio },
    { href: "/servicios", label: t.servicios },
    { href: "/nosotros",  label: t.nosotros },
    { href: "/contacto",  label: t.contacto },
  ];

  return (
    <nav className={`navbar${theme === "blue" ? " navbar--blue" : ""}`} role="navigation" aria-label="Navegación principal">
      <div className="container-wide">
        <div className="navbar-inner">
          {/* ── Logo (blue version for white navbar) ── */}
          <Link href="/" className="navbar-logo" aria-label="GSICA – Inicio">
            <Image
              src={theme === "blue" ? "/logo 2.png" : "/logo.png"}
              alt="Global Services International C.A"
              width={150}
              height={60}
              priority
              style={{ height: "52px", width: "auto", objectFit: "contain" }}
            />
          </Link>

          {/* ── Desktop links ── */}
          <ul className="navbar-links" role="list">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`navbar-link${isActive(href) ? " active" : ""}`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* ── Right side ── */}
          <div className="navbar-right">
            {/* Language toggle with flag SVGs */}
            <button
              id="lang-toggle-btn"
              className="lang-toggle"
              onClick={() => setLang(lang === "es" ? "en" : "es")}
              aria-label={`Cambiar a ${lang === "es" ? "English" : "Español"}`}
            >
              <Image
                src={lang === "es" ? "/us.svg" : "/ve.svg"}
                alt={lang === "es" ? "English" : "Español"}
                width={22}
                height={16}
                style={{ borderRadius: "3px", objectFit: "cover" }}
                unoptimized
              />
              <span>{lang === "es" ? "EN" : "ES"}</span>
            </button>

            {/* CTA */}
            <Link href="/contacto" className="btn-primary" id="nav-cta-btn">
              {t.cta}
            </Link>
          </div>

          {/* ── Mobile hamburger ── */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Abrir menú"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      <div className={`mobile-menu${mobileOpen ? " open" : ""}`} role="menu">
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`mobile-link${isActive(href) ? " active" : ""}`}
            onClick={() => setMobileOpen(false)}
          >
            {label}
          </Link>
        ))}
        <div style={{ display: "flex", gap: "0.75rem", marginTop: "0.5rem", alignItems: "center" }}>
          <button
            className="lang-toggle"
            onClick={() => setLang(lang === "es" ? "en" : "es")}
          >
            <Image
              src={lang === "es" ? "/us.svg" : "/ve.svg"}
              alt={lang === "es" ? "English" : "Español"}
              width={22}
              height={16}
              style={{ borderRadius: "3px", objectFit: "cover" }}
              unoptimized
            />
            <span>{lang === "es" ? "EN" : "ES"}</span>
          </button>
          <Link href="/contacto" className="btn-primary" style={{ flex: 1, justifyContent: "center" }} onClick={() => setMobileOpen(false)}>
            {t.cta}
          </Link>
        </div>
      </div>
    </nav>
  );
}
