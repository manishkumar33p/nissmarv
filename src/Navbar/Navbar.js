

// import React, { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";
// import { IoCart,IoClose, IoMenu } from "react-icons/io5"; // Import cart icon
// // import { IoClose, IoMenu, IoCart } from "react-icons/io5"; 
// import "./Navbar.css";
// import logo1 from "../logo1.png";
//  import marv8 from "../marv8.jpg"

// const Navbar = () => {
//   const [showMenu, setShowMenu] = useState(false);
//   const [cartItems, setCartItems] = useState([]);
//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };

//   const closeMenuOnMobile = () => {
//     if (window.innerWidth <= 1150) {
//       setShowMenu(false);
//     }
//   };

//   useEffect(() => {
//     const cartData = JSON.parse(localStorage.getItem("cart")) || [];
//     setCartItems(cartData); // Set cart items on page load
//   }, []);

//   // useEffect(() => {
//   //   // Update cart in localStorage whenever cartItems change
//   //   localStorage.setItem("cart", JSON.stringify(cartItems));
//   // }, [cartItems]);

//    const cartItemCount = cartItems.length; 
//   useEffect(() => {
//     // Close menu when resizing
//     const handleResize = () => {
//       if (window.innerWidth > 1150) {
//         setShowMenu(false);
//       }
//     };

