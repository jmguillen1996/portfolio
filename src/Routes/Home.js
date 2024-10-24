import React from "react";
import HeaderContent from "../Components/HeaderContent";
import HomeSkills from "../Components/HomeSkills";
import Footer from "../Components/Footer";
import HeaderNav from "../Components/HeaderNav";
import HomeAboutMe from "../Components/HomeAboutMe";
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
                <Footer />
            </div>
        </div>
    );
}

export default Home;