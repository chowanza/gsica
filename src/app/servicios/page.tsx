"use client";

import Link from "next/link";
import { 
  ArrowRight, Wrench, Droplets, HardHat, Truck, CheckCircle2,
  Shield, Award, Layers, Activity, BookOpen, Package, Zap, Search
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLang } from "@/context/LanguageContext";

const content = {
  es: {
    overline: "Nuestro Portafolio Completo",
    title1: "ECOSISTEMA DE SOLUCIONES",
    title2accent: "DE ALTA INGENIERÍA",
    subtitle: "Cuatro divisiones especializadas que cubren el ciclo completo de operaciones industriales y petroleras. Una sola empresa. Cero interrupciones.",
    stats: [
      { value: "4",    label: "Divisiones Operativas" },
      { value: "20+",  label: "Años de Trayectoria" },
      { value: "100%", label: "Solución Integral" },
    ],
    divisions: [
      {
        number: "01", tag: "División 01",
        title: "Mantenimiento y Confiabilidad Mecánica",
        accent: "Maximizamos la vida útil de sus activos críticos.",
        desc: "Servicios especializados de mantenimiento preventivo, predictivo y correctivo para equipos rotativos, estáticos y sistemas de tubería en la industria petrolera, gasífera y petroquímica.",
        items: ["Servicios Petroleros","Mantenimiento de Equipos","Reparación de Tuberías a Pozos","Mantenimiento de Turbocompresores y Válvulas","Servicios de Válvulas y Bombas","Servicios Eléctricos y Mecánicos"],
        icon: "wrench", bg: "/Services-1.png",
      },
      {
        number: "02", tag: "División 02",
        title: "Saneamiento y Manejo Ambiental",
        accent: "Protegemos el ambiente con soluciones técnicas de vanguardia.",
        desc: "Gestionamos el saneamiento industrial y el manejo ambiental en campos petroleros y áreas industriales con equipos de última generación y personal certificado.",
        items: ["Servicio de Saneamiento","Servicios de Vacuum y Super Vector","Deforestación y Reparación de Vías"],
        icon: "droplets", bg: "/Services-2.png",
      },
      {
        number: "03", tag: "División 03",
        title: "Obras Civiles y Metalmecánica",
        accent: "Construimos la infraestructura que sostiene la industria.",
        desc: "Ejecutamos proyectos de ingeniería civil e instalaciones metalmecánicas con estándares de clase mundial, desde plataformas industriales hasta obras de alta complejidad para el sector energético.",
        items: ["Servicios de Soldadura","Servicio de Sandblasting","Obras Civiles y de Superficie","Servicios de Levantamiento Topográfico"],
        icon: "hardhat", bg: "/Services-3.png",
      },
      {
        number: "04", tag: "División 04",
        title: "Logística y Operaciones Especiales",
        accent: "Conectamos sus operaciones con precisión y seguridad.",
        desc: "Soluciones integrales de transporte, logística y operaciones especiales para la industria petrolera y energética, con equipos certificados y operadores de alta especialización.",
        items: ["Transporte Pesado y Liviano","Servicios de Brazo Hidráulico","Movimiento de Tierra","Servicios de Pozos","Servicios / Suministro de Wireline","Servicios Coiltubing","Grúas, Volquetas y Ambulancia"],
        icon: "truck", bg: "/Services.png",
      },
    ],
    additional: {
      badge: "Capacidades Complementarias",
      title: "SERVICIOS ADICIONALES",
      subtitle: "Complementamos nuestras cuatro divisiones con una amplia gama de servicios especializados para cubrir cada necesidad de su operación.",
      items: [
        { title: "Inspección Técnica",     desc: "Análisis de integridad y evaluación de activos industriales." },
        { title: "Certificación Industrial", desc: "Certificación de equipos bajo normativa API, ATEX y más." },
        { title: "Consultoría de Proyectos",desc: "Ingeniería de detalle y gestión EPC." },
        { title: "Gestión HSE",             desc: "Salud, seguridad y ambiente para su operación." },
        { title: "Capacitación Técnica",   desc: "Formación especializada para personal de campo." },
        { title: "Suministro de Equipos",  desc: "Materiales y equipos de origen certificado." },
        { title: "Respuesta a Emergencias",desc: "Atención 24/7 a incidentes industriales." },
        { title: "Interventoría de Obra",  desc: "Supervisión y control de calidad en sus proyectos." },
      ],
    },
    btn: "Solicitar este Servicio",
    cta: { heading: "¿LISTO PARA MAXIMIZAR SUS OPERACIONES?", sub: "Nuestro equipo técnico está disponible para atender sus necesidades hoy.", btn: "Solicitar Cotización" },
  },
  en: {
    overline: "Our Complete Portfolio",
    title1: "HIGH ENGINEERING",
    title2accent: "SOLUTIONS ECOSYSTEM",
    subtitle: "Four specialized divisions covering the complete cycle of industrial and oil operations. One company. Zero interruptions.",
    stats: [
      { value: "4",    label: "Operative Divisions" },
      { value: "20+",  label: "Years of Experience" },
      { value: "100%", label: "Integral Solution" },
    ],
    divisions: [
      {
        number: "01", tag: "Division 01",
        title: "Mechanical Maintenance & Reliability",
        accent: "We maximize the lifespan of your critical assets.",
        desc: "Specialized preventive, predictive and corrective maintenance services for rotating, static equipment and piping systems in the oil, gas and petrochemical industry.",
        items: ["Oil Services","Equipment Maintenance","Pipeline Repair to Wells","Turbocompressor & Valve Maintenance","Valve & Pump Services","Electrical & Mechanical Services"],
        icon: "wrench", bg: "/Services-1.png",
      },
      {
        number: "02", tag: "Division 02",
        title: "Environmental Sanitation & Management",
        accent: "We protect the environment with cutting-edge technical solutions.",
        desc: "We manage industrial sanitation and environmental handling in oil fields and industrial areas with state-of-the-art equipment and certified personnel.",
        items: ["Sanitation Services","Vacuum & Super Vector Services","Deforestation & Road Repair"],
        icon: "droplets", bg: "/Services-2.png",
      },
      {
        number: "03", tag: "Division 03",
        title: "Civil Works & Metal Mechanics",
        accent: "We build the infrastructure that sustains the industry.",
        desc: "We execute civil engineering projects and metal-mechanical installations with world-class standards, from industrial platforms to complex works for the energy sector.",
        items: ["Welding Services","Sandblasting Services","Civil & Surface Works","Topographic Survey Services"],
        icon: "hardhat", bg: "/Services-3.png",
      },
      {
        number: "04", tag: "Division 04",
        title: "Logistics & Special Operations",
        accent: "We connect your operations with precision and safety.",
        desc: "Comprehensive transport, logistics and special operations solutions for the oil and energy industry, with certified equipment and highly specialized operators.",
        items: ["Heavy & Light Transport","Hydraulic Arm Services","Earthmoving","Well Services","Wireline Services / Supply","Coiltubing Services","Cranes, Dump Trucks & Ambulances"],
        icon: "truck", bg: "/Services.png",
      },
    ],
    additional: {
      badge: "Complementary Capabilities",
      title: "ADDITIONAL SERVICES",
      subtitle: "We complement our four divisions with a wide range of specialized services to cover every need of your operation.",
      items: [
        { title: "Technical Inspection",    desc: "Integrity analysis and evaluation of industrial assets." },
        { title: "Industrial Certification", desc: "Equipment certification under API, ATEX regulations and more." },
        { title: "Project Consulting",       desc: "Detail engineering and EPC management." },
        { title: "HSE Management",           desc: "Health, safety and environment for your operation." },
        { title: "Technical Training",       desc: "Specialized training for field personnel." },
        { title: "Equipment Supply",         desc: "Certified-origin materials and equipment." },
        { title: "Emergency Response",       desc: "24/7 attention to industrial incidents." },
        { title: "Work Supervision",         desc: "Quality supervision and control for your projects." },
      ],
    },
    btn: "Request this Service",
    cta: { heading: "READY TO MAXIMIZE YOUR OPERATIONS?", sub: "Our technical team is available to address your needs today.", btn: "Request Quote" },
  },
} as const;

