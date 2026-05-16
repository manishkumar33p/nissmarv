// import React, { useState } from 'react';
// import NavBar from '../Navbar/Navbar';
// import './ContactUs.css'; // Import custom CSS
// import Footer from "../Footer/Footer";
// import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
// import emailjs from 'emailjs-com'; // Import EmailJS SDK

// const ContactUs = () => {
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
//  const existingData = JSON.parse(localStorage.getItem('contactData')) || [];
//          localStorage.setItem('contactData', JSON.stringify([...existingData, formData]));
// //         const existingData = JSON.parse(localStorage.getItem('contactData')) || [];
// //         localStorage.setItem('contactData', JSON.stringify([...existingData, formData]));
//         // Use EmailJS to send the email
//         emailjs.sendForm('service_3z8pkj1', 'template_zfanfmp', e.target, 'dKgJCNwJ0irTaeaZ1')
//             .then((result) => {
//                 // Success handling
//                 setConfirmationMessage('Your message has been successfully sent! Thank you for contacting us.');
//                 // Clear the form
//                 setFormData({
//                     name: '',
//                     email: '',
//                     phone:'',
//                     subject: '',
//                     message: ''
//                 });
//             }, (error) => {
//                 // Error handling
//                 setConfirmationMessage('Sorry, something went wrong. Please try again later.');
//             });
//     };

//     return (
//         <div className="contact-us-page">
//             <NavBar />
//             <div className="container mt-5">
//                 <h1 className="text-center mb-4">Contact Us</h1>
//                 <div className="contact-form-container">
//                     <form className="contact-form" onSubmit={handleSubmit}>
//                         <div className="form-group">
//                             <label htmlFor="name">Name</label>
//                             <input
//                                 type="text"
//                                 id="name"
//                                 name="name"
//                                 value={formData.name}
//                                 onChange={handleChange}
//                                 placeholder="Your Name"
//                                 required
//                             />
//                         </div>
//                         <div className="form-group">
//                             <label htmlFor="email">Email</label>
//                             <input
//                                 type="email"
//                                 id="email"
//                                 name="email"
//                                 value={formData.email}
//                                 onChange={handleChange}
//                                 placeholder="Your Email"
//                                 required
//                             />
//                         </div>

//                         <div className="form-group">
//                             <label htmlFor="phone">Mobile</label>
//                             <input
//                                 type="phone"
//                                 id="phone"
//                                 name="phone"
//                                 value={formData.phone}
//                                 onChange={handleChange}
//                                 placeholder="Your Mobile number"
//                                 required
//                             />
//                         </div>

//                         <div className="form-group">
//                             <label htmlFor="subject">Subject</label>
//                             <input
//                                 type="text"
//                                 id="subject"
//                                 name="subject"
//                                 value={formData.subject}
//                                 onChange={handleChange}
//                                 placeholder="Subject"
//                                 required
//                             />
//                         </div>
//                         <div className="form-group">
//                             <label htmlFor="message">Message</label>
//                             <textarea
//                                 id="message"
//                                 name="message"
//                                 value={formData.message}
//                                 onChange={handleChange}
//                                 placeholder="Your Message"
//                                 rows="5"
//                                 required
//                             ></textarea>
//                         </div>
//                         <button type="submit" className="btn btn-primary">Send Message</button>
//                     </form>
//                     {confirmationMessage && (
//                         <div className="confirmation-message">
//                             {confirmationMessage}
//                         </div>
//                     )}
                    


//                     <section className="product-section">
//                             <h2>Contact Us</h2>
//                             <div className="product-cards">
//                                 <div className="product-card">
//                                     <FaMapMarkerAlt className="product-card-icon" />
//                                     <h3>Address</h3>
//                                     <p>C-296, SK-1, Sector-93, Noida, Gautam Buddha Nagar, Uttar Pradesh, India</p>
//                                     {/* <a href="/get-started" className="btn">Get Started</a> */}
//                                 </div>
//                                 <div className="product-card">
//                                     <FaPhone className="product-card-icon" />
//                                     <h3>Phone</h3>
//                                     <p>+91 9958424916</p>
//                                     <p>+91 9990046841</p>
//                                     {/* <a href="/get-started" className="btn">Get Started</a> */}
//                                 </div>
//                                 <div className="product-card">
//                                     <FaEnvelope className="product-card-icon" />
//                                     <h3>Email</h3>
//                                     <p>newindiasoftwaresolutions@gmail.com</p>
//                                     {/* <a href="/get-started" className="btn">Get Started</a> */}
//                                 </div>
//                             </div>
//                         </section>
//                 </div>
//                 <Footer />
//             </div>
//         </div>
//     );
// };

// export default ContactUs;



