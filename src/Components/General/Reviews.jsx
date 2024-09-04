import React from 'react'
import "./Reviews.css"

export default function ClientReviews({ heading, img, text, details }) {
    return (
        <>
            <div className="reviews">
                <p>{text}</p>
                <div className="profile">
                    <img src={img} alt="" />
                    <div className="profile-text">
                        <h3>{heading}</h3>
                        <h4>{details}</h4>
                    </div>
                </div>
            </div>
        </>
    )
}
