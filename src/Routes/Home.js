import React from "react";
import HeaderContent from "../Components/HeaderContent";
import HomeSkills from "../Components/HomeSkills";
import Footer from "../Components/Footer";
import HeaderNav from "../Components/HeaderNav";
import HomeAboutMe from "../Components/HomeAboutMe";
import HomeProjects from "../Components/HomeProjects";
import "./Styles/Home.css";

const Home = () => {
    return (
        <div className="parent-container">
            <div className="div1">
                <HeaderNav />
            </div>
            <div className="div2">
                <HeaderContent />
                <div className="header-line"></div>
                <HomeSkills />
                <HomeAboutMe />
                <HomeProjects />
                <Footer />
            </div>
        </div>
    );
}

export default Home;