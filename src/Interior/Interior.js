import React, { useState, useEffect } from "react";
import "./Interior.css";
import NavBar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Marvv99 from "../marvv99.mp4";

// IMAGES
import marv13 from "../marv13.jpg";
import marv14 from "../marv14.jpg";
import marv16 from "../marv16.jpg";
import marv17 from "../marv17.jpg";
import marv18 from "../marv18.jpg";
import marv19 from "../marv19.jpg";
import marv20 from "../marv20.jpg";
import marv21 from "../marv21.jpg";
import marv22 from "../marv22.jpg";
import marv23 from "../marv23.jpg";
import marv24 from "../marv24.jpg";
import marv25 from "../marv25.jpg";
import marv26 from "../marv26.jpg";
import marv27 from "../marv27.jpg";
import marv28 from "../marv28.jpg";
import marv29 from "../marv29.jpg";
import marv30 from "../marv30.jpg";
import marv31 from "../marv31.jpg";
import marv32 from "../marv32.jpg";

const interiorItems = [
  { id: 1, name: "Modern Sofa Set", price: 45000, image: marv13, category: "furniture" },
  { id: 2, name: "Wall Panel Design", price: 12500, image: marv14, category: "wall" },
  { id: 3, name: "Wooden Flooring", price: 90000, image: marv16, category: "floor" },
  { id: 4, name: "Printed Wallpaper", price: 8500, image: marv17, category: "wall" },
  { id: 5, name: "False Ceiling Work", price: 55000, image: marv18, category: "ceiling" },
  { id: 6, name: "PVC Ceiling Panels", price: 35000, image: marv19, category: "ceiling" },
  { id: 7, name: "Vinyl Flooring", price: 28000, image: marv20, category: "floor" },
  { id: 8, name: "Designer Blinds", price: 6500, image: marv21, category: "decor" },
  { id: 9, name: "Luxury Bedroom Set", price: 120000, image: marv22, category: "furniture" },
  { id: 10, name: "Floor Tiles Premium", price: 40000, image: marv23, category: "floor" },
  { id: 11, name: "Artificial Turf Lawn", price: 18000, image: marv24, category: "garden" },
  { id: 12, name: "Wall Tiles Design", price: 22000, image: marv25, category: "wall" },
  { id: 13, name: "Roller Blinds", price: 7500, image: marv26, category: "decor" },
  { id: 14, name: "Luxury Paint Service", price: 15000, image: marv27, category: "wall" },
  { id: 15, name: "Wall Art Painting", price: 25000, image: marv28, category: "decor" },
  { id: 16, name: "PVC Marble Sheet", price: 60000, image: marv29, category: "wall" },
  { id: 17, name: "Grid Ceiling System", price: 32000, image: marv30, category: "ceiling" },
  { id: 18, name: "LED Ceiling Design", price: 70000, image: marv31, category: "ceiling" },
  { id: 19, name: "Wooden Temple", price: 18500, image: marv32, category: "decor" },
  { id: 20, name: "Modular Kitchen Setup", price: 180000, image: marv13, category: "kitchen" },
];

const Interior = () => {
  const [cart, setCart] = useState([]);
  const [filter, setFilter] = useState("all");
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

  const filteredItems = interiorItems.filter((item) => {
    const categoryMatch = filter === "all" || item.category === filter;

    const priceMatch =
      maxPrice === "" || item.price <= Number(maxPrice);

    return categoryMatch && priceMatch;
  });

  return (
    <div className="interior-page">

      <NavBar />

      {/* HERO TEXT (ABOVE VIDEO) */}
      <div className="hero-text">
      <section className="interior-hero">

{/* 🔥 BACKGROUND VIDEO */}
<video className="fullscreen-video" autoPlay loop muted>
  <source src={Marvv99} type="video/mp4" />
</video>

{/* DARK OVERLAY */}
<div className="interior-overlay-bg"></div>

<div className="interior-overlay">

  <div className="interior-left">

    <span className="interior-tag">
      Premium Interior Solutions
    </span>

    <h1>
      Transform Your Home With
      <span> Modern Interior Design</span>
    </h1>

    <p>
      NISS provides luxury interior design, false ceiling,
      flooring, wallpaper, blinds, painting and complete
      home decoration services at affordable pricing.
    </p>

    {/* SEARCH BOX */}
    <div className="interior-search-box">

      <select>
        <option>Interior Design</option>
        <option>Wall Panel</option>
        <option>Wooden Flooring</option>
        <option>Printed Wallpaper</option>
        <option>False Ceiling Service</option>
        <option>PVC Ceiling Panels</option>
        <option>Vinyl Flooring Service</option>
        <option>PVC Wallpaper</option>
        <option>Design Blinds</option>
        <option>Bedroom Interior Design</option>
        <option>Flooring</option>
        <option>Artificial Turf</option>
        <option>Floor Tiles</option>
        <option>Roller Vertical Blinds</option>
        <option>Royal Luxury Emulsion</option>
        <option>Wall Painting Service</option>
        <option>PVC Marble Sheet Products</option>
        <option>Grid Ceiling Tiles</option>
        <option>PVC False Ceiling Panels</option>
        <option>Wooden Small Temple</option>
      </select>

      <input
        type="text"
        placeholder="Search Interior Services..."
      />

      <button>Search</button>

    </div>
    {/* BUTTONS */}
<div className="interior-buttons">

<button className="interior-btn-primary">
  Get Started
</button>

<button className="interior-btn-secondary">
  View Projects
</button>

</div>

  </div>

  {/* RIGHT SIDE IMAGES */}
  <div className="interior-right">

    <div className="interior-grid">
      <img src={marv13} alt="" />
      <img src={marv14} alt="" />
      <img src={marv22} alt="" />
      <img src={marv31} alt="" />
    </div>

  </div>
  
</div>

</section>
      </div>

      {/* VIDEO BELOW TEXT */}
      

      {/* FILTER SECTION */}
      <div className="filter-bar">

        <select onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All Categories</option>
          <option value="furniture">Furniture</option>
          <option value="wall">Wall Design</option>
          <option value="floor">Flooring</option>
          <option value="ceiling">Ceiling</option>
          <option value="decor">Decor</option>
          <option value="kitchen">Kitchen</option>
          <option value="garden">Garden</option>
        </select>

        <input
          type="number"
          placeholder="Max Price (₹)"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />

      </div>

      {/* ITEMS GRID */}
      <div className="interior-grid">

        {filteredItems.length === 0 ? (
          <p style={{ color: "white", textAlign: "center" }}>
            No items found
          </p>
        ) : (
          filteredItems.map((item) => (
            <div className="interior-card" key={item.id}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>
              <button onClick={() => addToCart(item)}>
                Add to Cart
              </button>
            </div>
          ))
        )}

      </div>

      <Footer />
    </div>
  );
};

export default Interior;