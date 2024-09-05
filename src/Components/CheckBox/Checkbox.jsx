import React from 'react'
import "./Checkbox.css"

export default function Checkbox({text}) {
  return (
    <div className='CheckboxDiv'>
        <input type="checkbox" className='checkBox' />
        <label htmlFor="Name1">{text}</label>
    </div>
  )
}
