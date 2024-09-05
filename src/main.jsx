import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SignIn from './Pages/SignIn/SignIn.jsx'
import HomePage from './Pages/HomePage/HomePage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App />  */}
    {/* <SignIn/> */}
    <HomePage />
  </StrictMode>,
)
