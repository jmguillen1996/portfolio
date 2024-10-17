import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import './Styles/Header.css';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav>
            <Link to="/" className="title">josefguillen</Link>
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
        </nav>
    );
}

export default Header;