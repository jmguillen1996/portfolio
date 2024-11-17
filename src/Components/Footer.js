import React, { useState } from "react";
import './Styles/Footer.css';
import { FaLinkedin, FaGithub, FaWhatsapp, FaViber, FaSkype } from "react-icons/fa";

const Footer = () => {
    const [hoveredIcon, setHoveredIcon] = useState(null); // Track which icon is hovered

    const handleMouseEnter = (icon) => setHoveredIcon(icon);
    const handleMouseLeave = () => setHoveredIcon(null);

    const getIconStyles = (iconName) => {
        const isHovered = hoveredIcon === iconName;
        return {
            color: isHovered ? "#ffffff" : "rgb(200, 200, 200)",
            transform: isHovered ? "scale(1.3)" : "scale(1)",
            transition: "all 0.3s ease", // Smooth transition for both color and scaling
        };
    };

    return (
        <div className="footer-container">
            <div className="footer-contents">
                <div className="contact-details-container">
                    <h2>Get in touch</h2>
                    <div className="contact-icons-container">
                        <FaLinkedin
                            size={25}
                            style={getIconStyles("linkedin")}
                            onMouseEnter={() => handleMouseEnter("linkedin")}
                            onMouseLeave={handleMouseLeave}
                        />
                        <FaGithub
                            size={25}
                            style={getIconStyles("github")}
                            onMouseEnter={() => handleMouseEnter("github")}
                            onMouseLeave={handleMouseLeave}
                        />
                        <FaSkype
                            size={25}
                            style={getIconStyles("skype")}
                            onMouseEnter={() => handleMouseEnter("skype")}
                            onMouseLeave={handleMouseLeave}
                        />
                        <FaWhatsapp
                            size={25}
                            style={getIconStyles("whatsapp")}
                            onMouseEnter={() => handleMouseEnter("whatsapp")}
                            onMouseLeave={handleMouseLeave}
                        />
                        <FaViber
                            size={25}
                            style={getIconStyles("viber")}
                            onMouseEnter={() => handleMouseEnter("viber")}
                            onMouseLeave={handleMouseLeave}
                        />
                    </div>
                </div>
                <div className="creator-container"></div>
            </div>
        </div>
    );
}

export default Footer;
