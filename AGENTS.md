# AGENTS.md — Global Services International, C.A (GSICA)

## Project Overview

This is the official website for **Global Services International, C.A**, a Venezuelan oil & gas services company.

**Current Status**: Under Construction / Página en Construcción landing page.

---

## Company Information

| Field | Value |
|---|---|
| **Company Name** | Global Services International, C.A |
| **Short Name** | GSICA |
| **RIF** | J-30636196-0 |
| **Industry** | Oil & Gas Services |
| **Country** | Venezuela |
| **Domain** | gsica.com.ve |
| **IP Address** | 148.72.177.227 |
| **Email** | Globalservicesinternational@gsica.com.ve |
| **Phone** | +58 412 1794335 |

---

## Hosting Information

| Field | Value |
|---|---|
| **Hosting Provider** | Webuzo (shared hosting) |
| **Plan** | Profesional |
| **Domain Start** | 22/06/2026 |
| **Domain Expiry** | 22/06/2027 |
| **Hosting User** | gsica |
| **cPanel (temp)** | http://zublimaqui.com/cpanel |
| **cPanel (live)** | http://gsica.com.ve/whm (once domain active) |

### Email Configuration (SSL/TLS)
- **Incoming IMAP**: mail.gsica.com.ve : 993
- **Incoming POP3**: mail.gsica.com.ve : 995
- **Outgoing SMTP**: mail.gsica.com.ve : 465 / 587
- **Auth required**: Yes

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js 14+ (App Router) |
| **Language** | TypeScript |
| **Styling** | Vanilla CSS (custom design system) |
| **i18n** | Custom React Context (EN/ES) |
| **Build output** | `standalone` (for Node.js on Webuzo) |
| **Node.js** | v20+ |
| **Package Manager** | npm |

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx           # Root layout with SEO metadata
│   ├── page.tsx             # Entry: wraps ConstructionPage in LanguageProvider
│   └── globals.css          # Full design system (CSS variables, animations)
├── components/
│   ├── ConstructionPage.tsx # Main under-construction UI
│   ├── LanguageToggle.tsx   # EN/ES toggle button
│   ├── CountdownTimer.tsx   # Live countdown timer
│   └── ContactInfo.tsx      # Contact links (phone, email, website)
├── context/
│   └── LanguageContext.tsx  # Language state (defaults to 'es')
└── translations/
    ├── en.ts                # English strings
    └── es.ts                # Spanish strings (mirrors en.ts type)
```

---

## Design System

- **Primary BG**: Deep navy (`#060618` → `#1a1a4e` gradient)
- **Accent**: Gold (`#d4a017` / `#f0c040`)
- **Typography**: Outfit (display), Inter (body) — Google Fonts
- **Pattern**: Glassmorphism cards, animated particles, shimmer text
- **Animations**: Floating logo, spinning gear, particle drift, badge pulse

---

## Conventions

1. **All new UI strings** must be added to both `src/translations/en.ts` AND `src/translations/es.ts`. The TypeScript type on `es.ts` enforces this.
2. **Client components** that use `useLanguage()` must have `"use client"` directive.
3. **Default language** is `"es"` (Spanish) — see `LanguageContext.tsx`.
4. **Images** go in `public/`. Use `next/image` with `unoptimized: true` (set in `next.config.ts`).
5. **Do NOT add Tailwind utilities** — this project uses the custom CSS class system.
6. **Standalone output** is mandatory for Webuzo deployment; do not remove `output: "standalone"` from `next.config.ts`.

---

## Development Commands

```bash
npm run dev      # Start dev server (http://localhost:3000)
npm run build    # Production build → .next/standalone/
npm run start    # Start production server
npm run lint     # ESLint check
```

---

## Deployment (Webuzo)

See `DEPLOYMENT.md` for the full step-by-step guide.

**Quick summary**:
1. `npm run build` locally
2. Upload `.next/standalone/` folder contents to server
3. Copy `public/` and `.next/static/` into standalone output
4. Create Node.js App in Webuzo pointing to `server.js`
5. Set env var `PORT=3000` (or Webuzo-assigned port)
6. Start the app

---

## GitHub Repository

- **Workspace**: `c:\Users\luisi\Documents\gsica`
- **Remote**: github.com — see git remote for current URL

---

## Future Pages (Post-Launch)

When the domain is fully live and the company is ready, this site should expand to include:
- Home / About Us
- Services (oil field services, consulting, etc.)
- Projects / Portfolio
- Contact form
- Team
