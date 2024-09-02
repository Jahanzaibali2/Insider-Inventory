import React from 'react'
import Arrow from "../../assets/gg_arrow-down.png"
import "./Button.css"

export default function Button({text,Click}) {
    return (
        <div className="Button">
            <button onClick={Click}>
                <p>{text}</p>
                <img src={Arrow} alt="x" />
            </button>
        </div>
    )
}
