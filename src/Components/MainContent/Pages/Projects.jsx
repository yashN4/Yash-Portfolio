import React from "react";
import { useState } from "react";
import img from "../Images/payment-gateway.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./sections.css";

const Projects = () => {
  const [currentIndex, SetCurrentIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Payment Gateway Checkout",
      Category: "Web Application",
      description:
        "Secure payment processing system with real-time transaction monitoring and analytics dashboard.",
      Image: img,
      tech: ["React", "Node.js", "MySql", "Websocket"],
      link: "#",
    },
    {
      id: 2,
      title: "Payment Gateway Checkout",
      Category: "Web Application",
      description:
        "Secure payment processing system with real-time transaction monitoring and analytics dashboard.",
      Image: img,
      tech: ["React", "Node.js", "MySql", "Websocket"],
      link: "#",
    },
    {
      id: 3,
      title: "Payment Gateway Checkout",
      Category: "Web Application",
      description:
        "Secure payment processing system with real-time transaction monitoring and analytics dashboard.",
      Image: img,
      tech: ["React", "Node.js", "MySql", "Websocket"],
      link: "#",
    },
    {
      id: 4,
      title: "Payment Gateway Checkout",
      Category: "Web Application",
      description:
        "Secure payment processing system with real-time transaction monitoring and analytics dashboard.",
      Image: img,
      tech: ["React", "Node.js", "MySql", "Websocket"],
      link: "#",
    },
  ];

  const nextSlide = () => {
    SetCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    SetCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index) => {
    SetCurrentIndex(index);
  };

  return (
    <div className="section-content projects-layout">
      {/* Header */}
      <div className="projects-header">
        <h1 className="projects-title">Projects</h1>
        <p className="projects-subtitle">
          Showcasing my recent work and side projects
        </p>
      </div>

      {/* Slider Container */}
      <div className="projects-slider">
        {/* Navigation Arrows */}
        <button className="slider-arrow slider-arrow-left" onClick={prevSlide}>
          <ChevronLeft size={28} />
        </button>

        {/* Slides Wrapper */}
        <div className="slider-wrapper">
          <div
            className="slider-track"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {projects.map((project) => (
              <div key={project.id} className="project-slide">
                <div className="project-card-large">
                  {/* Project Image */}
                  <div className="project-image-wrapper">
                    <img src={project.Image} alt={project.title} />
                    <div className="project-overlay">
                      <a href={project.link} className="view-project-btn">
                        View Project →
                      </a>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="project-info-wrapper">
                    <span className="project-category">{project.category}</span>
                    <h2 className="project-title-large">{project.title}</h2>
                    <p className="project-description">{project.description}</p>

                    {/* Tech Stack */}
                    <div className="project-tech-stack">
                      {project.tech.map((tech, idx) => (
                        <span key={idx} className="tech-badge">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrow Right */}
        <button className="slider-arrow slider-arrow-right" onClick={nextSlide}>
          <ChevronRight size={28} />
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="slider-dots">
        {projects.map((_, index) => (
          <button
            key={index}
            className={`slider-dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Project Counter */}
      <div className="project-counter">
        <span className="counter-current">
          {String(currentIndex + 1).padStart(2, "0")}
        </span>
        <span className="counter-divider">/</span>
        <span className="counter-total">
          {String(projects.length).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
};

export default Projects;
