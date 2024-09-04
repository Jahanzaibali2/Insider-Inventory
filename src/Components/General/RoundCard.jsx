import React from 'react'
import "./RoundCard.css"

export default function RoundCard({ heading, img, text }) {
    return (
        <>
            <div className='Round-card'>
                <img src={img} alt="" />
                <div className="text-div">
                    <h2>{heading}</h2>
                    <p>{text}</p>

                </div>

            </div>

        </>
    )
}
