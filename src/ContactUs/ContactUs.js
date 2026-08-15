
// import React, { useState, useRef } from 'react';
// import NavBar from '../Navbar/Navbar';
// import './ContactUs.css';
// import Footer from "../Footer/Footer";
// import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
// import emailjs from '@emailjs/browser';

// import MarvVideo from "../marvv3.mp4";

// const ContactUs = () => {

//     const form = useRef();

//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         phone: '',
//         subject: '',
//         message: ''
//     });

//     const [confirmationMessage, setConfirmationMessage] = useState('');

//     const handleChange = (e) => {
//         const { name, value } = e.target;

//         setFormData({
//             ...formData,
//             [name]: value
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         const existingData =
//             JSON.parse(localStorage.getItem('contactData')) || [];

//         localStorage.setItem(
//             'contactData',
//             JSON.stringify([...existingData, formData])
//         );

//         emailjs.sendForm(
//             'service_3z8pkj1',
//             'template_zfanfmp',
//             form.current,
//             'dKgJCNwJ0irTaeaZ1'
//         )
//         .then(() => {

//             setConfirmationMessage(
//                 'Your message has been successfully sent!'
//             );

//             setFormData({
//                 name: '',
//                 email: '',
//                 phone: '',
//                 subject: '',
//                 message: ''
//             });

//         })
//         .catch((error) => {

//             console.log(error.text);

//             setConfirmationMessage(
//                 'Something went wrong. Please try again.'
//             );

//         });
//     };

//     return (
//         <div className="contact-page">

//             <NavBar />

//             <video className="contact-video" autoPlay loop muted>
//                 <source src={MarvVideo} type="video/mp4" />
//             </video>

//             <div className="contact-overlay"></div>

//             <div className="contact-container">

//                 {/* LEFT SIDE */}
//                 <div className="contact-left">

//                     <span className="contact-tag">Contact NISS</span>

//                     <h1>
//                         Let’s Build Something
//                         <span> Amazing Together</span>
//                     </h1>

//                     <p>
//                         Contact us for software, interiors,
//                         plumbing, laptops, real estate,
//                         and digital services.
//                     </p>

//                     <div className="contact-cards">

//                         <div className="contact-card">
//                             <FaMapMarkerAlt className="contact-icon" />
//                             <h3>Address</h3>
//                             <p>Ground Floor, 122A, New Gandhi Nagar, Ghaziabad, Uttar Pradesh 201001</p>
//                         </div>

//                         <div className="contact-card">
//                             <FaPhone className="contact-icon" />
//                             <h3>Phone</h3>
//                             <p>+91 9958424916</p>
//                         </div>

//                         <div className="contact-card">
//                             <FaEnvelope className="contact-icon" />
//                             <h3>Email</h3>
//                             <p>technologiesniss@gmail.com</p>
//                         </div>

//                     </div>

//                 </div>

//                 {/* RIGHT FORM */}
//                 <div className="contact-right">

//                     <form
//                         ref={form}
//                         className="contact-form"
//                         onSubmit={handleSubmit}
//                     >

//                         <h2>Send Message</h2>

//                         <input
//                             type="text"
//                             name="name"
//                             placeholder="Your Name"
//                             value={formData.name}
//                             onChange={handleChange}
//                             required
//                         />

//                         <input
//                             type="email"
//                             name="email"
//                             placeholder="Your Email"
//                             value={formData.email}
//                             onChange={handleChange}
//                             required
//                         />

//                         <input
//                             type="text"
//                             name="phone"
//                             placeholder="Mobile Number"
//                             value={formData.phone}
//                             onChange={handleChange}
//                             required
//                         />

//                         <input
//                             type="text"
//                             name="subject"
//                             placeholder="Subject"
//                             value={formData.subject}
//                             onChange={handleChange}
//                             required
//                         />

//                         <textarea
//                             name="message"
//                             rows="5"
//                             placeholder="Your Message"
//                             value={formData.message}
//                             onChange={handleChange}
//                             required
//                         ></textarea>

//                         <button type="submit">
//                             Send Message
//                         </button>

//                         {confirmationMessage && (
//                             <p className="confirmation-message">
//                                 {confirmationMessage}
//                             </p>
//                         )}

//                     </form>

//                 </div>

//             </div>

//             <Footer />

//         </div>
//     );
// };

// export default ContactUs;


import React, { useState, useRef } from "react";
import "./ContactUs.css";
import Footer from "../Footer/Footer";

import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaCheckCircle,
} from "react-icons/fa";

import emailjs from "@emailjs/browser";
import MarvVideo from "../marvv3.mp4";

