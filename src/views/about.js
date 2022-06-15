import React from 'react';
import HomeLayout from '../components/Homelayout';
import image from '../assets/images/djanati.jpg';
import { Card, Space, Image, Typography } from "antd";
import "./tour.css";


const AboutUs =()=>{
    return(
        <>
<h1>About US</h1>
<div>
    <img src={image}style={{margin:" 0 40%  "}}/>
</div>
</>
)
}
export default AboutUs;