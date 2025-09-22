import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'
import portfolioData from '../data/portfolio-data.json';

// Company logo mapping with local image files
const getCompanyLogo = (company: string): JSX.Element => {
  const logoContainerStyle = {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  };

  const baseLogoStyle = {
    objectFit: 'cover' as const,
    maxWidth: 'none',
    maxHeight: 'none'
  };

  switch (company) {
    case 'HP':
      return (
        <div style={logoContainerStyle}>
          <img
            src="/hp-logo.png"
            alt="HP Logo"
            style={{ ...baseLogoStyle, width: '56px', height: '38px' }}
          />
        </div>
      );
    case 'General Motors':
      return (
        <div style={logoContainerStyle}>
          <img
            src="/GM_logo.svg"
            alt="General Motors Logo"
            style={{ ...baseLogoStyle, width: '50px', height: '34px' }}
          />
        </div>
      );
    case 'University of California, Berkeley':
      return (
        <div style={logoContainerStyle}>
          <img
            src="/Berkeley_logo.svg"
            alt="UC Berkeley Logo"
            style={{ ...baseLogoStyle, width: '50px', height: '50px' }}
          />
        </div>
      );
    default:
      return <FontAwesomeIcon icon={faBriefcase} />;
  }
};

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          {portfolioData.experience.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
              contentArrowStyle={{ borderRight: '7px solid  white' }}
              date={exp.period}
              iconStyle={{ background: 'white', color: 'rgb(39, 40, 34)', border: '3px solid #5000ca', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              icon={getCompanyLogo(exp.company)}
            >
              <h3 className="vertical-timeline-element-title">{exp.role}</h3>
              <h4 className="vertical-timeline-element-subtitle">{exp.company} - {exp.location}</h4>
              <p>{exp.description}</p>
              {exp.achievements.length > 0 && (
                <ul>
                  {exp.achievements.slice(0, 3).map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              )}
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;