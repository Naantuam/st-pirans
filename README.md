# St. Piran's High School, Jos — Website

The site lives in [`frontend/`](frontend/) (React + Vite). See [`frontend/README.md`](frontend/README.md)
for running it locally, adding photos and editing text.

## Deploying (Vercel)
- Import this GitHub repo in Vercel and set **Root Directory** to `frontend`.
  Vercel detects Vite automatically (build: `npm run build`, output: `dist`).
- The sitemap, robots.txt and Google/WhatsApp link previews use the project's production domain
  automatically. To force a specific address, add an environment variable `SITE_URL`
  (e.g. `https://www.example.com`) and redeploy.
