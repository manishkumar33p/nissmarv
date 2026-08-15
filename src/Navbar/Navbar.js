// import React, { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";
// import { IoCart, IoClose, IoMenu } from "react-icons/io5";
// import "./Navbar.css";
// import logo30 from "../logo30.png";

// const Navbar = () => {
//   const [showMenu, setShowMenu] = useState(false);
//   const [cartItems, setCartItems] = useState([]);
//   const [location, setLocation] = useState("Detecting location...");
// const [showConsultant, setShowConsultant] = useState(false);
// const [submitted, setSubmitted] = useState(false);
//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };

//   const closeMenuOnMobile = () => {
//     if (window.innerWidth <= 1150) {
//       setShowMenu(false);
//     }
//   };

//   // CART LOAD
//   useEffect(() => {
//     const cartData = JSON.parse(localStorage.getItem("cart")) || [];
//     setCartItems(cartData);
//   }, []);

//   const cartItemCount = cartItems.length;

//   // RESIZE HANDLER
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth > 1150) {
//         setShowMenu(false);
//       }
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // GET LOCATION FUNCTION
//   const getLocation = () => {
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
//             "Unknown City";

//           const state = data.address.state || "";

//           const fullLocation = `${city}, ${state}`;

//           setLocation(fullLocation);
//           localStorage.setItem("userLocation", fullLocation);
//         } catch (err) {
//           setLocation("Location fetched");
//         }
//       },
//       () => {
//         setLocation("Permission denied");
//       }
//     );
//   };

//   // AUTO LOAD LOCATION
//   useEffect(() => {
//     const saved = localStorage.getItem("userLocation");

//     if (saved) {
//       setLocation(saved);
//     } else {
//       getLocation();
//     }
//   }, []);

//   return (
//     <header className="header">
//       <nav className="nav container">

//         {/* LOGO */}
//         <NavLink to="/" className="nav__logo">
//           <img src={logo30} alt="Logo" className="nav__logo-img" />
//         </NavLink>

//         {/* 📍 LOCATION */}
//         <div className="nav__location">
//           📍 {location}
//           {/* <button onClick={getLocation}>Update</button> */}
//         </div>

//         {/* MENU */}
//         <div className={`nav__menu ${showMenu ? "show-menu" : ""}`} id="nav-menu">
//           <ul className="nav__list">

//             <li className="nav__item">
//               <NavLink to="/" className="nav__link" onClick={closeMenuOnMobile}>
//                 About us
//               </NavLink>
//             </li>

//             <li className="nav__item">
//               <NavLink to="/shop" className="nav__link" onClick={closeMenuOnMobile}>
//                 Industries
//               </NavLink>
//             </li>

//             {/* SHOP DROPDOWN */}
//             <li className="nav__item dropdown">
//               <span className="nav__link dropdown-toggle">
//                 Services ▾
//               </span>

//               <ul className="dropdown-menu">

//                 <li className="dropdown-item">
//                   <NavLink to="https://www.klikdigisetu.com/" className="nav__link" onClick={closeMenuOnMobile}>
//                     Software Development
//                   </NavLink>
//                 </li>

//                 <li className="dropdown-item">
//                   <NavLink to="https://www.klikdigisetu.com/" className="nav__link" onClick={closeMenuOnMobile}>
//                   Digital marketing
//                   </NavLink>
//                 </li>

//                 <li className="dropdown-item">
//                   <NavLink to="/plumbing" className="nav__link" onClick={closeMenuOnMobile}>
//                     Niss Quickfix - Expert Service
//                   </NavLink>
//                 </li>

//                 <li className="dropdown-item">
//                   <NavLink to="/cctv" className="nav__link" onClick={closeMenuOnMobile}>
//                     Security Solutions
//                   </NavLink>
//                 </li>

//                 <li className="dropdown-item">
//                   <NavLink to="/interior" className="nav__link" onClick={closeMenuOnMobile}>
//                     Interior Design
//                   </NavLink>
//                 </li>





//                 <li className="dropdown-item">
//                   <NavLink to="/laundry" className="nav__link" onClick={closeMenuOnMobile}>
//                     Laundary Services
//                   </NavLink>
//                 </li>


//                 <li className="dropdown-item">
//                   <NavLink to="/security" className="nav__link" onClick={closeMenuOnMobile}>
//                     Security Guard Services
//                   </NavLink>
//                 </li>


//                 <li className="dropdown-item">
//                   <NavLink to="/property" className="nav__link" onClick={closeMenuOnMobile}>
//                     Properties
//                   </NavLink>
//                 </li>
//  <li className="dropdown-item">
//                   <NavLink to="/events" className="nav__link" onClick={closeMenuOnMobile}>
//                     Tent Decoration and Event Management
//                   </NavLink>
//                 </li>

//                 <li className="dropdown-item">
//                   <NavLink to="/catering" className="nav__link" onClick={closeMenuOnMobile}>
//                     Catering Services
//                   </NavLink>
//                 </li>

//               </ul>
//             </li>

            

//             <li className="nav__item">
//               <NavLink to="/contact-us" className="nav__link" onClick={closeMenuOnMobile}>
//                 Contact us
//               </NavLink>
//             </li>

//           <button
//   type="button"
//   className="get-quote-btn"
//   onClick={() => {
//     window.dispatchEvent(
//       new Event("open-consultant-popup")
//     );
//   }}
// >
//   Get a Quote
// </button>

//             {/* MORE */}
//             <li className="nav__item dropdown">
//               <span className="nav__link dropdown-toggle">
//                 More
//               </span>

//               <ul className="dropdown-menu">

//                 <li className="dropdown-item">
//                   <NavLink to="/data-entry" className="nav__link" onClick={closeMenuOnMobile}>
//                     Data Entry
//                   </NavLink>
//                 </li>

//                 <li className="dropdown-item">
//                   <NavLink to="/login" className="nav__link" onClick={closeMenuOnMobile}>
//                     Dashboard
//                   </NavLink>
//                 </li>

//               </ul>
//             </li>

//             {/* CART */}
//             <li className="nav__item">
//               <NavLink to="/cart" className="nav__link">
//                 <div className="nav__cart">
//                   <IoCart className="nav__cart-icon" />
//                   {cartItemCount > 0 && (
//                     <span className="cart-count">{cartItemCount}</span>
//                   )}
//                 </div>
//               </NavLink>
//             </li>

//           </ul>

//           {/* CLOSE */}
//           <div className="nav__close" onClick={toggleMenu}>
//             <IoClose />
//           </div>
//         </div>

//         {/* TOGGLE */}
//         <div className="nav__toggle" onClick={toggleMenu}>
//           <IoMenu />
//         </div>

//       </nav>
//     </header>
//   );
// };

// export default Navbar;


import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  IoCart,
  IoClose,
  IoMenu,
  IoLocationSharp,
  IoChevronDown,
} from "react-icons/io5";

