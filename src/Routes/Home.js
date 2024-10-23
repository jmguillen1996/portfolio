import React from "react";
import HeaderContent from "../Components/HeaderContent";
import HomeSkills from "../Components/HomeSkills";
import Footer from "../Components/Footer";
import "./Styles/Home.css";

const Home = () => {
    return (
        <div>
            <HeaderContent />
            <div className="header-line"></div>
            <HomeSkills />
            <Footer />
        </div>
    );
}

export default Home;