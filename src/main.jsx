import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Google OAuthProvider - npm instal @react-oauth/google
import { GoogleOAuthProvider } from '@react-oauth/google'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Truyền biến môi trường .env lúc nãy vào đây */}
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <App />
    </GoogleOAuthProvider>
  </StrictMode>,
)