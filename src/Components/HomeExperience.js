import React from "react";
import "./Styles/HomeExperience.css";
import work_history from "../Data/work_history.json";

const HomeExperience = () => {
    return (
        <div className="experience-container">
            <h2>Work History</h2>
            <h1>Professional Experience</h1>
            <div className="work-history-list-container">
                {
                    work_history.map(
                        (work, index) => (
                            <div className="work-item" key={index}>
                                <h1 className="work-position">
                                    {work.position}
                                </h1>
                                <div className="work-address">
                                    {work.company}, {work.address} {work.others}
                                </div>
                                <div className="work-timeline">
                                    {work.timeline}
                                </div>
                            </div>
                        )
                    )
                }
            </div>
        </div>
    );
}

export default HomeExperience;