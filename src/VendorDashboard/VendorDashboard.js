// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   doc,
//   onSnapshot,
// } from "firebase/firestore";

// import { db } from "../firebase";
// import "./VendorDashboard.css";

// const VendorDashboard = () => {
//   const navigate = useNavigate();

//   const [vendor, setVendor] = useState(null);

//   useEffect(() => {
//     const loggedIn = localStorage.getItem("vendorLoggedIn");
//     const storedVendor = JSON.parse(
//       localStorage.getItem("vendorData")
//     );

//     if (loggedIn !== "true" || !storedVendor?.id) {
//       navigate("/vendor-login");
//       return;
//     }

//     const vendorRef = doc(
//       db,
//       "vendors",
//       storedVendor.id
//     );

//     const unsubscribe = onSnapshot(
//       vendorRef,
//       (snapshot) => {
//         if (snapshot.exists()) {
//           setVendor({
//             id: snapshot.id,
//             ...snapshot.data(),
//           });
//         }
//       }
//     );

//     return () => unsubscribe();
//   }, [navigate]);

//   const logout = () => {
//     localStorage.removeItem("vendorLoggedIn");
//     localStorage.removeItem("vendorData");

//     navigate("/vendor-login");
//   };

//   if (!vendor) {
//     return (
//       <div className="vendor-dashboard-loading">
//         Loading Vendor Dashboard...
//       </div>
//     );
//   }

//   return (
//     <div className="vendor-dashboard-page">

//       <div className="vendor-dashboard-container">

//         <header className="vendor-dashboard-header">

//           <div>
//             <span>NISS TECHNOLOGIES</span>

//             <h1>
//               Vendor Dashboard
//             </h1>

//             <p>
//               Welcome, {vendor.name}
//             </p>
//           </div>

//           <button onClick={logout}>
//             Logout
//           </button>

//         </header>

//         <section className="vendor-profile-card">

//           <div className="vendor-dashboard-avatar">
//             {vendor.name
//               ?.charAt(0)
//               .toUpperCase()}
//           </div>

//           <div>
//             <h2>{vendor.name}</h2>

//             <p>
//               Vendor ID:
//               <strong> {vendor.vendorId}</strong>
//             </p>

//             <p>
//               Category:
//               <strong> {vendor.category}</strong>
//             </p>

//             <span
//               className={`vendor-dashboard-status ${
//                 String(
//                   vendor.status || "Pending"
//                 ).toLowerCase()
//               }`}
//             >
//               {vendor.status || "Pending"}
//             </span>
//           </div>

//         </section>

//         <section className="vendor-dashboard-stats">

//           <div>
//             <span>💰</span>
//             <strong>
//               ₹
//               {Number(
//                 vendor.paymentAmount || 0
//               ).toLocaleString("en-IN")}
//             </strong>
//             <p>Total Payment</p>
//           </div>

//           <div>
//             <span>📊</span>
//             <strong>
//               {vendor.status || "Pending"}
//             </strong>
//             <p>Account Status</p>
//           </div>

//           <div>
//             <span>🛠️</span>
//             <strong>
//               {vendor.category || "-"}
//             </strong>
//             <p>Service Category</p>
//           </div>

//         </section>

//         <section className="vendor-dashboard-section">

//           <h2>Vendor Information</h2>

//           <div className="vendor-info-grid">

//             <div>
//               <small>Mobile</small>
//               <strong>
//                 {vendor.phone || "-"}
//               </strong>
//             </div>

//             <div>
//               <small>WhatsApp</small>
//               <strong>
//                 {vendor.whatsapp || "-"}
//               </strong>
//             </div>

//             <div>
//               <small>Email</small>
//               <strong>
//                 {vendor.email || "-"}
//               </strong>
//             </div>

//             <div>
//               <small>City</small>
//               <strong>
//                 {vendor.city || "-"}
//               </strong>
//             </div>

//             <div>
//               <small>Services</small>
//               <strong>
//                 {vendor.services || "-"}
//               </strong>
//             </div>

//             <div>
//               <small>Payment Status</small>
//               <strong>
//                 {vendor.paymentStatus || "Pending"}
//               </strong>
//             </div>

