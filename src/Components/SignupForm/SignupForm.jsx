import React from 'react'
import "./SignupForm.css"
import Textfield from '../TextFeild/Textfield'
import Checkbox from '../Checkbox/Checkbox'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'

export default function SignupForm() {
  return (

    <div>

      <div className="headDiv">
        <h1>Sign-Upto view a Available Inventory Or to list a Property</h1>
      </div>

      <div className='txtfield'>
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

      <div className='txtfield'>
        <Textfield text="Phone Number" />
        <Textfield text="Password" />
      </div>



      <div className='Term'>

        <p className="checkbox-container">
          <Checkbox text="I have read and Accepted your" />
          <span>terms and conditions</span>
        </p>

        <Button text="Sign Up" />

        <div className="login">
          <label htmlFor="text"> Already have an account?
          <Link to="/Login"><span>Log in</span></Link>
          </label>
        </div>

      </div>

    </div>

  )
}
