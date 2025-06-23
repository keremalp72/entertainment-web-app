import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'

// Outfit fontunu ekle
const linkElement = document.createElement('link')
linkElement.rel = 'stylesheet'
linkElement.href = 'https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;700&display=swap'
document.head.appendChild(linkElement)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
