import React from 'react'
import "./TextAndLabel.css"
import House from "../../../assets/House.png"
import Signup from './SignUp/Signup'
import Footer from '../../Footer/footer'
import Header from '../../NavBar/Header'

export default function TextAndLabel() {
  return (
    <div className='wholeBody'>
      <Body />
    </div>
  )
}
function Body() {
  return (
    <>
    <Header/>
      <div className="legendaryDiv">

          <div className="imageDiv">
            <img src={House} alt="x" />
          </div>

          <div className="signUp">
            <Signup />
          </div>


        </div>
<Footer/>
    </>
  )
}

