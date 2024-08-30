import React from 'react'
import Arrow from "../../assets/gg_arrow-down.png"
import "./Button.css"

export default function Button({text}) {
    return (
        <div className="Button">
            <button>
                <p>{text}</p>
                <img src={Arrow} alt="x" />
            </button>
        </div>
    )
}
