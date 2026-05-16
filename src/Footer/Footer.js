// import React, { useState, useEffect } from 'react';
// import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
// import './Footer.css';

// const Footer = () => {
//     const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

//     useEffect(() => {
//         const timer = setInterval(() => {
//             setCurrentTime(new Date().toLocaleTimeString());
//         }, 1000);

//         return () => clearInterval(timer);
//     }, []);

//     return (
//         <footer className="footer">
//             <div className="footer__container">
//                 <div className="footer__info">
//                     <p>C-296, SK-1, Sector-93, Noida, Gautam Buddha Nagar, Uttar Pradesh, India</p>
//                     <p>&copy; {new Date().getFullYear()} Develop and Managed by <b>New India Software Solutions Pvt Ltd</b></p>
//                     <p>Current Time: {currentTime}</p>
//                 </div>
//                 <div className="footer__socials">
                   
//                     <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
//                         <FaFacebookF />
//                     </a>
//                     <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
//                         <FaInstagram />
//                     </a>
//                     <a href="https://www.linkedin.com/company/yourcompany" target="_blank" rel="noopener noreferrer">
//                         <FaLinkedinIn />
//                     </a>
//                 </div>
//             </div>
//         </footer>
//     );
// };

// export default Footer;



import React, { useState, useEffect } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import "./Footer.css";

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
          <h2>New India Software Solutions</h2>

          <p className="footer__text">
            Building smart digital solutions for modern businesses with innovation and trust.
          </p>

          <div className="footer__address">
            <FaMapMarkerAlt />
            <span>
              C-296, SK-1, Sector-93, Noida, Uttar Pradesh, India
            </span>
          </div>

          <div className="footer__time">
            <FaClock />
            <span>{currentTime}</span>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="footer__right">
          <h3>Connect With Us</h3>

          <div className="footer__socials">
            <a href="#" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>

            <a href="#" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>

            <a href="#" target="_blank" rel="noreferrer">
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