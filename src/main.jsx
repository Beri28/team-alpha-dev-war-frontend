
import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App'
import "./index.css"
import { BrowserRouter } from 'react-router-dom'
// import AuthProvider from './context/authContext'
createRoot(document.getElementById('root')).render(
    // <AuthProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    // </AuthProvider>
  
)
