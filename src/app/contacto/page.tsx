"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Send, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLang } from "@/context/LanguageContext";

const content = {
  es: {
    hero: {
      title: "HABLEMOS DE SU\nPRÓXIMO PROYECTO",
      subtitle: "Complete el formulario y un asesor técnico se comunicará con usted en el menor tiempo posible.",
    },
    form: {
      title: "Solicitud de Cotización",
      subtitle: "Todos los campos son requeridos para poder atenderle correctamente.",
      fields: {
        nombre: "NOMBRE COMPLETO *",
        nombrePh: "Ej. Carlos Rodríguez",
        empresa: "EMPRESA *",
        empresaPh: "Nombre de su empresa",
        cargo: "CARGO / POSICIÓN *",
        cargoPh: "Ej. Gerente de Operaciones",
        telefono: "TELÉFONO *",
        telefonoPh: "+58 412 000 0000",
        correo: "CORREO ELECTRÓNICO *",
        correoPh: "correo@empresa.com",
        servicio: "SERVICIO DE INTERÉS *",
        servicioPh: "",
        descripcion: "DESCRIPCIÓN DEL REQUERIMIENTO *",
        descripcionPh: "Descríbanos brevemente su necesidad operativa, ubicación del proyecto y cualquier detalle relevante...",
      },
      servicios: ["Mantenimiento y Confiabilidad Mecánica","Saneamiento y Manejo Ambiental","Obras Civiles y Metalmecánica","Logística y Operaciones Especiales","Otro"],
      btn: "Enviar Solicitud",
      successTitle: "¡Solicitud Enviada!",
      successBody: "Gracias por contactarnos. Un asesor técnico se comunicará con usted a la brevedad.",
    },
    info: {
      title: "Información de Contacto",
      sede: "SEDE PRINCIPAL – ANACO",
      sedeAddr: "Calle Quinta entre tercera y cuarta, calle transversal, local Galpón S/N, sector Ali Primera, Anaco. Edo. Anzoátegui.\nZona Postal 6003",
      ops: "ZONA DE OPERACIONES – EL TIGRITO",
      opsAddr: "Estado Anzoátegui, Venezuela.\nÁrea de operaciones en el corredor petrolero del oriente venezolano.",
      phones: "TELÉFONOS",
      phoneList: ["+58 412-1794335"],
      emailLabel: "CORREO ELECTRÓNICO",
      email: "globalservicesinternational@gsica.com.ve",
    },
  },
  en: {
    hero: {
      title: "LET\'S TALK ABOUT YOUR\nNEXT PROJECT",
      subtitle: "Fill out the form and a technical advisor will contact you as soon as possible.",
    },
    form: {
      title: "Quote Request",
      subtitle: "All fields are required to properly serve you.",
      fields: {
        nombre: "FULL NAME *",
        nombrePh: "Ex. Carlos Rodríguez",
        empresa: "COMPANY *",
        empresaPh: "Your company name",
        cargo: "POSITION / ROLE *",
        cargoPh: "Ex. Operations Manager",
        telefono: "PHONE *",
        telefonoPh: "+58 412 000 0000",
        correo: "EMAIL *",
        correoPh: "email@company.com",
        servicio: "SERVICE OF INTEREST *",
        servicioPh: "",
        descripcion: "REQUIREMENT DESCRIPTION *",
        descripcionPh: "Briefly describe your operational need, project location and any relevant details...",
      },
      servicios: ["Mechanical Maintenance & Reliability","Environmental Sanitation & Management","Civil Works & Metal Mechanics","Logistics & Special Operations","Other"],
      btn: "Send Request",
      successTitle: "Request Sent!",
      successBody: "Thank you for contacting us. A technical advisor will reach out shortly.",
    },
    info: {
      title: "Contact Information",
      sede: "MAIN OFFICE – ANACO",
      sedeAddr: "Calle Quinta entre tercera y cuarta, calle transversal, local Galpón S/N, sector Ali Primera, Anaco. Edo. Anzoátegui.\nPostal Code 6003",
      ops: "OPERATIONS ZONE – EL TIGRITO",
      opsAddr: "Anzoátegui State, Venezuela.\nOperations area in the oil corridor of eastern Venezuela.",
      phones: "PHONES",
      phoneList: ["+58 412-1794335"],
      emailLabel: "EMAIL",
      email: "globalservicesinternational@gsica.com.ve",
    },
  },
} as const;

