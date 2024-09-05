import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignInPage from "../Pages/SignIn/SignIn"
import HomePage from "../Pages/HomePage/HomePage"
import LoginPage from "../Pages/Login/Login"



export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/Login' element={<LoginPage/>} />
        <Route path='/SignUp' element={<SignInPage/>} />
        

      </Routes>
    </BrowserRouter>
  )
}
