import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import '../assets/styles/Project.scss';
import portfolioData from '../data/portfolio-data.json';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Key Projects & Products</h1>
        <div className="projects-grid">
            {portfolioData.projects.map((project, index) => {
                const mockImages = [mock01, mock02, mock03, mock04, mock05];
                const mockImage = mockImages[index % mockImages.length];
                return (
                    <div key={index} className="project">
                        <img src={mockImage} className="zoom" alt={project.title} width="100%"/>
                        <h2>{project.title}</h2>
                        <h4 className="project-company">{project.company}</h4>
                        <p>{project.description}</p>
                        <div className="project-tech">
                            <strong>Technologies:</strong> {project.technologies.join(', ')}
                        </div>
                        <div className="project-impact">
                            <strong>Impact:</strong> {project.impact}
                        </div>
                    </div>
                );
            })}
        </div>
    </div>
    );
}

export default Project;