export default function ContactoPage() {
  const { lang } = useLang();
  const t = content[lang];
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ nombre: "", empresa: "", cargo: "", telefono: "", correo: "", servicio: "", descripcion: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <main id="main" style={{ paddingTop: "72px" }}>

        {/* ── HERO ── */}
        <section className="ctc-hero" aria-labelledby="ctc-hero-heading">
          <div className="ctc-hero-inner">
            <span className="ctc-hero-bar" aria-hidden="true" />
            <h1 id="ctc-hero-heading" className="ctc-hero-title">
              {t.hero.title.split("\n").map((line, i) => (
                <span key={i}>{line}{i === 0 && <br />}</span>
              ))}
            </h1>
            <p className="ctc-hero-subtitle">{t.hero.subtitle}</p>
          </div>
        </section>

        {/* ── FORM + INFO ── */}
        <section className="ctc-main" aria-label="Formulario de contacto">
          <div className="container-wide">
            <div className="ctc-grid">

              {/* Form */}
              <div className="ctc-form-col">
                <h2 className="ctc-form-title">{t.form.title}</h2>
                <p className="ctc-form-subtitle">{t.form.subtitle}</p>

                {submitted ? (
                  <div className="ctc-success">
                    <CheckCircle2 size={48} className="ctc-success-icon" />
                    <h3 className="ctc-success-title">{t.form.successTitle}</h3>
                    <p className="ctc-success-body">{t.form.successBody}</p>
                  </div>
                ) : (
                  <form className="ctc-form" onSubmit={handleSubmit} noValidate>
                    <div className="ctc-row">
                      <div className="ctc-field">
                        <label className="ctc-label" htmlFor="nombre">{t.form.fields.nombre}</label>
                        <input id="nombre" name="nombre" type="text" className="ctc-input" placeholder={t.form.fields.nombrePh} value={form.nombre} onChange={handleChange} required />
                      </div>
                      <div className="ctc-field">
                        <label className="ctc-label" htmlFor="empresa">{t.form.fields.empresa}</label>
                        <input id="empresa" name="empresa" type="text" className="ctc-input" placeholder={t.form.fields.empresaPh} value={form.empresa} onChange={handleChange} required />
                      </div>
                    </div>
                    <div className="ctc-row">
                      <div className="ctc-field">
                        <label className="ctc-label" htmlFor="cargo">{t.form.fields.cargo}</label>
                        <input id="cargo" name="cargo" type="text" className="ctc-input" placeholder={t.form.fields.cargoPh} value={form.cargo} onChange={handleChange} required />
                      </div>
                      <div className="ctc-field">
                        <label className="ctc-label" htmlFor="telefono">{t.form.fields.telefono}</label>
                        <input id="telefono" name="telefono" type="tel" className="ctc-input" placeholder={t.form.fields.telefonoPh} value={form.telefono} onChange={handleChange} required />
                      </div>
                    </div>
                    <div className="ctc-field">
                      <label className="ctc-label" htmlFor="correo">{t.form.fields.correo}</label>
                      <input id="correo" name="correo" type="email" className="ctc-input" placeholder={t.form.fields.correoPh} value={form.correo} onChange={handleChange} required />
                    </div>
                    <div className="ctc-field">
                      <label className="ctc-label" htmlFor="servicio">{t.form.fields.servicio}</label>
                      <select id="servicio" name="servicio" className="ctc-input ctc-select" value={form.servicio} onChange={handleChange} required>
                        <option value="" disabled>{t.form.fields.servicioPh || "—"}</option>
                        {t.form.servicios.map((s, i) => <option key={i} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <div className="ctc-field">
                      <label className="ctc-label" htmlFor="descripcion">{t.form.fields.descripcion}</label>
                      <textarea id="descripcion" name="descripcion" className="ctc-input ctc-textarea" placeholder={t.form.fields.descripcionPh} value={form.descripcion} onChange={handleChange} required rows={5} />
                    </div>
                    <button type="submit" className="btn-primary ctc-submit" id="ctc-submit-btn">
                      <Send size={16} /> {t.form.btn}
                    </button>
                  </form>
                )}
              </div>

              {/* Info */}
              <div className="ctc-info-col">
                <h2 className="ctc-info-title">{t.info.title}</h2>

                <div className="ctc-location-card">
                  <div className="ctc-location-header">
                    <MapPin size={16} aria-hidden="true" />
                    {t.info.sede}
                  </div>
                  <div className="ctc-location-body">
                    <MapPin size={16} className="ctc-info-icon" aria-hidden="true" />
                    <p>{t.info.sedeAddr}</p>
                  </div>
                </div>

                <div className="ctc-location-card">
                  <div className="ctc-location-header">
                    <MapPin size={16} aria-hidden="true" />
                    {t.info.ops}
                  </div>
                  <div className="ctc-location-body">
                    <MapPin size={16} className="ctc-info-icon" aria-hidden="true" />
                    <p style={{ whiteSpace: "pre-line" }}>{t.info.opsAddr}</p>
                  </div>
                </div>

                <div className="ctc-contact-block">
                  <p className="ctc-contact-label">
                    <Phone size={16} aria-hidden="true" /> {t.info.phones}
                  </p>
                  {t.info.phoneList.map((ph, i) => (
                    <a key={i} href={`tel:${ph.replace(/[^+\d]/g, "")}`} className="ctc-contact-value">• {ph}</a>
                  ))}
                </div>

                <div className="ctc-contact-block">
                  <p className="ctc-contact-label">
                    <Mail size={16} aria-hidden="true" /> {t.info.emailLabel}
                  </p>
                  <a href={`mailto:${t.info.email}`} className="ctc-contact-value">{t.info.email}</a>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
