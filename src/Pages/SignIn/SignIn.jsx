import React from 'react'
import Header from '../../Components/Header/Header'
import SignupForm from '../../Components/SignupForm/SignupForm'
import Footer from '../../Components/Footer/footer'
import House from '../../assets/House.png'
import "./SignIn.css"


export default function SignIn() {
    return (
        <>
            <Header />
            <div className="legendaryDiv">

                <div className="imageDiv">
                    <img src={House} alt="x" />
                </div>

                <div className="signUp">
                    <SignupForm />
                </div>

            </div>
            <Footer />
        </>
    )
}
