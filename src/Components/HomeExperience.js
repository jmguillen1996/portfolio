import React, { useState, useEffect } from "react";
import "./Styles/HomeExperience.css";
import work_history from "../Data/work_history.json";

const HomeExperience = () => {
    // Initialize 'open' state with an array of 'false' values
    const [open, setOpen] = useState([]);

    // Initialize 'open' state to have 'false' for each work history entry
    useEffect(() => {
        setOpen(new Array(work_history.length).fill(false));
    }, []);

    // Toggle the 'open' state for the specific index
    const toggle = (i) => {
        const copyOpen = [...open]; // Copy the state array to avoid mutating it
        copyOpen[i] = !copyOpen[i]; // Toggle the specific index
        setOpen(copyOpen); // Update the state
    }

    return (
        <div className="experience-container">
            <h2>Work History</h2>
            <h1>Professional Experience</h1>
            <div className="work-history-list-container">
                {
                    work_history.map(
                        (work, index) => (
                            <div className="work-item-parent" key={index}>
                                <div className={`work-header ${open[index] ? 'open' : ''}`} onClick={() => toggle(index)}>
                                    <div className="work-header-content">
                                        <h1 className="work-position">
                                            {work.position} {/*   */}
                                        </h1>
                                        <div className="work-address">
                                            {work.company}, {work.address} {work.others}
                                        </div>
                                        <div className="work-timeline">
                                            {work.timeline}
                                        </div>
                                    </div>
                                    <div className="header-indicator">
                                        {open[index] ? "▲" : "▼"}
                                    </div>
                                </div>
                                <div className={`work-content ${open[index] ? 'open' : ''}`}>
                                    {
                                        work.bullets.map(
                                            (bullets, index) => (
                                                <div className="bullet-container">
                                                    <div className="bullet-item">&#8226;</div>
                                                    <div>{bullets}</div>
                                                </div>
                                            )
                                        )
                                    }
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
