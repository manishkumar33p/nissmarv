

// // import React, { useState, useEffect } from 'react';
// // import * as XLSX from 'xlsx';
// // import NavBar from '../Navbar/Navbar';
// // import Footer from "../Footer/Footer";
// // import './Dashboard.css';

// // const Dashboard = () => {

// //   const [dataEntryData, setDataEntryData] = useState([]);
// //   const [contactData, setContactData] = useState([]);

// //   // LOAD DATA
// //   useEffect(() => {

// //     const storedDataEntryData =
// //       JSON.parse(localStorage.getItem('dataEntryData')) || [];

// //     const storedContactData =
// //       JSON.parse(localStorage.getItem('contactData')) || [];

// //     setDataEntryData(storedDataEntryData);
// //     setContactData(storedContactData);

// //   }, []);

// //   // DOWNLOAD EXCEL
// //   const downloadExcel = (data, fileName) => {

// //     const wb = XLSX.utils.book_new();

// //     const ws = XLSX.utils.json_to_sheet(data);

// //     XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

// //     XLSX.writeFile(wb, fileName);
// //   };

// //   // DOWNLOAD JSON
// //   const downloadJSON = (data, fileName) => {

// //     const blob = new Blob(
// //       [JSON.stringify(data, null, 2)],
// //       { type: 'application/json' }
// //     );

// //     const url = URL.createObjectURL(blob);

// //     const a = document.createElement('a');

// //     a.href = url;
// //     a.download = fileName;

// //     a.click();

// //     URL.revokeObjectURL(url);
// //   };

// //   // DELETE CONTACT RECORDS
// //   const deleteAllContactRecords = () => {

// //     localStorage.removeItem('contactData');

// //     setContactData([]);
// //   };

// //   // DELETE PROJECT RECORDS
// //   const deleteAllProjectRecords = () => {

// //     localStorage.removeItem('dataEntryData');

// //     setDataEntryData([]);
// //   };

// //   return (

// //     <div className="dashboard-page">

// //       <NavBar />

// //       {/* VIDEO */}
// //       <video
// //         className="dashboard-video"
// //         autoPlay
// //         muted
// //         loop
// //       >
// //         <source src="/videos/marvv99.mp4" type="video/mp4" />
// //       </video>

// //       {/* OVERLAY */}
// //       <div className="dashboard-overlay"></div>

// //       {/* MAIN */}
// //       <div className="dashboard-container">

// //         {/* HEADER */}
// //         <div className="dashboard-header">

// //           <span className="dashboard-tag">
// //             NISS ADMIN PANEL
// //           </span>

// //           <h1>
// //             Smart Business
// //             <span> Dashboard</span>
// //           </h1>

// //           <p>
// //             Manage all contact records,
// //             projects, clients, reports and
// //             downloadable files from one place.
// //           </p>

// //         </div>

// //         {/* STATS */}
// //         <div className="dashboard-stats">

// //           <div className="dashboard-stat-card">
// //             <h2>{contactData.length}</h2>
// //             <p>Contact Records</p>
// //           </div>

// //           <div className="dashboard-stat-card">
// //             <h2>{dataEntryData.length}</h2>
// //             <p>Project Records</p>
// //           </div>

// //           <div className="dashboard-stat-card">
// //             <h2>24/7</h2>
// //             <p>System Access</p>
// //           </div>

// //         </div>

// //         {/* CONTACT SECTION */}
// //         <div className="dashboard-section">

// //           <div className="section-header">

// //             <h2>Contact Us Records</h2>

// //             <div className="dashboard-buttons">

// //               <button
// //                 className="download-btn"
// //                 onClick={() =>
// //                   downloadJSON(
// //                     contactData,
// //                     'contact_records.json'
// //                   )
// //                 }
// //               >
// //                 Download JSON
// //               </button>

// //               <button
// //                 className="delete-btn"
// //                 onClick={deleteAllContactRecords}
// //               >
// //                 Delete All
// //               </button>

// //             </div>

// //           </div>

// //           <div className="table-wrapper">

// //             <table className="dashboard-table">

// //               <thead>

// //                 <tr>
// //                   <th>Name</th>
// //                   <th>Email</th>
// //                   <th>Subject</th>
// //                   <th>Message</th>
// //                 </tr>

// //               </thead>

// //               <tbody>

// //                 {contactData.length > 0 ? (

// //                   contactData.map((item, index) => (

