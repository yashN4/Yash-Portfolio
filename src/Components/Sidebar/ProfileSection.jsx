import React from "react";
import "./Sidebar.css";
import pfp from "./IMG/pfp.jpg";
const ProfileSection = () => {
  return (
    <div className="profile-section">
      <div className="profile-avatar">
        <img src={pfp} alt="" />
      </div>
      <div className="profile-text">
        <div className="profile-line" id="ProfileLine1">
          Yash Naik
        </div>
        <div className="profile-line" id="ProfileLine2">
          Software Developer
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
