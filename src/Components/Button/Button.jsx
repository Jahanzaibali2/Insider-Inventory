import React from 'react'
import Arrow from "../../assets/gg_arrow-down.png"
import "./Button.css"

export default function Button({ text, Click, backgroundColor }) {
    return (
        <div className="Button" style={backgroundColor}>
                <button onClick={Click} >
                <p>{text}</p>
                <img src={Arrow} alt="x" />
            </button>
        </div>
    )
}