function DivIcon({ name }: { name: string }) {
  const cls = "w-5 h-5 text-white";
  if (name === "wrench")   return <Wrench   className={cls} />;
  if (name === "droplets") return <Droplets className={cls} />;
  if (name === "hardhat")  return <HardHat  className={cls} />;
  if (name === "truck")    return <Truck    className={cls} />;
  return <Wrench className={cls} />;
}

function AddIcon({ index }: { index: number }) {
  const cls = "w-6 h-6 text-blue-500";
  if (index === 0) return <Shield className={cls} />;
  if (index === 1) return <Award className={cls} />;
  if (index === 2) return <Layers className={cls} />;
  if (index === 3) return <Activity className={cls} />;
  if (index === 4) return <BookOpen className={cls} />;
  if (index === 5) return <Package className={cls} />;
  if (index === 6) return <Zap className={cls} />;
  if (index === 7) return <Search className={cls} />;
  return <Shield className={cls} />;
}

export default function ServiciosPage() {
  const { lang } = useLang();
  const t = content[lang];

  return (
    <>
      <Navbar theme="blue" />
      <main id="main" style={{ paddingTop: "72px" }} className="svc-page-wrapper">

        {/* ── HERO SERVICIOS ── */}
        <section className="svc-hero" aria-labelledby="svc-hero-heading">
          <div className="container-wide">
            <div className="svc-hero-inner">
              <p className="svc-hero-overline">{t.overline}</p>
              <h1 id="svc-hero-heading" className="svc-hero-title">
                {t.title1}<br />
                <span className="svc-hero-title-accent">{t.title2accent}</span>
              </h1>
              <p className="svc-hero-subtitle">{t.subtitle}</p>
              <div className="svc-stats">
                {t.stats.map((s, i) => (
                  <div key={i} className="svc-stat">
                    <span className="svc-stat-value">{s.value}</span>
                    <span className="svc-stat-label">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── DIVISIONS ── */}
        {t.divisions.map((div, i) => (
          <section
            key={i}
            id={`division-${div.number}`}
            className={`svc-div-section${i % 2 === 0 ? " svc-div-section--img-left" : " svc-div-section--img-right"}`}
            aria-labelledby={`div-heading-${i}`}
          >
            {/* Image panel */}
            <div
              className="svc-div-img"
              style={{ backgroundImage: `url(${div.bg})` }}
              aria-hidden="true"
            >
              <div className="svc-div-img-overlay" />
              
              {/* Large background number */}
              <span className={`svc-div-number ${i % 2 === 0 ? "svc-div-number--left" : "svc-div-number--right"}`}>
                {div.number}
              </span>
              
              {/* Custom badge */}
              <div className={`svc-div-custom-badge ${i % 2 === 0 ? "svc-div-custom-badge--left" : "svc-div-custom-badge--right"}`}>
                <div className="svc-div-custom-icon-wrap">
                  <DivIcon name={div.icon} />
                </div>
                <span className="svc-div-custom-label">{div.tag}</span>
              </div>
            </div>

            {/* Content panel */}
            <div className="svc-div-content">
              <p className="svc-div-tag">{div.tag}</p>
              <h2 id={`div-heading-${i}`} className="svc-div-title">{div.title}</h2>
              <p className="svc-div-accent">{div.accent}</p>
              <p className="svc-div-desc">{div.desc}</p>
              <ul className="svc-div-list">
                {div.items.map((item, j) => (
                  <li key={j} className="svc-div-list-item">
                    <CheckCircle2 size={16} className="svc-div-check" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contacto" className="btn-primary" id={`svc-div-btn-${i}`} style={{ width: "fit-content", marginTop: "0.5rem" }}>
                {t.btn} <ArrowRight size={16} />
              </Link>
            </div>
          </section>
        ))}

        {/* ── ADDITIONAL SERVICES ── */}
        <section className="svc-additional" aria-labelledby="svc-add-heading">
          <div className="container-wide">
            <div className="svc-additional-header">
              <span className="section-badge section-badge--dark">{t.additional.badge}</span>
              <h2 id="svc-add-heading" className="svc-additional-title">{t.additional.title}</h2>
              <p className="svc-additional-subtitle">{t.additional.subtitle}</p>
            </div>
            <div className="svc-additional-grid" role="list">
              {t.additional.items.map((item, i) => (
                <article key={i} className="svc-add-card" role="listitem">
                  <div className="svc-add-card-icon-wrap">
                    <AddIcon index={i} />
                  </div>
                  <h3 className="svc-add-card-title">{item.title}</h3>
                  <p className="svc-add-card-desc">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA BANNER ── */}
        <section className="cta-banner" aria-labelledby="svc-cta-heading">
          <div className="cta-banner-diagonal" aria-hidden="true" />
          <div className="container-wide">
            <div className="cta-banner-inner">
              <div className="cta-banner-text">
                <h2 id="svc-cta-heading" className="cta-banner-heading">{t.cta.heading}</h2>
                <p className="cta-banner-sub">{t.cta.sub}</p>
              </div>
              <Link href="/contacto" className="btn-cta-banner" id="svc-cta-btn">
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
