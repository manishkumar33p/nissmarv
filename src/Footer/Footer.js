import React, { useState, useEffect } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import "./Footer.css";

import {  FaPhone, FaEnvelope } from 'react-icons/fa';
const Footer = () => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="footer">
      <div className="footer__overlay"></div>

      <div className="footer__container">

        {/* LEFT SECTION */}
        <div className="footer__left">
          <h2>NISS TECHNOLOGIES</h2>

          <p className="footer__text">
            Building smart digital solutions for modern businesses with innovation and trust.
          </p>


           <div className="footer__time">
            <FaClock />
            <span>{currentTime}</span>
          </div>

<div className="contact-card">
                           <div> <p>📞 +91 9958424916</p></div> 
      <p>✉ technologiesniss@gmail.com.com</p>
      <p>📍 122 A Gandhinagar,Ghaziabad , Uttar Pradesh</p>
                        </div>

                      


 
         
        </div>

        {/* RIGHT SECTION */}
        <div className="footer__right">
          <h3>Connect With Us</h3>

          <div className="footer__socials">
            <a href="/packages" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>

            <a href="/buy" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>

            <a href="/buy" target="_blank" rel="noreferrer">
              <FaLinkedinIn />
            </a>
          </div>

          <p className="footer__copyright">
            © {new Date().getFullYear()} New India Software Solutions Pvt Ltd
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;