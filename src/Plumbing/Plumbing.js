import React, { useState, useEffect } from "react";
import "./Plumbing.css";
import NavBar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import MarvVideo2 from '../marvv3.mp4';
// IMAGES (reuse your own assets)
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

// SERVICES WITH IMAGES
const plumbingServices = [
  { id: 1, name: "Tap Leakage Repair", price: 199, image: marv13 },
  { id: 2, name: "Pipe Leakage Fixing", price: 499, image: marv14 },
  { id: 3, name: "Bathroom Fitting Installation", price: 999, image: marv16 },
  { id: 4, name: "Kitchen Sink Installation", price: 799, image: marv17 },
  { id: 5, name: "Wash Basin Installation", price: 699, image: marv18 },
  { id: 6, name: "Water Tank Cleaning", price: 899, image: marv19 },
  { id: 7, name: "Drain Blockage Removal", price: 499, image: marv20 },
  { id: 8, name: "Geyser Installation", price: 1299, image: marv21 },
  { id: 9, name: "Geyser Repair", price: 599, image: marv22 },
  { id: 10, name: "Toilet Seat Installation", price: 799, image: marv13 },
  { id: 11, name: "Toilet Blockage Cleaning", price: 399, image: marv14 },
  { id: 12, name: "Shower Installation", price: 499, image: marv16 },
  { id: 13, name: "Water Motor Repair", price: 999, image: marv17 },
  { id: 14, name: "Water Pipeline Installation", price: 1999, image: marv18 },
  { id: 15, name: "Bathroom Complete Setup", price: 4999, image: marv19 },
  { id: 16, name: "Kitchen Plumbing Setup", price: 2999, image: marv20 },
  { id: 17, name: "Flush Tank Repair", price: 299, image: marv21 },
  { id: 18, name: "Flush Tank Installation", price: 699, image: marv22 },
  { id: 19, name: "Overhead Tank Installation", price: 3999, image: marv13 },
  { id: 20, name: "Underground Pipe Work", price: 5999, image: marv14 },
  { id: 21, name: "Water Pressure Fixing", price: 499, image: marv16 },
  { id: 22, name: "Leak Detection Service", price: 799, image: marv17 },
  { id: 23, name: "Commercial Plumbing Setup", price: 9999, image: marv18 },
  { id: 24, name: "Bathroom Fitting Replacement", price: 1499, image: marv19 },
  { id: 25, name: "Home Plumbing Checkup", price: 1299, image: marv20 },
  { id: 26, name: "Pipe Replacement Service", price: 2499, image: marv21 },
  { id: 27, name: "Water Line Installation", price: 3499, image: marv22 },
  { id: 28, name: "Emergency Plumbing Service", price: 999, image: marv13 },
  { id: 29, name: "Bathroom Renovation Plumbing", price: 7999, image: marv14 },
  { id: 30, name: "Luxury Bathroom Setup", price: 14999, image: marv16 },
];

const Plumbing = () => {
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(saved);
  }, []);

  const addToCart = (item) => {
    const updated = [...cart, item];
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
    alert(`${item.name} added to cart`);
  };

  const filtered = plumbingServices.filter((item) => {
    const matchName = item.name.toLowerCase().includes(search.toLowerCase());
    const matchPrice = maxPrice === "" ? true : item.price <= Number(maxPrice);
    return matchName && matchPrice;
  });

  return (
    <div className="plumbing-page">

      <NavBar />

      {/* HERO */}
      <section className="plumbing-hero">

  {/* 🔥 BACKGROUND VIDEO */}
  <video className="fullscreen-video" autoPlay loop muted>
    <source src={MarvVideo2} type="video/mp4" />
  </video>

  {/* DARK OVERLAY (for readability) */}
  <div className="plumbing-overlay-bg"></div>

  {/* CONTENT */}
  <div className="plumbing-overlay">

    {/* LEFT CONTENT */}
    <div className="plumbing-left">

      <span className="plumbing-tag">
        NISS Plumbing Services
      </span>

      <h1>
        Fast & Reliable
        <span> Plumbing Solutions</span>
      </h1>

      <p>
        NISS provides expert plumbing services including
        pipe fitting, bathroom installation, leakage repair,
        tap fitting, water tank cleaning, drain repair,
        geyser installation and complete home plumbing solutions.
      </p>

      {/* SEARCH BOX */}
      <div className="plumbing-search-box">

        <select>
          <option>Pipe Leakage Repair</option>
          <option>Bathroom Fitting</option>
          <option>Wash Basin Installation</option>
          <option>Kitchen Plumbing</option>
          <option>Drain Cleaning</option>
          <option>Water Tank Cleaning</option>
          <option>Tap & Mixer Repair</option>
          <option>Toilet Seat Installation</option>
          <option>Geyser Installation</option>
          <option>Water Motor Repair</option>
          <option>Shower Installation</option>
          <option>Pipeline Installation</option>
        </select>

        <input
          type="text"
          placeholder="Search Plumbing Services..."
        />

        <button>Book Service</button>

      </div>

      {/* BUTTONS */}
      <div className="plumbing-buttons">

        <button className="plumbing-btn-primary">
          Book Plumber
        </button>

        <button className="plumbing-btn-secondary">
          Emergency Service
        </button>

      </div>

    </div>

    {/* RIGHT SIDE */}
    <div className="plumbing-right">

      <div className="plumbing-card">
        <img src={Plumber2} alt="Plumbing Service" />
      </div>

      <div className="plumbing-small-cards">

        <div className="plumbing-small-card">
          <h3>24/7</h3>
          <p>Emergency Support</p>
        </div>

        <div className="plumbing-small-card">
          <h3>500+</h3>
          <p>Services Completed</p>
        </div>

      </div>

    </div>

  </div>

</section>

      {/* FILTER */}
      <div className="plumbing-filters">
        <input
          type="text"
          placeholder="Search service..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <input
          type="number"
          placeholder="Max Price (₹)"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>

      {/* GRID */}
      <div className="plumbing-grid">

        {filtered.length > 0 ? (
          filtered.map((item) => (
            <div className="plumbing-card" key={item.id}>

              <img src={item.image} alt={item.name} />

              <h3>{item.name}</h3>

              <p>₹ {item.price}</p>

              <button onClick={() => addToCart(item)}>
                Add to Cart
              </button>

            </div>
          ))
        ) : (
          <h2>No Service Found</h2>
        )}

      </div>

      <Footer />
    </div>
  );
};

export default Plumbing;