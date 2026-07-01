"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Target, Eye, Heart, Users, TrendingUp, Leaf, Award, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLang } from "@/context/LanguageContext";

const content = {
  es: {
    hero: {
      overline: "Quiénes Somos",
      title: "NUESTRA IDENTIDAD\nCORPORATIVA",
      subtitle: "Los principios que guían cada decisión y cada servicio que prestamos",
    },
    tabs: [
      {
        id: "mision", label: "Misión", icon: "target",
        text: "Satisfacer las necesidades de nuestros clientes nacionales e internacionales mediante la fabricación y comercialización de productos y servicios para la industria, petrolera, petroquímica a nivel nacional e internacional, contribuyendo así a un crecimiento sostenido y rentable de nuestro negocio en beneficio de nuestros accionistas, trabajadores y comunidad",
      },
      {
        id: "vision", label: "Visión", icon: "eye",
        text: "En GLOBAL SERVICES INTERNATIONAL, C.A., generamos servicios que satisfagan las necesidades de los clientes y sus expectativas en cuanto a entregas oportunas, asistencia técnica y calidad de servicio, a través de un personal altamente capacitado e identificado con los valores de la empresa, desarrollando nuevos mercados que garanticen la rentabilidad sostenida de la organización, y del sector petrolero y petroquímico, así como el cumplimiento de los requisitos legales y reglamentario del país donde prestemos las operaciones",
      },
      {
        id: "valores", label: "Valores", icon: "heart",
        text: "",
        values: [
          { title: "Respeto", desc: "Valorar a nuestros trabajadores como personas, parte integral de nuestra organización.", icon: "users" },
          { title: "Responsabilidad Social", desc: "Integración socio-económica comunitaria que impulse el desarrollo nacional.", icon: "trending-up" },
          { title: "Ambiente", desc: "Compromiso ambiental aplicando las mejores prácticas en cada operación.", icon: "leaf" },
          { title: "Calidad de Servicio", desc: "Servicio basado en la mejora continua y la excelencia operativa.", icon: "award" },
          { title: "Seguridad, Salud y Ambiente", desc: "Mantener la integridad física de trabajadores e instalaciones en todo momento.", icon: "shield" }
        ],
      },
    ],
    quality: {
      title: "Compromiso de Calidad",
      subtitle: "Nuestra política y objetivos reflejan nuestra dedicación a la excelencia en cada operación.",
      policy: {
        title: "Política de Calidad",
        body: "La política de GSICA está enfocada a satisfacer las expectativas de nuestros clientes, comprometiendo a todo el personal con las siguientes acciones:",
        items: ["Diseño y fabricación de tubería continua","Cumplimiento de legislación","Medios humanos seguros","Operaciones que garantizan seguridad","Compromiso de mejora continua","Formación de personal"],
      },
      objectives: {
        title: "Objetivos de Calidad",
        intro: "Nuestros objetivos principales de calidad son:",
        items: ["Satisfacer al 100% las expectativas","Operar garantizando la seguridad","Reducir no conformidades","Mejorar la productividad"],
        quote: "\"Nuestra meta cultural es lograr que cada colaborador realice correctamente sus actividades desde la primera vez.\"",
      },
    },
    cta: { heading: "¿LISTO PARA MAXIMIZAR SUS OPERACIONES?", sub: "Nuestro equipo técnico está disponible para atender sus necesidades hoy.", btn: "Solicitar Cotización" },
  },
  en: {
    hero: {
      overline: "Who We Are",
      title: "OUR CORPORATE\nIDENTITY",
      subtitle: "The principles that guide every decision and every service we provide",
    },
    tabs: [
      {
        id: "mision", label: "Mission", icon: "target",
        text: "To satisfy the needs of our national and international clients through the manufacturing and commercialization of products and services for the oil, petrochemical industry at national and international level, thus contributing to sustainable and profitable growth of our business for the benefit of our shareholders, workers and community",
      },
      {
        id: "vision", label: "Vision", icon: "eye",
        text: "At GLOBAL SERVICES INTERNATIONAL, C.A., we generate services that satisfy the needs of clients and their expectations regarding timely deliveries, technical assistance and quality of service, through highly trained personnel identified with the company values, developing new markets that guarantee the sustained profitability of the organization, and of the oil and petrochemical sector, as well as compliance with the legal and regulatory requirements of the country where we operate",
      },
      {
        id: "valores", label: "Values", icon: "heart",
        text: "",
        values: [
          { title: "Respect", desc: "Valuing our workers as individuals, an integral part of our organization.", icon: "users" },
          { title: "Social Responsibility", desc: "Community socio-economic integration that drives national development.", icon: "trending-up" },
          { title: "Environment", desc: "Environmental commitment applying best practices in every operation.", icon: "leaf" },
          { title: "Quality of Service", desc: "Service based on continuous improvement and operational excellence.", icon: "award" },
          { title: "Safety, Health & Environment", desc: "Maintaining the physical integrity of workers and facilities at all times.", icon: "shield" }
        ],
      },
    ],
    quality: {
      title: "Quality Commitment",
      subtitle: "Our policy and objectives reflect our dedication to excellence in every operation.",
      policy: {
        title: "Quality Policy",
        body: "GSICA's policy is focused on satisfying client expectations, committing all personnel to the following actions:",
        items: ["Continuous pipeline design and manufacturing","Legislative compliance","Safe human resources","Operations that guarantee safety","Continuous improvement commitment","Personnel training"],
      },
      objectives: {
        title: "Quality Objectives",
        intro: "Our main quality objectives are:",
        items: ["100% satisfaction of expectations","Operate guaranteeing safety","Reduce non-conformities","Improve productivity"],
        quote: "\"Our cultural goal is for each collaborator to correctly perform their activities from the first time.\"",
      },
    },
    cta: { heading: "READY TO MAXIMIZE YOUR OPERATIONS?", sub: "Our technical team is available to address your needs today.", btn: "Request Quote" },
  },
} as const;

