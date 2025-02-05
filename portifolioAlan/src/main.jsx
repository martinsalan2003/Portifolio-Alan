import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/home/home.jsx'
import './styles/global/main.sass'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
