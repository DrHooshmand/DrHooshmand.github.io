import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'
import portfolioData from '../data/portfolio-data.json';

// TypeScript interface for timeline items
interface TimelineItem {
  type: 'experience' | 'education';
  organization: string;
  title: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  startYear: number;
  concentration?: string;
  gpa?: string;
}

// Organization logo mapping with local image files (companies & institutions)
const getOrganizationLogo = (organizationName: string): JSX.Element => {
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

  switch (organizationName) {
    // Companies
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
    // Educational Institutions
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
    case 'The Ohio State University':
      return (
        <div style={logoContainerStyle}>
          <img
            src="/OSU_logo.png"
            alt="The Ohio State University Logo"
            style={{ ...baseLogoStyle, width: '55px', height: '55px' }}
          />
        </div>
      );
    case 'Sharif University of Technology':
      return (
        <div style={logoContainerStyle}>
          <img
            src="/Sharif_logo.jpg"
            alt="Sharif University Logo"
            style={{ ...baseLogoStyle, width: '52px', height: '52px' }}
          />
        </div>
      );
    default:
      return <FontAwesomeIcon icon={faBriefcase} />;
  }
};

// Helper function to parse year from period string for sorting
const parseStartYear = (period: string): number => {
  const match = period.match(/(\d{4})/);
  return match ? parseInt(match[1]) : 0;
};

function Timeline() {
  // Combine experience and education data for chronological timeline
  const timelineData: TimelineItem[] = [
    // Map experience data
    ...portfolioData.experience.map(exp => ({
      type: 'experience' as const,
      organization: exp.company,
      title: exp.role,
      period: exp.period,
      location: exp.location,
      description: exp.description,
      achievements: exp.achievements,
      startYear: parseStartYear(exp.period)
    })),
    // Map education data
    ...portfolioData.education.map(edu => ({
      type: 'education' as const,
      organization: edu.institution,
      title: edu.degree,
      period: edu.period,
      location: edu.location,
      description: edu.description,
      achievements: edu.achievements,
      concentration: (edu as any).concentration,
      gpa: (edu as any).gpa,
      startYear: parseStartYear(edu.period)
    }))
  ];

  // Sort by start year in descending order (most recent first)
  timelineData.sort((a, b) => b.startYear - a.startYear);

  return (
    <div id="history">
      <div className="items-container">
        <h1>Professional & Academic Journey</h1>
        <VerticalTimeline>
          {timelineData.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              className={`vertical-timeline-element--${item.type}`}
              contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
              contentArrowStyle={{ borderRight: '7px solid  white' }}
              date={item.period}
              iconStyle={{
                background: 'white',
                color: 'rgb(39, 40, 34)',
                border: item.type === 'education' ? '3px solid #0066cc' : '3px solid #5000ca',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              icon={getOrganizationLogo(item.organization)}
            >
              <h3 className="vertical-timeline-element-title">{item.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">
                {item.organization} - {item.location}
                {item.type === 'education' && item.concentration && (
                  <span className="concentration"> • {item.concentration}</span>
                )}
                {item.type === 'education' && item.gpa && (
                  <span className="gpa"> • GPA: {item.gpa}</span>
                )}
              </h4>
              <p>{item.description}</p>
              {item.achievements && item.achievements.length > 0 && (
                <ul>
                  {item.achievements.slice(0, 3).map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              )}
              <div className="timeline-badge">
                <span className={`badge badge-${item.type}`}>
                  {item.type === 'education' ? 'Education' : 'Experience'}
                </span>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;