import React from "react";
import '../Styles/Home/HomeGetStarted.css';

const HomeGetStarted = () => {
    return (
        <div className="get-started-container">
            <div className="back-container">
                <div className="upper-back"></div>
                <div className="lower-back"></div>
            </div>
            <div className="get-started-item-container">
                <div className="get-started-content">
                    <div className="content-message">
                        <h1>Ready to <span>get started?</span></h1>
                        <h1>Contact me today!</h1>
                    </div>
                    <button className="btn-send-me-email">
                        Send me an email
                    </button>
                </div>
            </div>
        </div>
    );
}

export default HomeGetStarted;