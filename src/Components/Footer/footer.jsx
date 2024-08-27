import React from 'react'
import FooterLogo from "../../assets/Footerlogo.png"
import "./footer.css"
import List from '../General/List'

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
                    <List />
                    <div className="ft-socials">
                        <button>whatsapp</button>
                        <button>Twitter</button>
                        <button>LinkedIn</button>
                        <button>Instagram</button>
                    </div>
                </div>
                    <hr />
                <div className="rights">
                    <p>All right are reserved For insider's Inventory</p>
                </div>
            </div>

        </div>
    )
}

