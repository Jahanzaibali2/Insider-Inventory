import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import Cards from '../../General/Card';
import img from '../../../assets/pic1.png'
import img1 from '../../../assets/pic2.png'
import img2 from '../../../assets/pic3.png'
import Button from '../../General/Button';
import Footer from '../../Footer/footer'
import Header from '../../NavBar/Header'
import "./Home.css"
import RoundCard from '../../General/RoundCard';
import pic from "../../../assets/r5.png"
import pic22 from "../../../assets/r3.png"
import pic1 from "../../../assets/pic4.png"


export default function Home() {
    return (
        <HomePage />
    )
}

function HomePage() {
    return (
        <>

            <Header />


            <div className="home-page">
                <div className="Title-Page">
                    <div className="TitlePage-Content">
                        <p id='pp'>Insider's Off-Market Inventory</p>
                        <h1>Your <span>Next Opportunity</span> Awaits</h1>
                        <p id='pp'>Unlock Exclusive Opportunities at Insider's Inventory, specializing in Buy & Hold, Owner-Occupied Retail, and Lucrative Flip Ventures. Discover your path to profitable real estate investments period.</p>
                        <div className="button-div">
                            <Button text={"Submit an Off-Market Property"} />
                            <Button text={"View Your Off-Market Property"} />
                        </div>
                    </div>
                </div>

                <div className="Grids">
                    <div className="Grids-Text">
                        <h1> Off-Market <span>Properties</span> </h1>
                        <p>X---X</p>
                    </div>
                    <CardsGrids />
                </div>

                <div className="Round-Cards">
                    <div className="Card-Text">
                        <h1> Off-Market <span>Property Types</span> </h1>
                    </div>
                    <RoundGrids />
                </div>

            </div>


            <Footer />
        </>

    )

}

function CardsGrids() {
    return (
        <>
            <Grid container spacing={12}>
                <Grid item xs={12} sm={6} md={4}>
                    <Cards status={"Vacant"} image={img} information={{
                        price: "450,000$",
                        percentage: "10%"
                    }} />
                </Grid>

                <Grid xs={12} sm={6} md={4}>
                    <Cards status={"Owner Occupied"} image={img1} information={{
                        price: "490,330$",
                        percentage: "30%"
                    }} />
                </Grid>

                <Grid item xs={12}>
                    <Cards status={"Tenant Occupied"} image={img2} information={{
                        price: "420,013$",
                        percentage: "20%"
                    }} />
                </Grid>

            </Grid>

        </>
    )
}


function RoundGrids() {
    return (
        <>
            <Grid container spacing={12}>
                <Grid item xs={12} sm={6} md={4}>
                    <RoundCard heading= "Buy & Hold Properties" img={pic1} text="Secure your future with our Buy & Hold properties, offering stability and long-term growth potential."/>
                </Grid>

                <Grid xs={12} sm={6} md={4}>
                <RoundCard  heading= "Retail - Owner Occupant" img={pic22} text="Tailored Retail Spaces for Owner-Occupied Success in Prime Locations."/>
                </Grid>

                <Grid item xs={12}>
                <RoundCard  heading= "Flip Opportunities" img={pic} text="Seize Profit Potential: Explore High-Yield Flip Opportunities with Insider's Inventory." />
                </Grid>

            </Grid>

        </>
    )
}