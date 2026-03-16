# Apex Hygiene UK — Website Codebase

A clean, modern, production-ready rebuild of [apexhygieneuk.co.uk](https://apexhygieneuk.co.uk) — built as pure HTML/CSS/JS with no framework dependencies.

---

## 📁 Project Structure

```
apex-hygiene-uk/
├── index.html                    # Homepage
├── css/
│   └── style.css                 # All styles (CSS variables, responsive)
├── js/
│   └── main.js                   # Nav, animations, form handling
└── pages/
    ├── about.html                # About Us
    ├── contact.html              # Contact / Quote form
    ├── clinical-medical-waste.html
    ├── dental-waste.html
    ├── sanitary-bins.html
    ├── sharps-disposal.html
    ├── nappy-waste.html
    ├── hygiene-waste.html
    ├── privacy-policy.html
    ├── terms.html
    └── cookie-policy.html
```

---

## 🚀 Running Locally

Just open `index.html` in a browser — no build step required.

For a local dev server (recommended for proper relative paths):

```bash
# Python
python3 -m http.server 8000

# Node (npx)
npx serve .

# VS Code
# Install "Live Server" extension, right-click index.html → Open with Live Server
```

---

## 🎨 Design System

### Colour Palette (CSS Variables in `style.css`)

| Variable        | Value     | Use                          |
|-----------------|-----------|------------------------------|
| `--teal`        | `#0a4d4a` | Primary brand, CTAs, headers |
| `--teal-mid`    | `#0d6b66` | Hover states                 |
| `--teal-light`  | `#1a9e96` | Accents, eyebrows            |
| `--lime`        | `#b8f045` | Highlight accent, hero text  |
| `--slate`       | `#1c2b2a` | Dark backgrounds, footer     |
| `--mist`        | `#e8f4f3` | Light section backgrounds    |

### Typography
- **Headings:** Syne (Google Fonts) — bold, authoritative
- **Body:** DM Sans (Google Fonts) — readable, clean

---

## 📄 Pages Included

| Page | File | Description |
|------|------|-------------|
| Homepage | `index.html` | Hero, services grid, why choose, testimonials |
| About Us | `pages/about.html` | Company story, values, stats |
| Contact | `pages/contact.html` | Quote form, contact details |
| Clinical & Medical Waste | `pages/clinical-medical-waste.html` | Service detail |
| Dental Waste | `pages/dental-waste.html` | Service detail |
| Sanitary Bins | `pages/sanitary-bins.html` | Service detail |
| Sharps Disposal | `pages/sharps-disposal.html` | Service detail |
| Nappy Waste Disposal | `pages/nappy-waste.html` | Service detail |
| Hygiene Waste | `pages/hygiene-waste.html` | Service detail |
| Privacy Policy | `pages/privacy-policy.html` | GDPR-compliant policy |
| Terms & Conditions | `pages/terms.html` | Terms of use |
| Cookie Policy | `pages/cookie-policy.html` | Cookie usage policy |

---

## ✅ Features

- **Fully responsive** — mobile, tablet, desktop
- **Sticky header** with shadow on scroll
- **Dropdown nav** with keyboard support
- **Mobile hamburger menu** with animated open/close
- **Scroll-triggered fade-in animations** (IntersectionObserver)
- **Contact form** with success state
- **Service pages** with sidebar CTA + service navigation
- **CSS-only** — no jQuery, no frameworks, no build tools
- **Semantic HTML** — accessible structure with ARIA labels
- **Google Fonts** — Syne + DM Sans

---

## 🔧 Improvements to Make in Claude Code

Here are the top suggestions for enhancing this further:

### Content & SEO
- [ ] Add real logo image (replace text logo)
- [ ] Add hero background image / photography
- [ ] Add service page images/illustrations
- [ ] Write unique meta descriptions per page
- [ ] Add `sitemap.xml` and `robots.txt`
- [ ] Add structured data (JSON-LD) for local business

### Functionality
- [ ] Connect contact form to a backend (e.g. Netlify Forms, Formspree, or custom API)
- [ ] Add Google Analytics / cookie consent banner
- [ ] Add Google Maps embed on contact page
- [ ] Add a "Get a Quote" floating CTA button

### Design
- [ ] Add real client photography / imagery
- [ ] Add compliance badge icons / certifications section
- [ ] Add a "clients we serve" logo strip
- [ ] Add FAQ accordion section to service pages

### Technical
- [ ] Convert to a framework (Next.js / Astro) for easier maintenance
- [ ] Add a CMS (Contentful, Sanity, or Netlify CMS) for easy content updates
- [ ] Implement proper email handling with server-side validation
- [ ] Add page transitions / loading animation

---

## 🏢 Business Details

- **Company:** CCS Group NW Limited T/A Apex Hygiene UK
- **Address:** Unit 1 Commerce House, Campbeltown Road, Birkenhead, Merseyside, CH41 9HP
- **Phone:** 0330 010 0130
- **Email:** hello@apexhygieneuk.co.uk
- **Hours:** Mon–Fri, 9am–5pm

---

Built from the original site at [apexhygieneuk.co.uk](https://apexhygieneuk.co.uk)
