"use client";

import { ArrowRight, ChevronDown, Wrench, Droplets, HardHat, Truck, Shield, Award, Users, TrendingUp } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLang } from "@/context/LanguageContext";

const translations = {
  es: {
    hero: {
      badge: "Industria Energética · Petróleo · Gas · Petroquímica",
      line1: "UN SOLO ALIADO",
      line2: "ESTRATÉGICO PARA",
      line3accent: "SUS DESAFÍOS",
      line4: "MÁS CRÍTICOS.",
      subtitle: "Consolidamos la continuidad operativa de la industria energética y pesada mediante soluciones integrales de ingeniería, mantenimiento especializado y logística de alto impacto.",
      cta1: "Solicitar Cotización",
      cta2: "Nuestros Servicios",
    },
    stats: [
      { value: "4",    label: "Divisiones Operativas" },
      { value: "100%", label: "Compromiso con el Cliente" },
      { value: "24/7", label: "Soporte Técnico" },
      { value: "ISO",  label: "Estándares de Calidad" },
    ],
    why: {
      heading1: "¿POR QUÉ ELEGIR A GSICA",
      heading2: "COMO SU ALIADO OPERATIVO?",
      body: "En la industria energética e industrial, cada minuto de inactividad cuesta. En ",
      bodyBrand: "GLOBAL SERVICES INTERNATIONAL",
      bodyRest: " no solo prestamos servicios; garantizamos que su operación no se detenga. Somos el músculo operativo que su proyecto exige.",
      cta: "Ver Todos los Servicios",
    },
    features: [
      { title: "Seguridad Certificada",  desc: "Operamos bajo estrictos protocolos de seguridad industrial y normativas nacionales e internacionales.", icon: "shield" },
      { title: "Calidad Comprobada",     desc: "Sistema de gestión de calidad orientada a la satisfacción total del cliente en cada servicio.",          icon: "medal" },
      { title: "Personal Especializado", desc: "Equipo técnico altamente capacitado e identificado con los valores corporativos de GSICA.",               icon: "people" },
      { title: "Mejora Continua",        desc: "Compromiso permanente con la innovación y la excelencia operativa en cada proyecto.",                     icon: "chart" },
    ],
    divisions: {
      badge: "Estructura Operativa",
      title: "Nuestras 4 Divisiones Operativas",
      subtitle: "Cuatro pilares de excelencia que conforman nuestro ecosistema integral de servicios industriales",
      btn: "Ver detalles",
    },
    cta: {
      heading: "¿LISTO PARA MAXIMIZAR SUS OPERACIONES?",
      sub: "Nuestro equipo técnico está disponible para atender sus necesidades hoy.",
      btn: "Solicitar Cotización",
    },
  },
  en: {
    hero: {
      badge: "Energy Industry · Oil · Gas · Petrochemical",
      line1: "YOUR SINGLE",
      line2: "STRATEGIC PARTNER FOR",
      line3accent: "YOUR MOST CRITICAL",
      line4: "CHALLENGES.",
      subtitle: "We consolidate operational continuity for the energy and heavy industry through comprehensive engineering, specialized maintenance, and high-impact logistics solutions.",
      cta1: "Request Quote",
      cta2: "Our Services",
    },
    stats: [
      { value: "4",    label: "Operative Divisions" },
      { value: "100%", label: "Client Commitment" },
      { value: "24/7", label: "Technical Support" },
      { value: "ISO",  label: "Quality Standards" },
    ],
    why: {
      heading1: "WHY CHOOSE GSICA",
      heading2: "AS YOUR OPERATIVE ALLY?",
      body: "In the energy and industrial sector, every minute of downtime costs. At ",
      bodyBrand: "GLOBAL SERVICES INTERNATIONAL",
      bodyRest: " we don't just provide services; we guarantee your operations never stop. We are the operative muscle your project demands.",
      cta: "View All Services",
    },
    features: [
      { title: "Certified Safety",      desc: "We operate under strict industrial safety protocols and national and international regulations.", icon: "shield" },
      { title: "Proven Quality",        desc: "Quality management system focused on total client satisfaction in every service.",            icon: "medal" },
      { title: "Specialized Personnel", desc: "Highly trained technical team aligned with GSICA's corporate values.",                       icon: "people" },
      { title: "Continuous Improvement",desc: "Permanent commitment to innovation and operational excellence in every project.",             icon: "chart" },
    ],
    divisions: {
      badge: "Operative Structure",
      title: "Our 4 Operative Divisions",
      subtitle: "Four pillars of excellence forming our comprehensive industrial services ecosystem",
      btn: "View details",
    },
    cta: {
      heading: "READY TO MAXIMIZE YOUR OPERATIONS?",
      sub: "Our technical team is available to address your needs today.",
      btn: "Request Quote",
    },
  },
} as const;

