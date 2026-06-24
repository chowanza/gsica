"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import LanguageToggle from "./LanguageToggle";
import CountdownTimer from "./CountdownTimer";
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
              width={140}
              height={140}
              className="hero-logo"
              priority
            />
          </div>

          {/* Animated gear / construction icon */}
          <div className="construction-icon" aria-hidden="true">
            <svg viewBox="0 0 100 100" className="gear-svg">
              <g className="gear-rotate">
                <path
                  fill="currentColor"
                  d="M43.7,16.3l-2.1,7.9c-1.8,0.5-3.5,1.2-5.1,2.2l-7.6-3.4l-8.5,8.5l3.4,7.6
                  c-1,1.6-1.7,3.3-2.2,5.1l-7.9,2.1v12l7.9,2.1c0.5,1.8,1.2,3.5,2.2,5.1l-3.4,7.6l8.5,8.5l7.6-3.4
                  c1.6,1,3.3,1.7,5.1,2.2l2.1,7.9h12l2.1-7.9c1.8-0.5,3.5-1.2,5.1-2.2l7.6,3.4l8.5-8.5l-3.4-7.6
                  c1-1.6,1.7-3.3,2.2-5.1l7.9-2.1v-12l-7.9-2.1c-0.5-1.8-1.2-3.5-2.2-5.1l3.4-7.6l-8.5-8.5l-7.6,3.4
                  c-1.6-1-3.3-1.7-5.1-2.2l-2.1-7.9H43.7z M49.7,35.7c7.7,0,14,6.3,14,14s-6.3,14-14,14s-14-6.3-14-14S42,35.7,49.7,35.7z"
                />
              </g>
            </svg>
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

        {/* Countdown section */}
        <section className="section" aria-label="Countdown timer">
          <CountdownTimer />
        </section>

        {/* Divider */}
        <div className="divider" aria-hidden="true" />

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
