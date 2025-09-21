import React from "react";
import '../assets/styles/Project.scss';
import portfolioData from '../data/portfolio-data.json';

// Match the same images used in DetailedProjects
const getProjectImage = (index: number): string => {
  const projectImages = [
    '/fleet-explorer.png', // 0: Intelligent Fleet Explorer - Local HP Fleet Explorer image
    'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=400&h=250&fit=crop&crop=center&q=80', // 1: Virtual Assistant Chatbot
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&crop=center&q=80', // 2: Smart Insight Generation Platform
    'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop&crop=center&q=80', // 3: Panacea Support Automation
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop&crop=center&q=80'  // 4: Autonomous Driving ML Models
  ];
  return projectImages[index] || projectImages[0];
};

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Key Projects & Products</h1>
        <div className="projects-grid">
            {portfolioData.projects.map((project, index) => {
                return (
                    <div key={index} className="project">
                        <img src={getProjectImage(index)} className="zoom" alt={project.title} width="100%"/>
                        {project.title === "Intelligent Fleet Explorer" ? (
                            <h2><a href="https://workforceexperience.hp.com/blog/fleet-explorer/" target="_blank" rel="noopener noreferrer" style={{color: 'inherit', textDecoration: 'none'}}>{project.title}</a></h2>
                        ) : (
                            <h2>{project.title}</h2>
                        )}
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