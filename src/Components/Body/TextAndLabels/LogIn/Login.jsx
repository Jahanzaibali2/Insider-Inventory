import React from 'react'
import Textfield from '../../../General/Textfield'
import Checkbox from '../../../General/Checkbox'
import Button from '../../../General/Button'
import "./Login.css"
import House from "../../../../assets/House.png"

export default function Login() {
    return (
        <div className='wholeBody'>
            <LoginBody />
        </div>
    )
}

function LoginBody() {
    return (
        <>
            <div className="legendaryDiv">

                <div className="imageDiv">
                    <img src={House} alt="x" />
                </div>

                <div className="signUp">
                    <FunLogin />
                </div>


            </div>

        </>
    )
}



function FunLogin() {
    return (
        <>
            <div>

                <div className="headingDiv">
                    <h1>Login to submit an Off-Market Property</h1>
                </div>

                <div className='txtfields'>
                    <Textfield text="Username" />
                    <Textfield text="Password" />

                </div>

                    <p className="checkbox-container">
                        <Checkbox text="Remember Me" />
                        <span>Forgot Password</span>
                    </p>


                <div className='Terms'>
                    <Button text="Log In" />
                    
                    <div className="logIn">
                        <label htmlFor="text"> Don't have an account? <span>Sign in</span>
                        </label>
                    </div>

                </div>

            </div>
        </>
    )
}