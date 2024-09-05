import React from 'react'
import "./Card.css"
import Button from '../Button/Button'


export default function Cards({status,image,information = {
    price:0 , 
    percentage:0}}) {
    return (

        <div className="card">


            <div className="card-img" style={{ backgroundImage: `url(${image})` }}>

                <span className="card-status">
                    {status}
                </span>

            </div>

            <div className="card-distribution">

                <div className='card-section'>
                    <div className="card-text">Initial Investment</div>
                    <div className="card-value">{information.price}</div>
                </div>
            <hr />
                <div className='card-section'>
                    <div className="card-text">Potential ROI</div>
                    <div className="card-value">{information.percentage}</div>
                </div>

            </div>

            <div className="card-content">

                <h3>Luxury Apartment</h3>

                <h4>{information.price}</h4>

                <p>3 Bedroom|1 Bathroom|957sq. ft</p>

                <h5>X Australia</h5>

            </div>

            <div className="card-button">

                <Button text="Login to make an Offer" />
            </div>


        </div >

    )
}
{/* <Cards status={"Vacant"} image={img} information={{price:"450.000$",
    percentage:"10%"
}}/> */}