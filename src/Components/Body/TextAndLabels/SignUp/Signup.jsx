import React from 'react'
import "./SignUp.css"
import Arrow from "../../../../assets/gg_arrow-down.png"
import Textfield from '../../../General/Textfield'

export default function Signup() {
  return (

    <div>


      <div className='y'>
     <Textfield text="First Name"/>
      <Textfield text="last Name"/>
      <Textfield text="Email"/>
      <Textfield text="Company Name"/>
      
      
      </div>


      <div className='CheckBoxes1'>

        <div className="x">
          <input type="checkbox" className='checkBox' />
          <label htmlFor="Name1">Investor</label>
        </div>

        <div className='x'>
          <input type="checkbox" className='checkBox' />
          <label htmlFor="Name1">HomeBuyer</label>
        </div>
      </div>

      <div className='CheckBoxes2'>
        <div className='x'>
          <input type="checkbox" className='checkBox' />
          <label htmlFor="Name1">Agent</label>
        </div>

        <div className='x'>
          <input type="checkbox" className='checkBox' />
          <label htmlFor="Name1">Fund/Riet investment Buyer</label>
        </div>


      </div>

      <div className='y'>
      <Textfield text="Phone Number"/>
      <Textfield text="Password"/>
      </div>



      <div className='Terms'>
        <input type="checkbox" className='checkBox' />
        <label htmlFor="text"> I have read and Accepted your
          <span> terms and conditions</span>
        </label>
      </div>

      <div className="su-btn">
        <button>
          <p>Sign Up
            <img src={Arrow} alt="x" /></p>
        </button>
      </div>

      <div className="logIn">
        <label htmlFor="text"> Already have an account?
          <span> Log in</span>
        </label>
      </div>


    </div>

  )
}
