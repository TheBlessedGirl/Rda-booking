import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from '../views/home';
import AboutUs from'../views/about';
import HomeLayout from '../components/Homelayout';
import Tours from '../views/Tours';
import Contact from'../views/contactus'; //contact must be a function
const Index =()=>{
    return(
        <HomeLayout>
<Routes>
    <Route exact path="/home" element={<Home/>}>  </Route>
    <Route exact path="/about" element={<AboutUs/>}>  </Route>
    <Route exact path="/tour" element={<Tours/>}>  </Route>
    <Route exact path="/contactus" element={<Contact/>}>  </Route> /*contact is a function*/
    </Routes>
    </HomeLayout>
    )
}
export default Index;