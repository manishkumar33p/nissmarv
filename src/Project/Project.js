import React, { useState } from "react";
import NavBar from "../Navbar/Navbar";
// import Footer from "../Footer/Footer";
import "./Project.css";

import HeroVideo from "../marvv99.mp4"; // 👈 your video

const Project = () => {
  const [activeTab, setActiveTab] = useState("Rent");

  const data = {
    Buy: {
      title: "Buy Your Dream Property",
      desc: "Best properties available for buying in your budget.",
    },
    PG: {
      title: "Find Best PG Rooms",
      desc: "Affordable PG options for students and working professionals.",
    },
    Rent: {
      title: "Rent Comfortable Homes",
      desc: "Houses and flats available for rent in top locations.",
    },
  };

  return (
    <div className="project-page">

      <NavBar />

      {/* HERO SECTION */}
      <section className="project-hero">

        {/* VIDEO BACKGROUND */}
        <video className="project-video" autoPlay loop muted>
          <source src={HeroVideo} type="video/mp4" />
        </video>

        {/* DARK OVERLAY */}
        <div className="project-overlay"></div>

        {/* CONTENT */}
        <div className="project-content">

          <h1 className="main-title">
            Naye Safar Ki Shuruaat <span>#NISS</span> Ke Sath
          </h1>

          <p className="main-desc">
            Find your dream home, PG or rental property with ease and comfort.
          </p>

          {/* SEARCH BOX */}
          <div className="search-box">

            {/* TABS */}
            <div className="tabs">
              <button
                className={activeTab === "Buy" ? "active" : ""}
                onClick={() => setActiveTab("Buy")}
              >
                Buy
              </button>

              <button
                className={activeTab === "PG" ? "active" : ""}
                onClick={() => setActiveTab("PG")}
              >
                PG
              </button>

              <button
                className={activeTab === "Rent" ? "active" : ""}
                onClick={() => setActiveTab("Rent")}
              >
                Rent
              </button>
            </div>

            {/* SEARCH INPUTS */}
            <div className="search-fields">

              <select>
                <option>Noida</option>
                <option>Delhi</option>
                <option>Gurgaon</option>
              </select>

              <input
                type="text"
                placeholder="Enter Location or Property Type..."
              />

              <button className="search-btn">
                Search
              </button>

            </div>

            {/* DYNAMIC CONTENT */}
            <div className="dynamic-content">
              <h2>{data[activeTab].title}</h2>
              <p>{data[activeTab].desc}</p>
            </div>

          </div>
        </div>
      </section>

      {/* <Footer /> */}

    </div>
  );
};

export default Project;