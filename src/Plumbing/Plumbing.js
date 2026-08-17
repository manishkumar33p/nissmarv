

import React, { useState, useEffect } from "react";
import "./Plumbing.css";

// import NavBar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

import MarvVideo2 from "../marvv3.mp4";
import Plumber2 from "../Plumber2.avif";

import marv13 from "../marv13.jpg";
import marv14 from "../marv14.jpg";
import marv16 from "../marv16.jpg";
import marv17 from "../marv17.jpg";
import marv18 from "../marv18.jpg";
import marv19 from "../marv19.jpg";
import marv20 from "../marv20.jpg";
import marv21 from "../marv21.jpg";
import marv22 from "../marv22.jpg";

/* =========================================================
   PLUMBING SERVICES
========================================================= */

const plumbingServices = [
  {
    id: 1,
    name: "Tap Leakage Repair",
    price: 199,
    image: marv13,
  },
  {
    id: 2,
    name: "Pipe Leakage Fixing",
    price: 499,
    image: marv14,
  },
  {
    id: 3,
    name: "Bathroom Fitting Installation",
    price: 999,
    image: marv16,
  },
  {
    id: 4,
    name: "Kitchen Sink Installation",
    price: 799,
    image: marv17,
  },
  {
    id: 5,
    name: "Wash Basin Installation",
    price: 699,
    image: marv18,
  },
  {
    id: 6,
    name: "Water Tank Cleaning",
    price: 899,
    image: marv19,
  },
  {
    id: 7,
    name: "Drain Blockage Removal",
    price: 499,
    image: marv20,
  },
  {
    id: 8,
    name: "Geyser Installation",
    price: 1299,
    image: marv21,
  },
  {
    id: 9,
    name: "Geyser Repair",
    price: 599,
    image: marv22,
  },
  {
    id: 10,
    name: "Toilet Seat Installation",
    price: 799,
    image: marv13,
  },
  {
    id: 11,
    name: "Toilet Blockage Cleaning",
    price: 399,
    image: marv14,
  },
  {
    id: 12,
    name: "Shower Installation",
    price: 499,
    image: marv16,
  },
  {
    id: 13,
    name: "Water Motor Repair",
    price: 999,
    image: marv17,
  },
  {
    id: 14,
    name: "Water Pipeline Installation",
    price: 1999,
    image: marv18,
  },
  {
    id: 15,
    name: "Bathroom Complete Setup",
    price: 4999,
    image: marv19,
  },
  {
    id: 16,
    name: "Kitchen Plumbing Setup",
    price: 2999,
    image: marv20,
  },
  {
    id: 17,
    name: "Flush Tank Repair",
    price: 299,
    image: marv21,
  },
  {
    id: 18,
    name: "Flush Tank Installation",
    price: 699,
    image: marv22,
  },
  {
    id: 19,
    name: "Overhead Tank Installation",
    price: 3999,
    image: marv13,
  },
  {
    id: 20,
    name: "Underground Pipe Work",
    price: 5999,
    image: marv14,
  },
  {
    id: 21,
    name: "Water Pressure Fixing",
    price: 499,
    image: marv16,
  },
  {
    id: 22,
    name: "Leak Detection Service",
    price: 799,
    image: marv17,
  },
  {
    id: 23,
    name: "Commercial Plumbing Setup",
    price: 9999,
    image: marv18,
  },
  {
    id: 24,
    name: "Bathroom Fitting Replacement",
    price: 1499,
    image: marv19,
  },
  {
    id: 25,
    name: "Home Plumbing Checkup",
    price: 1299,
    image: marv20,
  },
  {
    id: 26,
    name: "Pipe Replacement Service",
    price: 2499,
    image: marv21,
  },
  {
    id: 27,
    name: "Water Line Installation",
    price: 3499,
    image: marv22,
  },
  {
    id: 28,
    name: "Emergency Plumbing Service",
    price: 999,
    image: marv13,
  },
  {
    id: 29,
    name: "Bathroom Renovation Plumbing",
    price: 7999,
    image: marv14,
  },
  {
    id: 30,
    name: "Luxury Bathroom Setup",
    price: 14999,
    image: marv16,
  },
];

