// import React, { useState } from "react";
// import "./Property.css";
// import NavBar from "../Navbar/Navbar";
// import Footer from "../Footer/Footer";

// const properties = [
//   {
//     id: 1,
//     title: "Luxury Residential Villa",
//     category: "Residential",
//     type: "Buy",
//     location: "Ghaziabad, Uttar Pradesh",
//     price: "₹85 Lakh",
//     image:
//       "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
//     description:
//       "Beautiful modern residential villa with premium interiors and excellent location.",
//   },
//   {
//     id: 2,
//     title: "Premium Commercial Office",
//     category: "Commercial",
//     type: "Buy",
//     location: "Noida, Uttar Pradesh",
//     price: "₹1.25 Crore",
//     image:
//       "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
//     description:
//       "Modern commercial office space suitable for companies, startups and businesses.",
//   },
//   {
//     id: 3,
//     title: "Residential Plot",
//     category: "Plots",
//     type: "Buy",
//     location: "Greater Noida, Uttar Pradesh",
//     price: "₹45 Lakh",
//     image:
//       "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
//     description:
//       "Residential plot in a developing location with excellent future investment potential.",
//   },
//   {
//     id: 4,
//     title: "Premium Apartment",
//     category: "Residential",
//     type: "Rent",
//     location: "Indirapuram, Ghaziabad",
//     price: "₹25,000/month",
//     image:
//       "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
//     description:
//       "Fully furnished premium apartment available for rent in a prime location.",
//   },
//   {
//     id: 5,
//     title: "PG Accommodation",
//     category: "PG",
//     type: "Rent",
//     location: "Noida Sector 62",
//     price: "₹8,500/month",
//     image:
//       "https://images.unsplash.com/photo-1554995207-c18c203602cb",
//     description:
//       "Clean and comfortable PG accommodation with modern facilities.",
//   },
//   {
//     id: 6,
//     title: "Commercial Building",
//     category: "Commercial",
//     type: "Buy",
//     location: "Ghaziabad",
//     price: "₹3.5 Crore",
//     image:
//       "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
//     description:
//       "Prime commercial building suitable for office, showroom or investment.",
//   },
// ];

// const Property = () => {
//   const [category, setCategory] = useState("All");
//   const [type, setType] = useState("All");
//   const [search, setSearch] = useState("");
//   const [selectedProperty, setSelectedProperty] = useState(null);

//   const filteredProperties = properties.filter((property) => {
//     const categoryMatch =
//       category === "All" || property.category === category;

//     const typeMatch =
//       type === "All" || property.type === type;

//     const searchMatch =
//       property.title.toLowerCase().includes(search.toLowerCase()) ||
//       property.location.toLowerCase().includes(search.toLowerCase());

//     return categoryMatch && typeMatch && searchMatch;
//   });

//   const openWhatsApp = () => {
//     const phone = "919958424916";

//     const message = selectedProperty
//       ? `Hello NISS Property, I am interested in ${selectedProperty.title} located at ${selectedProperty.location}. Please share more details.`
//       : "Hello NISS Property, I am interested in your property services.";

//     window.open(
//       `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
//       "_blank"
//     );
//   };

//   return (
//     <div className="property-page">

//       <NavBar />

//       {/* ================= HERO ================= */}

//       <section className="property-hero">

//         <div className="hero-content">

//           <div className="hero-logo">
//             <div className="logo-circle">N</div>

//             <div>
//               <h1>NISS</h1>
//               <h2>PROPERTY</h2>
//               <p>SMART HOMES. BETTER TOMORROW.</p>
//             </div>
//           </div>

//           <h3>Your Trusted</h3>

//           <h4>REAL ESTATE PARTNER</h4>

//           <div className="hero-services">
//             BUY <span>•</span>
//             SELL <span>•</span>
//             INVEST <span>•</span>
//             RENT <span>•</span>
//             PG
//           </div>

//           <p className="hero-description">
//             Residential &nbsp; | &nbsp;
//             Commercial &nbsp; | &nbsp;
//             Plots &nbsp; | &nbsp;
//             Investment Advisory
//           </p>