import "./Navbar.css";
import logo30 from "../logo30.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const [cartItems, setCartItems] = useState([]);
  const [location, setLocation] = useState("Detecting location...");

  /* =========================
     CART
  ========================= */

  const loadCart = () => {
    try {
      const cartData =
        JSON.parse(localStorage.getItem("cart")) || [];

      setCartItems(cartData);
    } catch (error) {
      setCartItems([]);
    }
  };

  useEffect(() => {
    loadCart();

    const handleCartUpdate = () => {
      loadCart();
    };

    window.addEventListener(
      "cartUpdated",
      handleCartUpdate
    );

    window.addEventListener(
      "storage",
      handleCartUpdate
    );

    return () => {
      window.removeEventListener(
        "cartUpdated",
        handleCartUpdate
      );

      window.removeEventListener(
        "storage",
        handleCartUpdate
      );
    };
  }, []);

  const cartItemCount = cartItems.length;

  /* =========================
     MOBILE MENU
  ========================= */

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const closeMenu = () => {
    setShowMenu(false);
    setShowServices(false);
    setShowMore(false);
  };

  /* =========================
     RESIZE
  ========================= */

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1150) {
        setShowMenu(false);
        setShowServices(false);
        setShowMore(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener(
        "resize",
        handleResize
      );
    };
  }, []);

  /* =========================
     LOCATION
  ========================= */

  const getLocation = () => {
    if (!navigator.geolocation) {
      setLocation("Location unavailable");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const {
          latitude,
          longitude,
        } = position.coords;

        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`,
            {
              headers: {
                Accept:
                  "application/json",
              },
            }
          );

          const data =
            await response.json();

          const address =
            data.address || {};

          const city =
            address.city ||
            address.town ||
            address.village ||
            address.suburb ||
            "Unknown City";

          const state =
            address.state || "";

          const fullLocation = state
            ? `${city}, ${state}`
            : city;

          setLocation(fullLocation);

          localStorage.setItem(
            "userLocation",
            fullLocation
          );
        } catch (error) {
          setLocation(
            "Location unavailable"
          );
        }
      },
      () => {
        setLocation(
          "Location permission needed"
        );
      },
      {
        enableHighAccuracy: false,
        timeout: 10000,
        maximumAge: 300000,
      }
    );
  };

  useEffect(() => {
    const savedLocation =
      localStorage.getItem(
        "userLocation"
      );

    if (savedLocation) {
      setLocation(savedLocation);
    } else {
      getLocation();
    }
  }, []);

  /* =========================
     GET QUOTE
  ========================= */

  const openQuote = () => {
    closeMenu();

    window.dispatchEvent(
      new Event("open-consultant-popup")
    );
  };

  /* =========================
     SERVICES MENU
  ========================= */

  const services = [
    {
      name: "Software Development",
      external: true,
      url: "https://www.klikdigisetu.com/",
    },
    {
      name: "Digital Marketing",
      external: true,
      url: "https://www.klikdigisetu.com/",
    },
    {
      name: "NISS QuickFix - Expert Service",
      path: "/plumbing",
    },
    {
      name: "Security Solutions",
      path: "/cctv",
    },
    {
      name: "Interior Design",
      path: "/interior",
    },
    {
      name: "Laundry Services",
      path: "/laundry",
    },
    {
      name: "Security Guard Services",
      path: "/security",
    },
    {
      name: "Properties",
      path: "/property",
    },
    {
      name:
        "Tent Decoration & Event Management",
      path: "/events",
    },
    {
      name: "Catering Services",
      path: "/catering",
    },
  ];

  /* =========================
     MORE MENU
  ========================= */

  const moreItems = [
    {
      name: "Data Entry",
      path: "/data-entry",
    },
    {
      name: "Dashboard",
      path: "/login",
    },
  ];

  return (
    <header className="header">

      <nav className="nav container">

        {/* ================= LOGO ================= */}

        <NavLink
          to="/"
          className="nav__logo"
          onClick={closeMenu}
        >
          <img
            src={logo30}
            alt="NISS Technologies"
            className="nav__logo-img"
          />
        </NavLink>

        {/* ================= LOCATION ================= */}

        <div
          className="nav__location"
          title={location}
        >
          <IoLocationSharp />

          <span>
            {location}
          </span>
        </div>

        {/* ================= DESKTOP / MOBILE MENU ================= */}

        <div
          className={`nav__menu ${
            showMenu
              ? "show-menu"
              : ""
          }`}
        >

          {/* MOBILE CLOSE */}

          <div
            className="nav__close"
            onClick={closeMenu}
          >
            <IoClose />
          </div>

          <ul className="nav__list">

            {/* ABOUT */}

            <li className="nav__item">
              <NavLink
                to="/"
                className="nav__link"
                onClick={closeMenu}
              >
                About Us
              </NavLink>
            </li>

            {/* INDUSTRIES */}

            {/* <li className="nav__item">
              <NavLink
                to="/industry"
                className="nav__link"
                onClick={closeMenu}
              >
                Industries
              </NavLink>
            </li> */}

            {/* ================= SERVICES ================= */}

            <li
              className={`nav__item dropdown ${
                showServices
                  ? "dropdown-open"
                  : ""
              }`}
            >

              <button
                type="button"
                className="nav__link dropdown-toggle"
                onClick={() =>
                  setShowServices(
                    (prev) => !prev
                  )
                }
              >
                Services
                <IoChevronDown />
              </button>

              <ul className="dropdown-menu">

                {services.map(
                  (service, index) => (

                    <li
                      className="dropdown-item"
                      key={index}
                    >

                      {service.external ? (
                        <a
                          href={service.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={
                            closeMenu
                          }
                        >
                          {service.name}
                        </a>
                      ) : (
                        <NavLink
                          to={service.path}
                          onClick={
                            closeMenu
                          }
                        >
                          {service.name}
                        </NavLink>
                      )}

                    </li>

                  )
                )}

              </ul>

            </li>

            {/* ================= CONTACT ================= */}

            <li className="nav__item">
              <NavLink
                to="/contact-us"
                className="nav__link"
                onClick={closeMenu}
              >
                Contact Us
              </NavLink>
            </li>

            {/* ================= GET QUOTE ================= */}

            <li className="nav__item quote-item">

              <button
                type="button"
                className="get-quote-btn"
                onClick={openQuote}
              >
                Get a Quote
              </button>

            </li>

            {/* ================= MORE ================= */}

            <li
              className={`nav__item dropdown ${
                showMore
                  ? "dropdown-open"
                  : ""
              }`}
            >

              <button
                type="button"
                className="nav__link dropdown-toggle"
                onClick={() =>
                  setShowMore(
                    (prev) => !prev
                  )
                }
              >
                More
                <IoChevronDown />
              </button>

              <ul className="dropdown-menu more-menu">

                {moreItems.map(
                  (item, index) => (
                    <li
                      className="dropdown-item"
                      key={index}
                    >
                      <NavLink
                        to={item.path}
                        onClick={
                          closeMenu
                        }
                      >
                        {item.name}
                      </NavLink>
                    </li>
                  )
                )}

              </ul>

            </li>

            {/* ================= CART ================= */}

            <li className="nav__item cart-item">

              <NavLink
                to="/cart"
                className="nav__link cart-link"
                onClick={closeMenu}
              >

                <div className="nav__cart">

                  <IoCart className="nav__cart-icon" />

                  {cartItemCount > 0 && (
                    <span className="cart-count">
                      {cartItemCount}
                    </span>
                  )}

                </div>

                <span className="cart-text">
                  Cart
                </span>

              </NavLink>

            </li>

          </ul>

        </div>

        {/* ================= MOBILE MENU BUTTON ================= */}

        <button
          type="button"
          className="nav__toggle"
          onClick={toggleMenu}
          aria-label="Open menu"
        >
          <IoMenu />
        </button>

      </nav>

    </header>
  );
};

export default Navbar;