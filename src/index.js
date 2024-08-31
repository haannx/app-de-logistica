import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import styled, { createGlobalStyle } from 'styled-components'
import Sidebar from './resources/sidebar/sidebar'
import AppRoutes from './resources/routes/routes'
import { BrowserRouter as Router } from 'react-router-dom'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: arial;
    background: #17080f;
  }

  body {
    overflow: hidden; /* Para evitar rolagem */
  }
`

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <AppRoutes />
      <GlobalStyle />
      <Sidebar />
    </Router>
  </React.StrictMode>
)

reportWebVitals()
