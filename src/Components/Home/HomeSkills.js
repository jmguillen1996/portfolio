import React, { useState, useEffect } from "react";
import '../Styles/Home/HomeSkills.css';
import skills from '../../Data/skills.json';
const HomeSkills = () => {
    return (
        <div className="skills-container">
            <h2>Skills</h2>
            <h1>What I Excel At</h1>
            <div className="skill-list-container">
                {
                    skills.map(
                        (skill, index) => (
                            <div className="skill-item" key={index}>
                                <div className="skill-item-img-container">
                                    {skill.image_asset && <img className="skill-item-img" src={skill.image_asset} alt={skill.name} />}
                                </div>
                                <div className="skill-item-name-container">
                                    <h3>{skill.name}</h3>
                                </div>
                            </div>
                        )
                    )
                }
            </div>
        </div>
    );
}

export default HomeSkills;