import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import './Styles/Header.css';
import { FiDownload, FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div className="parent-container">
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
                        <div className="menu-item">Home</div>
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
            {/* <nav>

                <div className="menu" onClick={() => {
                    setMenuOpen(!menuOpen);
                }}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={menuOpen ? "open" : ""}>
                    <li><NavLink to='/home'>Home</NavLink></li>
                    <li><NavLink to="/">Skill</NavLink></li>
                    <li><NavLink to="/">Project</NavLink></li>
                    <li><NavLink to="/">Work Experience</NavLink></li>
                    <li><NavLink to="/">Contact</NavLink></li>
                </ul>
            </nav> */}
        </div>
    );
}

export default Header;