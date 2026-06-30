"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

const content = {
  es: {
    desc: "Soluciones integrales de ingeniería, mantenimiento especializado y logística para la industria energética y pesada.",
    rif: "RIF: J-30636196-0",
    contactTitle: "Contacto",
    navTitle: "Navegación",
    address: "Calle Quinta entre tercera y cuarta, local Galpón S/N, sector Ali Primera, Anaco. Edo. Anzoátegui. CP 6003.",
    phone: "+58 412-1794335",
    email: "globalservicesinternational@gsica.com.ve",
    navLinks: [
      { href: "/",          label: "Inicio" },
      { href: "/servicios", label: "Servicios" },
      { href: "/nosotros",  label: "Nosotros" },
      { href: "/contacto",  label: "Contacto" },
    ],
    copy: "© 2026 Global Services International, C.A. Todos los derechos reservados.",
  },
  en: {
    desc: "Comprehensive engineering, specialized maintenance and logistics solutions for the energy and heavy industry.",
    rif: "RIF: J-30636196-0",
    contactTitle: "Contact",
    navTitle: "Navigation",
    address: "Calle Quinta entre tercera y cuarta, local Galpón S/N, sector Ali Primera, Anaco. Edo. Anzoátegui. CP 6003.",
    phone: "+58 412-1794335",
    email: "globalservicesinternational@gsica.com.ve",
    navLinks: [
      { href: "/",          label: "Home" },
      { href: "/servicios", label: "Services" },
      { href: "/nosotros",  label: "About Us" },
      { href: "/contacto",  label: "Contact" },
    ],
    copy: "© 2026 Global Services International, C.A. All rights reserved.",
  },
};

export default function Footer() {
  const { lang } = useLang();
  const t = content[lang];

  return (
    <footer id="footer" className="footer" role="contentinfo">
      <div className="container-wide">
        <div className="footer-main">
          {/* Brand */}
          <div className="footer-brand">
            <Link href="/" aria-label="GSICA – Inicio">
              <Image
                src="/logo 2.png"
                alt="Global Services International C.A"
                width={130}
                height={52}
                style={{
                  height: "48px",
                  width: "auto",
                  objectFit: "contain",
                  filter: "brightness(0) invert(1)",
                }}
              />
            </Link>
            <p className="footer-brand-desc">{t.desc}</p>
            <p className="footer-brand-rif">{t.rif}</p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="footer-col-title">{t.contactTitle}</h3>
            <ul className="footer-contact-list">
              <li className="footer-contact-item">
                <MapPin size={16} className="footer-contact-icon" aria-hidden="true" />
                <span>{t.address}</span>
              </li>
              <li className="footer-contact-item">
                <Phone size={16} className="footer-contact-icon" aria-hidden="true" />
                <a href="tel:+584121794335" style={{ color: "inherit" }}>{t.phone}</a>
              </li>
              <li className="footer-contact-item">
                <Mail size={16} className="footer-contact-icon" aria-hidden="true" />
                <a
                  href="mailto:globalservicesinternational@gsica.com.ve"
                  style={{ color: "inherit", wordBreak: "break-all" }}
                >
                  {t.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Nav */}
          <nav aria-label="Navegación del pie de página">
            <h3 className="footer-col-title">{t.navTitle}</h3>
            <ul className="footer-nav-list">
              {t.navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="footer-nav-link">{label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">{t.copy}</p>
        </div>
      </div>
    </footer>
  );
}