/* =========================================================
   CARPENTER SERVICES
========================================================= */

const carpenterServices = [
  {
    id: 101,
    name: "Furniture Repair",
    category: "Repair",
    pricePerHour: 249,
    image: marv13,
  },
  {
    id: 102,
    name: "Wooden Wardrobe Design",
    category: "Furniture",
    pricePerHour: 399,
    image: marv14,
  },
  {
    id: 103,
    name: "Door Installation",
    category: "Installation",
    pricePerHour: 299,
    image: marv16,
  },
  {
    id: 104,
    name: "Kitchen Cabinets",
    category: "Kitchen",
    pricePerHour: 449,
    image: marv17,
  },
];

/* =========================================================
   MAIN COMPONENT
========================================================= */

const Plumbing = () => {
  /* ================= PLUMBING STATES ================= */

  const [search, setSearch] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const [cart, setCart] = useState([]);

  /* ================= CARPENTER STATES ================= */

  const [carpenterCategory, setCarpenterCategory] = useState("All");

  /* ================= PLUMBING MODAL ================= */

  const [selectedPlumbing, setSelectedPlumbing] = useState(null);

  const [plumbingDate, setPlumbingDate] = useState("");
  const [plumbingLocation, setPlumbingLocation] = useState("");

  /* ================= CARPENTER MODAL ================= */

  const [selectedCarpenter, setSelectedCarpenter] = useState(null);

  const [hours, setHours] = useState(1);
  const [carpenterDate, setCarpenterDate] = useState("");
  const [carpenterLocation, setCarpenterLocation] = useState("");

  /* ================= MESSAGE ================= */

  const [msg, setMsg] = useState("");

  /* =========================================================
     LOAD CART
  ========================================================= */

  useEffect(() => {
    const savedCart =
      JSON.parse(localStorage.getItem("cart")) || [];

    setCart(savedCart);
  }, []);

  /* =========================================================
     PLUMBING FILTER
  ========================================================= */

  const filteredPlumbing = plumbingServices.filter((item) => {
    const matchName = item.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchPrice =
      maxPrice === ""
        ? true
        : item.price <= Number(maxPrice);

    return matchName && matchPrice;
  });

  /* =========================================================
     CARPENTER FILTER
  ========================================================= */

  const filteredCarpenter = carpenterServices.filter((item) => {
    return carpenterCategory === "All"
      ? true
      : item.category === carpenterCategory;
  });

  /* =========================================================
     MESSAGE
  ========================================================= */

  const showMessage = (message) => {
    setMsg(message);

    setTimeout(() => {
      setMsg("");
    }, 2500);
  };

  /* =========================================================
     ADD PLUMBING TO CART
  ========================================================= */

  const addPlumbingToCart = (item) => {
    const savedCart =
      JSON.parse(localStorage.getItem("cart")) || [];

    const cartItem = {
      id: Date.now(),
      serviceId: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      type: "plumbing-service",
    };

    const updatedCart = [...savedCart, cartItem];

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );

    setCart(updatedCart);

    showMessage(`${item.name} added to cart`);
  };

  /* =========================================================
     OPEN PLUMBING BOOKING
  ========================================================= */

  const openPlumbingBooking = (item) => {
    setSelectedPlumbing(item);
    setPlumbingDate("");
    setPlumbingLocation("");
  };

  /* =========================================================
     CONFIRM PLUMBING BOOKING
  ========================================================= */

  const confirmPlumbingBooking = () => {
    if (!selectedPlumbing) return;

    if (!plumbingDate || !plumbingLocation) {
      showMessage("Please fill all details!");
      return;
    }

    const savedCart =
      JSON.parse(localStorage.getItem("cart")) || [];

    const booking = {
      id: Date.now(),
      serviceId: selectedPlumbing.id,
      name: selectedPlumbing.name,
      price: selectedPlumbing.price,
      image: selectedPlumbing.image,
      date: plumbingDate,
      location: plumbingLocation,
      totalPrice: selectedPlumbing.price,
      type: "plumbing-service",
    };

    const updatedCart = [
      ...savedCart,
      booking,
    ];

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );

    setCart(updatedCart);

    setSelectedPlumbing(null);

    showMessage("Plumbing service booked 🎉");
  };

  /* =========================================================
     OPEN CARPENTER BOOKING
  ========================================================= */

  const openCarpenterBooking = (item) => {
    setSelectedCarpenter(item);
    setHours(1);
    setCarpenterDate("");
    setCarpenterLocation("");
  };

  /* =========================================================
     CONFIRM CARPENTER BOOKING
  ========================================================= */

  const confirmCarpenterBooking = () => {
    if (!selectedCarpenter) return;

    if (!carpenterDate || !carpenterLocation) {
      showMessage("Please fill all details!");
      return;
    }

    const savedCart =
      JSON.parse(localStorage.getItem("cart")) || [];

    const total =
      selectedCarpenter.pricePerHour * hours;

    const booking = {
      id: Date.now(),
      serviceId: selectedCarpenter.id,
      name: selectedCarpenter.name,
      image: selectedCarpenter.image,
      category: selectedCarpenter.category,
      pricePerHour:
        selectedCarpenter.pricePerHour,
      hours: hours,
      date: carpenterDate,
      location: carpenterLocation,
      totalPrice: total,
      type: "carpenter-service",
    };

    const updatedCart = [
      ...savedCart,
      booking,
    ];

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );

    setCart(updatedCart);

    setSelectedCarpenter(null);

    showMessage("Carpenter service booked 🎉");
  };

  /* =========================================================
     TODAY DATE
  ========================================================= */

  const today = new Date()
    .toISOString()
    .split("T")[0];

  return (
    <div className="plumbing-page">

      {/* <NavBar /> */}

      {/* =====================================================
          PLUMBING SECTION
      ===================================================== */}

      <section className="plumbing-section">

        {/* HERO */}

        <section className="plumbing-hero">

          <video
            className="fullscreen-video"
            autoPlay
            loop
            muted
            playsInline
          >
            <source
              src={MarvVideo2}
              type="video/mp4"
            />
          </video>

          <div className="plumbing-overlay-bg"></div>

          <div className="plumbing-overlay">

            <div className="plumbing-left">

              <span className="plumbing-tag">
                NISS Plumbing Services
              </span>

              <h1>
                Fast & Reliable
                <span>
                  Plumbing Solutions
                </span>
              </h1>

              <p>
                NISS provides expert plumbing services
                including pipe fitting, bathroom
                installation, leakage repair, tap fitting,
                water tank cleaning, drain repair,
                geyser installation and complete home
                plumbing solutions.
              </p>

              <div className="plumbing-search-box">

                <select>
                  <option>
                    Pipe Leakage Repair
                  </option>

                  <option>
                    Bathroom Fitting
                  </option>

                  <option>
                    Wash Basin Installation
                  </option>

                  <option>
                    Kitchen Plumbing
                  </option>

                  <option>
                    Drain Cleaning
                  </option>

                  <option>
                    Water Tank Cleaning
                  </option>

                  <option>
                    Geyser Installation
                  </option>

                  <option>
                    Water Motor Repair
                  </option>
                </select>

                <input
                  type="text"
                  placeholder="Search Plumbing Services..."
                  value={search}
                  onChange={(e) =>
                    setSearch(e.target.value)
                  }
                />

                <button
                  onClick={() =>
                    document
                      .getElementById(
                        "plumbing-services"
                      )
                      ?.scrollIntoView({
                        behavior: "smooth",
                      })
                  }
                >
                  Search
                </button>

              </div>

              <div className="plumbing-buttons">

                <button
                  className="plumbing-btn-primary"
                  onClick={() =>
                    document
                      .getElementById(
                        "plumbing-services"
                      )
                      ?.scrollIntoView({
                        behavior: "smooth",
                      })
                  }
                >
                  Book Plumber
                </button>

                <button
                  className="plumbing-btn-secondary"
                  onClick={() =>
                    document
                      .getElementById(
                        "plumbing-services"
                      )
                      ?.scrollIntoView({
                        behavior: "smooth",
                      })
                  }
                >
                  Emergency Service
                </button>

              </div>

            </div>

            <div className="plumbing-right">

              <div className="plumbing-hero-card">

                <img
                  src={Plumber2}
                  alt="Plumbing Service"
                />

              </div>

              <div className="plumbing-small-cards">

                <div className="plumbing-small-card">

                  <h3>24/7</h3>

                  <p>
                    Emergency Support
                  </p>

                </div>

                <div className="plumbing-small-card">

                  <h3>500+</h3>

                  <p>
                    Services Completed
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* PLUMBING TITLE */}

        <section
          className="section-heading"
          id="plumbing-services"
        >

          <span>
            OUR SERVICES
          </span>

          <h2>
            Plumbing Services
          </h2>

          <p>
            Professional plumbing services at your
            doorstep
          </p>

        </section>

        {/* PLUMBING FILTER */}

        <div className="plumbing-filters">

          <input
            type="text"
            placeholder="Search service..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

          <input
            type="number"
            placeholder="Max Price (₹)"
            value={maxPrice}
            onChange={(e) =>
              setMaxPrice(e.target.value)
            }
          />

        </div>

        {/* PLUMBING GRID */}

        <div className="plumbing-grid">

          {filteredPlumbing.length > 0 ? (

            filteredPlumbing.map((item) => (

              <div
                className="service-card"
                key={item.id}
              >

                <div className="service-image">

                  <img
                    src={item.image}
                    alt={item.name}
                  />

                </div>

                <div className="service-content">

                  <span className="service-label">
                    Plumbing
                  </span>

                  <h3>
                    {item.name}
                  </h3>

                  <p className="service-price">
                    ₹{item.price}
                  </p>

                  <div className="service-actions">

                    <button
                      onClick={() =>
                        openPlumbingBooking(item)
                      }
                    >
                      Book Now
                    </button>

                    <button
                      className="cart-button"
                      onClick={() =>
                        addPlumbingToCart(item)
                      }
                    >
                      Add to Cart
                    </button>

                  </div>

                </div>

              </div>

            ))

          ) : (

            <div className="no-service">
              <h2>
                No Plumbing Service Found
              </h2>
            </div>

          )}

        </div>

      </section>


      {/* =====================================================
          DIVIDER
      ===================================================== */}

      <div className="service-divider">
        <span></span>
        <h2>MORE HOME SERVICES</h2>
        <span></span>
      </div>


      {/* =====================================================
          CARPENTER SECTION
      ===================================================== */}

      <section className="carpenter-section">

        {/* CARPENTER HERO */}

        <div className="carpenter-heading">

          <span className="carpenter-tag">
            NISS CARPENTRY SERVICES
          </span>

          <h2>
            Expert
            <span>
              Carpentry & Woodwork Services
            </span>
          </h2>

          <p>
            Furniture Repair • Custom Design •
            Installation • Modular Work
          </p>

        </div>


        {/* CARPENTER FILTER */}

        <div className="carpenter-filter">

          <button
            className={
              carpenterCategory === "All"
                ? "active-category"
                : ""
            }
            onClick={() =>
              setCarpenterCategory("All")
            }
          >
            All
          </button>

          <button
            className={
              carpenterCategory === "Repair"
                ? "active-category"
                : ""
            }
            onClick={() =>
              setCarpenterCategory("Repair")
            }
          >
            Repair
          </button>

          <button
            className={
              carpenterCategory === "Furniture"
                ? "active-category"
                : ""
            }
            onClick={() =>
              setCarpenterCategory("Furniture")
            }
          >
            Furniture
          </button>

          <button
            className={
              carpenterCategory === "Installation"
                ? "active-category"
                : ""
            }
            onClick={() =>
              setCarpenterCategory("Installation")
            }
          >
            Installation
          </button>

          <button
            className={
              carpenterCategory === "Kitchen"
                ? "active-category"
                : ""
            }
            onClick={() =>
              setCarpenterCategory("Kitchen")
            }
          >
            Kitchen
          </button>

        </div>


        {/* CARPENTER GRID */}

        <div className="carpenter-grid">

          {filteredCarpenter.map((item) => (

            <div
              className="carpenter-card"
              key={item.id}
            >

              <div className="carpenter-image">

                <img
                  src={item.image}
                  alt={item.name}
                />

              </div>

              <div className="carpenter-info">

                <span>
                  {item.category}
                </span>

                <h3>
                  {item.name}
                </h3>

                <p>
                  ₹{item.pricePerHour}/hour
                </p>

                <button
                  onClick={() =>
                    openCarpenterBooking(item)
                  }
                >
                  Book Now
                </button>

              </div>

            </div>

          ))}

        </div>


        {/* WHY CARPENTER */}

        <div className="carpenter-highlight">

          <h2>
            Why Choose Our Carpenters?
          </h2>

          <div className="carpenter-highlight-grid">

            <div>
              ✔ Skilled Professionals
            </div>

            <div>
              ✔ Affordable Pricing
            </div>

            <div>
              ✔ Doorstep Service
            </div>

            <div>
              ✔ Quality Work
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PLUMBING BOOKING MODAL
      ===================================================== */}

      {selectedPlumbing && (

        <div className="modal-overlay">

          <div className="modal-box">

            <button
              className="modal-close"
              onClick={() =>
                setSelectedPlumbing(null)
              }
            >
              ×
            </button>

            <h2>
              {selectedPlumbing.name}
            </h2>

            <p>
              ₹{selectedPlumbing.price}
            </p>

            <label>
              Date
            </label>

            <input
              type="date"
              min={today}
              value={plumbingDate}
              onChange={(e) =>
                setPlumbingDate(e.target.value)
              }
            />

            <label>
              Address
            </label>

            <input
              type="text"
              placeholder="Enter your complete address..."
              value={plumbingLocation}
              onChange={(e) =>
                setPlumbingLocation(e.target.value)
              }
            />

            <h3 className="modal-total">
              Total: ₹{selectedPlumbing.price}
            </h3>

            <div className="modal-actions">

              <button
                className="cancel-btn"
                onClick={() =>
                  setSelectedPlumbing(null)
                }
              >
                Cancel
              </button>

              <button
                className="confirm-btn"
                onClick={confirmPlumbingBooking}
              >
                Confirm Booking
              </button>

            </div>

          </div>

        </div>

      )}


      {/* =====================================================
          CARPENTER BOOKING MODAL
      ===================================================== */}

      {selectedCarpenter && (

        <div className="modal-overlay">

          <div className="modal-box">

            <button
              className="modal-close"
              onClick={() =>
                setSelectedCarpenter(null)
              }
            >
              ×
            </button>

            <h2>
              {selectedCarpenter.name}
            </h2>

            <p>
              ₹{selectedCarpenter.pricePerHour}/hour
            </p>

            <label>
              Select Hours
            </label>

            <div className="quick-hours">

              {[1, 2, 3, 4, 5].map((h) => (

                <button
                  key={h}
                  className={
                    hours === h
                      ? "active-hour"
                      : ""
                  }
                  onClick={() =>
                    setHours(h)
                  }
                >
                  {h} hr
                </button>

              ))}

            </div>

            <label>
              Date
            </label>

            <input
              type="date"
              min={today}
              value={carpenterDate}
              onChange={(e) =>
                setCarpenterDate(e.target.value)
              }
            />

            <label>
              Address
            </label>

            <input
              type="text"
              placeholder="Enter your complete address..."
              value={carpenterLocation}
              onChange={(e) =>
                setCarpenterLocation(e.target.value)
              }
            />

            <h3 className="modal-total">
              Total: ₹
              {selectedCarpenter.pricePerHour *
                hours}
            </h3>

            <div className="modal-actions">

              <button
                className="cancel-btn"
                onClick={() =>
                  setSelectedCarpenter(null)
                }
              >
                Cancel
              </button>

              <button
                className="confirm-btn"
                onClick={confirmCarpenterBooking}
              >
                Confirm Booking
              </button>

            </div>

          </div>

        </div>

      )}


      {/* MESSAGE */}

      {msg && (
        <div className="service-message">
          {msg}
        </div>
      )}


      <Footer />

    </div>
  );
};

export default Plumbing;