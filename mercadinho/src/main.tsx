import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import RegisterSeller from './pages/RegisterSeller/RegisterSeller.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RegisterSeller />
  </StrictMode>,
)
