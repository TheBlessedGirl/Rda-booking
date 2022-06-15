import React from 'react';
import HomeLayout from '../components/Homelayout';
import image from '../assets/images/djanati.jpg';
import { Card, Space, Image, Typography } from "antd";
import "./tour.css";


const AboutUs =()=>{
    return(
        <>
        <div style={{backgroundImage:"../assets/images/background.jpg"}}>
<h1 style={{textAlign:"left",paddingRight:"20px"}}>ABOUT US</h1>
<div>
    <img src={image}style={{paddingRight:"20px"}}/>
</div>
<p>Gboard is a virtual keyboard app developed by Google for Android and iOS devices. It was first released on iOS in May 2016, followed by a release on Android in December 2016, debuting as a major update to the already-established Google Keyboard app on Android.

Gboard features Google Search, including web results (removed since April 2020)[3] and predictive answers, easy searching and sharing of GIF and emoji content, a predictive typing engine suggesting the next word depending on context, and multilingual language support. Updates to the keyboard have enabled additional functionality, including GIF suggestions, options for a dark color theme or adding a personal image as the keyboard background, support for voice dictation, next-phrase prediction, and hand-drawn emoji recognition. At the time of its launch on iOS, the keyboard only offered support for the English language, with more languages being gradually added in the following months, whereas on Android, the keyboard supported more than 100 languages at the time of release.</p>
</div>
</>
)
}
export default AboutUs;