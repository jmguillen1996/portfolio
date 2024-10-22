import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import './Styles/HeaderNav.css';
import { FiDownload, FiMenu, FiX } from 'react-icons/fi';

const HeaderNav = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
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
    );
}

export default HeaderNav;