//           <div className="hero-buttons">

//             <button onClick={() => setType("Buy")}>
//               🏠 Buy Property
//             </button>

//             <button onClick={() => setType("Rent")}>
//               🔑 Rent Property
//             </button>

//             <button onClick={() => setCategory("Plots")}>
//               🌳 Plots & Land
//             </button>

//           </div>

//         </div>

//         <div className="hero-image">
//           <img
//             src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
//             alt="Luxury Property"
//           />
//         </div>

//       </section>

//       {/* ================= QUICK SERVICES ================= */}

//       <section className="quick-services">

//         <div
//           onClick={() => setType("Buy")}
//           className="quick-service"
//         >
//           <span>🏠</span>
//           <strong>Buy</strong>
//           <p>Property</p>
//         </div>

//         <div
//           onClick={() => setType("Sell")}
//           className="quick-service"
//         >
//           <span>🤝</span>
//           <strong>Sell</strong>
//           <p>Property</p>
//         </div>

//         <div
//           onClick={() => setType("Rent")}
//           className="quick-service"
//         >
//           <span>🔑</span>
//           <strong>Rent</strong>
//           <p>Property</p>
//         </div>

//         <div
//           onClick={() => setCategory("PG")}
//           className="quick-service"
//         >
//           <span>🛏️</span>
//           <strong>PG</strong>
//           <p>Accommodation</p>
//         </div>

//         <div className="quick-service">
//           <span>📍</span>
//           <strong>Prime</strong>
//           <p>Locations</p>
//         </div>

//         <div className="quick-service">
//           <span>📈</span>
//           <strong>Investment</strong>
//           <p>Advisory</p>
//         </div>

//       </section>

//       {/* ================= SERVICES ================= */}

//       <section className="property-services">

//         <div className="section-heading">
//           <span></span>
//           <h2>OUR PROPERTY SERVICES</h2>
//           <span></span>
//         </div>

//         <div className="services-list">

//           <div>
//             <h3>✓ Property Sales & Purchase</h3>
//             <p>Residential and commercial property buying & selling.</p>
//           </div>

//           <div>
//             <h3>✓ Residential & Commercial</h3>
//             <p>Premium properties in prime locations.</p>
//           </div>

//           <div>
//             <h3>✓ Plot & Land Deals</h3>
//             <p>Verified plots and land investment opportunities.</p>
//           </div>

//           <div>
//             <h3>✓ Rent Properties</h3>
//             <p>Homes, offices and commercial spaces on rent.</p>
//           </div>

//           <div>
//             <h3>✓ PG Accommodation</h3>
//             <p>Comfortable PG options for students and professionals.</p>
//           </div>

//           <div>
//             <h3>✓ Investment Advisory</h3>
//             <p>Property investment guidance according to your budget.</p>
//           </div>

//           <div>
//             <h3>✓ RERA Compliant Services</h3>
//             <p>Transparent and reliable property transactions.</p>
//           </div>

//           <div>
//             <h3>✓ Site Visit Assistance</h3>
//             <p>Schedule a property visit with our team.</p>
//           </div>

//         </div>

//       </section>

//       {/* ================= WHY CHOOSE ================= */}

//       <section className="why-property">

//         <div className="why-box">

//           <h2>WHY CHOOSE NISS PROPERTY?</h2>

//           <p>✓ Trusted Real Estate Experts</p>
//           <p>✓ 100% Transparent Dealings</p>
//           <p>✓ Best Location Properties</p>
//           <p>✓ Hassle-Free Documentation</p>

//         </div>

//         <div className="why-box">

//           <h2>OUR COMMITMENT</h2>

//           <p>✓ Customer-Centric Approach</p>
//           <p>✓ Verified Properties</p>
//           <p>✓ Professional Assistance</p>
//           <p>✓ Long-Term Value</p>

//         </div>

//       </section>

//       {/* ================= PROPERTY CATEGORIES ================= */}

//       <section className="property-categories">

