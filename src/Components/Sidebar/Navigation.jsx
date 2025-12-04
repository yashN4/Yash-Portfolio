import React from "react";
import { AiFillHome } from "react-icons/ai";
import { IoMdSchool } from "react-icons/io";
import { MdWork } from "react-icons/md";
import { HiDocumentText } from "react-icons/hi";

const Navigation = ({ activeNav, setActiveNav }) => {
  return (
    <div className="nav-section">
      <div className="nav-title">CREATIONS</div>
      <nav className="nav-buttons">
        <button
          className={`nav-button ${activeNav === "home" ? "active" : ""}`}
          onClick={() => setActiveNav("home")}
        >
          <AiFillHome size={18} />
          <span>HOME</span>
        </button>
        <button
          className={`nav-button ${activeNav === "education" ? "active" : ""}`}
          onClick={() => setActiveNav("education")}
        >
          <IoMdSchool size={18} />
          <span>Education</span>
        </button>
        <button
          className={`nav-button ${activeNav === "experience" ? "active" : ""}`}
          onClick={() => setActiveNav("experience")}
        >
          <MdWork size={18} />
          <span>EXPERIENCE</span>
        </button>
        <button
          className={`nav-button ${activeNav === "Projects" ? "active" : ""}`}
          onClick={() => setActiveNav("Projects")}
        >
          <HiDocumentText size={18} />
          <span>Projects</span>
        </button>
      </nav>
    </div>
  );
};

export default Navigation;