//     window.addEventListener('resize', handleResize);


    

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return (
//     <header className="header">
//       <nav className="nav container">
//         <NavLink to="/" className="nav__logo">
//           <img src={marv8} alt="Logo" className="nav__logo-img" />
//         </NavLink>

//         <div className={`nav__menu ${showMenu ? "show-menu" : ""}`} id="nav-menu">
//           <ul className="nav__list">
//             <li className="nav__item">
//               <NavLink to="/" className="nav__link" onClick={closeMenuOnMobile}>ABOUT</NavLink>
//             </li>
//             <li className="nav__item">
//               <NavLink to="/shop" className="nav__link" onClick={closeMenuOnMobile}>SHOP</NavLink>
//             </li>
//             <li className="nav__item">
//               <NavLink to="/shop" className="nav__link" onClick={closeMenuOnMobile}>PROJECTS</NavLink>
//             </li>
//             <li className="nav__item">
//               <NavLink to="/contact-us" className="nav__link" onClick={closeMenuOnMobile}>CONTACT US</NavLink>
//             </li>

//                         <li className="nav__item dropdown">
//                <span className="nav__link dropdown-toggle">
//                  More
//                </span>
//                <ul className="dropdown-menu">
//                 <li className="dropdown-item">
//                   <NavLink
//                     to="/data-entry"
//                     className="nav__link"
//                     onClick={closeMenuOnMobile}
//                   >
//                     Data Entry
//                   </NavLink>
//                 </li>
//                 <li className="dropdown-item">
//                   <NavLink
//                     to="/login"
//                     className="nav__link"
//                     onClick={closeMenuOnMobile}
//                   >
//                     Dashboard
//                   </NavLink>
//                 </li>
//               </ul>
//             </li>
//             <li className="nav__item">
//               <NavLink
//                 to="/get-started"
//                 className="nav__link nav__cta"
//               >
//                 Login
//               </NavLink>
//             </li>

            
//             <li className="nav__item">
//               <NavLink to="/cart" className="nav__link">
//                 <div className="nav__cart">
//                   <IoCart className="nav__cart-icon" />
//                  {/* Display cart item count
//                  {cartItemCount > 0 && (
//                     <span className="cart-count">{cartItemCount}</span>
//                   )} */}
//                 </div>
//               </NavLink>
//             </li>
//           </ul>
//           <div className="nav__close" id="nav-close" onClick={toggleMenu}>
//             <IoClose />
//           </div>
//         </div>

//         <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
//           <IoMenu />
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { IoCart, IoClose, IoMenu } from "react-icons/io5"; // Import cart icon
import "./Navbar.css";

import marv7 from "../marv7.png"; // Your logo

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 1150) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cartData);
  }, []);

  const cartItemCount = cartItems.length;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1150) {
        setShowMenu(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className="header">
      <nav className="nav container">
        <NavLink to="/" className="nav__logo">
          <img src={marv7} alt="Logo" className="nav__logo-img" />
         
        </NavLink>

        <div className={`nav__menu ${showMenu ? "show-menu" : ""}`} id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink to="/" className="nav__link" onClick={closeMenuOnMobile}>About</NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/shop" className="nav__link" onClick={closeMenuOnMobile}>Shop</NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/project" className="nav__link" onClick={closeMenuOnMobile}>Property</NavLink>
              {/* <select>
                <option>Buy</option>
                <option>Rent</option>
                <option>PG</option>
              </select> */}
            </li>
            <li className="nav__item">
              <NavLink to="/contact-us" className="nav__link" onClick={closeMenuOnMobile}>Contact</NavLink>
            </li>

            <li className="nav__item dropdown">
              <span className="nav__link dropdown-toggle">
                More
              </span>
              <ul className="dropdown-menu">
                <li className="dropdown-item">
                  <NavLink to="/data-entry" className="nav__link" onClick={closeMenuOnMobile}>
                    Data Entry
                  </NavLink>
                </li>
                <li className="dropdown-item">
                  <NavLink to="/login" className="nav__link" onClick={closeMenuOnMobile}>
                    Dashboard
                  </NavLink>
                </li>
              </ul>
            </li>

            {/* <li className="nav__item">
              <NavLink to="/get-started" className="nav__link nav__cta">
                Login
              </NavLink>
            </li> */}

            <li className="nav__item">
              <NavLink to="/cart" className="nav__link">
                <div className="nav__cart">
                  <IoCart className="nav__cart-icon" />
                  {cartItemCount > 0 && (
                    <span className="cart-count">{cartItemCount}</span>
                  )}
                </div>
              </NavLink>
            </li>
          </ul>

          <div className="nav__close" onClick={toggleMenu}>
            <IoClose />
          </div>
        </div>

        <div className="nav__toggle" onClick={toggleMenu}>
          <IoMenu />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

// import React, { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";
// import { IoCart, IoClose, IoMenu, IoLocationSharp } from "react-icons/io5";
// import "./Navbar.css";
// import marv7 from "../marv7.png";

// const Navbar = () => {
//   const [showMenu, setShowMenu] = useState(false);
//   const [cartItems, setCartItems] = useState([]);

//   const [location, setLocation] = useState("Fetching location...");
//   const [manualLocation, setManualLocation] = useState("");
//   const [useManual, setUseManual] = useState(false);

//   const toggleMenu = () => setShowMenu(!showMenu);

//   const closeMenuOnMobile = () => {
//     if (window.innerWidth <= 1150) setShowMenu(false);
//   };

//   // CART LOAD
//   useEffect(() => {
//     const cartData = JSON.parse(localStorage.getItem("cart")) || [];
//     setCartItems(cartData);
//   }, []);

//   const cartItemCount = cartItems.length;

//   // AUTO LOCATION
//   useEffect(() => {
//     if (!navigator.geolocation) {
//       setLocation("Location not supported");
//       return;
//     }

//     navigator.geolocation.getCurrentPosition(
//       async (position) => {
//         const { latitude, longitude } = position.coords;

//         try {
//           const res = await fetch(
//             `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
//           );
//           const data = await res.json();

//           const city =
//             data.address.city ||
//             data.address.town ||
//             data.address.village ||
//             data.address.suburb ||
//             "Unknown City";

//           const state = data.address.state || "";

//           setLocation(`${city}, ${state}`);
//         } catch (error) {
//           setLocation("Unable to fetch location");
//         }
//       },
//       () => {
//         setLocation("Permission denied");
//       }
//     );
//   }, []);

//   return (
//     <header className="header">
//       <nav className="nav container">

//         {/* LOGO + LOCATION */}
//         <div className="nav-left">
//           <NavLink to="/" className="nav__logo">
//             <img src={marv7} alt="Logo" className="nav__logo-img" />
//           </NavLink>

//           <div className="nav-location">
//             <IoLocationSharp />

//             {!useManual ? (
//               <span>{location}</span>
//             ) : (
//               <span>{manualLocation || "Enter location"}</span>
//             )}
//           </div>
//         </div>

//         {/* MANUAL LOCATION */}
//         <div className="location-box">
//           <input
//             type="text"
//             placeholder="Enter address..."
//             value={manualLocation}
//             onChange={(e) => setManualLocation(e.target.value)}
//           />

//           <button onClick={() => setUseManual(true)}>Set</button>
//           <button onClick={() => setUseManual(false)}>Auto</button>
//         </div>

//         {/* MENU */}
//         <div className={`nav__menu ${showMenu ? "show-menu" : ""}`}>

//           <ul className="nav__list">

//             <li>
//               <NavLink to="/" onClick={closeMenuOnMobile}>About</NavLink>
//             </li>

//             <li>
//               <NavLink to="/shop" onClick={closeMenuOnMobile}>Shop</NavLink>
//             </li>

//             <li>
//               <NavLink to="/project" onClick={closeMenuOnMobile}>Property</NavLink>
//             </li>

//             <li>
//               <NavLink to="/contact-us" onClick={closeMenuOnMobile}>Contact</NavLink>
//             </li>

//             {/* CART */}
//             <li>
//               <NavLink to="/cart">
//                 <IoCart />

//                 {cartItemCount > 0 && (
//                   <span className="cart-count">{cartItemCount}</span>
//                 )}
//               </NavLink>
//             </li>

//           </ul>

//           <div className="nav__close" onClick={toggleMenu}>
//             <IoClose />
//           </div>

//         </div>

//         <div className="nav__toggle" onClick={toggleMenu}>
//           <IoMenu />
//         </div>

//       </nav>
//     </header>
//   );
// };

// export default Navbar;