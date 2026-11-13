import React from "react";
import { Link } from "react-router-dom";
import {
  IoArrowUp, IoHeart, IoBagHandle, IoBusiness,
  IoSchool, IoCheckmarkCircle, IoLayers,
  IoHeadset, IoSparkles, IoShieldCheckmark,
  IoBed, IoCalendar, IoPeople
} from "react-icons/io5";
import "./CRMSolutions.css";

const crmSolutions = [
  {
    id: "medical",
    number: "01",
    name: "Medical CRM",
    subtitle: "Healthcare & Clinic Management",
    description:
      "A focused management solution for clinics and therapy centres to organise appointments, patients, staff and day-to-day operations.",
    features: ["Patient management", "Appointments & treatment records", "Employee attendance", "Clinic operations dashboard"],
    url: "https://app.punaraxistherapy.com",
    icon: IoHeart,
    accent: "rose",
    tag: "Healthcare"
  },
  {
    id: "retail",
    number: "02",
    name: "Retail CRM",
    subtitle: "Retail & Store Management",
    description:
      "Manage retail operations with connected tools for billing, inventory, purchases, customers and business reporting.",
    features: ["POS billing", "Inventory & purchases", "Customer management", "Sales reports & team tools"],
    url: "https://retailcrm-three.vercel.app",
    icon: IoBagHandle,
    accent: "blue",
    tag: "Retail"
  },
  {
    id: "estate",
    number: "03",
    name: "Real Estate CRM",
    subtitle: "Property Sales & Relationship Management",
    description:
      "A property-focused workspace for handling leads, follow-ups, site visits, bookings, payments and teams.",
    features: ["Lead & follow-up tracking", "Properties & projects", "Site visits and bookings", "Employees, attendance & payroll"],
    url: "https://testingcrm-peach.vercel.app",
    icon: IoBusiness,
    accent: "violet",
    tag: "Real Estate"
  },
  {
  id: "hotel",
  number: "05",
  name: "Hotel & PG CRM",
  subtitle: "Hotel, Hostel & PG Management",
  description:
    "A smart and centralised management platform built for hotels, hostels and PG businesses. Manage multiple properties, room availability, guest reservations, customers and employees through one organised workspace.",
  features: [
    "Multi-owner & property management",
    "Room and bed availability tracking",
    "Guest bookings & reservations",
    "Customer directory & records",
    "Employee accounts & role-based access",
    "Centralised business dashboard"
  ],
  url: "https://hotelcrm.nisstechnology.com/",
  icon: IoBed,
  accent: "amber",
  tag: "Hospitality"
},
  {
    id: "school",
    number: "04",
    name: "School CRM",
    subtitle: "School & Multi-School Management",
    description:
      "A centralised school administration experience for managing students, admissions, attendance, fees, teachers and parents.",
    features: ["Student & admission records", "Attendance & fee management", "Teachers, parents & classes", "Multi-school workspaces"],
    url: "https://schoolcrm-ok.vercel.app",
    icon: IoSchool,
    accent: "cyan",
    tag: "Education"
  }
];

function CRMCard({ crm }) {
  const Icon = crm.icon;
  return (
    <article className={`crm-card crm-${crm.accent}`}>
      <div className="crm-card-top">
        <div className="crm-icon"><Icon size={27} strokeWidth={1.8} /></div>
        <span className="crm-number">{crm.number}</span>
      </div>
      <span className="crm-tag">{crm.tag}</span>
      <h2>{crm.name}</h2>
      <h3>{crm.subtitle}</h3>
      <p className="crm-description">{crm.description}</p>
      <ul className="crm-feature-list">
        {crm.features.map((feature) => (
          <li key={feature}><IoCheckmarkCircle size={16} />{feature}</li>
        ))}
      </ul>
      <a className="crm-explore" href={crm.url} target="_blank" rel="noopener noreferrer">
        Explore Live CRM <IoArrowUp size={18} />
      </a>
      <div className="crm-card-glow" />
    </article>
  );
}

export default function CRMSolutions() {
  return (
    <main className="crm-solutions-page">
      <section className="crm-hero">
        <div className="crm-hero-orb crm-orb-one" />
        <div className="crm-hero-orb crm-orb-two" />
        <div className="crm-hero-inner">
          <div className="crm-eyebrow"><IoSparkles size={15} /> NISS TECHNOLOGY · BUSINESS SOFTWARE</div>
          <h1>5 Powerful CRMs/Dashboard.<br /><span>One Technology Partner.</span></h1>
          <p>Smart Business Management Solutions for Every Industry – Powered by NISS Technology.</p>
          <div className="crm-hero-actions">
            <a href="#our-crms" className="crm-primary-btn">Explore CRM Solutions <IoArrowUp size={18} /></a>
            <Link to="/contact-us" className="crm-secondary-btn">Get a Demo</Link>
          </div>
          <div className="crm-trust-line"><IoShieldCheckmark size={17} /> Four specialised platforms. Independently deployed and managed.</div>
        </div>
        <div className="crm-hero-art" aria-hidden="true">
          <div className="crm-art-main"><IoLayers size={54} /><b>CRM</b><span>ONE PARTNER<br />FOUR SOLUTIONS</span></div>
          <div className="crm-art-chip chip-a"><IoHeart size={18} /> Medical</div>
          <div className="crm-art-chip chip-b"><IoBagHandle size={18} /> Retail</div>
          <div className="crm-art-chip chip-c"><IoBusiness size={18} /> Real Estate</div>
          <div className="crm-art-chip chip-d"><IoSchool size={18} /> School</div>
        </div>
      </section>

      <section className="crm-intro" id="our-crms">
        <div>
          <span className="crm-section-kicker">INDUSTRY-READY SOFTWARE</span>
          <h2>One partner. The right CRM for your business.</h2>
        </div>
        <p>Choose a platform designed around your industry's workflow. Each CRM opens in its own secure application.</p>
      </section>

      <section className="crm-grid">
        {crmSolutions.map((crm) => <CRMCard key={crm.id} crm={crm} />)}
      </section>

      <section className="crm-independence">
        <div className="crm-independence-icon"><IoShieldCheckmark size={28} /></div>
        <div>
          <h2>Independent platforms. Clear separation.</h2>
          <p>These are separate CRM applications with their own deployments, repositories, login systems and data environments. Exploring one CRM does not change or connect your account in another.</p>
        </div>
      </section>

      <section className="crm-demo-cta">
        <div className="crm-cta-icon"><IoHeadset size={26} /></div>
        <div><span>LET'S FIND THE RIGHT FIT</span><h2>Need a CRM for your industry?</h2><p>Talk to NISS Technology about a guided product demo.</p></div>
        <Link to="/contact-us" className="crm-primary-btn">Contact Our Team <IoArrowUp size={18} /></Link>
      </section>
    </main>
  );
}
