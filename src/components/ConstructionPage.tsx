"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import LanguageToggle from "./LanguageToggle";
import ContactInfo from "./ContactInfo";

export default function ConstructionPage() {
  const { t } = useLanguage();

  return (
    <div className="page-wrapper">
      {/* Animated background particles */}
      <div className="particles" aria-hidden="true">
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i} className="particle" style={{ "--i": i } as React.CSSProperties} />
        ))}
      </div>

      {/* Animated oil derrick background SVG */}
      <div className="derrick-bg" aria-hidden="true">
        <svg viewBox="0 0 200 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="derrick-svg">
          <g opacity="0.06" stroke="currentColor" strokeWidth="2">
            {/* Tower legs */}
            <line x1="100" y1="20" x2="20" y2="260" />
            <line x1="100" y1="20" x2="180" y2="260" />
            {/* Cross braces */}
            <line x1="30" y1="240" x2="170" y2="240" />
            <line x1="40" y1="210" x2="160" y2="210" />
            <line x1="55" y1="175" x2="145" y2="175" />
            <line x1="68" y1="140" x2="132" y2="140" />
            <line x1="78" y1="105" x2="122" y2="105" />
            <line x1="87" y1="72" x2="113" y2="72" />
            {/* Diagonals */}
            <line x1="30" y1="240" x2="55" y2="175" />
            <line x1="170" y1="240" x2="145" y2="175" />
            <line x1="55" y1="175" x2="78" y2="105" />
            <line x1="145" y1="175" x2="122" y2="105" />
          </g>
        </svg>
      </div>

      {/* Header bar */}
      <header className="header">
        <div className="header-inner">
          <div className="header-logo">
            <Image
              src="/logo.png"
              alt="GSICA Logo"
              width={48}
              height={48}
              className="logo-img"
              priority
            />
            <span className="header-company-short">GSICA</span>
          </div>
          <LanguageToggle />
        </div>
      </header>

      {/* Main content */}
      <main className="main-content" id="main">
        {/* Hero section */}
        <section className="hero-section" aria-labelledby="hero-heading">
          {/* Logo */}
          <div className="hero-logo-wrap">
            <Image
              src="/logo.png"
              alt="Global Services International C.A Logo"
              width={520}
              height={210}
              className="hero-logo"
              priority
            />
          </div>

          {/* Badge */}
          <div className="badge">
            <span className="badge-dot" />
            {t.comingSoon}
          </div>

          {/* Title */}
          <h1 id="hero-heading" className="hero-title">
            {t.underConstruction}
          </h1>

          {/* Company name */}
          <div className="company-block">
            <p className="company-name">{t.companyName}</p>
            <p className="company-rif">{t.rif}</p>
            <p className="company-tagline">{t.tagline}</p>
          </div>

          {/* Hero subtitle */}
          <p className="hero-subtitle">{t.heroSubtitle}</p>

          {/* Divider */}
          <div className="divider" aria-hidden="true" />
        </section>



        {/* Contact section */}
        <section className="section" aria-labelledby="contact-heading">
          <ContactInfo />
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p className="footer-rif">{t.rif}</p>
        <p className="footer-rights">
          © {new Date().getFullYear()} {t.companyName} — {t.footerRights}
        </p>
        <p className="footer-stay">{t.footerStay}</p>
        <div className="footer-social">
          <a href="mailto:Globalservicesinternational@gsica.com.ve" className="footer-link" aria-label="Email">
            ✉
          </a>
          <a href="tel:+584121794335" className="footer-link" aria-label="Phone">
            📞
          </a>
        </div>
      </footer>
    </div>
  );
}
