import React, { useState, useEffect } from "react";
// import NavBar from '../Navbar/Navbar';
import Footer from "../Footer/Footer";
import './About.css';
import { NavLink } from "react-router-dom";
import MarvVideo1 from '../marvv2.mp4';
import MarvVideo2 from '../marvv3.mp4';
import Project from "../Project/Project";
// Import images directly from the src folder
import MarvImage from "../marv.jpg";
import Marv1Image from '../marv1.jpeg';
import Marv2Image from '../marv2.jpeg';
import Marv3Image from '../marv3.jpeg';
import Marv5Image from '../marv5.jpg';
import Marv6Image from '../marv6.jpg';
import Marv7Image from '../marv7.png';
import Marv8Image from '../marv8.jpg';
import Marv9Image from '../marv9.png';
import Marv10Image from '../marv10.jpg';
import Marv11Image from '../marv11.jpg';
import Marv12Image from '../marv12.png';
import Marv51Image from '../marv51.jpg';
import Marv53Image from '../marv53.jfif';
import Marv55Image from '../marv55.jpeg';
import Marv56Image from '../marv56.jpeg';
import Marv57Image from '../marv57.jpeg';
import WhatsAppLogo from '../whatsapp-logo.jfif'; // Import WhatsApp logo
import N from "../N.jpeg"
import Plumber from "../Plumber.jfif"
import Property from "../Property.jfif"
// Partner logos using the same images
import saloon from '../saloon.jfif';
import Teacher from '../Teacher.jfif';
 import Securty from '../Securty.webp';
 import Camera from '../Camera.jfif';
 import Tailor from '../Tailor.png';
 import carpenter from '../carpenter.jfif';
 import insta from '../insta.jfif';
import logo28 from "../logo28.jpeg";
import logo27 from "../logo27.png";
const partnerLogos = [
  { src: Marv5Image, alt: "Partner 1", link: "https://www.partner1.com" },
  { src: Marv6Image, alt: "Partner 2", link: "https://www.partner2.com" },
  { src: Marv7Image, alt: "Partner 3", link: "https://www.partner3.com" },
  { src: Marv8Image, alt: "Partner 4", link: "https://www.partner4.com" },
  { src: Marv9Image, alt: "Partner 5", link: "https://www.partner5.com" },
  { src: Marv10Image, alt: "Partner 6", link: "https://www.partner6.com" },
  { src: Marv11Image, alt: "Partner 7", link: "https://www.partner7.com" },
];

const images = [
  MarvImage,
  Marv1Image,
  Marv2Image,
  Marv3Image,
];


const About = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

