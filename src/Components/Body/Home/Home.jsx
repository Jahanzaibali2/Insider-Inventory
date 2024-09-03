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


export default function Home() {
    return (
        <HomePage />
    )
}

function HomePage() {
    return (
        <>

            <Grid container spacing={5}>

                <Grid item xs={12} sm={6} md={4} >
                <Grid container spacing={1}>
                <Grid item xs={12} sm={6} md={4}>
                    <Cards status={"Vacant"} image={img} information={{
                        price: "450.000$",
                        percentage: "10%"
                    }} />
                </Grid>

                <Grid xs={12} sm={6} md={4}>
                    <Cards status={"Vacant"} image={img1} information={{
                        price: "450.000$",
                        percentage: "10%"
                    }} />
                </Grid>

                <Grid item xs={12}>
                    <Cards status={"Vacant"} image={img2} information={{
                        price: "450.000$",
                        percentage: "10%"
                    }} />
                </Grid>

                </Grid>


                <Grid container={2}>
                    <Grid item >
                        <Button text="Zhumail"/>
                        <Paper> Zhumail</Paper>    
                    </Grid>


                </Grid>

                </Grid>
                            
            </Grid>

        </>

    )

}

