import React from 'react'
import "./SignUp.css"

export default function Signup() {
  return (
    <div>

      <div className="headingDiv">
        <h1>Sign-Upto view a Available Inventory Or to list a Property</h1>
      </div>
                <div className='y'>
            <label htmlFor="Name1">First Name</label>
            <input type="text" className='txt' />
          </div>

          <div className='y'>
            <label htmlFor="Name1">Last Name</label>
            <input type="text" className='txt' />
          </div>

          <div className='y'>
            <label htmlFor="Name1">Email</label>
            <input type="text" className='txt' />
          </div>

          <div className='y'>
            <label htmlFor="Name1">Company Name (Optional)</label>
            <input type="text" className='txt' />
          </div>


          <div className='CheckBoxes'>

            <div className="x">
              <input type="checkbox" className='checkBox' />
              <label htmlFor="Name1">Investor</label>
            </div>

            <div className='x'>
              <input type="checkbox" className='checkBox' />
              <label htmlFor="Name1">HomeBuyer</label>
            </div>

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
            <label htmlFor="Name1">Phone</label>
            <input type="text" className='txt' />
          </div>

          <div className='y'>
            <label htmlFor="Name1">Pasword</label>
            <input type="text" className='txt' />
          </div>

       

        <div className='x'>
          <input type="checkbox" className='checkBox' />
          <label htmlFor="text"> I have read and Accepted your
            <span> terms and conditions</span>
          </label>
        </div>
    </div>
  )
}
