// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./FieldStaffLogin.css";

// const FieldStaffLogin = () => {
//   const navigate = useNavigate();

//   const [staffId, setStaffId] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleLogin = (e) => {
//     e.preventDefault();

//     // DEMO LOGIN
//     if (
//       staffId.trim().toUpperCase() === "STAFF001" &&
//       password === "niss123"
//     ) {
//       localStorage.setItem("fieldStaffLoggedIn", "true");
//       localStorage.setItem(
//         "fieldStaff",
//         JSON.stringify({
//           staffId: "STAFF001",
//           name: "Field Staff",
//           phone: "",
//           role: "Field Staff",
//         })
//       );

//       navigate("/field-staff-dashboard");
//     } else {
//       setError("Invalid Staff ID or Password ❌");
//     }
//   };

//   return (
//     <div className="field-login-page">
//       <div className="field-login-card">

//         <div className="field-login-icon">
//           👨‍💼
//         </div>

//         <span className="field-login-label">
//           NISS TECHNOLOGIES
//         </span>

//         <h1>Field Staff Login</h1>

//         <p className="field-login-subtitle">
//           Login to manage vendors and field activities
//         </p>

//         <form onSubmit={handleLogin}>

//           <div className="field-form-group">
//             <label>Staff ID</label>

//             <input
//               type="text"
//               placeholder="Enter Staff ID"
//               value={staffId}
//               onChange={(e) => setStaffId(e.target.value)}
//               required
//             />
//           </div>

//           <div className="field-form-group">
//             <label>Password</label>

//             <input
//               type="password"
//               placeholder="Enter Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>

//           {error && (
//             <div className="field-login-error">
//               {error}
//             </div>
//           )}

//           <button
//             type="submit"
//             className="field-login-btn"
//           >
//             Login to Field Panel →
//           </button>

//         </form>

//         <div className="field-demo-info">
//           <strong>Demo Login</strong>
//           <br />
//           Staff ID: STAFF001
//           <br />
//           Password: niss123
//         </div>

//       </div>
//     </div>
//   );
// };

// export default FieldStaffLogin;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FieldStaffLogin.css";

const FieldStaffLogin = () => {
  const navigate = useNavigate();

  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    setError("");

    // फिलहाल testing login
    if (mobile === "9999999999" && password === "field123") {
      localStorage.setItem(
        "niss_field_staff",
        JSON.stringify({
          name: "Field Staff",
          phone: mobile,
          role: "field_staff",
        })
      );

      navigate("/field-staff-dashboard");
    } else {
      setError("Invalid mobile number or password.");
    }
  };

  return (
    <div className="field-login-page">
      <div className="field-login-card">

        <div className="field-login-header">
          <span>NISS TECHNOLOGIES</span>

          <h1>Field Staff Login</h1>

          <p>
            Login to manage vendors and field operations.
          </p>
        </div>

        <form onSubmit={handleLogin}>

          <div className="field-form-group">
            <label>Mobile Number</label>

            <input
              type="tel"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="Enter mobile number"
              maxLength="10"
              required
            />
          </div>

          <div className="field-form-group">
            <label>Password</label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
            />
          </div>

          {error && (
            <div className="field-login-error">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="field-login-button"
          >
            Login to Dashboard
          </button>

        </form>

        <div className="field-login-demo">
          <strong>Testing Login</strong>
          <p>Mobile: 9999999999</p>
          <p>Password: field123</p>
        </div>

      </div>
    </div>
  );
};

export default FieldStaffLogin;