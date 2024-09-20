import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Grid from '@mui/material/Grid2';
import img from '../../assets/pic1.png'
import img1 from '../../assets/pic2.png'
import img2 from '../../assets/pic3.png'
import pic from "../../assets/r5.png"
import pic22 from "../../assets/r3.png"
import pic1 from "../../assets/pic4.png"
import right from "../../assets/right.png"
import left from "../../assets/left.png"
import pro1 from "../../assets/Profile1.png"
import pro2 from "../../assets/pro2.png"
import Cards from '../../Components/Card/Card';
import Button from '../../Components/Button/Button';
import Footer from '../../Components/Footer/footer'
import Header from '../../Components/Header/Header'
import RoundCard from '../../Components/RoundCard/RoundCard';
import ClientReviews from '../../Components/Reviews/Reviews';
import "./HomePage.css"


export default function HomePage() {
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
                            <Button text={"View Your Off-Market Property"}
                                backgroundColor={{
                                    background: "transparent",
                                    border: "white 1px solid",
                                    color: "var(--green)"

                                }}

                            />
                        </div>
                    </div>
                </div>

                <div className="Grids">
                    <div className="Grids-Text">
                        <h1> Off-Market <span>Properties</span> </h1>
                        <div className="image-div">
                            <img src={left} alt="left-logo" />
                            <img src={right} alt="right-logo" />
                        </div>
                    </div>
                    <CardsGrids />
                    {/* <SimpleSlider/> */}
                </div>

                <div className="Round-Cards">

                    <div className="Card-Text">
                        <h1> Off-Market <span>Property Types</span> </h1>
                    </div>
                    <RoundGrids />

                </div>

                <div className="Round-Cards">

                    <div className="Card-Text">
                        <h1> What Our <span>Client Say</span> </h1>
                    </div>
                    <Review />

                    <div className="image-div">
                        <img src={left} alt="left-logo" />
                        <img src={right} alt="right-logo" />
                    </div>
                    
                </div>
            </div>

            <Footer />
        </>

    )

}

function SimpleSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                <Cards status={"Vacant"} image={img} information={{
                    price: "450,000$",
                    percentage: "10%"
                }} />
                <div>
                </div>

                <div>
                    <h3>5</h3>
                </div>
                <div>
                    <h3>6</h3>
                </div>
            </Slider>
        </div>
    );
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
                    <RoundCard heading="Buy & Hold Properties" img={pic1} text="Secure your future with our Buy & Hold properties, offering stability and long-term growth potential." />
                </Grid>

                <Grid xs={12} sm={6} md={4}>
                    <RoundCard heading="Retail - Owner Occupant" img={pic22} text="Tailored Retail Spaces for Owner-Occupied Success in Prime Locations." />
                </Grid>

                <Grid item xs={12}>
                    <RoundCard heading="Flip Opportunities" img={pic} text="Seize Profit Potential: Explore High-Yield Flip Opportunities with Insider's Inventory." />
                </Grid>

            </Grid>

        </>
    )
}


function Review() {
    return (
        <>
            <Grid container spacing={10}>
                <Grid item xs={12} sm={6} md={4}>
                    <ClientReviews heading="John Doe" text="Vestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus AVestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus AVestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus A" details="CEO at Ferrari" />
                </Grid>

                <Grid xs={12} sm={6} md={4}>
                    <ClientReviews heading="Debra" img={pro1} text="Vestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus AVestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus AVestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus A" details="Web designer Biffco Enterprises Ltd." />
                </Grid>

                <Grid item xs={12}>
                    <ClientReviews heading="Max" img={pro2} text="Vestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus AVestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus AVestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus A" details="Dog Trainer Absergo Ltd." />
                </Grid>

            </Grid>

        </>
    )
}