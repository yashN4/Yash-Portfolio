import React from "react";
import "./MainContent.css";
import imgas from "./Images/yash-card.jpg";

const ProjectCard = () => {
  return (
    <div className="profile-card-container">
      <div className="profile-main-image">
        {/* prfi;e meeds to be added  */}
        <img
          // src="https://images.unsplash.com/photo-1605749439419-80c81f67eefc?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          src={imgas}
          alt="Yash Naik"
        />
      </div>
      <div className="image-tags">
        <span className="image-tag">DUBAI VIBES</span>
        <span className="image-tag">2026</span>
      </div>
    </div>
  );
};

export default ProjectCard;
