import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

/*
 * The public web address of the site, used for Google (sitemap, canonical link)
 * and link previews on WhatsApp / Facebook.
 * Defaults to the school's domain; override with the SITE_URL environment variable if it ever changes.
 */
const SITE_URL = (process.env.SITE_URL || 'https://st-piransanglicanhigh.school').replace(/\/$/, '')

function seoFiles() {
  return {
    name: 'seo-files',
    transformIndexHtml: (html) => html.replaceAll('%SITE_URL%', SITE_URL),
    generateBundle() {
      const today = new Date().toISOString().slice(0, 10)
      this.emitFile({
        type: 'asset',
        fileName: 'robots.txt',
        source: `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`,
      })
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE_URL}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`,
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), seoFiles()],
})