// import React, { useState } from 'react';
// import NavBar from '../Navbar/Navbar';
// import './ContactUs.css';
// import Footer from "../Footer/Footer";
// import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
// import emailjs from '@emailjs/browser';

// import MarvVideo from "../marvv3.mp4";

// const ContactUs = () => {

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

//         emailjs
//             .sendForm(
//                 'service_3z8pkj1',
//                 'template_zfanfmp',
//                 e.target,
//                 'dKgJCNwJ0irTaeaZ1'
//             )
//             .then(() => {

//                 setConfirmationMessage(
//                     'Your message has been successfully sent!'
//                 );

//                 setFormData({
//                     name: '',
//                     email: '',
//                     phone: '',
//                     subject: '',
//                     message: ''
//                 });

//             })
//             .catch(() => {

//                 setConfirmationMessage(
//                     'Something went wrong. Please try again.'
//                 );

//             });
//     };

//     return (
//         <div className="contact-page">

//             <NavBar />

//             {/* VIDEO */}
//             <video
//                 className="contact-video"
//                 autoPlay
//                 loop
//                 muted
//             >
//                 <source src={MarvVideo} type="video/mp4" />
//             </video>

//             {/* OVERLAY */}
//             <div className="contact-overlay"></div>

//             <div className="contact-container">

//                 {/* LEFT SIDE */}
//                 <div className="contact-left">

//                     <span className="contact-tag">
//                         Contact NISS
//                     </span>

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

//                             <p>
//                                 C-296, Sector-93,
//                                 Noida, Uttar Pradesh
//                             </p>
//                         </div>

//                         <div className="contact-card">
//                             <FaPhone className="contact-icon" />
//                             <h3>Phone</h3>

//                             <p>+91 9958424916</p>
//                             <p>+91 9990046841</p>
//                         </div>

//                         <div className="contact-card">
//                             <FaEnvelope className="contact-icon" />
//                             <h3>Email</h3>

//                             <p>
//                                 newindiasoftwaresolutions@gmail.com
//                             </p>
//                         </div>

//                     </div>

//                 </div>

//                 {/* RIGHT SIDE FORM */}
//                 <div className="contact-right">

//                     <form
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



import React, { useState, useRef } from 'react';
import NavBar from '../Navbar/Navbar';
import './ContactUs.css';
import Footer from "../Footer/Footer";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

import MarvVideo from "../marvv3.mp4";

const ContactUs = () => {

    const form = useRef();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [confirmationMessage, setConfirmationMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const existingData =
            JSON.parse(localStorage.getItem('contactData')) || [];

        localStorage.setItem(
            'contactData',
            JSON.stringify([...existingData, formData])
        );

        emailjs.sendForm(
            'service_3z8pkj1',
            'template_zfanfmp',
            form.current,
            'dKgJCNwJ0irTaeaZ1'
        )
        .then(() => {

            setConfirmationMessage(
                'Your message has been successfully sent!'
            );

            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            });

        })
        .catch((error) => {

            console.log(error.text);

            setConfirmationMessage(
                'Something went wrong. Please try again.'
            );

        });
    };

    return (
        <div className="contact-page">

            <NavBar />

            <video className="contact-video" autoPlay loop muted>
                <source src={MarvVideo} type="video/mp4" />
            </video>

            <div className="contact-overlay"></div>

            <div className="contact-container">

                {/* LEFT SIDE */}
                <div className="contact-left">

                    <span className="contact-tag">Contact NISS</span>

                    <h1>
                        Let’s Build Something
                        <span> Amazing Together</span>
                    </h1>

                    <p>
                        Contact us for software, interiors,
                        plumbing, laptops, real estate,
                        and digital services.
                    </p>

                    <div className="contact-cards">

                        <div className="contact-card">
                            <FaMapMarkerAlt className="contact-icon" />
                            <h3>Address</h3>
                            <p>C-296, Sector-93, Noida, Uttar Pradesh</p>
                        </div>

                        <div className="contact-card">
                            <FaPhone className="contact-icon" />
                            <h3>Phone</h3>
                            <p>+91 9958424916</p>
                            <p>+91 9990046841</p>
                        </div>

                        <div className="contact-card">
                            <FaEnvelope className="contact-icon" />
                            <h3>Email</h3>
                            <p>newindiasoftwaresolutions@gmail.com</p>
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

                        <h2>Send Message</h2>

                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="text"
                            name="phone"
                            placeholder="Mobile Number"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                        />

                        <textarea
                            name="message"
                            rows="5"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>

                        <button type="submit">
                            Send Message
                        </button>

                        {confirmationMessage && (
                            <p className="confirmation-message">
                                {confirmationMessage}
                            </p>
                        )}

                    </form>

                </div>

            </div>

            <Footer />

        </div>
    );
};

export default ContactUs;