import React from 'react'
import Header from './Components/NavBar/Header'
import TextAndLabel from './Components/Body/TextAndLabels/TextAndLabel'
import Footer from './Components/Footer/footer'
import Textfield from './Components/General/Textfield'
import "./App.css"
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './Config/AppRouter'

export default function App() {
  return (
    <>
      <AppRouter />
      {/* <Header />
      <TextAndLabel />
      <Footer /> */}
    </>
  )
}

// https://www.figma.com/design/bgMpJdtg9oJkivkzZNbWWb/Insider's-Inventory-(Copy)?node-id=518-5771&t=g26aHhINPkcSHbNE-0 