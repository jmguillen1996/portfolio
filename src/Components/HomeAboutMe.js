import React from "react";
import './Styles/HomeAboutMe.css';

const HomeAboutMe = () => {
    return (
        <div className="about-container">
            <h2>About</h2>
            <h1>A Bit About Me</h1>
            <div className="about-me">
                I’m a mobile developer with over <span className="text-highlight">7 years of hands-on experience</span>.
                <br /><br />
                Throughout my journey, I have gained experience in various programming languages, with a primary focus on <span className="text-highlight">Flutter (using Dart)</span>,
                as well as <span className="text-highlight">Java</span>, <span className="text-highlight">Kotlin</span>, and <span className="text-highlight">C#</span>, for building mobile applications. I have successfully developed and deployed several applications, 
                many of which have been for internal company use.
                <br /><br />
                One of my most fulfilling experiences was a recent project where I was hired as a senior developer. This role gave me the opportunity to 
                expand my expertise beyond mobile development and explore new technologies. Additionally, I’ve had the privilege of mentoring junior programmers, 
                which has been especially rewarding as I’ve contributed to their growth and development in the field.
                <br /><br />
                Currently, I am focusing primarily on cross-platform development, as I enjoy the flexibility of working on different platforms with a 
                single codebase. This approach allows me to create applications that reach a broader audience and streamline the development process.
                <br /><br />
                Looking ahead, I am eager to continue growing as a senior developer, expanding my skill set, and creating more mobile applications 
                for clients, bringing their ideas to life.
            </div>
        </div>
    );
}

export default HomeAboutMe;