const ContactUs = () => {
  const form = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [confirmationMessage, setConfirmationMessage] = useState("");
  const [sending, setSending] = useState(false);

  const services = [
    "Software Development",
    "Website Development",
    "Mobile App Development",
    "E-Commerce Development",
    "Digital Marketing",
    "SEO Services",
    "Social Media Marketing",
    "Graphic Design",
    "Data Entry Services",
    "CCTV & Surveillance",
    "Interior Design & Services",
    "Plumbing Services",
    "Carpenter Services",
    "Security Guard Services",
    "Teacher / Tutor Services",
    "Tailor Services",
    "Catering Services",
    "Laundry Services",
    "Property - Buy / Sell",
    "Property - Rent / PG",
    "Tent Decoration",
    "Event Management",
    "Quick Service / Other",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.service) {
      setConfirmationMessage("Please select a service.");
      return;
    }

    setSending(true);
    setConfirmationMessage("");

    // Save enquiry locally
    const existingData =
      JSON.parse(localStorage.getItem("contactData")) || [];

    const enquiry = {
      ...formData,
      id: Date.now(),
      createdAt: new Date().toISOString(),
    };

    localStorage.setItem(
      "contactData",
      JSON.stringify([...existingData, enquiry])
    );

    emailjs
      .sendForm(
        "service_3z8pkj1",
        "template_zfanfmp",
        form.current,
        "dKgJCNwJ0irTaeaZ1"
      )
      .then(() => {
        setConfirmationMessage(
          "Your enquiry has been sent successfully! Our team will contact you soon."
        );

        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });

        setSending(false);
      })
      .catch((error) => {
        console.log(error);

        setConfirmationMessage(
          "Your enquiry was saved, but email could not be sent. Please contact us directly."
        );

        setSending(false);
      });
  };

  return (
    <div className="contact-page">

      {/* BACKGROUND VIDEO */}
      <div className="contact-video-wrapper">
        <video
          className="contact-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={MarvVideo} type="video/mp4" />
        </video>

        <div className="contact-overlay"></div>
      </div>

      {/* HERO */}
      <section className="contact-hero">

        <div className="contact-hero-content">

          <span className="contact-tag">
            NISS TECHNOLOGIES
          </span>

          <h1>
            Let’s Build
            <span> Something Amazing</span>
          </h1>

          <p>
            Tell us what you need and our team will help you
            with the right solution for your business or personal
            requirement.
          </p>

          <div className="contact-trust">

            <div>
              <FaCheckCircle />
              Professional Team
            </div>

            <div>
              <FaCheckCircle />
              Quick Response
            </div>

            <div>
              <FaCheckCircle />
              Reliable Services
            </div>

          </div>

        </div>

      </section>

      {/* MAIN CONTACT AREA */}
      <section className="contact-main">

        {/* LEFT */}
        <div className="contact-left">

          <div className="contact-heading">
            <span>GET IN TOUCH</span>
            <h2>We’re Here To Help</h2>
            <p>
              Have a project, service requirement or business
              enquiry? Select your requirement and send us a message.
            </p>
          </div>

          <div className="contact-cards">

            <div className="contact-card">

              <div className="contact-icon-box">
                <FaMapMarkerAlt />
              </div>

              <div>
                <h3>Our Office</h3>
                <p>
                  Ground Floor, 122A, New Gandhi Nagar,
                  Ghaziabad, Uttar Pradesh 201001
                </p>
              </div>

            </div>

            <div className="contact-card">

              <div className="contact-icon-box">
                <FaPhone />
              </div>

              <div>
                <h3>Call Us</h3>
                <p>+91 99584 24916</p>
              </div>

            </div>

            <div className="contact-card">

              <div className="contact-icon-box">
                <FaEnvelope />
              </div>

              <div>
                <h3>Email Us</h3>
                <p>technologiesniss@gmail.com</p>
              </div>

            </div>

            <div className="contact-card">

              <div className="contact-icon-box whatsapp-icon">
                <FaWhatsapp />
              </div>

              <div>
                <h3>WhatsApp</h3>
                <p>Quick response on WhatsApp</p>
              </div>

            </div>

          </div>

        </div>

        {/* RIGHT FORM */}
        <div className="contact-right">

          <form
            ref={form}
            className="contact-form"
            onSubmit={handleSubmit}
          >

            <div className="form-title">

              <span>CONTACT US</span>

              <h2>Send Your Enquiry</h2>

              <p>
                Select the service you are interested in.
              </p>

            </div>

            {/* NAME */}
            <div className="form-group">

              <label>Your Name</label>

              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />

            </div>

            {/* EMAIL + PHONE */}
            <div className="form-row">

              <div className="form-group">

                <label>Email Address</label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

              </div>

              <div className="form-group">

                <label>Mobile Number</label>

                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter mobile number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />

              </div>

            </div>

            {/* SERVICE DROPDOWN */}
            <div className="form-group">

              <label>Select Your Requirement</label>

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >

                <option value="">
                  -- Select Service --
                </option>

                {services.map((service, index) => (
                  <option key={index} value={service}>
                    {service}
                  </option>
                ))}

              </select>

            </div>

            {/* MESSAGE */}
            <div className="form-group">

              <label>Your Message</label>

              <textarea
                name="message"
                rows="5"
                placeholder="Tell us about your requirement..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>

            </div>

            {/* HIDDEN SUBJECT FOR EMAILJS */}
            <input
              type="hidden"
              name="subject"
              value={formData.service}
              readOnly
            />

            {/* SUBMIT */}
            <button
              type="submit"
              className="contact-submit"
              disabled={sending}
            >

              {sending ? "Sending..." : "Send Enquiry →"}

            </button>

            {/* MESSAGE */}
            {confirmationMessage && (
              <div className="confirmation-message">
                <FaCheckCircle />
                <span>{confirmationMessage}</span>
              </div>
            )}

            <div className="form-bottom">

              <FaWhatsapp />

              <span>
                Prefer WhatsApp?
                <a
                  href="https://wa.me/919958424916"
                  target="_blank"
                  rel="noreferrer"
                >
                  Chat With Us
                </a>
              </span>

            </div>

          </form>

        </div>

      </section>

      {/* SERVICES STRIP */}
      <section className="contact-services">

        <div className="contact-services-title">
          <span>OUR SERVICES</span>
          <h2>How Can We Help You?</h2>
        </div>

        <div className="contact-service-grid">

          <div>💻 Software Development</div>
          <div>📱 App Development</div>
          <div>📢 Digital Marketing</div>
          <div>🏠 Interior Services</div>
          <div>📹 CCTV Solutions</div>
          <div>🏘️ Property Services</div>
          <div>🛡️ Security Services</div>
          <div>🎪 Event Management</div>

        </div>

      </section>

      <Footer />

    </div>
  );
};

export default ContactUs;