import React from 'react'
import { BrowserRouter,Route ,Routes } from 'react-router-dom'
import Login from '../Components/Body/TextAndLabels/LogIn/Login'
import TextAndLabel from '../Components/Body/TextAndLabels/TextAndLabel'


export default function AppRouter() {
  return (
    <BrowserRouter>
    <Routes>
<Route path='/'  element={<TextAndLabel/>} />
{/* <Route path='/Login' element={<Login/>} /> */}
<Route path='/Login' element={<Login/>} />

    </Routes>
    </BrowserRouter>
  )
}
