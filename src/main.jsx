import React from 'react'
import { createRoot } from 'react-dom/client'
import App from '../interface/App.jsx'
import '../interface/styles.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)