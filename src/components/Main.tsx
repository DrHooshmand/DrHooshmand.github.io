import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import portfolioData from '../data/portfolio-data.json';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="/headshot.jpg" alt="Shahriar Hooshmand" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href={portfolioData.personal.linkedin} target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>{portfolioData.personal.name}</h1>
          <p>{portfolioData.personal.title}</p>
          {portfolioData.personal.subtitle && <p className="subtitle">{portfolioData.personal.subtitle}</p>}
          <p className="tagline">{portfolioData.personal.tagline}</p>

          <div className="mobile_social_icons">
            <a href={portfolioData.personal.linkedin} target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;