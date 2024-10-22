import React from "react";
import HeaderContent from "../Components/HeaderContent";
import Footer from "../Components/Footer";
import "./Styles/Home.css";

const Home = () => {
    return (
        <div>
            <HeaderContent />
            <div className="header-line"></div>
            <Footer />
        </div>
    );
}

export default Home;