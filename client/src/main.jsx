import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Globalstyle from './utils/GlobalStyles.js'
import { ThemeProvider } from './utils/ThemeContext.jsx'; // Import your ThemeProvider

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Globalstyle />
    <ThemeProvider>

    <App />

    </ThemeProvider>

  </StrictMode>,
)