//         <div className="section-heading">
//           <span></span>
//           <h2>EXPLORE PROPERTIES</h2>
//           <span></span>
//         </div>

//         <div className="category-grid">

//           <div
//             className="category-card"
//             onClick={() => setCategory("Residential")}
//           >
//             <img
//               src="https://images.unsplash.com/photo-1600585154526-990dced4db0d"
//               alt="Residential"
//             />

//             <div>
//               <h3>RESIDENTIAL PROPERTIES</h3>
//               <p>Homes • Flats • Villas • Apartments</p>
//             </div>
//           </div>

//           <div
//             className="category-card"
//             onClick={() => setCategory("Commercial")}
//           >
//             <img
//               src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"
//               alt="Commercial"
//             />

//             <div>
//               <h3>COMMERCIAL PROPERTIES</h3>
//               <p>Offices • Shops • Buildings • Warehouses</p>
//             </div>
//           </div>

//           <div
//             className="category-card"
//             onClick={() => setCategory("Plots")}
//           >
//             <img
//               src="https://images.unsplash.com/photo-1500382017468-9049fed747ef"
//               alt="Plots"
//             />

//             <div>
//               <h3>PLOTS & LAND</h3>
//               <p>Residential • Commercial • Investment</p>
//             </div>
//           </div>

//         </div>

//       </section>

//       {/* ================= SEARCH ================= */}

//       <section className="property-search">

//         <div className="section-heading">
//           <span></span>
//           <h2>FIND YOUR PROPERTY</h2>
//           <span></span>
//         </div>

//         <div className="search-box">

//           <input
//             type="text"
//             placeholder="Search property or location..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//           />

//           <select
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//           >
//             <option value="All">All Categories</option>
//             <option value="Residential">Residential</option>
//             <option value="Commercial">Commercial</option>
//             <option value="Plots">Plots</option>
//             <option value="PG">PG</option>
//           </select>

//           <select
//             value={type}
//             onChange={(e) => setType(e.target.value)}
//           >
//             <option value="All">Buy / Rent</option>
//             <option value="Buy">Buy</option>
//             <option value="Rent">Rent</option>
//           </select>

//         </div>

//       </section>

//       {/* ================= PROPERTY LIST ================= */}

//       <section className="property-list">

//         {filteredProperties.length === 0 ? (

//           <div className="no-property">
//             <h2>No Property Found</h2>
//             <p>Please try another search or category.</p>
//           </div>

//         ) : (

//           filteredProperties.map((property) => (

//             <div className="property-card" key={property.id}>

//               <img
//                 src={property.image}
//                 alt={property.title}
//               />

//               <div className="property-card-content">

//                 <span className="property-badge">
//                   {property.type}
//                 </span>

//                 <h2>{property.title}</h2>

//                 <p className="location">
//                   📍 {property.location}
//                 </p>

//                 <p className="property-description">
//                   {property.description}
//                 </p>

//                 <h3>{property.price}</h3>

//                 <button
//                   onClick={() => setSelectedProperty(property)}
//                 >
//                   View Details
//                 </button>

//               </div>

//             </div>

//           ))

//         )}

//       </section>

//       {/* ================= INVESTMENT CTA ================= */}

//       <section className="investment-section">

//         <div>

//           <h2>Make the Right Move</h2>

//           <h3>
//             with <span>NISS Property</span>
//           </h3>

//           <p>
//             Buy • Sell • Rent • Invest with confidence.
//           </p>

//           <button onClick={openWhatsApp}>
//             📞 Talk to Property Expert
//           </button>

//         </div>

//       </section>

//       {/* ================= WHY US ================= */}

//       <section className="property-features">

//         <h2>WHY CHOOSE NISS TECHNOLOGIES?</h2>

//         <div>

//           <article>
//             <span>🛡️</span>
//             <strong>Trusted</strong>
//             <p>& Reliable</p>
//           </article>

//           <article>
//             <span>👥</span>
//             <strong>Experienced</strong>
//             <p>Professionals</p>
//           </article>

