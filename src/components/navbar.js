import React from 'react';
import logo from "../assets/images/logo.jpg";
import "./navbar.css";

const Nav =()=>{
    return (<div className="nav">
        <img src={logo}alt =" rwanda woww" className="logo-img"/>
        <div className="navigation-links">
            <ul className="nav-links">
            <li>
             <a href="/home"className="nav-link">Home</a>
             </li>
                 <li>
                      <a href="/about"className="nav-link">about us</a>
                      </li>
                 <li>
                      <a href="contactus"className="nav-link">contact us</a>
                      </li>
                 <li> 
                     <a href=""className="nav-link">gallery</a>
                     </li>
                     <li> 
                     <a href="/Tours"className="nav-link btn-link">Tour</a>
                     </li>
                     <li> 
                     <a href=""className="nav-link link-green">sign in</a>
                     </li>
                 </ul>
    </div>
    </div> )
    
}
export default Nav;