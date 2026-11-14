import { renderToString } from 'react-dom/server'
import App from './App.jsx'

/* Used at build time only: renders the page to plain HTML so search engines
   see every word without needing to run JavaScript. */
export const render = () => renderToString(<App />)
