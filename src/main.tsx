import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GoogleReCaptchaProvider } from '@google-recaptcha/react'

import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GoogleReCaptchaProvider
      type="v3"
      siteKey={import.meta.env.VITE_GOOGLE_RECAPTCHA_KEY}
    >
      <App />
    </GoogleReCaptchaProvider>
  </StrictMode>,
)
