import React from 'react'
import img from "../../assets/pic1.png"
import "./Card.css"
import Button from './Button'

export default function Card() {
    return (
        <div>
            <Cards />
        </div>
    )
}

function Cards() {
    return (

        <div className="card">


            <div className="card-img" style={{ backgroundImage: `url(${img})` }}>

                <span className="card-status">
                    tenant occupied
                </span>

            </div>

            <div className="card-distribution">

                <div className='card-section'>
                    <div className="card-text">intial investment</div>
                    <div className="card-value">$450.517</div>
                </div>
            
                <div className='card-section'>
                    <div className="card-text">Potential Roi</div>
                    <div className="card-value">37%</div>
                </div>

            </div>

            <div className="card-content">

                <h3>Luxury Apartment</h3>

                <h4>450,000$</h4>

                <p>3 bedroom|1 bathroom|957sq. ft</p>

                <h5>X Australia</h5>

            </div>

            <div className="card-button">

                <Button text="Login to make an Offer" />
            </div>


        </div >

    )
}