//           <article>
//             <span>⭐</span>
//             <strong>Quality</strong>
//             <p>Assurance</p>
//           </article>

//           <article>
//             <span>⏱️</span>
//             <strong>On-Time</strong>
//             <p>Service</p>
//           </article>

//           <article>
//             <span>📈</span>
//             <strong>Business</strong>
//             <p>Growth</p>
//           </article>

//         </div>

//       </section>

//       {/* ================= CONTACT ================= */}

//       <section className="property-contact">

//         <div>

//           <h2>Let's Find Your Perfect Property</h2>

//           <p>
//             Our property experts are ready to help you.
//           </p>

//           <div className="contact-buttons">

//             <a href="tel:+919958424916">
//               📞 +91 99584 24916
//             </a>

//             <button onClick={openWhatsApp}>
//               💬 WhatsApp Us
//             </button>

//           </div>

//         </div>

//       </section>

//       {/* ================= MODAL ================= */}

//       {selectedProperty && (

//         <div
//           className="property-modal-overlay"
//           onClick={() => setSelectedProperty(null)}
//         >

//           <div
//             className="property-modal"
//             onClick={(e) => e.stopPropagation()}
//           >

//             <button
//               className="close-modal"
//               onClick={() => setSelectedProperty(null)}
//             >
//               ✕
//             </button>

//             <img
//               src={selectedProperty.image}
//               alt={selectedProperty.title}
//             />

//             <h2>{selectedProperty.title}</h2>

//             <p>
//               📍 {selectedProperty.location}
//             </p>

//             <h3>{selectedProperty.price}</h3>

//             <p>
//               {selectedProperty.description}
//             </p>

//             <div className="modal-buttons">

//               <a href="tel:+919958424916">
//                 📞 Call Now
//               </a>

//               <button onClick={openWhatsApp}>
//                 💬 WhatsApp
//               </button>

//               <button
//                 onClick={() => {
//                   alert("Site visit request received!");
//                   setSelectedProperty(null);
//                 }}
//               >
//                 📅 Book Site Visit
//               </button>

//             </div>

//           </div>

//         </div>

//       )}

//       <Footer />

//     </div>
//   );
// };

// export default Property;




import React, { useEffect, useState } from "react";
import "./Property.css";
// import NavBar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const defaultProperties = [
  {
    id: 1,
    title: "Luxury 3 BHK House",
    category: "Buy",
    type: "Residential",
    location: "Ghaziabad, Uttar Pradesh",
    price: "₹85 Lakh",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    description:
      "Beautiful 3 BHK residential property with modern facilities.",
  },
  {
    id: 2,
    title: "Premium Commercial Office",
    category: "Commercial",
    type: "Commercial",
    location: "Nehru Nagar, Ghaziabad",
    price: "₹45,000 / Month",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
    description:
      "Fully furnished commercial office suitable for business use.",
  },
  {
    id: 3,
    title: "Residential Plot",
    category: "Plot",
    type: "Land",
    location: "Raj Nagar Extension",
    price: "₹32 Lakh",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
    description:
      "Excellent residential plot in a developing location.",
  },
  {
    id: 4,
    title: "Boys PG Accommodation",
    category: "PG",
    type: "PG",
    location: "Nehru Nagar, Ghaziabad",
    price: "₹7,500 / Month",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    description:
      "Clean and comfortable PG accommodation with basic facilities.",
  },
];

