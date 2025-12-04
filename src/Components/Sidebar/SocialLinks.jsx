import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaDribbble,
  FaBehance,
  FaWhatsapp,
} from "react-icons/fa";

const SocialLinks = () => {
  const socials = [
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/yashn36/",
      label: "LinkedIn",
    },
    {
      icon: <FaGithub />,
      url: "https://github.com/yashN4",
      label: "GitHub",
    },
    {
      icon: <FaTwitter />,
      url: "https://twitter.com/yourprofile",
      label: "Twitter",
    },
    {
      icon: <FaInstagram />,
      url: "https://www.instagram.com/yashh4.20",
      label: "Instagram",
    },
    {
      icon: <FaWhatsapp />,
      url: "https://wa.link/etuq7c",
      label: "Whatsapp",
    },
  ];

  return (
    <div className="social-section">
      <h3 className="social-title">SOCIALS</h3>
      <div className="social-grid">
        {socials.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label={social.label}
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
