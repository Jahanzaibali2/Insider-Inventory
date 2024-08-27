import React from 'react'
import "./header.css"
import Button from '../General/Button'
import List from '../General/List'
export default function Header() {
    return (
        <NavBar />
    )
}


function NavBar() {
    return (
        <>
            <div className="nb-header">
                <div className="nb-heading">
                    <h2>
                        <p>Insider's <span>Inventory</span></p>

                    </h2>
                </div>

                <List />
                <Button />


            </div>




        </>


    )

}
