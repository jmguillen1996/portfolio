import React, { useState, useEffect } from "react";
import './Styles/HeaderNav.css';
import './Styles/HeaderContent.css';
import Typewriter from 'react-typewriter-effect';

const HeaderContent = () => {
    const [fontSize, setFontSize] = useState('3.5rem');

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 500) {
                setFontSize("1.8rem");
            }
            else if (window.innerWidth <= 680) {
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
            I am passionate about building high-performance mobile applications and committed to helping bring your ideas to life, delivering an exceptional user experience and impactful results.
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
    );
}

export default HeaderContent;