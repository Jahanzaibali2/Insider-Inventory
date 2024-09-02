import React from 'react'
import FooterLogo from "../../assets/Footerlogo.png"
import "./footer.css"
import List from '../General/List'
import Heading from '../General/Heading'
import Facebook from "../../assets/Facebook.png"
import X from "../../assets/X.png"
import LinkedIn from "../../assets/LinkedIn.png"
import Insta from "../../assets/Insta.png"
import Button from '../General/Button'


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
                    <Heading />
                    <h3>Your Gateway to Real Estate Excellence</h3>
                </div>
                {/* <Button text="Trying" /> */}
                
                <div className="listAndSocials">
                    <List />

                    <div className="ft-socials">

                        <a href="https://www.facebook.com"><img src={Facebook} alt="x" /></a>
                        <a href="https://www.facebook.com"><img src={X} alt="x" /></a>
                        <a href="https://www.facebook.com"><img src={LinkedIn} alt="x" /></a>
                        <a href="https://www.facebook.com"><img src={Insta} alt="x" /></a>

                    </div>

                </div>

            </div>

            <div className="rights">
                <hr />
                <p>All right are reserved For insider's Inventory</p>
            </div>

        </div>
    )
}

