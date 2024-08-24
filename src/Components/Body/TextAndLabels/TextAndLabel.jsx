import React from 'react'
import "./TextAndLabel.css"
import House from "../../../assets/House.png"
import Signup from './SignUp/Signup'

export default function TextAndLabel() {
  return (
    <div>
      <TextField />
    </div>
  )
}
function TextField() {
  return (
    <>
      <div className="legendaryDiv">

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

