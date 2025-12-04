import React from "react";
import ProfileSection from "./ProfileSection";
import Navigation from "./Navigation";
import SocialLinks from "./SocialLinks";
import { IoLocationSharp } from "react-icons/io5";

const Sidebar = ({ activeNav, setActiveNav }) => {
  return (
    <div className="sidebar">
      <ProfileSection />
      <Navigation activeNav={activeNav} setActiveNav={setActiveNav} />
      <SocialLinks />
      {/* Footer logic  */}
      <div className="location-footer">
        <div className="location-badge">
          <IoLocationSharp size={12} />
          <span>DUBAI , UAE</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
