import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../Components/Body/TextAndLabels/LogIn/Login'
import TextAndLabel from '../Components/Body/TextAndLabels/TextAndLabel'
import Home from '../Components/Body/Home/Home'


export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/SignUp' element={<TextAndLabel/>} />
        

      </Routes>
    </BrowserRouter>
  )
}
