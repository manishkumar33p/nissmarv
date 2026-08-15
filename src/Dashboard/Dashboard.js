
// import React, { useState, useEffect } from 'react';
// import * as XLSX from 'xlsx';
// import NavBar from '../Navbar/Navbar';
// import './Dashboard.css'; // Import custom CSS
// import Footer from "../Footer/Footer";

// const Dashboard = () => {
//     const [dataEntryData, setDataEntryData] = useState([]);
//     const [contactData, setContactData] = useState([]);

//     useEffect(() => {
//         // Fetch data from local storage
//         const storedDataEntryData = JSON.parse(localStorage.getItem('dataEntryData')) || [];
//         const storedContactData = JSON.parse(localStorage.getItem('contactData')) || [];

//         setDataEntryData(storedDataEntryData);
//         setContactData(storedContactData);
//     }, []);

//     const downloadExcel = (data, fileName) => {
//         // Create a new workbook and add the data as a worksheet
//         const wb = XLSX.utils.book_new();
//         const ws = XLSX.utils.json_to_sheet(data);
//         XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
        
//         // Write the workbook to a file
//         XLSX.writeFile(wb, fileName);
//     };

//     const downloadJSON = (data, fileName) => {
//         const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
//         const url = URL.createObjectURL(blob);
//         const a = document.createElement('a');
//         a.href = url;
//         a.download = fileName; // Set the filename here
//         a.click();
//         URL.revokeObjectURL(url);
//     };

//     const deleteAllContactRecords = () => {
//         localStorage.removeItem('contactData'); // Clear contact data from localStorage
//         setContactData([]); // Update state to reflect deletion
//     };

//     return (
//         <div className="dashboard-page">
//             <NavBar />
//             <div className="container mt-5">
//                 <h1 className="text-center mb-4" style={{ marginTop: "2em" }}>Dashboard</h1>

//                 <div className="dashboard-section">
//                     <h2>Contact Us Records</h2>
                    
//                     <table className="dashboard-table">
//                         <thead>
//                             <tr>
//                                 <th>Name</th>
//                                 <th>Email</th>
//                                 <th>Subject</th>
//                                 <th>Message</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {contactData.length > 0 ? (
//                                 contactData.map((item, index) => (
//                                     <tr key={index}>
//                                         <td>{item.name}</td>
//                                         <td>{item.email}</td>
//                                         <td>{item.subject}</td>
//                                         <td>{item.message}</td>
//                                     </tr>
//                                 ))
//                             ) : (
//                                 <tr>
//                                     <td colSpan="4">No data available</td>
//                                 </tr>
//                             )}
//                         </tbody>
//                     </table>
//                     <button 
//                         className="btn btn-secondary mb-3"
//                         onClick={() => downloadJSON(contactData, 'contact_db.json')}
//                     >
//                         Download Contact Data as JSON
//                     </button>
//                     <button 
//                         className="btn btn-danger mb-3"
//                         onClick={deleteAllContactRecords}
//                     >
//                         Delete All Contact Records
//                     </button>
//                 </div>

//                 <div className="dashboard-section">
//                     <h2>Data Entry Records</h2>
                    
//                     <table className="dashboard-table">
//                         <thead>
//                             <tr>
//                                 <th>Organization Name</th>
//                                 <th>Project Type</th>
//                                 <th>Time Intervals</th>
//                                 <th>Client Name</th>
//                                 <th>Project Description</th>
//                                 <th>Start Date</th>
//                                 <th>End Date</th>
//                                 <th>Status</th>
//                                 <th>Assigned To</th>
//                                 <th>Budget</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {dataEntryData.length > 0 ? (
//                                 dataEntryData.map((item, index) => (
//                                     <tr key={index}>
//                                         <td>{item.organizationName}</td>
//                                         <td>{item.projectType}</td>
//                                         <td>{item.timeIntervals}</td>
//                                         <td>{item.clientName}</td>
//                                         <td>{item.projectDescription}</td>
//                                         <td>{item.startDate}</td>
//                                         <td>{item.endDate}</td>
//                                         <td>{item.status}</td>
//                                         <td>{item.assignedTo}</td>
//                                         <td>{item.budget}</td>
//                                     </tr>
//                                 ))
//                             ) : (
//                                 <tr>
//                                     <td colSpan="10">No data available</td>
//                                 </tr>
//                             )}
//                         </tbody>
//                     </table>

//                     <button 
//                         className="btn btn-primary mb-3"
//                         onClick={() => downloadExcel(dataEntryData, 'data_entry_records.xlsx')}
//                     >
//                         Download Data Entry Records as Excel
//                     </button>
//                 </div>
//             </div>
//             <Footer />
//         </div>
//     );
// };

// export default Dashboard;




