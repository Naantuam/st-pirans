# St. Piran's High School, Jos — Website

React + Vite single-page site.

```bash
npm install
npm run dev      # local dev server
npm run build    # production build -> dist/
```

## Adding images
- **Gallery swiper:** `src/assets/gallery/<skill>/` — one folder per skill (`agric`, `web-development`,
  `photography`, `fashion-design`, `catering`, `nails-and-hairstyle`, `barbing`, `music`, `highlights`).
  Drop photos into a folder and they appear automatically under that filter. Files sort by name (`01.jpg`, `02.jpg`, …);
  the **first** photo in each folder is used as that skill's card cover.
- **Hero background slideshow:** `src/assets/hero/` (wide photos, one per hero slide).
- **Welcome photo:** `src/assets/images/welcome.jpg`.
- **Principal / VP photos:** save as `src/assets/staff/principal.jpg` and `src/assets/staff/vice-principal.jpg`
  — they replace the initials automatically.
- Full-size originals are kept outside the app in `../photos-original/`.

## Editing text
All copy (contact details, events, stats, principal, etc.) is in `src/data/siteContent.js`.
Lines marked `TODO` are placeholders.

## Structure
```
src/
  assets/      logo/, gallery/<skill>/, hero/, images/, staff/
  components/
    layout/    TopBar, Navbar, Footer
    sections/  Hero, Offerings, Welcome, Stats, Skills, Gallery, CallToAction
    ui/        Icon, SectionHeading, WhatsAppButton
  data/        siteContent.js
  hooks/       useReveal.js (scroll animations)
  utils/       images.js (auto-loads gallery/hero/staff folders)
  styles/      global.css (brand colours, buttons, typography)
```
