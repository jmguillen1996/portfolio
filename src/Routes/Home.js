import React from "react";
import HeaderContent from "../Components/HeaderContent";
import HomeSkills from "../Components/Home/HomeSkills";
import Footer from "../Components/Footer";
import HeaderNav from "../Components/HeaderNav";
import HomeAboutMe from "../Components/Home/HomeAboutMe";
import HomeProjects from "../Components/Home/HomeProjects";
import HomeExperience from "../Components/Home/HomeExperience";
import HomeGetStarted from "../Components/Home/HomeGetStarted";
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
                <HomeExperience />
                <HomeGetStarted />
                <Footer />
            </div>
        </div>
    );
}

export default Home;