import React from 'react'
import "./header.css"
import Button from '../Button/Button'
import List from '../List/List'
import Heading from '../Heading/Heading'
import { useNavigate } from 'react-router-dom'


export default function Header() {
    const Navigator = useNavigate();
    
    function HandleClick() {
        Navigator("/Login")
    }

    return (
        <>
            <div className="nb-header">

                <Heading />
                <List />
                <Button text="Login/SignUp"
            Click={() => HandleClick()}/>

            </div>
        </>
    )
}