// //                     <tr key={index}>

// //                       <td>{item.name}</td>
// //                       <td>{item.email}</td>
// //                       <td>{item.subject}</td>
// //                       <td>{item.message}</td>

// //                     </tr>

// //                   ))

// //                 ) : (

// //                   <tr>
// //                     <td colSpan="4">
// //                       No Contact Records Found
// //                     </td>
// //                   </tr>

// //                 )}

// //               </tbody>

// //             </table>

// //           </div>

// //         </div>

// //         {/* PROJECT SECTION */}
// //         <div className="dashboard-section">

// //           <div className="section-header">

// //             <h2>Project Records</h2>

// //             <div className="dashboard-buttons">

// //               <button
// //                 className="excel-btn"
// //                 onClick={() =>
// //                   downloadExcel(
// //                     dataEntryData,
// //                     'project_records.xlsx'
// //                   )
// //                 }
// //               >
// //                 Download Excel
// //               </button>

// //               <button
// //                 className="delete-btn"
// //                 onClick={deleteAllProjectRecords}
// //               >
// //                 Delete All
// //               </button>

// //             </div>

// //           </div>

// //           <div className="table-wrapper">

// //             <table className="dashboard-table">

// //               <thead>

// //                 <tr>

// //                   <th>Organization</th>
// //                   <th>Project Type</th>
// //                   <th>Time</th>
// //                   <th>Client</th>
// //                   <th>Description</th>
// //                   <th>Start</th>
// //                   <th>End</th>
// //                   <th>Status</th>
// //                   <th>Assigned</th>
// //                   <th>Budget</th>

// //                 </tr>

// //               </thead>

// //               <tbody>

// //                 {dataEntryData.length > 0 ? (

// //                   dataEntryData.map((item, index) => (

// //                     <tr key={index}>

// //                       <td>{item.organizationName}</td>
// //                       <td>{item.projectType}</td>
// //                       <td>{item.timeIntervals}</td>
// //                       <td>{item.clientName}</td>
// //                       <td>{item.projectDescription}</td>
// //                       <td>{item.startDate}</td>
// //                       <td>{item.endDate}</td>
// //                       <td>{item.status}</td>
// //                       <td>{item.assignedTo}</td>
// //                       <td>₹ {item.budget}</td>

// //                     </tr>

// //                   ))

// //                 ) : (

// //                   <tr>
// //                     <td colSpan="10">
// //                       No Project Records Found
// //                     </td>
// //                   </tr>

// //                 )}

// //               </tbody>

// //             </table>

// //           </div>

// //         </div>

// //       </div>

// //       <Footer />

// //     </div>
// //   );
// // };

// // export default Dashboard;



// import React, { useState, useEffect } from "react";
// import * as XLSX from "xlsx";
// import NavBar from "../Navbar/Navbar";
// import Footer from "../Footer/Footer";
// import "./Dashboard.css";

// const Dashboard = () => {

//   const [dataEntryData, setDataEntryData] = useState([]);
//   const [contactData, setContactData] = useState([]);
//   const [customerEnquiries, setCustomerEnquiries] = useState([]);

//   // ==========================================
//   // LOAD ALL DATA
//   // ==========================================

//   useEffect(() => {

//     const storedDataEntryData =
//       JSON.parse(
//         localStorage.getItem("dataEntryData")
//       ) || [];

//     const storedContactData =
//       JSON.parse(
//         localStorage.getItem("contactData")
//       ) || [];

//     const storedCustomerEnquiries =
//       JSON.parse(
//         localStorage.getItem("nissEnquiries")
//       ) || [];

//     setDataEntryData(storedDataEntryData);
//     setContactData(storedContactData);
//     setCustomerEnquiries(storedCustomerEnquiries);

//   }, []);


//   // ==========================================
//   // DOWNLOAD EXCEL
//   // ==========================================

//   const downloadExcel = (data, fileName) => {

//     if (!data || data.length === 0) {

//       alert("No data available to download.");

//       return;
//     }

//     const wb = XLSX.utils.book_new();

//     const ws = XLSX.utils.json_to_sheet(data);

//     XLSX.utils.book_append_sheet(
//       wb,
//       ws,
//       "Sheet1"
//     );

//     XLSX.writeFile(
//       wb,
//       fileName
//     );
//   };


//   // ==========================================
//   // DOWNLOAD JSON
//   // ==========================================

//   const downloadJSON = (
//     data,
//     fileName
//   ) => {

