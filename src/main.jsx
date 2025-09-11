import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import 'modern-normalize'
import '@fontsource-variable/manrope'
// import '@fontsource/inter/variable.css'
import "@fontsource/inter"
import './index.css'
import App from '../src/components/App/App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)