useEffect(() => {
  const openQuotePopup = () => {
    setShowConsultant(true);
  };

  window.addEventListener(
    "open-consultant-popup",
    openQuotePopup
  );

  return () => {
    window.removeEventListener(
      "open-consultant-popup",
      openQuotePopup
    );
  };
}, []);
  // CONSULTANT POPUP
  const [showConsultant, setShowConsultant] = useState(false);
  const [submitted, setSubmitted] = useState(false);


  // CAROUSEL
  useEffect(() => {

    if (!isHovered) {

      const id = setInterval(() => {

        setCurrentIndex(
          (prevIndex) => (prevIndex + 1) % images.length
        );

      }, 10000);

      setIntervalId(id);

      return () => {
        clearInterval(id);
      };
    }

  }, [isHovered]);


  // CONSULTANT FORM
  const handleConsultantSubmit = (e) => {

    e.preventDefault();

    const form = e.currentTarget;

    const name = form.elements.name.value;
    const phone = form.elements.phone.value;
    const email = form.elements.email.value;
    const address = form.elements.address.value;
    const service = form.elements.service.value;
    const requirement = form.elements.requirement.value;
    const budget = form.elements.budget.value;
    const date = form.elements.date.value;
    const time = form.elements.time.value;

    const message = `
*NEW FREE CONSULTANT REQUEST*

Name: ${name}
Phone: ${phone}
Email: ${email}

Address:
${address}

Service Required:
${service}

Requirement:
${requirement}

Budget:
${budget}

Preferred Date:
${date}

Preferred Time:
${time}
`;

    const whatsappURL =
      `https://wa.me/919958424916?text=${encodeURIComponent(message)}`;

    setSubmitted(true);

    window.open(whatsappURL, "_blank");

    form.reset();

    setTimeout(() => {

      setSubmitted(false);
      setShowConsultant(false);

    }, 1500);

  };


  // NEXT
  const handleNext = () => {

    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % images.length
    );

  };


  // PREVIOUS
  const handlePrevious = () => {

    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + images.length) % images.length
    );

  };


  // OLD FORM SUBMIT
  const handleSubmit = (e) => {

    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;

    console.log("Form submitted", {
      name,
      email,
      phone
    });

    e.target.reset();

  };



  
  return (
    <div className='App'>
      <div >
        {/* <NavBar /> */}












        <div className="image-section"><br/><br/><br/>
     


  {/* NAVBAR */}
  <div className="niss-navbar">

    <div className="niss-logo">
      <img src={logo27} alt="NISS Technologies" />
    </div>

    

    <div className="mobile-menu">☰</div>
  </div>


  


  <section className="niss-hero">

  {/* LEFT CONTENT */}
  <div className="hero-content">

    <div className="hero-kicker">
      ONE COMPANY.
    </div>

    <h1>
      MULTIPLE SOLUTIONS.
      <br />
      <span>ENDLESS POSSIBILITIES.</span>
    </h1>

    <p>
      NISS Technologies is your trusted partner for technology,
      services and solutions that help your business grow,
      scale and succeed.
    </p>

    <div className="hero-buttons">

     <button
  type="button"
  className="services-btn"
  onClick={() => setShowConsultant(true)}
>
  Free Consultant
</button>

      <a
        href="https://wa.me/919958424916"
        target="_blank"
        rel="noreferrer"
        className="whatsapp-btn"
      >
        <span>◉</span>
        Chat on WhatsApp
      </a>

    </div>

  </div>

{showConsultant && (
  <div
    className="consultant-overlay"
    onClick={() => setShowConsultant(false)}
  >
    <div
      className="consultant-modal"
      onClick={(e) => e.stopPropagation()}
    >

      <button
        className="consultant-close"
        onClick={() => setShowConsultant(false)}
      >
        ×
      </button>

      <div className="consultant-header">
        <h2>Free Consultation</h2>
        <p>
          Tell us about your requirement and our expert will contact you.
        </p>
      </div>

      {submitted ? (
        <div className="consultant-success">
          <div className="success-icon">✓</div>
          <h3>Request Submitted!</h3>
          <p>
            Thank you. Your consultation request has been received.
          </p>
        </div>
      ) : (

        <form
          className="consultant-form"
          onSubmit={handleConsultantSubmit}
        >

          <div className="form-row">

            <div className="form-field">
              <label>Full Name *</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="form-field">
              <label>Phone Number *</label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter phone number"
                required
              />
            </div>

          </div>


          <div className="form-row">

            <div className="form-field">
              <label>Email Address *</label>
              <input
                type="email"
                name="email"
                placeholder="Enter email address"
                required
              />
            </div>

            <div className="form-field">
              <label>Service Required *</label>

              <select
                name="service"
                required
              >
                <option value="">
                  Select Service
                </option>

                <option value="Software Development">
                  Software Development
                </option>

                <option value="Digital Marketing">
                  Digital Marketing
                </option>

                <option value="IT Consulting">
                  IT Consulting
                </option>

                <option value="Security Solutions">
                  Security Solutions
                </option>

                <option value="Interior Design">
                  Interior Design
                </option>

                <option value="Property Services">
                  Property Services
                </option>

                <option value="Laundry Services">
                  Laundry Services
                </option>

                <option value="Security Guard Services">
                  Security Guard Services
                </option>

                <option value="Event Management">
                  Event Management
                </option>

                <option value="Catering Services">
                  Catering Services
                </option>

                <option value="Other">
                  Other
                </option>

              </select>

            </div>

          </div>


          <div className="form-field">
            <label>Full Address *</label>

            <textarea
              name="address"
              rows="3"
              placeholder="Enter your complete address"
              required
            ></textarea>

          </div>


          <div className="form-field">
            <label>Your Requirement *</label>

            <textarea
              name="requirement"
              rows="4"
              placeholder="Please explain your requirement in detail..."
              required
            ></textarea>

          </div>


          <div className="form-row">

            <div className="form-field">
              <label>Estimated Budget</label>

              <select name="budget">

                <option value="">
                  Select Budget
                </option>

                <option value="Below ₹10,000">
                  Below ₹10,000
                </option>

                <option value="₹10,000 - ₹25,000">
                  ₹10,000 - ₹25,000
                </option>

                <option value="₹25,000 - ₹50,000">
                  ₹25,000 - ₹50,000
                </option>

                <option value="₹50,000 - ₹1,00,000">
                  ₹50,000 - ₹1,00,000
                </option>

                <option value="₹1,00,000+">
                  ₹1,00,000+
                </option>

              </select>

            </div>


            <div className="form-field">
              <label>Preferred Date *</label>

              <input
                type="date"
                name="date"
                required
              />

            </div>

          </div>


          <div className="form-field">
            <label>Preferred Time *</label>

            <select
              name="time"
              required
            >

              <option value="">
                Select Time
              </option>

              <option value="10:00 AM - 12:00 PM">
                10:00 AM - 12:00 PM
              </option>

              <option value="12:00 PM - 2:00 PM">
                12:00 PM - 2:00 PM
              </option>

              <option value="2:00 PM - 4:00 PM">
                2:00 PM - 4:00 PM
              </option>

              <option value="4:00 PM - 6:00 PM">
                4:00 PM - 6:00 PM
              </option>

              <option value="6:00 PM - 8:00 PM">
                6:00 PM - 8:00 PM
              </option>

            </select>

          </div>


          <button
            type="submit"
            className="consultant-submit"
          >
            Submit Request →
          </button>

        </form>

      )}

    </div>
  </div>
)}
  {/* RIGHT BUILDING AREA */}
  <div className="hero-building-area">

    {/* decorative background */}
    <div className="building-orange-shape"></div>
    <div className="building-blue-shape"></div>

    <div className="building-image-wrapper">

      <img
        src={logo28}
        alt="NISS Technologies Building"
        className="niss-building"
      />

    </div>


    {/* TRUST BADGE */}
    <div className="trusted-badge">

      <div className="trusted-icon">
        <span>♧</span>
        <span>♧</span>
      </div>

      <div className="trusted-title">
        TRUSTED BY
      </div>

      <div className="trusted-text">
        BUSINESSES &<br />
        INDIVIDUALS<br />
        ACROSS INDIA
      </div>

    </div>

  </div>

</section>


  {/* WHAT WE PROVIDE */}
  <section className="services-section">

    <div className="section-title">
      <span></span>
      <h2>WHAT WE PROVIDE</h2>
      <span></span>
    </div>


    <div className="services-grid">

      <NavLink to="https://www.klikdigisetu.com/" className="service-card">
        <div className="service-icon blue">⌨</div>

        <div>
          <h3>SOFTWARE DEVELOPMENT</h3>

          <ul>
            <li>Custom Software Development</li>
            <li>Web & Mobile Apps</li>
            <li>SaaS Development</li>
            <li>AI & IT Solutions</li>
            <li>IT Consulting</li>
          </ul>
        </div>
      </NavLink>


      <NavLink to="https://www.klikdigisetu.com/" className="service-card">
        <div className="service-icon orange">📣</div>

        <div>
          <h3>DIGITAL MARKETING</h3>

          <ul>
            <li>SEO</li>
            <li>Social Media Marketing</li>
            <li>Google Ads & Meta Ads</li>
            <li>Branding & Design</li>
            <li>Lead Generation</li>
          </ul>
        </div>
      </NavLink>


      <NavLink to="/plumbing" className="service-card">
        <div className="service-icon green">🔧</div>

        <div>
          <h3>NISS QUICKFIX</h3>

          <small>(EXPERT SERVICES)</small>

          <ul>
            <li>Plumbing</li>
            <li>Electrical</li>
            <li>AC Repair & Service</li>
            <li>Carpentry & Painting</li>
            <li>Cleaning & More</li>
          </ul>
        </div>
      </NavLink>


      <NavLink to="/cctv" className="service-card">
        <div className="service-icon purple">🛡</div>

        <div>
          <h3>SECURITY SOLUTIONS</h3>

          <ul>
            <li>CCTV Installation</li>
            <li>Biometric & Access Control</li>
            <li>Video Door Phone</li>
            <li>Smart Security Systems</li>
            <li>AMC & Maintenance</li>
          </ul>
        </div>
      </NavLink>


      <NavLink to="/interior" className="service-card">
        <div className="service-icon cyan">🛋</div>

        <div>
          <h3>INTERIOR DESIGN</h3>

          <ul>
            <li>Residential Interior</li>
            <li>Commercial Interior</li>
            <li>Modular Kitchen</li>
            <li>3D Design & Visualization</li>
            <li>Turnkey Projects</li>
          </ul>
        </div>
      </NavLink>


      <NavLink to="/laundry" className="service-card">
        <div className="service-icon dark-blue">🧺</div>

        <div>
          <h3>LAUNDRY SERVICES</h3>

          <ul>
            <li>Washing & Dry Cleaning</li>
            <li>Steam Ironing</li>
            <li>Stain Removal</li>
            <li>Pickup & Delivery</li>
            <li>Bulk Laundry</li>
          </ul>
        </div>
      </NavLink>


      <NavLink to="/security" className="service-card">
        <div className="service-icon navy">👮</div>

        <div>
          <h3>SECURITY GUARD SERVICES</h3>

          <ul>
            <li>Trained Security Guards</li>
            <li>Event Security</li>
            <li>Corporate Security</li>
            <li>Residential Security</li>
            <li>24/7 Protection</li>
          </ul>
        </div>
      </NavLink>


      <NavLink to="/events" className="service-card">
        <div className="service-icon pink">🎪</div>

        <div>
          <h3>TENT DECORATION & EVENT MANAGEMENT</h3>

          <ul>
            <li>Wedding & Party Décor</li>
            <li>Stage & Venue Decoration</li>
            <li>Canopy, Tents & Lighting</li>
            <li>Theme Decoration</li>
            <li>Event Management</li>
          </ul>
        </div>
      </NavLink>


      <NavLink to="/catering" className="service-card">
        <div className="service-icon red-orange">🍽</div>

        <div>
          <h3>CATERING SERVICES</h3>

          <ul>
            <li>Wedding Catering</li>
            <li>Corporate Catering</li>
            <li>Birthday & Party Catering</li>
            <li>Food for Events</li>
            <li>Hygienic & Delicious Food</li>
          </ul>
        </div>
      </NavLink>

      <NavLink to="/property" className="service-card">
  <div className="service-icon property-blue">🏠</div>

  <div>
    <h3>PROPERTY SERVICES</h3>

    <ul>
      <li>Property Buy & Sell</li>
      <li>Residential & Commercial</li>
      <li>Property for Rent</li>
      <li>PG & Rental Rooms</li>
      <li>Property Consultation</li>
    </ul>
  </div>
</NavLink>

    </div>

  </section>


  {/* WHY CHOOSE US */}
  <section className="why-niss">

    <h2>WHY CHOOSE NISS TECHNOLOGIES?</h2>

    <div className="why-grid">

      <div>
        <span>🛡</span>
        <strong>Trusted<br />& Reliable</strong>
      </div>

      <div>
        <span>👥</span>
        <strong>Expert<br />Professionals</strong>
      </div>

      <div>
        <span>🏅</span>
        <strong>Quality<br />Assurance</strong>
      </div>

      <div>
        <span>⏱</span>
        <strong>On-Time<br />Delivery</strong>
      </div>

      <div>
        <span>📈</span>
        <strong>Growth Driven<br />Solutions</strong>
      </div>

    </div>

  </section>


</div>



 <div
          className="carousel-container"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="carousel">
            <img src={images[currentIndex]} alt={`Carousel ${currentIndex}`} />
            <div className="carousel-note">
              <h3>Welcome to Niss Technologies!</h3>
              <p>END TO END ALL SOLUTIONS</p>
              <button className="view-details-btn1">SHOP NOW</button>
              <button className="view-details-btn1">ENQUIRY</button>
            </div>

            {/* Carousel Navigation Controls */}
            <div className="carousel-controls">
              <button className="carousel-control-prev" onClick={handlePrevious}>❮</button>
              <button className="carousel-control-next" onClick={handleNext}>❯</button>
            </div>

            {/* Carousel Dots */}
            <div className="carousel-dots">
              {images.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${currentIndex === index ? "active" : ""}`}
                  onClick={() => setCurrentIndex(index)}
                ></span>
              ))}
            </div>
          </div>
        </div>


  <div className="about-container">
          <div className="about-content">
            <div className="about-image">
              <img src={Marv2Image} alt="about company" />
            </div>
            <div className="about-text">
              <h1 className="topic">About Us</h1>
              <p className="about">
              NISS Technologies is a multi-service company dedicated to providing innovative solutions in Software Development, Property Buying & Selling, Rental Services, PG Accommodation, Interior Design, and Modified Laptop Solutions. Our mission is to deliver quality, trust, and modern services that simplify life and help our clients grow with confidence.
              </p>
            </div>
          </div>
        </div>



        <div className="fullscreen-video-container">
          <video className="fullscreen-video" autoPlay loop muted>

            <source src={MarvVideo2} type="video/mp4" />
          </video>

          <div className="contact-overlay">
            <div className="contact-section">
              <h2 className="contact-title">Book a free site  visit now</h2>
              {/* <h4>inspiring living</h4> */}
              <div className="services-list">
               <div className="form-container">
  <form onSubmit={handleSubmit}>

    <div className="form-group">
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Enter your name"
        required
      />
    </div>

    <div className="form-group">
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Enter your email"
        required
      />
    </div>

    <div className="form-group">
      <input
        type="tel"
        name="phone"
        id="phone"
        placeholder="Enter your phone number"
        required
      />
    </div>

    <button
      type="submit"
      className="view-details-btn1"
    >
      Submit
    </button>

  </form>
</div>
              </div>
            </div>
          </div>




          {/* Form Overlay on Video */}
          
        </div>

        
        {/* Project Section */}
    

 <div className="partners-section">
          <center><h2 className="browse-heading">Our Partners</h2></center>
          <div className="partners-logos-wrapper">
            <div className="partners-logos">
              {partnerLogos.map((partner, index) => (
                <a key={index} href={partner.link} target="_blank" rel="noopener noreferrer" className="partner-logo-link">
                  <img src={partner.src} alt={partner.alt} className="partner-logo" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Our Team Section */}
        <div className="team-section">
          <h2 className="browse-heading">Meet Our Team</h2>
          <div className="team-members">
            {/* Team Member 1 */}
            <div className="team-member">
              <img src={Marv55Image} alt="Team Member 1" className="team-member-img" />
              <h4>VIBHASH VAIBHAV</h4>
              <p className="designation">CEO,Marv</p>
            </div>

            {/* Team Member 2 */}
            <div className="team-member">
              <img src={Marv56Image} alt="Team Member 2" className="team-member-img" /><br/><br/><br/>
              <h4>VINEET KUMAR</h4>
              <p className="designation">CFO,Marv</p>
            </div>

            {/* Team Member 3 */}
            <div className="team-member">
              <img src={Marv57Image} alt="Team Member 3" className="team-member-img" />
              <h4>MANISH KUMAR SINGH</h4>
              <p className="designation">CEO, NISS</p>
            </div>

            {/* Team Member 4 */}
            <div className="team-member">
              <img src={N} alt="Team Member 4" className="team-member-img" />
              <h4>K.R.Roushan</h4>
              <p className="designation">CFO, NISS</p>
            </div>
          </div>
        </div>

        {/* Partners Section */}
       

        {/* Services Section */}


        {/* Testimonials Section */}
        <div className="testimonials-section">
          <h2 className="section-title">What Our Clients Say</h2>
          <div className="testimonials-row">
            <div className="testimonial">
              <img src={Marv12Image} alt="Client 1" className="testimonial-img" />
              <p>"The interior design services we received were beyond our expectations! The team really brought our vision to life. Highly recommend!"</p>
              <h4>John Doe</h4>
              <p>CEO, Tech Innovations</p>
            </div>
            <div className="testimonial">
              <img src={Marv11Image} alt="Client 2" className="testimonial-img" />
              <p>"Marv helped us redesign our office space. The atmosphere is now much more comfortable and inspiring!"</p>
              <h4>Jane Smith</h4>
              <p>Founder, Innovate Solutions</p>
            </div>
            <div className="testimonial">
              <img src={Marv10Image} alt="Client 3" className="testimonial-img" />
              <p>"We love our new living room design! The attention to detail and quality of work was exceptional. Thank you, Marv!"</p>
              <h4>Michael Brown</h4>
              <p>Client</p>
            </div>
            <div className="testimonial">
              <img src={Marv9Image} alt="Client 4" className="testimonial-img" />
              <p>"The team at Marv is a pleasure to work with. Their designs are modern, functional, and aesthetically pleasing."</p>
              <h4>Alice Green</h4>
              <p>Homeowner</p>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Button */}
      <div className="whatsapp-button">
        <a
          href="https://wa.me/9958424913?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-btn"
        >
          <img src={WhatsAppLogo} alt="WhatsApp" className="whatsapp-logo" />
          Let's Chat on WhatsApp
        </a>
      </div>
        <h5>hii

        </h5>
      <Footer />
    </div>
  );
};

export default About;