//     if (!data || data.length === 0) {

//       alert("No data available to download.");

//       return;
//     }

//     const blob = new Blob(
//       [
//         JSON.stringify(
//           data,
//           null,
//           2
//         )
//       ],
//       {
//         type: "application/json"
//       }
//     );

//     const url =
//       URL.createObjectURL(blob);

//     const a =
//       document.createElement("a");

//     a.href = url;
//     a.download = fileName;

//     document.body.appendChild(a);

//     a.click();

//     document.body.removeChild(a);

//     URL.revokeObjectURL(url);
//   };


//   // ==========================================
//   // DELETE CONTACT RECORDS
//   // ==========================================

//   const deleteAllContactRecords = () => {

//     const confirmDelete =
//       window.confirm(
//         "Delete all contact records?"
//       );

//     if (!confirmDelete) return;

//     localStorage.removeItem(
//       "contactData"
//     );

//     setContactData([]);
//   };


//   // ==========================================
//   // DELETE PROJECT RECORDS
//   // ==========================================

//   const deleteAllProjectRecords = () => {

//     const confirmDelete =
//       window.confirm(
//         "Delete all project records?"
//       );

//     if (!confirmDelete) return;

//     localStorage.removeItem(
//       "dataEntryData"
//     );

//     setDataEntryData([]);
//   };


//   // ==========================================
//   // DELETE CUSTOMER ENQUIRIES
//   // ==========================================

//   const deleteAllCustomerEnquiries = () => {

//     const confirmDelete =
//       window.confirm(
//         "Delete all customer enquiries?"
//       );

//     if (!confirmDelete) return;

//     localStorage.removeItem(
//       "nissEnquiries"
//     );

//     setCustomerEnquiries([]);
//   };


//   // ==========================================
//   // REFRESH CUSTOMER DATA
//   // ==========================================

//   const refreshCustomerEnquiries = () => {

//     const storedCustomerEnquiries =
//       JSON.parse(
//         localStorage.getItem("nissEnquiries")
//       ) || [];

//     setCustomerEnquiries(
//       storedCustomerEnquiries
//     );
//   };


//   return (

//     <div className="dashboard-page">

//       <NavBar />


//       {/* ==========================================
//           VIDEO
//       ========================================== */}

//       <video
//         className="dashboard-video"
//         autoPlay
//         muted
//         loop
//       >

//         <source
//           src="/videos/marvv99.mp4"
//           type="video/mp4"
//         />

//       </video>


//       {/* ==========================================
//           OVERLAY
//       ========================================== */}

//       <div className="dashboard-overlay"></div>


//       {/* ==========================================
//           MAIN CONTAINER
//       ========================================== */}

//       <div className="dashboard-container">


//         {/* ==========================================
//             HEADER
//         ========================================== */}

//         <div className="dashboard-header">

//           <span className="dashboard-tag">
//             NISS ADMIN PANEL
//           </span>

//           <h1>
//             Smart Business
//             <span> Dashboard</span>
//           </h1>

//           <p>
//             Manage all contact records,
//             customer enquiries, projects,
//             clients and downloadable files
//             from one place.
//           </p>

//         </div>


//         {/* ==========================================
//             STATS
//         ========================================== */}

//         <div className="dashboard-stats">


//           <div className="dashboard-stat-card">

//             <h2>
//               {contactData.length}
//             </h2>

//             <p>
//               Contact Records
//             </p>

//           </div>


//           <div className="dashboard-stat-card">

//             <h2>
//               {dataEntryData.length}
//             </h2>

//             <p>
//               Project Records
//             </p>

//           </div>


//           <div className="dashboard-stat-card">

//             <h2>
//               {customerEnquiries.length}
//             </h2>

//             <p>
//               Customer Enquiries
//             </p>

//           </div>


//           <div className="dashboard-stat-card">

//             <h2>
//               24/7
//             </h2>

//             <p>
//               System Access
//             </p>

//           </div>


//         </div>


//         {/* ==========================================
//             CUSTOMER ENQUIRIES
//         ========================================== */}

//         <div className="dashboard-section">


//           <div className="section-header">

//             <h2>
//               Customer Enquiries
//             </h2>


//             <div className="dashboard-buttons">

//               <button
//                 className="download-btn"
//                 onClick={() =>
//                   downloadExcel(
//                     customerEnquiries,
//                     "customer_enquiries.xlsx"
//                   )
//                 }
//               >
//                 Download Excel
//               </button>


