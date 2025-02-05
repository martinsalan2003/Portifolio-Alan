import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './styles/global/main.sass'
import Home from './pages/home/home.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home/>
  </StrictMode>,
)
