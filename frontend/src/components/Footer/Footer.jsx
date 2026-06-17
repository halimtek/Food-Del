/* eslint-disable no-unused-vars */
import { assets } from '../../assets/assets'
import React from 'react'
import './Footer.css'


const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
          <div className="footer-content-left">
            <img src={assets.InjeraGo1} alt="" />
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which  look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there  anything embarrassing hidden in the middle of text</p>
            <div className="footer-social-icons">

           
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
            </div>

          </div>
          <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Delivery</li>
              <li>Privacy Policy</li>
            </ul>

          </div>
          <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
              <li>+1-212-456-7890</li>
              <li>contact@injerago.com</li>
            </ul>

          </div>
        </div>
        <hr />
        <p className="footer-copyright">
          Copyright 2024 © InjeraGo.com - All Right reserved.
        </p>

    </div>
  )
}

export default Footer