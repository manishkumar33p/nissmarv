import React, { useState, useEffect } from "react";
import "./Packages.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import MarvVideo2 from '../marvv3.mp4';

// YOUR IMAGES ONLY
import Plumber2 from "../Plumber2.avif";
import Laptop from "../Laptop.jfif";
import Software from "../Software.jfif";

const allPackages = [
  // WEB DESIGN
  {
    id: 1,
    category: "web",
    title: "Static Website",
    subtitle: "Small businesses, personal profiles, landing pages",
    price: "₹9,999",
    gst: "+18% GST",
    pages: "Up to 4 Pages",
    image: Software,
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "WordPress"],
    references: ["Shaurya Enterprise", "AVJ Engineering", "BPAS Publications"],
    features: [
      "Responsive Design",
      "Modern UI Design",
      "Basic SEO Setup",
      "Fast Loading",
      "Mobile Friendly",
      "Domain Support",
    ],
  },

  {
    id: 2,
    category: "web",
    title: "CMS Dynamic Website",
    subtitle: "Blogs, service websites, company profiles",
    price: "₹29,999",
    gst: "+18% GST",
    pages: "Up to 10 Pages",
    image: Software,
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "WordPress",
      "WooCommerce",
    ],
    references: ["Phoebus Laser", "H2Power", "I-Brainz"],
    features: [
      "Admin Dashboard",
      "Dynamic Pages",
      "Custom Theme",
      "SEO Friendly",
      "Fast Performance",
      "Easy Management",
    ],
  },

  // ECOMMERCE
  {
    id: 3,
    category: "ecommerce",
    title: "WooCommerce Website",
    subtitle: "Professional online shopping website",
    price: "₹54,999",
    gst: "+18% GST",
    pages: "Unlimited Products",
    image: Laptop,
    technologies: ["WordPress", "WooCommerce", "Razorpay", "PHP"],
    references: ["Fashion Store", "Electronics Shop"],
    features: [
      "Payment Gateway",
      "Cart System",
      "Order Management",
      "Admin Panel",
      "Mobile Friendly",
      "SEO Optimized",
    ],
  },

  {
    id: 4,
    category: "ecommerce",
    title: "Shopify eCommerce Store",
    subtitle: "Premium online selling platform",
    price: "₹1,29,999",
    gst: "+18% GST",
    pages: "Unlimited Products",
    image: Laptop,
    technologies: ["Shopify", "Custom Theme", "Apps Integration"],
    references: ["Luxury Fashion", "Premium Brand Store"],
    features: [
      "Premium UI",
      "Payment Integration",
      "Inventory Management",
      "Fast Checkout",
      "Custom Design",
      "High Performance",
    ],
  },

  // DEVELOPMENT
  {
    id: 5,
    category: "development",
    title: "React JS Website",
    subtitle: "Modern UI websites, startups, portfolios",
    price: "₹39,999",
    gst: "+18% GST",
    pages: "Up to 12 Pages",
    image: Laptop,
    technologies: ["React JS", "CSS", "JavaScript", "Bootstrap"],
    references: ["Cool Summer", "New India Services"],
    features: [
      "Reusable Components",
      "Fast Performance",
      "Responsive Layout",
      "Modern Animations",
      "Custom Design",
      "SEO Friendly",
    ],
  },

  {
    id: 6,
    category: "development",
    title: "Next.js Dynamic Website",
    subtitle: "High performance scalable platform",
    price: "₹79,999",
    gst: "+18% GST",
    pages: "Up to 15 Pages",
    image: Software,
    technologies: ["React JS", "Next.js", "Node.js", "MongoDB"],
    references: ["Laser Job Work", "Hoarding Champ"],
    features: [
      "SSR + SEO",
      "API Integration",
      "Dynamic Routing",
      "Admin Dashboard",
      "Database Integration",
      "High Security",
    ],
  },
];

const Packages = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [cart, setCart] = useState([]);

  const filteredPackages =
    activeCategory === "all"
      ? allPackages
      : allPackages.filter((item) => item.category === activeCategory);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  const addToCart = (pkg) => {
    const updatedCart = [...cart, pkg];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    alert(`${pkg.title} added to cart`);
  };

  return (
    <div className="package_container">
      <Navbar />
<section className="software-hero">

  {/* 🔥 BACKGROUND VIDEO */}
  <video className="fullscreen-video" autoPlay loop muted>
    <source src={MarvVideo2} type="video/mp4" />
  </video>

  {/* DARK OVERLAY */}
  <div className="software-overlay-bg"></div>

  <div className="software-overlay">

    {/* LEFT CONTENT */}
    <div className="software-left">

      <span className="software-tag">
        NISS Software Solutions
      </span>

      <h1>
        Build Smart Digital Products
        With <span>NISS Software</span>
      </h1>

      <p>
        We create websites, mobile apps, CRM systems,
        business software, dashboards, e-commerce platforms,
        and custom digital solutions for startups and companies.
      </p>

      {/* SEARCH BOX */}
      <div className="software-search-box">

        <select>
          <option>Website Development</option>
          <option>Mobile App</option>
          <option>CRM Software</option>
          <option>E-Commerce</option>
          <option>UI/UX Design</option>
        </select>

        <input
          type="text"
          placeholder="Search Software Services..."
        />

       

      </div>

      {/* BUTTONS */}
      

    </div>

    {/* RIGHT SIDE */}
    <div className="software-right">

      <div className="software-card">
        <img src={Software} alt="Software Service" />
      </div>

      <div className="software-small-cards">

        <div className="small-card">
          <h3>100+</h3>
          <p>Projects Completed</p>
        </div>

        <div className="small-card">
          <h3>50+</h3>
          <p>Happy Clients</p>
        </div>

      </div>

    </div>

  </div>

</section>
      {/* TABS */}
      <div className="package_tabs">
        
        <button
          className={activeCategory === "all" ? "package_tab active_package_tab" : "package_tab"}
          onClick={() => setActiveCategory("all")}
        >
          All Packages
        </button>

        <button
          className={activeCategory === "ecommerce" ? "package_tab active_package_tab" : "package_tab"}
          onClick={() => setActiveCategory("ecommerce")}
        >
          E-commerce
        </button>

        <button
          className={activeCategory === "development" ? "package_tab active_package_tab" : "package_tab"}
          onClick={() => setActiveCategory("development")}
        >
          Web Designing / Development
        </button>
      </div>

      {/* CARDS */}
      <div className="package_grid">
        {filteredPackages.map((item) => (
          <div className="package_card" key={item.id}>

            {/* IMAGE */}
            <div className="package_image">
              <img src={item.image} alt={item.title} />
            </div>

            <div className="package_top">
              <h2>{item.title}</h2>
              <span className="package_pages">{item.pages}</span>
            </div>

            <p className="package_subtitle">{item.subtitle}</p>

            <div className="package_price_row">
              <h1>{item.price}</h1>
              <span>{item.gst}</span>
            </div>

            <hr />

            {/* TECHNOLOGY */}
            <div className="package_section">
              <h4>Technology</h4>
              <div className="package_tags">
                {item.technologies.map((tech, i) => (
                  <span key={i} className="package_tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* REFERENCES */}
            <div className="package_section">
              <h4>Reference Websites</h4>
              <div className="package_tags">
                {item.references.map((ref, i) => (
                  <span key={i} className="package_tag">
                    {ref}
                  </span>
                ))}
              </div>
            </div>

            {/* BUTTON */}
            <button className="package_button" onClick={() => addToCart(item)}>
              Add to Cart
            </button>

            {/* FEATURES (FULL KEPT) */}
            <ul className="package_features">
              {item.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>

          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Packages;