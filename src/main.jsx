import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Home from './Home.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <BrowserRouter>
    <Home />
    
    </BrowserRouter>
  </StrictMode>,
)
