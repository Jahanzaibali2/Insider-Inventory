import React from 'react'
import "./TextAndLabel.css"
import House from "../../../assets/House.png"
import Signup from './SignUp/Signup'

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
      <div className="legendaryDiv">

      <div className="headingDiv">
        <h1>Sign-Upto view a Available Inventory Or to list a Property</h1>
      </div>
        <div className="b-div">


          <div className="imageDiv">
            <img src={House} alt="x" />
          </div>

          <div className="signUp">
            <Signup />
          </div>


        </div>
      </div>
    </>
  )
}

