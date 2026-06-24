"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function ContactInfo() {
  const { t } = useLanguage();

  const contacts = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="contact-icon-svg">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
        </svg>
      ),
      label: t.phone,
      value: "+58 412 1794335",
      href: "tel:+584121794335",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="contact-icon-svg">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      ),
      label: t.email,
      value: "Globalservicesinternational@gsica.com.ve",
      href: "mailto:Globalservicesinternational@gsica.com.ve",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="contact-icon-svg">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
        </svg>
      ),
      label: t.website,
      value: "gsica.com.ve",
      href: "https://gsica.com.ve",
    },
  ];

  return (
    <div className="contact-section">
      <h2 className="contact-title">{t.contactTitle}</h2>
      <p className="contact-subtitle">{t.contactSubtitle}</p>
      <div className="contact-list">
        {contacts.map(({ icon, label, value, href }) => (
          <a
            key={label}
            href={href}
            className="contact-item"
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          >
            <span className="contact-icon">{icon}</span>
            <div className="contact-text">
              <span className="contact-label">{label}</span>
              <span className="contact-value">{value}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
