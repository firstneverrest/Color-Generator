import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { hotjar } from 'react-hotjar'
import './sass/main.scss'

import LandingPage from './pages/Landing'
import AboutPage from './pages/About'
import ArticlePage from './pages/Article'

function App() {
  hotjar.initialize(3453078, 6)

  // Identify the user
  hotjar.identify('USER_ID', { userProperty: 'value' })

  // Update SPA state
  hotjar.stateChange('/')
  hotjar.stateChange('/about')

  // Check if Hotjar has been initialized before calling its methods
  if (hotjar.initialized()) {
    hotjar.identify('USER_ID', { userProperty: 'value' })
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/article" element={<ArticlePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