import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';
import NavBar from '../Navbar/Navbar';
import Footer from "../Footer/Footer";
import './Dashboard.css';

const Dashboard = () => {

  const [dataEntryData, setDataEntryData] = useState([]);
  const [contactData, setContactData] = useState([]);

  // LOAD DATA
  useEffect(() => {

    const storedDataEntryData =
      JSON.parse(localStorage.getItem('dataEntryData')) || [];

    const storedContactData =
      JSON.parse(localStorage.getItem('contactData')) || [];

    setDataEntryData(storedDataEntryData);
    setContactData(storedContactData);

  }, []);

  // DOWNLOAD EXCEL
  const downloadExcel = (data, fileName) => {

    const wb = XLSX.utils.book_new();

    const ws = XLSX.utils.json_to_sheet(data);

    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    XLSX.writeFile(wb, fileName);
  };

  // DOWNLOAD JSON
  const downloadJSON = (data, fileName) => {

    const blob = new Blob(
      [JSON.stringify(data, null, 2)],
      { type: 'application/json' }
    );

    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');

    a.href = url;
    a.download = fileName;

    a.click();

    URL.revokeObjectURL(url);
  };

  // DELETE CONTACT RECORDS
  const deleteAllContactRecords = () => {

    localStorage.removeItem('contactData');

    setContactData([]);
  };

  // DELETE PROJECT RECORDS
  const deleteAllProjectRecords = () => {

    localStorage.removeItem('dataEntryData');

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
        <source src="/videos/marvv99.mp4" type="video/mp4" />
      </video>

      {/* OVERLAY */}
      <div className="dashboard-overlay"></div>

      {/* MAIN */}
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
            Manage all contact records,
            projects, clients, reports and
            downloadable files from one place.
          </p>

        </div>

        {/* STATS */}
        <div className="dashboard-stats">

          <div className="dashboard-stat-card">
            <h2>{contactData.length}</h2>
            <p>Contact Records</p>
          </div>

          <div className="dashboard-stat-card">
            <h2>{dataEntryData.length}</h2>
            <p>Project Records</p>
          </div>

          <div className="dashboard-stat-card">
            <h2>24/7</h2>
            <p>System Access</p>
          </div>

        </div>

        {/* CONTACT SECTION */}
        <div className="dashboard-section">

          <div className="section-header">

            <h2>Contact Us Records</h2>

            <div className="dashboard-buttons">

              <button
                className="download-btn"
                onClick={() =>
                  downloadJSON(
                    contactData,
                    'contact_records.json'
                  )
                }
              >
                Download JSON
              </button>

              <button
                className="delete-btn"
                onClick={deleteAllContactRecords}
              >
                Delete All
              </button>

            </div>

          </div>

          <div className="table-wrapper">

            <table className="dashboard-table">

              <thead>

                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Subject</th>
                  <th>Message</th>
                </tr>

              </thead>

              <tbody>

                {contactData.length > 0 ? (

                  contactData.map((item, index) => (

                    <tr key={index}>

                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.subject}</td>
                      <td>{item.message}</td>

                    </tr>

                  ))

                ) : (

                  <tr>
                    <td colSpan="4">
                      No Contact Records Found
                    </td>
                  </tr>

                )}

              </tbody>

            </table>

          </div>

        </div>

        {/* PROJECT SECTION */}
        <div className="dashboard-section">

          <div className="section-header">

            <h2>Project Records</h2>

            <div className="dashboard-buttons">

              <button
                className="excel-btn"
                onClick={() =>
                  downloadExcel(
                    dataEntryData,
                    'project_records.xlsx'
                  )
                }
              >
                Download Excel
              </button>

              <button
                className="delete-btn"
                onClick={deleteAllProjectRecords}
              >
                Delete All
              </button>

            </div>

          </div>

          <div className="table-wrapper">

            <table className="dashboard-table">

              <thead>

                <tr>

                  <th>Organization</th>
                  <th>Project Type</th>
                  <th>Time</th>
                  <th>Client</th>
                  <th>Description</th>
                  <th>Start</th>
                  <th>End</th>
                  <th>Status</th>
                  <th>Assigned</th>
                  <th>Budget</th>

                </tr>

              </thead>

              <tbody>

                {dataEntryData.length > 0 ? (

                  dataEntryData.map((item, index) => (

                    <tr key={index}>

                      <td>{item.organizationName}</td>
                      <td>{item.projectType}</td>
                      <td>{item.timeIntervals}</td>
                      <td>{item.clientName}</td>
                      <td>{item.projectDescription}</td>
                      <td>{item.startDate}</td>
                      <td>{item.endDate}</td>
                      <td>{item.status}</td>
                      <td>{item.assignedTo}</td>
                      <td>₹ {item.budget}</td>

                    </tr>

                  ))

                ) : (

                  <tr>
                    <td colSpan="10">
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