//           </div>

//         </section>

//         <section className="vendor-dashboard-section">

//           <h2>Payment Summary</h2>

//           <div className="vendor-payment-box">

//             <div>
//               <span>Joining Payment</span>

//               <strong>
//                 ₹
//                 {Number(
//                   vendor.paymentAmount || 0
//                 ).toLocaleString("en-IN")}
//               </strong>
//             </div>

//             <div>
//               <span>Payment Status</span>

//               <strong>
//                 {vendor.paymentStatus || "Pending"}
//               </strong>
//             </div>

//           </div>

//         </section>

//         <section className="vendor-dashboard-notice">

//           <div>💡</div>

//           <div>
//             <h3>
//               Vendor Account
//             </h3>

//             <p>
//               आपका vendor account NISS
//               Technologies के system में
//               registered है। Account status
//               और payment information यहाँ
//               दिखाई जाएगी।
//             </p>
//           </div>

//         </section>

//       </div>

//     </div>
//   );
// };

// export default VendorDashboard;


import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  collection,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";

import { db } from "../firebase";
import "./VendorDashboard.css";

const VendorDashboard = () => {
  const navigate = useNavigate();

  const [vendor, setVendor] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedVendor = JSON.parse(
      localStorage.getItem("vendor")
    );

    if (!storedVendor) {
      setLoading(false);
      return;
    }

    const vendorId =
      storedVendor.vendorId || storedVendor.id;

    if (!vendorId) {
      setLoading(false);
      return;
    }

    const q = query(
      collection(db, "vendors"),
      where("vendorId", "==", vendorId)
    );

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        if (!snapshot.empty) {
          const data = snapshot.docs[0].data();

          setVendor({
            id: snapshot.docs[0].id,
            ...data,
          });
        }

        setLoading(false);
      },
      (error) => {
        console.error(
          "Vendor dashboard error:",
          error
        );

        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  const logout = () => {
    localStorage.removeItem("vendor");
    localStorage.removeItem("vendorLoggedIn");

    navigate("/vendor-login");
  };

  if (loading) {
    return (
      <div className="vendor-dashboard-loading">
        Loading Vendor Dashboard...
      </div>
    );
  }

  if (!vendor) {
    return (
      <div className="vendor-dashboard-empty">
        <h2>Vendor Account Not Found</h2>

        <p>
          Please login with your vendor account.
        </p>

        <button
          onClick={() =>
            navigate("/vendor-login")
          }
        >
          Vendor Login
        </button>
      </div>
    );
  }

  const joiningPayment =
    Number(vendor.paymentAmount || 0);

  const totalEarnings =
    Number(vendor.totalEarnings || 0);

  const totalPayments =
    Number(vendor.totalPayments || joiningPayment);

  const joinDate = vendor.createdAt?.toDate
    ? vendor.createdAt
        .toDate()
        .toLocaleDateString("en-IN")
    : "-";

  return (
    <div className="vendor-dashboard-page">

      <div className="vendor-dashboard-container">

        {/* HEADER */}

        <div className="vendor-dashboard-header">

          <div>
            <span>
              NISS TECHNOLOGIES
            </span>

            <h1>
              Vendor Dashboard
            </h1>

            <p>
              Welcome back, {vendor.name}
            </p>
          </div>

          <button
            className="vendor-logout-btn"
            onClick={logout}
          >
            Logout
          </button>

        </div>

        {/* PROFILE */}

        <section className="vendor-profile-card">

          <div className="vendor-profile-avatar">
            {vendor.name
              ?.charAt(0)
              .toUpperCase()}
          </div>

          <div className="vendor-profile-info">

            <h2>
              {vendor.name}
            </h2>

            <p>
              Vendor ID:
              <strong>
                {vendor.vendorId || "-"}
              </strong>
            </p>

            <p>
              Category:
              <strong>
                {vendor.category || "-"}
              </strong>
            </p>

            <p>
              Joined:
              <strong>
                {joinDate}
              </strong>
            </p>

          </div>

          <div
            className={`vendor-main-status ${
              String(
                vendor.status || "Pending"
              ).toLowerCase()
            }`}
          >
            {vendor.status || "Pending"}
          </div>

        </section>

        {/* STATS */}

        <section className="vendor-dashboard-stats">

          <div className="vendor-dashboard-stat">
            <span>💰</span>

            <strong>
              ₹
              {totalEarnings.toLocaleString(
                "en-IN"
              )}
            </strong>

            <p>
              Total Earnings
            </p>
          </div>

          <div className="vendor-dashboard-stat">
            <span>💳</span>

            <strong>
              ₹
              {joiningPayment.toLocaleString(
                "en-IN"
              )}
            </strong>

            <p>
              Joining Payment
            </p>
          </div>

          <div className="vendor-dashboard-stat">
            <span>📊</span>

            <strong>
              ₹
              {totalPayments.toLocaleString(
                "en-IN"
              )}
            </strong>

            <p>
              Total Payments
            </p>
          </div>

          <div className="vendor-dashboard-stat">
            <span>📅</span>

            <strong>
              {joinDate}
            </strong>

            <p>
              Joined Company
            </p>
          </div>

        </section>

        {/* ACCOUNT DETAILS */}

        <section className="vendor-dashboard-section">

          <div className="vendor-section-title">
            <span>
              ACCOUNT INFORMATION
            </span>

            <h2>
              My Profile
            </h2>
          </div>

          <div className="vendor-info-grid">

            <div>
              <small>
                Vendor Name
              </small>

              <strong>
                {vendor.name || "-"}
              </strong>
            </div>

            <div>
              <small>
                Vendor ID
              </small>

              <strong>
                {vendor.vendorId || "-"}
              </strong>
            </div>

            <div>
              <small>
                Mobile Number
              </small>

              <strong>
                {vendor.phone || "-"}
              </strong>
            </div>

            <div>
              <small>
                WhatsApp
              </small>

              <strong>
                {vendor.whatsapp || "-"}
              </strong>
            </div>

            <div>
              <small>
                Email
              </small>

              <strong>
                {vendor.email || "-"}
              </strong>
            </div>

            <div>
              <small>
                City
              </small>

              <strong>
                {vendor.city || "-"}
              </strong>
            </div>

            <div>
              <small>
                Category
              </small>

              <strong>
                {vendor.category || "-"}
              </strong>
            </div>

            <div>
              <small>
                Services
              </small>

              <strong>
                {vendor.services || "-"}
              </strong>
            </div>

          </div>

        </section>

        {/* PAYMENT HISTORY */}

        <section className="vendor-dashboard-section">

          <div className="vendor-section-title">
            <span>
              FINANCIAL RECORDS
            </span>

            <h2>
              Payment History
            </h2>
          </div>

          <div className="payment-history">

            <div className="payment-row">

              <div>
                <strong>
                  Vendor Joining Payment
                </strong>

                <small>
                  {joinDate}
                </small>
              </div>

              <strong className="payment-success">
                ₹
                {joiningPayment.toLocaleString(
                  "en-IN"
                )}
              </strong>

              <span>
                {vendor.paymentStatus ||
                  "Pending"}
              </span>

            </div>

            {totalPayments === 0 && (
              <div className="no-payment">
                No additional payment records yet.
              </div>
            )}

          </div>

        </section>

        {/* MESSAGES */}

        <section className="vendor-dashboard-section">

          <div className="vendor-section-title">
            <span>
              COMMUNICATION
            </span>

            <h2>
              Messages
            </h2>
          </div>

          <div className="vendor-message-card">

            <div className="message-icon">
              💬
            </div>

            <div>
              <h3>
                NISS Technologies
              </h3>

              <p>
                Welcome to NISS Technologies.
                Your vendor account is active
                and your profile has been
                successfully registered.
              </p>

              <small>
                Account Registration
              </small>
            </div>

          </div>

        </section>

        {/* COMPANY JOINING */}

        <section className="vendor-joining-card">

          <div className="joining-icon">
            🎉
          </div>

          <div>
            <span>
              MEMBER SINCE
            </span>

            <h2>
              {joinDate}
            </h2>

            <p>
              Thank you for joining
              NISS Technologies as a vendor.
            </p>
          </div>

        </section>

      </div>

    </div>
  );
};

export default VendorDashboard;
