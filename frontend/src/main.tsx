import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './app/router';
import { Analytics } from '@vercel/analytics/react';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Analytics />
    <BrowserRouter>
    <AppRoutes />
    </BrowserRouter>
  </StrictMode>,
)