//               <button
//                 className="download-btn"
//                 onClick={() =>
//                   downloadJSON(
//                     customerEnquiries,
//                     "customer_enquiries.json"
//                   )
//                 }
//               >
//                 Download JSON
//               </button>


//               <button
//                 className="refresh-btn"
//                 onClick={
//                   refreshCustomerEnquiries
//                 }
//               >
//                 Refresh
//               </button>


//               <button
//                 className="delete-btn"
//                 onClick={
//                   deleteAllCustomerEnquiries
//                 }
//               >
//                 Delete All
//               </button>

//             </div>

//           </div>


//           <div className="table-wrapper">

//             <table className="dashboard-table">

//               <thead>

//                 <tr>

//                   <th>Name</th>

//                   <th>Phone</th>

//                   <th>Email</th>

//                   <th>Service</th>

//                   <th>Address</th>

//                   <th>Requirement</th>

//                   <th>Budget</th>

//                   <th>Date</th>

//                   <th>Time</th>

//                   <th>Submitted</th>

//                 </tr>

//               </thead>


//               <tbody>

//                 {customerEnquiries.length > 0 ? (

//                   customerEnquiries.map(
//                     (item, index) => (

//                       <tr key={item.id || index}>

//                         <td>
//                           {item.name}
//                         </td>

//                         <td>
//                           {item.phone}
//                         </td>

//                         <td>
//                           {item.email}
//                         </td>

//                         <td>
//                           {item.service}
//                         </td>

//                         <td>
//                           {item.address}
//                         </td>

//                         <td>
//                           {item.requirement}
//                         </td>

//                         <td>
//                           {item.budget || "-"}
//                         </td>

//                         <td>
//                           {item.date || "-"}
//                         </td>

//                         <td>
//                           {item.time || "-"}
//                         </td>

//                         <td>
//                           {item.submittedAt
//                             ? new Date(
//                                 item.submittedAt
//                               ).toLocaleString()
//                             : "-"}
//                         </td>

//                       </tr>

//                     )
//                   )

//                 ) : (

//                   <tr>

//                     <td colSpan="10">
//                       No Customer Enquiries Found
//                     </td>

//                   </tr>

//                 )}

//               </tbody>

//             </table>

//           </div>

//         </div>


//         {/* ==========================================
//             CONTACT SECTION
//         ========================================== */}

//         <div className="dashboard-section">

//           <div className="section-header">

//             <h2>
//               Contact Us Records
//             </h2>

//             <div className="dashboard-buttons">

//               <button
//                 className="download-btn"
//                 onClick={() =>
//                   downloadJSON(
//                     contactData,
//                     "contact_records.json"
//                   )
//                 }
//               >
//                 Download JSON
//               </button>

//               <button
//                 className="delete-btn"
//                 onClick={
//                   deleteAllContactRecords
//                 }
//               >
//                 Delete All
//               </button>

//             </div>

//           </div>


//           <div className="table-wrapper">

//             <table className="dashboard-table">

//               <thead>

//                 <tr>

//                   <th>Name</th>

//                   <th>Email</th>

//                   <th>Subject</th>

//                   <th>Message</th>

//                 </tr>

//               </thead>


//               <tbody>

//                 {contactData.length > 0 ? (

//                   contactData.map(
//                     (item, index) => (

//                       <tr key={index}>

//                         <td>
//                           {item.name}
//                         </td>

//                         <td>
//                           {item.email}
//                         </td>

//                         <td>
//                           {item.subject}
//                         </td>

//                         <td>
//                           {item.message}
//                         </td>

//                       </tr>

//                     )
//                   )

//                 ) : (

//                   <tr>

//                     <td colSpan="4">
//                       No Contact Records Found
//                     </td>

//                   </tr>

//                 )}

//               </tbody>

//             </table>

//           </div>

//         </div>


//         {/* ==========================================
//             PROJECT SECTION
//         ========================================== */}

//         <div className="dashboard-section">

//           <div className="section-header">

//             <h2>
//               Project Records
//             </h2>

//             <div className="dashboard-buttons">

//               <button
//                 className="excel-btn"
//                 onClick={() =>
//                   downloadExcel(
//                     dataEntryData,
//                     "project_records.xlsx"
//                   )
//                 }
//               >
//                 Download Excel
//               </button>

