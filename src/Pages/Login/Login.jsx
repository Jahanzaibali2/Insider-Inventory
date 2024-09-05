import React from 'react'
import Header from '../../Components/Header/Header';
import './Login.css'
import Footer from '../../Components/Footer/footer';
import { useNavigate } from 'react-router-dom';



export default function Login() {
  return (

    <>
      <Header />
      <div className="legendaryDiv">

        <div className="imageDiv">
          <img src={House} alt="x" />
        </div>

        <div className="signUp">
          <FunLogin />
        </div>

      </div>
      <Footer />
    </>
  )
}



function FunLogin() {

  const Navigator = useNavigate();

  function HandleClick() {
    Navigator("/")
  }


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
          <Button text="Log In"
            Click={() => HandleClick()} />

          <div className="logIn">
            <label htmlFor="text"> Don't have an account? <Link to="/SignUp"><span>Sign in</span></Link>
            </label>
          </div>

        </div>

      </div>
    </>
  )
}