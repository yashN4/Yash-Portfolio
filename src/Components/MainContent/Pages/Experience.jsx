import React from "react";
import "./sections.css";

const Experience = () => {
  const experiences = [
    {
      company: "Interactive Digits",
      location: "Dubai, UAE",
      duration: "May 2024 – Present",
      position: "Software Developer",
      responsibilities: [
        "Built and maintained secure payment gateway solutions using Java, JavaScript, ExpressJs, and NodeJs, ensuring compliance with RBAC standards",
        "Developed responsive, user-friendly dashboards with React.js, Tailwind CSS, and Material UI, integrating real-time transaction data via WebSockets",
        "Implemented state management with Redux Toolkit and Zustand to optimize application performance and scalability",
        "Designed and optimized backend services using Node.js, Express.js, and MySQL, improving API response times by 30%",
        "Integrated secure authentication and role-based access control using JWT and industry best practices",
        "Utilized Postman for API testing, Git/GitHub for version control",
        "Applied unit testing methodologies to ensure code reliability and maintainability",
      ],
    },
    {
      company: "Codewind",
      location: "Mumbai, India",
      duration: "Mar 2023 – Dec 2023",
      position: "Software Developer",
      responsibilities: [
        "Developed and deployed responsive web applications using HTML, CSS, JavaScript, and React.js",
        "Designed and integrated Axios with front-end applications to enable seamless data exchange",
        "Optimized backend performance by refactoring code and improving database queries in MySQL",
        "Utilized Redux Toolkit and Zustand for efficient state management in complex applications",
        "Conducted debugging and API testing with Postman to ensure stability and reliability",
        "Collaborated with cross-functional teams to align technical solutions with client requirements",
        "Applied Git/GitHub for version control and followed agile development practices for timely delivery",
      ],
    },
  ];

  return (
    <div className="section-content experience-layout">
      {/* Header */}
      <div className="experience-header">
        <div className="header-left">
          <span className="experience-tag">PROFESSIONAL PITSTOPS</span>
          <h1 className="experience-title">Work Experience</h1>
        </div>
        <button
          className="resume-link-btn"
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1sJKazBr8ClXKpdlDwXx87w0gu1XZWywN/view",
              "_blank",
              "noopener,noreferrer"
            )
          }
        >
          Resume <span className="arrow-icon">↗</span>
        </button>
      </div>

      {/* Experience List */}
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <div className="experience-card-header">
              <div className="company-info">
                <h3 className="company-name">{exp.company}</h3>
                <p className="company-location">{exp.location}</p>
                <p className="job-position">{exp.position}</p>
              </div>
              <div className="duration-info">
                <p className="job-duration">{exp.duration}</p>
              </div>
            </div>

            <div className="experience-card-body">
              <ul className="responsibilities-list">
                {exp.responsibilities.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
