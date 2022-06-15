import React from 'react';
import logo from '../assets/images/logo.jpg';
import {FacebookOutlined}from'@ant-design/icons';
import {TwitterOutlined}from'@ant-design/icons';
import {InstagramOutlined}from'@ant-design/icons';
import './footer.css';
const Footer=()=>{
    const d= new Date();
    let year =d.getFullYear();

    return (
      
        <div className="footer-container">
            <div className="logo-column">
            <img src={logo}alt="" className="logo-img"/>

            <div className="icons">
                <FacebookOutlined />
                    <TwitterOutlined />
                    <InstagramOutlined />
                    </div>
                    <p className="copyright">copyright &copy;{year} by shecancode 
                    <span>Inc.all rights reserved</span>{''}
            </p></div>
                
           
            <div className="contactus-column">
                <h3 className="footer-title">Contact us</h3>
                <p><a href="">623 Kacyiru</a></p>
                <p>< a href ="078723478">078723478 </a></p>
                <p>< a href ="email:claireshimwe@gmail.com">claireshimwe@gmail.com </a></p> 
            </div>
            <div className="account-column"> 
            <h3 className="footer-title">Account</h3>
            <p>< a href ="#">create account</a></p>
                <p>< a href ="#">sign in </a></p> 
            </div>
            <div className="Company-column"> 
            <h3 className="footer-title">Company</h3>
            <p>< a href ="#">about me</a></p>
                <p>< a href ="#">career </a></p> 
            </div>
            <div className="ressources-column"> 
            <h3 className="footer-title">Resources</h3>
            <p>< a href ="#">create account</a></p>
                <p>< a href ="#">sign in </a></p> 
            </div>
            </div>
        
    )
   
};
export default Footer;