const PARTICLES = [
  { left: "8%",  delay: "0s",  dur: "14s", size: "3px", top: "20%" },
  { left: "18%", delay: "2s",  dur: "18s", size: "2px", top: "60%" },
  { left: "28%", delay: "5s",  dur: "12s", size: "4px", top: "40%" },
  { left: "38%", delay: "1s",  dur: "20s", size: "2px", top: "80%" },
  { left: "48%", delay: "7s",  dur: "16s", size: "3px", top: "25%" },
  { left: "58%", delay: "3s",  dur: "22s", size: "2px", top: "70%" },
  { left: "68%", delay: "9s",  dur: "15s", size: "4px", top: "35%" },
  { left: "78%", delay: "4s",  dur: "19s", size: "2px", top: "55%" },
  { left: "88%", delay: "6s",  dur: "13s", size: "3px", top: "45%" },
  { left: "93%", delay: "11s", dur: "17s", size: "2px", top: "65%" },
];

const DIVISIONS = [
  { icon: <Wrench   className="w-6 h-6 text-white" />, variant: "maint", bg: "/Services-1.png" },
  { icon: <Droplets className="w-6 h-6 text-white" />, variant: "sanea", bg: "/Services-2.png" },
  { icon: <HardHat  className="w-6 h-6 text-white" />, variant: "obras", bg: "/Services-3.png" },
  { icon: <Truck    className="w-6 h-6 text-white" />, variant: "logis", bg: "/Services.png"   },
];

const DIVISIONS_ES = [
  { title: "Mantenimiento y Confiabilidad Mecánica", desc: "Servicios especializados en mantenimiento preventivo y correctivo de equipos industriales" },
  { title: "Saneamiento y Manejo Ambiental",         desc: "Soluciones integrales para el control ambiental y gestión de residuos industriales" },
  { title: "Obras Civiles y Metalmecánica",          desc: "Fabricación, montaje y mantenimiento de estructuras metálicas y obras civiles" },
  { title: "Logística y Transporte Pesado",          desc: "Movilización de equipos y cargas especiales con tecnología de punta" },
];
const DIVISIONS_EN = [
  { title: "Mechanical Maintenance & Reliability",       desc: "Specialized preventive and corrective maintenance services for industrial equipment" },
  { title: "Environmental Sanitation & Management",     desc: "Comprehensive solutions for environmental control and industrial waste management" },
  { title: "Civil Works & Metal Mechanics",             desc: "Fabrication, assembly and maintenance of metallic structures and civil works" },
  { title: "Logistics & Heavy Transport",               desc: "Equipment and special cargo mobilization with cutting-edge technology" },
];

function FeatureIcon({ name }: { name: string }) {
  const cls = "w-6 h-6 text-blue-600";
  if (name === "shield")  return <Shield    className={cls} />;
  if (name === "medal")   return <Award     className={cls} />;
  if (name === "people")  return <Users     className={cls} />;
  if (name === "chart")   return <TrendingUp className={cls} />;
  return <Shield className={cls} />;
}

