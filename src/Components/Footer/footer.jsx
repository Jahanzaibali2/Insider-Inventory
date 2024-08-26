import React from 'react'
import FooterLogo from "../../assets/Footerlogo.png"
import "./footer.css"

export default function Footer() {
    return (
        <div>
            <WholeFooter />
        </div>
    )
}

function WholeFooter() {
    return (
        <div className='ft-main'>

            <div className="ft-div">

                <div className="Logo">
                    <img src={FooterLogo} alt="x" />
                </div>
                <div className="listAndSocials">
                    <div className="ft-list">
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
                    <div className="ft-socials">
                        <button>whatsapp</button>
                        <button>Twitter</button>
                        <button>LinkedIn</button>
                        <button>Instagram</button>

                    </div>
                </div>
                <hr />
                <p>All right are reserved For insider's Inventory</p>
            </div>
            
        </div>
    )
}

