import React from "react";
import HeroSection from "./HeroSection";
import ProjectCard from "./ProjectCard";
import "./MainContent.css";
import Studies from "./Pages/Studies";

const MainContent = ({ activeNav }) => {
  return (
    <div>
      <div className="main-content">
        <div className="content-grid">
          <HeroSection activeNav={activeNav} />
          {/* {activeNav === "home" && <ProjectCard />} */}
        </div>
      </div>
    </div>
  );
};

export default MainContent;