//               <button
//                 className="delete-btn"
//                 onClick={
//                   deleteAllProjectRecords
//                 }
//               >
//                 Delete All
//               </button>

//             </div>

//           </div>


//           <div className="table-wrapper">

//             <table className="dashboard-table">

//               <thead>

//                 <tr>

//                   <th>
//                     Organization
//                   </th>

//                   <th>
//                     Project Type
//                   </th>

//                   <th>
//                     Time
//                   </th>

//                   <th>
//                     Client
//                   </th>

//                   <th>
//                     Description
//                   </th>

//                   <th>
//                     Start
//                   </th>

//                   <th>
//                     End
//                   </th>

//                   <th>
//                     Status
//                   </th>

//                   <th>
//                     Assigned
//                   </th>

//                   <th>
//                     Budget
//                   </th>

//                 </tr>

//               </thead>


//               <tbody>

//                 {dataEntryData.length > 0 ? (

//                   dataEntryData.map(
//                     (item, index) => (

//                       <tr key={index}>

//                         <td>
//                           {item.organizationName}
//                         </td>

//                         <td>
//                           {item.projectType}
//                         </td>

//                         <td>
//                           {item.timeIntervals}
//                         </td>

//                         <td>
//                           {item.clientName}
//                         </td>

//                         <td>
//                           {item.projectDescription}
//                         </td>

//                         <td>
//                           {item.startDate}
//                         </td>

//                         <td>
//                           {item.endDate}
//                         </td>

//                         <td>
//                           {item.status}
//                         </td>

//                         <td>
//                           {item.assignedTo}
//                         </td>

//                         <td>
//                           ₹ {item.budget}
//                         </td>

//                       </tr>

//                     )
//                   )

//                 ) : (

//                   <tr>

//                     <td colSpan="10">
//                       No Project Records Found
//                     </td>

//                   </tr>

//                 )}

//               </tbody>

//             </table>

//           </div>

//         </div>


//       </div>


//       <Footer />

//     </div>

//   );

// };

// export default Dashboard;


import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx";
import NavBar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./Dashboard.css";

