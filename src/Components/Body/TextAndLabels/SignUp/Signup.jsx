import React from 'react'
import "./SignUp.css"
import Arrow from "../../../../assets/gg_arrow-down.png"
import Textfield from '../../../General/Textfield'
import Checkbox from '../../../General/Checkbox'
import Button from '../../../General/Button'

export default function Signup() {
  return (

    <div>

      <div className="headingDiv">
        <h1>Sign-Upto view a Available Inventory Or to list a Property</h1>
      </div>

      <div className='y'>
        <Textfield text="First Name" />
        <Textfield text="Last Name" />
        <Textfield text="Email" />
        <Textfield text="Company Name" />
      </div>

      <div className='CheckBoxes1'>
        <Checkbox text="Investor" />
        <Checkbox text="Home Buyer" />
      </div>

      <div className='CheckBoxes2'>
        <Checkbox text="Agent" />
        <Checkbox text="Fund/REIT Investment Buyer" />
      </div>

      <div className='y'>
        <Textfield text="Phone Number" />
        <Textfield text="Password" />
      </div>



      <div className='Terms'>

        <p className="checkbox-container">
          <Checkbox text="I have read and Accepted your" />
          <span>terms and conditions</span>
        </p>

        <Button text="Sign Up"/>

        <div className="logIn">
          <label htmlFor="text"> Already have an account?
            <span> Log in</span>
          </label>
        </div>

      </div>

    </div>

  )
}
