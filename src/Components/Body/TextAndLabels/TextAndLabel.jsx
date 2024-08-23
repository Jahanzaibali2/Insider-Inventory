import React from 'react'
import "./TextAndLabel.css"

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
        <div className='FirstName'>
          <label htmlFor="Name1">First Name</label>
          <input type="text" className='txt' />
        </div>

        <div className='LastName'>
          <label htmlFor="Name1">Last Name</label>
          <input type="text" className='txt' />
        </div>

        <div className='Email'>
          <label htmlFor="Name1">Email</label>
          <input type="text" className='txt' />
        </div>

        <div className='CompanyName'>
          <label htmlFor="Name1">Company Name (Optional)</label>
          <input type="text" className='txt' />
        </div>


        <div className='CheckBoxes'>



          <div className="investorCheck">
            <input type="checkbox" className='checkBox' />
            <label htmlFor="Name1">Investor</label>
          </div>

          <div className='HomeBuyer'>
            <input type="checkbox" className='checkBox' />
            <label htmlFor="Name1">HomeBuyer</label>
          </div>

          <div className='Agent'>
            <input type="checkbox" className='checkBox' />
            <label htmlFor="Name1">Agent</label>
          </div>

          <div className='Fund'>
            <input type="checkbox" className='checkBox' />
            <label htmlFor="Name1">Fund/Riet investment Buyer</label>
          </div>


        </div>

        <div className='Phone'>
          <label htmlFor="Name1">Phone</label>
          <input type="text" className='txt' />
        </div>

        <div className='Password'>
          <label htmlFor="Name1">Pasword</label>
          <input type="text" className='txt' />
        </div>

      </div>
      <div className='Terms'>
        <input type="checkbox" className='checkBox' />
        <label htmlFor="text"> I have read and Accepted your
          <span> terms and conditions</span>
        </label>
      </div>

    </>
  )
}

