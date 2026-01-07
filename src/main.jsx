import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Bonkers from './bonkers.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    < Bonkers/>
  </StrictMode>,
)
