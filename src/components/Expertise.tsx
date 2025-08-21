import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain, faChartLine, faCloud } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import portfolioData from '../data/portfolio-data.json';

const labelsFirst = portfolioData.skills.aiml;

const labelsSecond = portfolioData.skills.cloud;

const labelsThird = portfolioData.skills.programming;

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faBrain} size="3x"/>
                    <h3>AI/ML & Generative AI</h3>
                    <p>Leading expert in developing enterprise-grade AI/ML solutions, specializing in Large Language Models, generative AI platforms, and end-to-end ML pipelines for business intelligence and automation.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faCloud} size="3x"/>
                    <h3>Cloud & High-Performance Computing</h3>
                    <p>Extensive experience with cloud platforms and scalable computing solutions, building distributed systems and GPU-accelerated analytics for processing large-scale enterprise data.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faChartLine} size="3x"/>
                    <h3>Data Science & Analytics</h3>
                    <p>Expert in transforming complex datasets into actionable insights, with deep experience in predictive modeling, time series analysis, and building scalable data science products from prototype to production.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;