function TabIcon({ name }: { name: string }) {
  const cls = "w-5 h-5";
  if (name === "target") return <Target className={cls} />;
  if (name === "eye")    return <Eye    className={cls} />;
  if (name === "heart")  return <Heart  className={cls} />;
  return <Target className={cls} />;
}

function ValueIcon({ name }: { name: string }) {
  const cls = "w-6 h-6 text-blue-500";
  if (name === "users")       return <Users className={cls} />;
  if (name === "trending-up") return <TrendingUp className={cls} />;
  if (name === "leaf")        return <Leaf className={cls} />;
  if (name === "award")       return <Award className={cls} />;
  if (name === "shield")      return <Shield className={cls} />;
  return <CheckCircle2 className={cls} />;
}

export default function NosotrosPage() {
  const { lang } = useLang();
  const t = content[lang];
  const [activeTab, setActiveTab] = useState(0);
  const tab = t.tabs[activeTab];

  return (
    <>
      <Navbar />
      <main id="main" style={{ paddingTop: "72px" }}>

        {/* ── HERO ── */}
        <section className="nos-hero" aria-labelledby="nos-hero-heading">
          <div className="nos-hero-inner">
            <span className="nos-hero-overline-bar" aria-hidden="true" />
            <h1 id="nos-hero-heading" className="nos-hero-title">
              {t.hero.title.split("\n").map((line, i) => (
                <span key={i}>{line}{i === 0 && <br />}</span>
              ))}
            </h1>
            <p className="nos-hero-subtitle">{t.hero.subtitle}</p>
          </div>
        </section>

        {/* ── MISSION / VISION / VALUES TABS ── */}
        <section className="nos-tabs-section" aria-label="Misión, Visión y Valores">
          <div className="container-wide">
            {/* Tab bar */}
            <div className="nos-tab-bar" role="tablist">
              {t.tabs.map((tb, i) => (
                <button
                  key={tb.id}
                  id={`tab-btn-${tb.id}`}
                  role="tab"
                  aria-selected={activeTab === i}
                  aria-controls={`tabpanel-${tb.id}`}
                  className={`nos-tab-btn${activeTab === i ? " nos-tab-btn--active" : ""}`}
                  onClick={() => setActiveTab(i)}
                >
                  <TabIcon name={tb.icon} />
                  {tb.label}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div
              id={`tabpanel-${tab.id}`}
              role="tabpanel"
              aria-labelledby={`tab-btn-${tab.id}`}
              className="nos-tab-content"
            >
              {tab.text ? (
                <p className="nos-tab-text">{tab.text}</p>
              ) : (
                <div className="nos-values-grid" role="list">
                  {(tab as typeof t.tabs[2]).values?.map((v, i) => (
                    <article key={i} className="nos-value-card" role="listitem">
                      <div className="nos-value-card-header">
                        <ValueIcon name={v.icon} />
                        <h3 className="nos-value-card-title">{v.title}</h3>
                      </div>
                      <p className="nos-value-card-desc">{v.desc}</p>
                    </article>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ── QUALITY COMMITMENT ── */}
        <section className="nos-quality" aria-labelledby="nos-quality-heading">
          <div className="container-wide">
            <h2 id="nos-quality-heading" className="nos-quality-title">{t.quality.title}</h2>
            <p className="nos-quality-subtitle">{t.quality.subtitle}</p>

            <div className="nos-quality-grid">
              {/* Policy card */}
              <article className="nos-quality-card">
                <div className="nos-quality-card-header">
                  <Target size={28} className="nos-quality-card-icon" aria-hidden="true" />
                  <h3 className="nos-quality-card-title">{t.quality.policy.title}</h3>
                </div>
                <p className="nos-quality-card-body">{t.quality.policy.body}</p>
                <ul className="nos-quality-list">
                  {t.quality.policy.items.map((item, i) => (
                    <li key={i} className="nos-quality-list-item">
                      <CheckCircle2 size={16} className="nos-quality-check" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>

              {/* Objectives card */}
              <article className="nos-quality-card nos-quality-card--dark">
                <div className="nos-quality-card-header">
                  <CheckCircle2 size={28} className="nos-quality-card-icon" aria-hidden="true" />
                  <h3 className="nos-quality-card-title">{t.quality.objectives.title}</h3>
                </div>
                <p className="nos-quality-card-body">{t.quality.objectives.intro}</p>
                <ul className="nos-quality-list">
                  {t.quality.objectives.items.map((item, i) => (
                    <li key={i} className="nos-quality-list-item">
                      <CheckCircle2 size={16} className="nos-quality-check" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <blockquote className="nos-quality-quote">{t.quality.objectives.quote}</blockquote>
              </article>
            </div>

            {/* Truck image under the cards */}
            <div className="nos-quality-img-wrap">
              <Image
                src="/abajo-calidad-compromiso.png"
                alt={t.quality.title}
                width={1280}
                height={600}
                style={{ width: "100%", height: "auto", display: "block" }}
                unoptimized
              />
            </div>
          </div>
        </section>

        {/* Video 3 Banner */}
        <section className="nos-video-section">
          <video autoPlay loop muted playsInline className="nos-video">
            <source src="/Video3.mp4" type="video/mp4" />
          </video>
        </section>

        {/* ── CTA BANNER ── */}
        <section className="cta-banner" aria-labelledby="nos-cta-heading">
          <div className="cta-banner-diagonal" aria-hidden="true" />
          <div className="container-wide">
            <div className="cta-banner-inner">
              <div className="cta-banner-text">
                <h2 id="nos-cta-heading" className="cta-banner-heading">{t.cta.heading}</h2>
                <p className="cta-banner-sub">{t.cta.sub}</p>
              </div>
              <Link href="/contacto" className="btn-cta-banner" id="nos-cta-btn">
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
