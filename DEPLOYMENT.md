# DEPLOYMENT.md — GSICA Website Deployment on Webuzo

## Overview

This guide covers deploying the Next.js (standalone) app to **Webuzo hosting** on IP `148.72.177.227`.

The app uses `output: "standalone"` in `next.config.ts`, which bundles everything needed to run the app as a Node.js server — without requiring `node_modules` on the server.

---

## Prerequisites

- Node.js v20+ on your local machine
- SSH/FTP access to the Webuzo server
- Access to Webuzo cPanel: http://zublimaqui.com/cpanel (temporary while domain is not active)
- Git installed

---

## Step 1 — Build the App Locally

On your Windows machine, open a terminal in the project folder:

```powershell
cd C:\Users\luisi\Documents\gsica
npm run build
```

After the build completes, you'll have:

```
.next/
  standalone/          ← This is the production Node.js app
    server.js          ← Main entry point
    node_modules/      ← Minimal runtime dependencies only
    .next/             ← Built assets
public/                ← Static files (logo, images)
```

---

## Step 2 — Prepare the Deployment Package

You need to **copy additional folders** into the standalone directory:

```powershell
# Copy public folder into standalone
Copy-Item -Recurse "public" ".next\standalone\public"

# Copy static assets into standalone
Copy-Item -Recurse ".next\static" ".next\standalone\.next\static"
```

Now your deployment package is at `.next/standalone/` — this is the folder to upload.

---

## Step 3 — Upload to the Server

### Option A: via FTP (FileZilla)

1. Open FileZilla
2. Connect to: **148.72.177.227**
   - User: `gsica`
   - Password: `RxHY%Nmi8y`
   - Port: `21`
3. Navigate to your website root (usually `public_html/` or a subdirectory)
4. Upload the **contents** of `.next/standalone/` (not the folder itself)

### Option B: via SSH + SCP

```bash
scp -r .next/standalone/* gsica@148.72.177.227:/home/gsica/public_html/
```

---

## Step 4 — Create Node.js App in Webuzo

1. Log in to cPanel: **http://zublimaqui.com/cpanel**
   - User: `gsica`
   - Password: `RxHY%Nmi8y`

2. Go to **"Setup Node.js App"** (or "Node.js" in the Software section)

3. Click **"Create Application"**

4. Fill in:
   | Field | Value |
   |---|---|
   | **Node.js version** | 20.x (or latest available) |
   | **Application mode** | Production |
   | **Application root** | `public_html` (or your upload directory) |
   | **Application URL** | `gsica.com.ve` (or `/` for root) |
   | **Application startup file** | `server.js` |

5. Click **Save** / **Create**

---

## Step 5 — Set Environment Variables

In the Node.js App settings panel, add these environment variables:

```
NODE_ENV=production
PORT=3000
HOSTNAME=0.0.0.0
```

> **Note**: Webuzo may assign a different port — use whatever port it assigns.

---

## Step 6 — Start the App

1. In the Node.js App panel, click **"Start"** (or **"Restart"**)
2. The app will run `server.js` with Node.js
3. Webuzo will proxy it through Apache/Nginx to your domain

---

## Step 7 — Verify Deployment

1. While domain is not active: Test via the server IP: `http://148.72.177.227`
2. Once `gsica.com.ve` is active (DNS propagated): Test at `https://gsica.com.ve`

---

## Updating the App

Whenever you make changes:

```powershell
# 1. Make your changes locally
# 2. Rebuild
npm run build

# 3. Re-prepare standalone
Copy-Item -Recurse -Force "public" ".next\standalone\public"
Copy-Item -Recurse -Force ".next\static" ".next\standalone\.next\static"

# 4. Re-upload .next/standalone/ contents to server via FTP/SCP

# 5. In Webuzo panel: Restart the Node.js App
```

---

## Troubleshooting

| Problem | Solution |
|---|---|
| App won't start | Check `server.js` exists in upload root |
| Blank page / 404 | Make sure `.next/static/` was copied into standalone |
| Images not loading | Make sure `public/` was copied into standalone |
| Port conflict | Change `PORT` env var to an available port |
| Domain not resolving | DNS may not have propagated yet (up to 48h) |
| EACCES permission | Run `chmod +x server.js` via SSH |

---

## GitHub Push (Initial Setup)

```bash
# Check current remote
git remote -v

# If no remote, add one:
git remote add origin https://github.com/YOUR_USERNAME/gsica.git

# Push
git add .
git commit -m "feat: initial under-construction landing page"
git branch -M main
git push -u origin main
```

---

## Domain & DNS Notes

- **IP**: `148.72.177.227`
- **Domain**: `gsica.com.ve`
- DNS propagation can take **24-48 hours** after the domain is activated
- Until then, use: **http://zublimaqui.com/cpanel** and the server IP directly

---

## SSL / HTTPS Setup

Once the domain is active:

1. In cPanel → **SSL/TLS** → **Let's Encrypt**
2. Issue a certificate for `gsica.com.ve` and `www.gsica.com.ve`
3. Enable **Force HTTPS** redirect

---

*Last updated: June 2026*