const Dashboard = () => {

  const [dataEntryData, setDataEntryData] =
    useState([]);

  const [contactData, setContactData] =
    useState([]);

  const [inquiries, setInquiries] =
    useState([]);


  useEffect(() => {

    loadAllData();

    const handleStorage = () => {
      loadAllData();
    };

    window.addEventListener(
      "storage",
      handleStorage
    );

    return () => {

      window.removeEventListener(
        "storage",
        handleStorage
      );

    };

  }, []);


  const loadAllData = () => {

    const storedDataEntryData =
      JSON.parse(
        localStorage.getItem(
          "dataEntryData"
        )
      ) || [];


    const storedContactData =
      JSON.parse(
        localStorage.getItem(
          "contactData"
        )
      ) || [];


    const storedInquiries =
      JSON.parse(
        localStorage.getItem(
          "nissInquiries"
        )
      ) || [];


    setDataEntryData(
      storedDataEntryData
    );

    setContactData(
      storedContactData
    );

    setInquiries(
      storedInquiries
    );

  };


  /* =====================================
     DOWNLOAD EXCEL
  ===================================== */

  const downloadExcel = (
    data,
    fileName
  ) => {

    if (!data || data.length === 0) {

      alert(
        "No data available."
      );

      return;

    }


    const wb =
      XLSX.utils.book_new();


    const ws =
      XLSX.utils.json_to_sheet(
        data
      );


    XLSX.utils.book_append_sheet(
      wb,
      ws,
      "Sheet1"
    );


    XLSX.writeFile(
      wb,
      fileName
    );

  };


  /* =====================================
     INQUIRY EXCEL
  ===================================== */

  const downloadInquiryExcel = () => {

    if (inquiries.length === 0) {

      alert(
        "No customer inquiries available."
      );

      return;

    }


    const excelData =
      inquiries.map(
        (item) => ({

          "Order ID":
            item.orderId,

          "Date":
            item.date,

          "Customer Name":
            item.customerName,

          "Phone":
            item.phone,

          "Email":
            item.email,

          "Address":
            `${item.address.street}, ${
              item.address.addressLine2
            }, ${
              item.address.city
            }, ${
              item.address.district
            }, ${
              item.address.state
            }, ${
              item.address.country
            } - ${
              item.address.pincode
            }`,

          "Items":
            item.items
              .map(
                (i) =>
                  `${i.name} - ₹${i.price}`
              )
              .join(", "),

          "Total":
            `₹${item.total}`

        })
      );


    downloadExcel(
      excelData,
      "niss_customer_inquiries.xlsx"
    );

  };


  /* =====================================
     DELETE INQUIRIES
  ===================================== */

  const deleteAllInquiries = () => {

    const confirmDelete =
      window.confirm(
        "Delete all customer inquiries?"
      );


    if (!confirmDelete) return;


    localStorage.removeItem(
      "nissInquiries"
    );

    setInquiries([]);

  };


  /* =====================================
     DELETE CONTACT
  ===================================== */

  const deleteAllContactRecords = () => {

    localStorage.removeItem(
      "contactData"
    );

    setContactData([]);

  };


  /* =====================================
     DELETE PROJECT
  ===================================== */

  const deleteAllProjectRecords = () => {

    localStorage.removeItem(
      "dataEntryData"
    );

    setDataEntryData([]);

  };


  return (

    <div className="dashboard-page">

      <NavBar />


      {/* VIDEO */}

      <video
        className="dashboard-video"
        autoPlay
        muted
        loop
      >

        <source
          src="/videos/marvv99.mp4"
          type="video/mp4"
        />

      </video>


      <div className="dashboard-overlay"></div>


      <div className="dashboard-container">


        {/* HEADER */}

        <div className="dashboard-header">

          <span className="dashboard-tag">
            NISS ADMIN PANEL
          </span>

          <h1>
            Smart Business
            <span> Dashboard</span>
          </h1>

          <p>
            Manage customer inquiries,
            contacts, projects and
            downloadable records.
          </p>

        </div>


        {/* STATS */}

        <div className="dashboard-stats">

          <div className="dashboard-stat-card">

            <h2>
              {inquiries.length}
            </h2>

            <p>
              Customer Inquiries
            </p>

          </div>


          <div className="dashboard-stat-card">

            <h2>
              {contactData.length}
            </h2>

            <p>
              Contact Records
            </p>

          </div>


          <div className="dashboard-stat-card">

            <h2>
              {dataEntryData.length}
            </h2>

            <p>
              Project Records
            </p>

          </div>

        </div>


        {/* =====================================
            CUSTOMER INQUIRIES
        ===================================== */}

        <div className="dashboard-section">

          <div className="section-header">

            <h2>
              Customer Inquiries
            </h2>


            <div className="dashboard-buttons">

              <button
                className="excel-btn"
                onClick={
                  downloadInquiryExcel
                }
              >
                Download Excel
              </button>


              <button
                className="delete-btn"
                onClick={
                  deleteAllInquiries
                }
              >
                Delete All
              </button>

            </div>

          </div>


          <div className="table-wrapper">

            <table className="dashboard-table">

              <thead>

                <tr>

                  <th>
                    Order ID
                  </th>

                  <th>
                    Date
                  </th>

                  <th>
                    Customer
                  </th>

                  <th>
                    Phone
                  </th>

                  <th>
                    Email
                  </th>

                  <th>
                    Services / Products
                  </th>

                  <th>
                    Total
                  </th>

                  <th>
                    Address
                  </th>

                </tr>

              </thead>


              <tbody>

                {inquiries.length > 0 ? (

                  inquiries
                    .slice()
                    .reverse()
                    .map(
                      (
                        item,
                        index
                      ) => (

                        <tr
                          key={
                            index
                          }
                        >

                          <td>
                            {
                              item.orderId
                            }
                          </td>

                          <td>
                            {
                              item.date
                            }
                          </td>

                          <td>
                            <strong>
                              {
                                item.customerName
                              }
                            </strong>
                          </td>

                          <td>
                            {
                              item.phone
                            }
                          </td>

                          <td>
                            {
                              item.email ||
                              "-"
                            }
                          </td>

                          <td>

                            {item.items.map(
                              (
                                product,
                                i
                              ) => (

                                <div
                                  key={
                                    i
                                  }
                                  style={{
                                    marginBottom:
                                      "6px"
                                  }}
                                >

                                  {product.name}

                                  <br />

                                  <small>
                                    ₹
                                    {
                                      product.price
                                    }
                                  </small>

                                </div>

                              )
                            )}

                          </td>

                          <td>

                            <strong>
                              ₹
                              {Number(
                                item.total
                              ).toLocaleString(
                                "en-IN"
                              )}
                            </strong>

                          </td>

                          <td>

                            {item.address.street}

                            <br />

                            {
                              item.address.city
                            }

                            <br />

                            {
                              item.address.state
                            }

                            -

                            {
                              item.address.pincode
                            }

                          </td>

                        </tr>

                      )
                    )

                ) : (

                  <tr>

                    <td
                      colSpan="8"
                    >
                      No Customer
                      Inquiries Found
                    </td>

                  </tr>

                )}

              </tbody>

            </table>

          </div>

        </div>


        {/* =====================================
            CONTACT
        ===================================== */}

        <div className="dashboard-section">

          <div className="section-header">

            <h2>
              Contact Us Records
            </h2>


            <div className="dashboard-buttons">

              <button
                className="download-btn"
                onClick={() =>
                  downloadExcel(
                    contactData,
                    "contact_records.xlsx"
                  )
                }
              >
                Download Excel
              </button>


              <button
                className="delete-btn"
                onClick={
                  deleteAllContactRecords
                }
              >
                Delete All
              </button>

            </div>

          </div>


          <div className="table-wrapper">

            <table className="dashboard-table">

              <thead>

                <tr>

                  <th>
                    Name
                  </th>

                  <th>
                    Email
                  </th>

                  <th>
                    Subject
                  </th>

                  <th>
                    Message
                  </th>

                </tr>

              </thead>


              <tbody>

                {contactData.length > 0 ? (

                  contactData.map(
                    (
                      item,
                      index
                    ) => (

                      <tr
                        key={
                          index
                        }
                      >

                        <td>
                          {
                            item.name
                          }
                        </td>

                        <td>
                          {
                            item.email
                          }
                        </td>

                        <td>
                          {
                            item.subject
                          }
                        </td>

                        <td>
                          {
                            item.message
                          }
                        </td>

                      </tr>

                    )
                  )

                ) : (

                  <tr>

                    <td
                      colSpan="4"
                    >
                      No Contact Records Found
                    </td>

                  </tr>

                )}

              </tbody>

            </table>

          </div>

        </div>


        {/* =====================================
            PROJECT
        ===================================== */}

        <div className="dashboard-section">

          <div className="section-header">

            <h2>
              Project Records
            </h2>


            <div className="dashboard-buttons">

              <button
                className="excel-btn"
                onClick={() =>
                  downloadExcel(
                    dataEntryData,
                    "project_records.xlsx"
                  )
                }
              >
                Download Excel
              </button>


              <button
                className="delete-btn"
                onClick={
                  deleteAllProjectRecords
                }
              >
                Delete All
              </button>

            </div>

          </div>


          <div className="table-wrapper">

            <table className="dashboard-table">

              <thead>

                <tr>

                  <th>
                    Organization
                  </th>

                  <th>
                    Project Type
                  </th>

                  <th>
                    Time
                  </th>

                  <th>
                    Client
                  </th>

                  <th>
                    Description
                  </th>

                  <th>
                    Start
                  </th>

                  <th>
                    End
                  </th>

                  <th>
                    Status
                  </th>

                  <th>
                    Assigned
                  </th>

                  <th>
                    Budget
                  </th>

                </tr>

              </thead>


              <tbody>

                {dataEntryData.length > 0 ? (

                  dataEntryData.map(
                    (
                      item,
                      index
                    ) => (

                      <tr
                        key={
                          index
                        }
                      >

                        <td>
                          {
                            item.organizationName
                          }
                        </td>

                        <td>
                          {
                            item.projectType
                          }
                        </td>

                        <td>
                          {
                            item.timeIntervals
                          }
                        </td>

                        <td>
                          {
                            item.clientName
                          }
                        </td>

                        <td>
                          {
                            item.projectDescription
                          }
                        </td>

                        <td>
                          {
                            item.startDate
                          }
                        </td>

                        <td>
                          {
                            item.endDate
                          }
                        </td>

                        <td>
                          {
                            item.status
                          }
                        </td>

                        <td>
                          {
                            item.assignedTo
                          }
                        </td>

                        <td>
                          ₹{" "}
                          {
                            item.budget
                          }
                        </td>

                      </tr>

                    )
                  )

                ) : (

                  <tr>

                    <td
                      colSpan="10"
                    >
                      No Project Records Found
                    </td>

                  </tr>

                )}

              </tbody>

            </table>

          </div>

        </div>


      </div>


      <Footer />

    </div>

  );

};

export default Dashboard;