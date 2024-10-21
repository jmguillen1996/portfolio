import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import './Styles/HeaderNav.css';
import './Styles/HeaderContent.css';
import { FiDownload, FiMenu, FiX } from 'react-icons/fi';
import Typewriter from 'react-typewriter-effect';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [fontSize, setFontSize] = useState('3.5rem');

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 650) {
                setFontSize('2rem');
            } else {
                setFontSize('3.5rem');
            }
        };
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="parent-container">
            <div class="header-content-container">
                <div className="h1-space-top"></div>
                <h1>Hello, I'm Josef!</h1>
                <div className="type-writer-container">
                    <Typewriter
                        textStyle={{
                            fontSize: fontSize,
                        }}
                        startDelay={100}
                        cursorColor="#2294ff"
                        text="Mobile Developer"
                        typeSpeed={100}
                        hideCursorAfterText={true}
                    />
                </div>
                <p>
                    Passionate about building high-performance and user-centric mobile applications. Committed to developing innovative solutions that enhance user experience and deliver impactful results.
                </p>
                <div className="header-button-space-top"></div>
                <div className="header-button-container">
                    <button className="btn-get-started">
                        Get Started
                    </button>
                    <button className="btn-about-me">
                        About Me
                    </button>
                </div>
            </div>
            <div class="nav-container">
                <div className="title-container">
                    <Link to="/" className="title">
                        <h3>
                            <span>josef</span>
                            guillen
                        </h3>
                    </Link>
                    <div className="menu-action-container" onClick={() => {
                        setMenuOpen(!menuOpen);
                    }}>
                        {menuOpen ? <FiX size={25} /> : <FiMenu size={25} />}
                    </div>
                </div>
                <div className={menuOpen ? "item-container open" : "item-container close"}>
                    <div className="menu">
                        <NavLink className="home-menu-link" to="/"><div className="menu-item">Home</div></NavLink>
                        <div className="menu-item">Skill</div>
                        <div className="menu-item">Project</div>
                        <div className="menu-item">Work Experience</div>
                        <div className="menu-item">Contact</div>
                    </div>
                    <button className="btn-download-resume">
                        <FiDownload size={18} color="white" />
                        Resume
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Header;