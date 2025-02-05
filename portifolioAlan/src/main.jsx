import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import  AppRouts from './routers/router.jsx'
import './styles/global/main.sass'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRouts/>
  </StrictMode>,
)