const Property = () => {
  const [properties, setProperties] = useState([]);
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("niss_properties");

    if (saved) {
      setProperties(JSON.parse(saved));
    } else {
      localStorage.setItem(
        "niss_properties",
        JSON.stringify(defaultProperties)
      );

      setProperties(defaultProperties);
    }
  }, []);

  // Admin se property add/edit/delete hone par page update hoga
  useEffect(() => {
    const updateProperties = () => {
      const saved = localStorage.getItem("niss_properties");

      if (saved) {
        setProperties(JSON.parse(saved));
      }
    };

    window.addEventListener("storage", updateProperties);

    return () => {
      window.removeEventListener("storage", updateProperties);
    };
  }, []);

  const filteredProperties = properties.filter((property) => {
    const categoryMatch =
      category === "All" || property.category === category;

    const searchMatch =
      property.title.toLowerCase().includes(search.toLowerCase()) ||
      property.location.toLowerCase().includes(search.toLowerCase()) ||
      property.type.toLowerCase().includes(search.toLowerCase());

    return categoryMatch && searchMatch;
  });

  return (
    <div className="property-page">

      {/* <NavBar /> */}

      {/* HERO */}
      <section className="property-hero">

        <div className="property-hero-content">

          <span>NISS PROPERTY</span>

          <h1>
            Your Trusted
            <br />
            <strong>Real Estate Partner</strong>
          </h1>

          <p>
            Buy • Sell • Rent • PG • Commercial • Plots
          </p>

          <div className="property-hero-buttons">
            <button
              onClick={() => setCategory("Buy")}
            >
              Buy Property
            </button>

            <button
              onClick={() => setCategory("Rent")}
            >
              Rent Property
            </button>

            <button
              onClick={() => setCategory("PG")}
            >
              PG
            </button>
          </div>

        </div>

      </section>

      {/* SEARCH */}
      <section className="property-search-section">

        <input
          type="text"
          placeholder="Search property, location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </section>

      {/* CATEGORY */}
      <section className="property-categories">

        {[
          "All",
          "Buy",
          "Sell",
          "Rent",
          "PG",
          "Commercial",
          "Plot",
        ].map((item) => (
          <button
            key={item}
            className={category === item ? "active-category" : ""}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}

      </section>

      {/* PROPERTY LIST */}
      <section className="property-section">

        <div className="property-heading">

          <span>OUR PROPERTIES</span>

          <h2>
            Find Your Perfect Property
          </h2>

          <p>
            Residential, Commercial, PG, Rent, Buy & Plot properties
          </p>

        </div>

        <div className="property-grid">

          {filteredProperties.length === 0 ? (

            <div className="no-property">
              <h3>No Property Found</h3>
              <p>
                Try another category or search location.
              </p>
            </div>

          ) : (

            filteredProperties.map((property) => (

              <div
                className="property-card"
                key={property.id}
              >

                <div className="property-image">

                  <img
                    src={property.image}
                    alt={property.title}
                  />

                  <span>
                    {property.category}
                  </span>

                </div>

                <div className="property-info">

                  <h3>
                    {property.title}
                  </h3>

                  <p className="property-location">
                    📍 {property.location}
                  </p>

                  <p className="property-description">
                    {property.description}
                  </p>

                  <div className="property-bottom">

                    <strong>
                      {property.price}
                    </strong>

                    <button>
                      Enquire Now
                    </button>

                  </div>

                </div>

              </div>

            ))

          )}

        </div>

      </section>

      {/* SERVICES */}
      <section className="property-services">

        <h2>
          OUR PROPERTY SERVICES
        </h2>

        <div className="property-services-grid">

          <div>
            🏠
            <h3>Buy Property</h3>
            <p>
              Residential and commercial properties.
            </p>
          </div>

          <div>
            🤝
            <h3>Sell Property</h3>
            <p>
              Get the right buyer for your property.
            </p>
          </div>

          <div>
            🔑
            <h3>Rent Property</h3>
            <p>
              Houses, flats, offices and shops.
            </p>
          </div>

          <div>
            🛏️
            <h3>PG Accommodation</h3>
            <p>
              Comfortable PG options for students and professionals.
            </p>
          </div>

          <div>
            🏢
            <h3>Commercial</h3>
            <p>
              Offices, shops, warehouses and buildings.
            </p>
          </div>

          <div>
            🌳
            <h3>Plots & Land</h3>
            <p>
              Residential and commercial land deals.
            </p>
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="property-cta">

        <div>

          <h2>
            Looking For Your Dream Property?
          </h2>

          <p>
            Our team will help you find the right property.
          </p>

        </div>

        <button>
          Contact Us
        </button>

      </section>

      <Footer />

    </div>
  );
};

export default Property;