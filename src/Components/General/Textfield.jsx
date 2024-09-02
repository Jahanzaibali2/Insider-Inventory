import React from 'react'
import "./Textfield.css"

export default function Textfield({text}) {
  return (
    <div className='TextfieldDiv'>
        <label htmlFor="Label">{text}</label>
        <input type="text" className='Textfield' />
    </div>
  )
}

