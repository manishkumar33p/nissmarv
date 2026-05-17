// // src/components/Login/Login.jsx

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Login.css'; // Import custom CSS if needed

// const Login = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');

//     const navigate = useNavigate();

//     const handleLogin = (e) => {
//         e.preventDefault();

//         // Validate username and password
//         if ( password === 'niss123') {
//             // Redirect to the dashboard
//             navigate('/dashboard');
//         } else {
//             // Show error message
//             setError('Invalid username or password');
//         }
//     };

//     return (
//         <div className="login-page">
         
//             <form className="login-form" onSubmit={handleLogin}>
//             <h1 >Login</h1>
//                 {/* <div className="form-group">
//                     <label htmlFor="username">Username</label>
//                     <input
//                         type="text"
//                         id="username"
//                         value={username}
//                         onChange={(e) => setUsername(e.target.value)}
//                         placeholder="Enter your username"
//                         required
//                     />
//                 </div> */}
//                 <div className="form-group">
//                     <label htmlFor="password">Password</label>
//                     <input
//                         type="password"
//                         id="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         placeholder="Enter your password"
//                         required
//                     />
//                 </div>
//                 {error && <p className="error-message">{error}</p>}
//                 <button type="submit" className="btn btn-primary">Login</button>
//             </form>
//         </div>
//     );
// };

// export default Login;



// src/components/Login/Login.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


import './Login.css';
import Navbar from '../Navbar/Navbar';

const Login = () => {

  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  // LOGIN FUNCTION
  const handleLogin = (e) => {

    e.preventDefault();

    // PASSWORD CHECK
    if (password === 'niss123') {

      localStorage.setItem("isLoggedIn", true);

      navigate('/dashboard');

    } else {

      setError('Invalid Password ❌');

    }
  };

  return (

    <div className="login-page">
<Navbar></Navbar>
      {/* VIDEO BACKGROUND */}
      <video
        className="login-video"
        autoPlay
        muted
        loop
      >
        <source
          src="/videos/marvv96.mp4"
          type="video/mp4"
        />
      </video>

      {/* DARK OVERLAY */}
      <div className="login-overlay"></div>

      {/* MAIN CONTAINER */}
      <div className="login-container">

        {/* LEFT SIDE */}
        <div className="login-left">

          <span className="login-tag">
            NISS Admin Panel
          </span>

          <h1>
            Welcome Back To
            <span> NISS Dashboard</span>
          </h1>

          <p>
            Manage projects, clients,
            business data, analytics
            and reports securely from
            one smart admin dashboard.
          </p>

          {/* STATS */}
          <div className="login-stats">

            <div className="login-stat-card">
              <h2>500+</h2>
              <p>Projects</p>
            </div>

            <div className="login-stat-card">
              <h2>100+</h2>
              <p>Clients</p>
            </div>

            <div className="login-stat-card">
              <h2>24/7</h2>
              <p>Security</p>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="login-right">

          <form
            className="login-form"
            onSubmit={handleLogin}
          >

            <h2>Admin Login</h2>

            <p className="login-subtitle">
              Enter secure password to continue
            </p>

            {/* PASSWORD */}
            <div className="form-group">


              <input
                type="password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                placeholder="Enter Password"
                required
              />

            </div>

            {/* ERROR */}
            {error && (
              <p className="error-message">
                {error}
              </p>
            )}

            {/* BUTTON */}
            <button
              type="submit"
              className="login-btn"
            >
              Login Dashboard
            </button>

          </form>

        </div>

      </div>

    </div>
  );
};

export default Login;