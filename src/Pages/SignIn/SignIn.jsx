import React from 'react'
import Header from '../../Components/Header/Header'
import Signup from '../../Components/SignUp/Signup'
import Footer from '../../Components/Footer/footer'



export default function SignIn() {
    return (
        <>
            <Header />
            <div className="legendaryDiv">

                <div className="imageDiv">
                    <img src={House} alt="x" />
                </div>

                <div className="signUp">
                    <Signup />
                </div>

            </div>
            <Footer />
        </>
    )
}