export default function HomePage() {
  const { lang } = useLang();
  const t = translations[lang];
  const divTexts = lang === "es" ? DIVISIONS_ES : DIVISIONS_EN;

  return (
    <>
      <Navbar />
      <main id="main">
        {/* ── HERO ── */}
        <header id="inicio" className="hero-section" aria-labelledby="hero-heading">
          <div className="hero-bg-overlay" aria-hidden="true" />
          <div className="hero-particles" aria-hidden="true">
            {PARTICLES.map((p, i) => (
              <span key={i} className="hero-particle" style={{ left: p.left, top: p.top, width: p.size, height: p.size, animationDelay: p.delay, animationDuration: p.dur }} />
            ))}
          </div>

          <div className="hero-content">
            <div className="container-wide">
              <div className="hero-badge" role="doc-subtitle">
                <span className="hero-badge-dot" aria-hidden="true" />
                {t.hero.badge}
              </div>
              <h1 id="hero-heading" className="hero-title">
                {t.hero.line1}<br />
                {t.hero.line2}<br />
                <span className="hero-title-accent">{t.hero.line3accent}</span><br />
                {t.hero.line4}
              </h1>
              <p className="hero-subtitle">{t.hero.subtitle}</p>
              <div className="hero-actions">
                <Link href="/contacto" className="btn-primary" id="hero-cta-btn">{t.hero.cta1}</Link>
                <Link href="/servicios" className="btn-outline" id="hero-services-btn">{t.hero.cta2} <ArrowRight size={16} /></Link>
              </div>
              <div className="hero-scroll-indicator" aria-hidden="true"><ChevronDown size={28} /></div>
            </div>
          </div>

          <div className="stats-bar" role="region" aria-label="Estadísticas">
            <div className="container-wide">
              <div className="stats-inner">
                {t.stats.map((s, i) => (
                  <div key={i} className="stat-item">
                    <span className="stat-value">{s.value}</span>
                    <span className="stat-label">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </header>

        {/* ── WHY GSICA ── */}
        <section id="nosotros" className="why-section" aria-labelledby="why-heading">
          <div className="container-wide">
            <div className="why-grid">
              <div className="why-left">
                <div className="section-overline" aria-hidden="true"><span className="overline-bar" /></div>
                <h2 id="why-heading" className="why-heading">
                  {t.why.heading1}<br />{t.why.heading2}
                </h2>
                <p className="why-body">
                  {t.why.body}<strong>{t.why.bodyBrand}</strong>{t.why.bodyRest}
                </p>
                <Link href="/servicios" className="btn-primary" id="why-services-btn" style={{ width: "fit-content" }}>
                  {t.why.cta} <ArrowRight size={16} />
                </Link>
              </div>
              <div className="features-grid" role="list">
                {t.features.map((f, i) => (
                  <article key={i} className="feature-card" role="listitem">
                    <div className="feature-icon-wrap" aria-hidden="true"><FeatureIcon name={f.icon} /></div>
                    <h3 className="feature-title">{f.title}</h3>
                    <p className="feature-desc">{f.desc}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 4 DIVISIONS ── */}
        <section id="servicios" className="divisions-section" aria-labelledby="divisions-heading">
          <div className="container-wide">
            <div className="divisions-header">
              <span className="section-badge">{t.divisions.badge}</span>
              <h2 id="divisions-heading" className="divisions-title">{t.divisions.title}</h2>
              <p className="divisions-subtitle">{t.divisions.subtitle}</p>
            </div>
            <div className="divisions-grid" role="list">
              {DIVISIONS.map((div, i) => (
                <article key={i} className={`division-card division-card--${div.variant}`} role="listitem">
                  <div className="division-card-bg" aria-hidden="true" style={{ backgroundImage: `url(${div.bg})` }} />
                  <div className="division-card-overlay" aria-hidden="true" />
                  <div className="division-card-content">
                    <div className="division-icon-wrap" aria-hidden="true">{div.icon}</div>
                    <h3 className="division-title">{divTexts[i].title}</h3>
                    <p className="division-desc">{divTexts[i].desc}</p>
                    <Link href="/servicios" className="division-btn" id={`division-btn-${i}`}>
                      {t.divisions.btn} <ArrowRight size={14} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA BANNER ── */}
        <section id="cotizacion" className="cta-banner" aria-labelledby="cta-heading">
          <div className="cta-banner-diagonal" aria-hidden="true" />
          <div className="container-wide">
            <div className="cta-banner-inner">
              <div className="cta-banner-text">
                <h2 id="cta-heading" className="cta-banner-heading">{t.cta.heading}</h2>
                <p className="cta-banner-sub">{t.cta.sub}</p>
              </div>
              <Link href="/contacto" className="btn-cta-banner" id="cta-banner-btn">
                {t.cta.btn} <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
