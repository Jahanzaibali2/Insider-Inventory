import React from 'react'
import Textfield from '../../../General/Textfield'
import Checkbox from '../../../General/Checkbox'
import "./Login.css"
import House from "../../../../assets/House.png"

export default function Login() {
  return (
    <div className='wholeBody'>
      <LoginBody/>
    </div>
  )
}

function LoginBody() {
    return (
      <>
        <div className="legendaryDiv">
  
            <div className="imageDiv">
              <img src={House} alt="x" />
            </div>
  
            <div className="signUp">
              <FunLogin />
            </div>
  
  
          </div>
  
      </>
    )
  }


  
  function FunLogin() {
    return (
      <>
  
      </>
    )
  }