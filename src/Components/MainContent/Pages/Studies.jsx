import React from "react";
import PfCard from "../Images/MumbaiUniversity.jpeg";
import "./Sections.css";

const Studies = () => {
  return (
    <div className="home-content education-layout">
      {/* headers */}
      <div className="Studies-headerr">
        <div className="header-left">
          <span className="experience-tag">EDUCATIONAL PITSTOPS</span>
          <h1 className="experience-title">EDUCATION</h1>
        </div>
      </div>
      {/* Two column grid - Image left, Text right */}
      <div className="education-split">
        {/* Left side - Image */}
        <div className="education-image-container">
          <div className="education-img-wrapper">
            <img src={PfCard} alt="MUMBAI UNIVERSITY" />
          </div>
          <div className="education-img-tags">
            <span className="img-tag">MUMBAI UNIVERSITY</span>
            <span className="img-tag">IMG</span>
          </div>
        </div>

        {/* Right side - Text */}
        <div className="education-text-container">
          <h1 className="education-heading">Where it all started!</h1>

          <p className="education-para">
            I’ve completed my Bachelor’s degree in Engineering. My coding
            journey began through hackathon events, which helped me develop
            strong coding skills, build good habits, and stay focused on my
            studies. I graduated with a CGPA of 8.2 from Padmabhushan Vasantdada
            Patil College under Mumbai University.
          </p>

          <div className="education-buttons">
            <button
              className="edu-btn-primary"
              onClick={() =>
                window.open("https://www.linkedin.com/in/yashn36/", "_blank")
              }
            >
              About
            </button>
            <button
              className="edu-btn-secondary"
              onClick={() =>
                window.open(
                  "https://mail.google.com/mail/?view=cm&fs=1&to=yashnaik36@gmail.com",
                  "_blank"
                )
              }
            >
              <span>✉</span> Email Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Studies;
