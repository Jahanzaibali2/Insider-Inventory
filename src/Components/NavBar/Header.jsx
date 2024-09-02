import React from 'react'
import "./header.css"
import Button from '../General/Button'
import List from '../General/List'
import Heading from '../General/Heading'


export default function Header() {
    return (
        <NavBar />
    )
}


function NavBar() {
    return (
        <>
            <div className="nb-header">

                <Heading />
                <List />
                <Button text="Login/SignUp"/>

            </div>




        </>


    )

}
