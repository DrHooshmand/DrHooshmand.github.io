import React from "react";
import '../assets/styles/CV.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import portfolioData from '../data/portfolio-data.json';

function CV() {
  const handleDownloadCV = () => {
    // This would link to a PDF version of the CV
    // For now, we'll show an alert
    alert("PDF download functionality would be implemented here. The CV would be generated from the current data or linked to a static PDF file.");
  };

  return (
    <div className="cv-container" id="cv">
      <div className="cv-header">
        <div className="cv-title-section">
          <h1>Curriculum Vitae</h1>
          <button className="download-btn" onClick={handleDownloadCV}>
            <FontAwesomeIcon icon={faDownload} />
            Download PDF
          </button>
        </div>
        
        <div className="cv-contact-header">
          <div className="cv-name-title">
            <h2>{portfolioData.personal.name}</h2>
            <h3>{portfolioData.personal.title}</h3>
            <p className="cv-subtitle">{portfolioData.personal.subtitle}</p>
          </div>
          
          <div className="cv-contact-info">
            <div className="contact-item">
              <FontAwesomeIcon icon={faEnvelope} />
              <span>{portfolioData.personal.email}</span>
            </div>
            <div className="contact-item">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <span>{portfolioData.personal.location}</span>
            </div>
            <div className="contact-item">
              <FontAwesomeIcon icon={faLinkedin} />
              <a href={portfolioData.personal.linkedin} target="_blank" rel="noreferrer">LinkedIn Profile</a>
            </div>
          </div>
        </div>
      </div>

      <div className="cv-content">
        <div className="cv-section">
          <h3>Professional Summary</h3>
          <p className="cv-summary">{portfolioData.summary}</p>
        </div>

        <div className="cv-section">
          <h3>Professional Experience</h3>
          <div className="cv-experiences">
            {portfolioData.experience.map((exp, index) => (
              <div key={index} className="cv-experience-item">
                <div className="cv-exp-header">
                  <div className="cv-exp-left">
                    <h4>{exp.role}</h4>
                    <h5>{exp.company}</h5>
                  </div>
                  <div className="cv-exp-right">
                    <span className="cv-period">{exp.period}</span>
                    <span className="cv-location">{exp.location}</span>
                  </div>
                </div>
                <p className="cv-exp-description">{exp.description}</p>
                {exp.achievements.length > 0 && (
                  <ul className="cv-achievements">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="cv-section">
          <h3>Education</h3>
          <div className="cv-education">
            {portfolioData.education.map((edu, index) => (
              <div key={index} className="cv-education-item">
                <div className="cv-edu-header">
                  <div className="cv-edu-left">
                    <h4>{edu.degree}</h4>
                    <h5>{edu.institution}</h5>
                    {edu.concentration && <p className="cv-concentration">Concentration: {edu.concentration}</p>}
                  </div>
                  <div className="cv-edu-right">
                    <span className="cv-period">{edu.period}</span>
                    <span className="cv-location">{edu.location}</span>
                    {edu.gpa && <span className="cv-gpa">GPA: {edu.gpa}</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="cv-section">
          <h3>Technical Skills</h3>
          <div className="cv-skills-grid">
            <div className="cv-skill-category">
              <h4>Programming Languages</h4>
              <div className="cv-skill-list">
                {portfolioData.skills.programming.map((skill, index) => (
                  <span key={index} className="cv-skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            
            <div className="cv-skill-category">
              <h4>AI/ML Frameworks</h4>
              <div className="cv-skill-list">
                {portfolioData.skills.aiml.map((skill, index) => (
                  <span key={index} className="cv-skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            
            <div className="cv-skill-category">
              <h4>Cloud Platforms</h4>
              <div className="cv-skill-list">
                {portfolioData.skills.cloud.map((skill, index) => (
                  <span key={index} className="cv-skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            
            <div className="cv-skill-category">
              <h4>Specializations</h4>
              <div className="cv-skill-list">
                {portfolioData.skills.specializations.map((skill, index) => (
                  <span key={index} className="cv-skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="cv-section">
          <h3>Selected Publications</h3>
          <div className="cv-publications">
            {portfolioData.publications.slice(0, 5).map((pub, index) => (
              <div key={index} className="cv-publication-item">
                <p className="cv-pub-title">"{pub}"</p>
              </div>
            ))}
            <p className="cv-publications-note">
              * Complete publication list with citations available on Google Scholar and Publications page
            </p>
          </div>
        </div>

        <div className="cv-section">
          <h3>Awards & Recognition</h3>
          <div className="cv-awards">
            {portfolioData.awards.map((award, index) => (
              <div key={index} className="cv-award-item">
                <p>{award}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="cv-section">
          <h3>Languages</h3>
          <div className="cv-languages">
            {portfolioData.languages.map((lang, index) => (
              <span key={index} className="cv-language">{lang}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="cv-footer">
        <p>This CV is automatically generated from the portfolio data. Last updated: August 2025</p>
        <p>For the most current information, please visit the online portfolio or contact directly.</p>
      </div>
    </div>
  );
}

export default CV;