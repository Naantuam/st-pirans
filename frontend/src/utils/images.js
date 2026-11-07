/*
 * Images are picked up automatically — just drop files into the folders:
 *   src/assets/gallery/<category>/  -> Gallery swiper (folder name = category)
 *   src/assets/hero/                -> Hero background slideshow
 *   src/assets/staff/principal.jpg, vice-principal.jpg -> Leadership photos
 * Files are sorted by name, so prefix them (01, 02, ...) to control order.
 */
import { skills } from '../data/siteContent.js'

const byName = ([a], [b]) => a.localeCompare(b, undefined, { numeric: true })

const titleFor = (slug) =>
  skills.find((s) => s.slug === slug)?.title ??
  slug.replace(/[-_]+/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())

const galleryModules = import.meta.glob('../assets/gallery/**/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP}', {
  eager: true,
  import: 'default',
})

export const galleryImages = Object.entries(galleryModules)
  .sort(byName)
  .map(([path, src]) => {
    const parts = path.split('/')
    const category = parts.length > 4 ? parts[parts.length - 2] : 'highlights'
    return { src, category, alt: `${titleFor(category)} — Skill Acquisition Programme` }
  })

/* Categories in the order the skills are listed, then any extra folders. */
export const galleryCategories = [...new Set(galleryImages.map((i) => i.category))]
  .sort((a, b) => {
    const ia = skills.findIndex((s) => s.slug === a)
    const ib = skills.findIndex((s) => s.slug === b)
    return (ia < 0 ? 99 : ia) - (ib < 0 ? 99 : ib)
  })
  .map((slug) => ({ slug, title: titleFor(slug) }))

/* "All" view: interleave categories so similar shots aren't side by side. */
export const galleryMixed = (() => {
  const buckets = galleryCategories.map((c) => galleryImages.filter((i) => i.category === c.slug))
  const out = []
  for (let r = 0; out.length < galleryImages.length; r++) buckets.forEach((b) => b[r] && out.push(b[r]))
  return out
})()

/* First photo of a category (used as the skill card cover). */
export const coverFor = (slug) => galleryImages.find((i) => i.category === slug)?.src

export const heroImages = Object.entries(
  import.meta.glob('../assets/hero/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP}', { eager: true, import: 'default' }),
)
  .sort(byName)
  .map(([, src]) => ({ src }))

const staffModules = import.meta.glob('../assets/staff/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP}', {
  eager: true,
  import: 'default',
})

/* staffPhoto('principal') -> src of src/assets/staff/principal.(jpg|png|…) or undefined */
export const staffPhoto = (key) =>
  Object.entries(staffModules).find(([path]) => path.split('/').pop().replace(/\.[^.]+$/, '') === key)?.[1]
