import React from 'react'
import { BrowserRouter,Route ,Routes } from 'react-router-dom'

export default function AppRouter() {
  return (
    <BrowserRouter>
    <Routes>
<Route path='/'    element={<Home/>} />
<Route path='/SignIn' element={<SignIn/>} />
<Route path='/SignUp' element={<SignUp/>} />

    </Routes>
    </BrowserRouter>
  )
}
