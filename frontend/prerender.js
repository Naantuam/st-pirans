/*
 * Runs after `vite build`: puts the fully rendered page into dist/index.html
 * so Google (and WhatsApp/Facebook previews) read the real content straight away.
 * In the browser, React then takes over as normal.
 */
import { readFileSync, writeFileSync, rmSync } from 'node:fs'
import { pathToFileURL } from 'node:url'
import { resolve } from 'node:path'

const { render } = await import(pathToFileURL(resolve('dist-ssr/entry-server.js')).href)
const file = resolve('dist/index.html')
const html = readFileSync(file, 'utf8')
if (!html.includes('<div id="root"></div>')) throw new Error('root div not found in dist/index.html')
writeFileSync(file, html.replace('<div id="root"></div>', `<div id="root">${render()}</div>`))
rmSync(resolve('dist-ssr'), { recursive: true, force: true })
console.log('✓ prerendered dist/index.html')
