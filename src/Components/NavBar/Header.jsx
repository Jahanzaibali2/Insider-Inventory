import React from 'react'
import "./header.css"
import Arrow from "../../assets/gg_arrow-down.png"
export default function Header() {
    return (
        <NavBar />
    )
}


function NavBar() {
    return (
        <>
            <div className="nb-header">
                <div className="nb-heading">
                    <h2>
                        <p>Insider's <span>Inventory</span></p>
                        
                    </h2>
                </div>
                <div className="nb-list">
                    <ul>
                        <li>Home</li>
                        <li>Buyers</li>
                        <li>Sellers</li>
                        <li>Buy & hold</li>
                        <li>Retail</li>
                        <li>Flip Opportunities</li>
                        <li>Off-Market Inventory</li>
                    </ul>
                </div>
                <div className="nb-btn">
                    <button>
                        <p>Sign Up</p>
                        <img src={Arrow} alt="x" />
                    </button>

                </div>

            </div>




        </>


    )

}