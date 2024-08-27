import React from 'react'
import Arrow from "../../assets/gg_arrow-down.png"
import "./Button.css"

export default function Button() {
    return (
        <div className="nb-btn">
            <button>
                <p>Sign Up</p>
                <img src={Arrow} alt="x" />
            </button>
        </div>
    )
}
