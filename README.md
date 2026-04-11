<div align="center">

<br/>

<!-- Logo -->
<img src="frontend/images/banner1.png" alt="SO Interiors — Co-Powered by Jangid Interior" width="420"/>

<br/><br/>

# SO Interiors Website

### *Premium Interior Design Portfolio — Co-Powered by Jangid Interior*

<br/>

[![Node.js](https://img.shields.io/badge/Node.js-v18%2B-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-v5.2-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![HTML5](https://img.shields.io/badge/HTML5-Semantic-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-Vanilla-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/License-ISC-c9a96e?style=for-the-badge)](./LICENSE)

<br/>

> *"Clean planning, controlled detailing, and spaces that feel intentional in daily use."*

<br/>

[🌐 Live Preview](#-running-locally) · [📂 Project Structure](#-project-structure) · [🚀 Quick Start](#-quick-start) · [📄 Pages](#-pages--features) · [🎨 Design System](#-design-system) · [🔌 API Reference](#-api-reference)

<br/><br/>

</div>

---

## 📌 Overview

**SO Interiors** is a full-stack, multi-page premium interior design portfolio website built for a professional design practice co-powered by **Jangid Interior**. The site presents the studio's projects, philosophy, founders, and design process — crafted with a dark luxury aesthetic that reflects the brand's identity.

This repository houses both the **static frontend** (pure HTML, CSS, JavaScript) and the **lightweight Node.js/Express backend** that serves the site and handles contact form submissions and newsletter sign-ups.

<br/>

### ✨ Highlights

| Feature | Detail |
|---|---|
| 🎨 **Design Aesthetic** | Dark luxury — deep charcoal, gold accents, premium typography |
| 📄 **Pages** | 6 fully designed pages with consistent layout |
| 🖼️ **Real Project Gallery** | 64 real project photos across Kylin Skybar & Kylin Aerocity |
| 🔍 **Lightbox Viewer** | Fullscreen gallery with keyboard navigation |
| 🔽 **Filter System** | Project filter by category (Dining, Residential, Commercial) |
| 📱 **Fully Responsive** | Mobile drawer nav, fluid grids, adaptive layouts |
| ✉️ **Contact Form** | Backed by Express API with field validation |
| 📰 **Newsletter** | Email capture with backend handler |
| ⚡ **Smooth UX** | Scroll reveal, hero slider, counters, parallax, testimonials |
| 🔤 **Premium Fonts** | Playfair Display · Cormorant Garamond · Inter |

<br/>

---

## 🗂️ Project Structure

```
sointeriorwesite/
│
├── 📁 frontend/                    # Static website (served by Express)
│   ├── 📄 index.html               # Home page
│   ├── 📄 about.html               # About Us page
│   ├── 📄 projects.html            # Projects + Gallery page
│   ├── 📄 process.html             # Design Process page
│   ├── 📄 founders.html            # Founders page
│   ├── 📄 contact.html             # Contact page
│   ├── 🎨 styles.css               # Complete stylesheet (single file)
│   ├── ⚙️  script.js               # Core JavaScript (vanilla ES6+)
│   │
│   └── 📁 images/
│       ├── 🖼️  LOGO.jpg            # SO Interiors icon mark (navbar)
│       ├── 🖼️  banner1.png         # Full SO Interiors branding banner
│       ├── 🖼️  founderpho.jpeg     # Founders photograph
│       ├── 🖼️  hero-bg.png         # Hero slider background
│       ├── 🖼️  about.png           # About section image
│       ├── 🖼️  founder.png         # Individual founder photo
│       ├── 🖼️  process-hero.png    # Process page hero
│       ├── 🖼️  portfolio-*.png     # Portfolio preview images (5 files)
│       ├── 🖼️  project-*.png       # Project card images (5 files)
│       ├── 🖼️  team-*.png          # Team member photos (3 files)
│       │
│       ├── 📁 kylin(skybarconverted)/   # Kylin Skybar project (29 photos)
│       │   └── IMG_5013.jpg … IMG_5046.jpg
│       │
│       └── 📁 kylin(aerocityconverted)/ # Kylin Aerocity project (35 photos)
│           └── IMG_4972.jpg … IMG_5007.jpg
│
└── 📁 backend/                     # Node.js + Express server
    ├── ⚙️  server.js               # Main server entry point
    ├── 📦 package.json             # Dependencies & metadata
    ├── 📦 package-lock.json        # Locked dependency tree
    └── 📁 node_modules/            # Installed packages (gitignored)
```

<br/>

---

## 🚀 Quick Start

### Prerequisites

Make sure you have the following installed:

- **[Node.js](https://nodejs.org/)** — v18 or higher
- **npm** — comes bundled with Node.js

```bash
# Verify you have Node installed
node --version   # Should print v18.x.x or higher
npm --version    # Should print 9.x.x or higher
```

### Installation & Running

```bash
# 1. Clone the repository
git clone https://github.com/your-username/sointeriorwesite.git
cd sointeriorwesite

# 2. Navigate to the backend directory
cd backend

# 3. Install dependencies
npm install

# 4. Start the server
node server.js
```

That's it! Open your browser and navigate to:

```
http://localhost:3000
```

> 💡 **No build step needed.** The server serves the static `frontend/` folder directly — just start it and visit localhost.

<br/>

### Environment Variables *(Optional)*

The server uses `PORT 3000` by default. You can override it:

```bash
# Windows (PowerShell)
$env:PORT=8080; node server.js

# Windows (Command Prompt)
set PORT=8080 && node server.js

# Linux / macOS
PORT=8080 node server.js
```

<br/>

---

## 📄 Pages & Features

### 🏠 Home (`index.html`)

The landing page features a full-viewport hero with an **auto-advancing image slider** showcasing the studio's best work, followed by:

- **Expertise Cards** — Planning, Materials, Execution
- **About Intro** — Studio philosophy with branded imagery
- **Statistics Strip** — Animated counter numbers (Projects, Clients, Experience)
- **Services Grid** — 6 service categories with icon animations
- **Featured Projects** — 6 thumbnail cards with hover overlays
- **Testimonials** — Auto-rotating client quotes with dot navigation
- **CTA Banner** — Call-to-action with circular decorative elements

---

### 🏛️ About Us (`about.html`)

Comprehensive studio overview including:

- **Brand Statement** — Core philosophy in Cormorant Garamond typography
- **Philosophy Cards** — Function Before Noise · Premium Through Restraint · Execution-Aware Design
- **Values Section** — Intentional Living · Material Honesty · Client Partnership · Long-Term Thinking
- **Statistics Strip** — Reinforcement of key numbers

---

### 🖼️ Projects (`projects.html`)

The most feature-rich page with:

- **Filter Buttons** — Filter by All / Dining & Nightlife / Residential / Commercial
- **Project Grid** — 12 cards with hover overlays revealing project details
- **Kylin Skybar Gallery** — 29 real project photos in a masonry-style 3-column grid
  - Project metadata badges (Category, Scope, Location, Status)
  - Clickable lightbox with prev/next navigation
- **Kylin Aerocity Gallery** — 35 real project photos with the same rich treatment
- **Fullscreen Lightbox** — Click any image → fullscreen view with:
  - `←` `→` keyboard navigation
  - `Escape` to close
  - Image counter (e.g. `11 / 64`)
  - Next/Prev arrow buttons

---

### ⚙️ Process (`process.html`)

Step-by-step design process timeline:

| Step | Phase |
|------|-------|
| `01` | Initial Briefing |
| `02` | Concept Development |
| `03` | Design Development |
| `04` | Material Selection |
| `05` | Execution & Site Coordination |
| `06` | Styling & Handover |

Followed by **Standards Cards** — Transparent Pricing · Timeline Discipline · Quality Assurance.

---

### 👥 Founders (`founders.html`)

Real founder photography with combined profile of:

- **Sourabh Jangid** — Co-Founder & Design Director
- **Om Prakash** — Co-Founder & Operations Lead

Each section includes personal philosophy, background, and signature quotes. Followed by a **Vision Section** with Design Integrity, Client Trust, and Continuous Growth cards.

---

### 📬 Contact (`contact.html`)

Full contact experience including:

- **Contact Details** — Address, Phone, Email, Working Hours
- **Social Links** — Instagram, Facebook, LinkedIn, WhatsApp
- **Contact Form** with fields:
  - Name, Email, Phone, Project Type, Subject, Message
  - Live validation + submission via `/api/contact`
- **Embedded Google Map** — Jaipur, Rajasthan location
- **Newsletter Signup** — Email capture in footer

<br/>

---

## 🎨 Design System

### Color Palette

```css
--clr-bg:           #0b0b0f   /* Primary dark background      */
--clr-bg-alt:       #101018   /* Alternate section background */
--clr-bg-card:      #16161e   /* Card background              */
--clr-gold:         #c9a96e   /* Primary gold accent          */
--clr-gold-light:   #dfc299   /* Light gold variant           */
--clr-gold-dark:    #a88a4e   /* Dark gold variant            */
--clr-white:        #ffffff   /* Pure white                   */
--clr-text:         #b8b8c0   /* Body text                    */
--clr-text-muted:   #707080   /* Muted / secondary text       */
```

### Typography

| Font | Usage |
|---|---|
| **Playfair Display** | Headings — H1, H2, H3, logo brand name |
| **Cormorant Garamond** | Accents — labels, section metadata, blockquotes |
| **Inter** | Body — paragraphs, navigation, buttons, UI text |

### Key Animations

| Animation | Trigger |
|---|---|
| `fadeUp` | Page load — hero text, buttons |
| `slowZoom` | Hero slider images — continuous Ken Burns effect |
| `loaderSlide` | Preloader bar |
| `reveal` / `reveal-left` / `reveal-right` | Scroll-triggered with staggered delay |
| Counter animation | Scroll into view on stats section |
| Testimonial slide | Auto-rotate every 5 seconds |
| Hero slider | Auto-advance every 5 seconds |
| Lightbox | Click to open, keyboard navigation |

### Responsive Breakpoints

```
Desktop:  > 1024px   → Full 3-column grids
Tablet:   ≤ 1024px   → 2-column grids, stacked founders
Mobile:   ≤ 768px    → Single column, hamburger nav drawer
Small:    ≤ 480px    → Single column forms
```

<br/>

---

## 🔌 API Reference

The Express backend exposes the following REST endpoints:

### `POST /api/contact`

Submit a contact form enquiry.

**Request Body:**
```json
{
  "name": "Rohit Mehra",
  "email": "rohit@example.com",
  "phone": "+91 98765 43210",
  "projectType": "residential",
  "subject": "Living Room Redesign",
  "message": "We are looking to redesign our 3BHK..."
}
```

**Required fields:** `name`, `email`, `message`

**Success Response (`200`):**
```json
{
  "success": true,
  "message": "Thank you! We will get back to you soon."
}
```

**Error Response (`400`):**
```json
{
  "success": false,
  "error": "Name, email, and message are required."
}
```

---

### `POST /api/newsletter`

Subscribe an email address to the newsletter.

**Request Body:**
```json
{
  "email": "design@example.com"
}
```

**Success Response (`200`):**
```json
{
  "success": true,
  "message": "Subscribed!"
}
```

---

### `GET /api/health`

Health check endpoint to verify the server is running.

**Response (`200`):**
```json
{
  "status": "ok",
  "server": "SO Interiors Backend",
  "timestamp": "2026-04-11T18:24:00.000Z"
}
```

---

### `GET /*`

All other routes return `index.html` (SPA fallback) — allowing deep-linking to any page.

<br/>

---

## 📦 Dependencies

### Backend

| Package | Version | Purpose |
|---|---|---|
| [`express`](https://expressjs.com/) | `^5.2.1` | HTTP server framework |
| [`cors`](https://www.npmjs.com/package/cors) | `^2.8.6` | Cross-Origin Resource Sharing |

### Frontend

*Zero dependencies* — pure HTML5, CSS3, and vanilla ES6+ JavaScript.

| Resource | Type | Source |
|---|---|---|
| Playfair Display | Font | Google Fonts CDN |
| Cormorant Garamond | Font | Google Fonts CDN |
| Inter | Font | Google Fonts CDN |

<br/>

---

## 🖼️ Real Project Portfolio

This site showcases **64 real project photographs** from two hospitality interior projects:

### Kylin Skybar *(29 images)*
> A premium rooftop bar and dining destination. Full interior scope — ceiling architecture, custom bar structure, seating layout, ambient lighting design, and material coordination across the entire venue.

### Kylin Aerocity *(35 images)*
> An atmospheric premium dining experience at Aerocity, Delhi. Immersive lighting design, spatial flow optimization, rich material palette, and a premium seating arrangement engineered for both guest comfort and operational efficiency.

<br/>

---

## 🛠️ Development Notes

### Adding New Pages

1. Create `frontend/your-page.html` — copy the nav and footer from an existing page
2. Update the `active` class on the correct `<nav>` link
3. The server serves all static files from `frontend/` automatically

### Adding New API Endpoints

Open `backend/server.js` and add routes before the SPA fallback:

```javascript
// Example: New endpoint
app.get('/api/projects', (req, res) => {
  res.json({ projects: [...] });
});

// ⚠️ Keep this LAST — it's the SPA fallback
app.get('/{*path}', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'frontend', 'index.html'));
});
```

### Image Naming Convention

```
frontend/images/
├── hero-*.{png,jpg}        → Hero/banner images
├── project-*.{png,jpg}     → Project card thumbnails
├── portfolio-*.{png,jpg}   → Portfolio grid images
├── team-*.{png,jpg}        → Team member portraits
└── <project-name>/         → Folder for real project galleries
    └── IMG_XXXX.jpg
```

<br/>

---

## 🚢 Deployment

### Deploy on [Render](https://render.com/) *(Recommended — Free)*

1. Push this repo to GitHub
2. Go to [render.com](https://render.com) → New → Web Service
3. Connect your GitHub repo
4. Set:
   - **Root Directory:** `backend`
   - **Build Command:** `npm install`
   - **Start Command:** `node server.js`
5. Click **Deploy** — your site will be live in ~2 minutes

### Deploy on [Railway](https://railway.app/)

```bash
# Install Railway CLI
npm install -g @railway/cli

# Login and deploy
railway login
railway init
railway up
```

### Deploy on [Vercel](https://vercel.com/) *(Serverless)*

Create a `vercel.json` at the project root:

```json
{
  "version": 2,
  "builds": [{ "src": "backend/server.js", "use": "@vercel/node" }],
  "routes": [{ "src": "/(.*)", "dest": "backend/server.js" }]
}
```

<br/>

---

## 📋 Roadmap

- [ ] 🗂️ CMS integration for project management (Sanity / Contentful)
- [ ] 📧 Email delivery for contact form via Nodemailer / SendGrid
- [ ] 🌐 Custom domain + SSL configuration
- [ ] 🖼️ Image optimization pipeline (WebP conversion, lazy loading)
- [ ] 📊 Analytics integration (Google Analytics / Plausible)
- [ ] 🌍 Multilingual support (English / Hindi)
- [ ] 💾 Database integration for inquiry storage (MongoDB / PostgreSQL)
- [ ] 🔒 Rate limiting and spam protection on API endpoints
- [ ] 🧪 Unit tests for API routes (Jest / Supertest)

<br/>

---

## 🤝 Contributing

Contributions, suggestions, and improvements are welcome.

```bash
# Fork the repository
# Create your feature branch
git checkout -b feature/your-feature-name

# Commit your changes
git commit -m "feat: add your feature description"

# Push to your fork
git push origin feature/your-feature-name

# Open a Pull Request on GitHub
```

Please follow the existing code style — no build tools, no frameworks, keep it clean.

<br/>

---

## 📃 License

```
ISC License

Copyright (c) 2026 SO Interiors — Co-Powered by Jangid Interior

Permission to use, copy, modify, and/or distribute this software
for any purpose with or without fee is hereby granted, provided
that the above copyright notice and this permission notice appear
in all copies.
```

<br/>

---

<div align="center">

<br/>

**Built with precision. Designed with intent.**

<br/>

<img src="frontend/images/LOGO.jpg" alt="SO Interiors" width="60"/>

<br/><br/>

*© 2026 SO Interiors · Co-Powered by Jangid Interior · All rights reserved*

<br/>

[![Made with ❤️ in Jaipur](https://img.shields.io/badge/Made%20with%20%E2%9D%A4%EF%B8%8F%20in-Jaipur%2C%20Rajasthan-c9a96e?style=flat-square)](https://github.com/)

</div>
