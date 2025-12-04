import React from "react";
import Home from "./Pages/Home";
import Studies from "./Pages/Studies";
import Experience from "./Pages/Experience";
import Projects from "./Pages/Projects";

const HeroSection = ({ activeNav }) => {
  const renderContent = () => {
    switch (activeNav) {
      case "home":
        return <Home />;
      case "education":
        return <Studies />;
      case "experience":
        return <Experience />;
      case "Projects":
        return <Projects />;
      default:
        return <Home />;
    }
  };

  return <div className="hero-section">{renderContent()}</div>;
};

export default HeroSection;
