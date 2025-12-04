import React from "react";
import "./sections.css";

const Home = () => {
  return (
    <div className="home-content">
      <div className="home-text-section">
        <div className="title-tags">
          <span className="tag-primary">WORKING FOR INTERACTIVE DIGITS</span>
          <span className="tag-divider">|</span>
          <span className="tag-secondary">FULLSTACK DEVELOPER</span>
        </div>

        <h1 className="main-hero-title">Hey, I'm Yash!</h1>

        <p className="hero-intro">
          I'm a developer with over 3 years of experience. Currently building
          interactive web applications and design systems & crafting seamless
          user experiences.
        </p>

        <div className="companies-worked">
          <p className="companies-label">COMPANIES I'VE WORKED WITH</p>
          <div className="companies-logos">
            <span className="company-name">Interactive Digits</span>
            <span className="company-name">Codewind</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
