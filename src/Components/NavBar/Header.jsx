import React from 'react'
import "./header.css"
import Button from '../General/Button'
import List from '../General/List'
import Heading from '../General/Heading'
import { useNavigate } from 'react-router-dom'


export default function Header() {
    return (
        <NavBar />
    )
}


function NavBar() {
    const Navig = useNavigate();
    function HandleClick() {
        Navig("/")
    }

    return (
        <>
            <div className="nb-header">

                <Heading />
                <List />
                <Button text="Login/SignUp"
                    Click={HandleClick()} />

            </div>




        </>


    )



}
