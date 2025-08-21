import React from "react";
import '../assets/styles/DetailedProjects.scss';
import portfolioData from '../data/portfolio-data.json';

// Static project images
const getProjectImage = (index: number): string => {
  const projectImages = [
    'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=400&h=250&fit=crop&crop=center&q=80', // 0: Virtual Assistant Chatbot
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&crop=center&q=80', // 1: Smart Insight Generation Platform  
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&crop=center&q=80', // 2: Intelligent Fleet Explorer
    'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop&crop=center&q=80', // 3: Panacea Support Automation
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop&crop=center&q=80'  // 4: Autonomous Driving ML Models
  ];
  return projectImages[index] || projectImages[0];
};

const getCaseStudyImage = (projectId: string): string => {
  const caseStudyImages: { [key: string]: string } = {
    'project-1': 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=300&fit=crop&crop=center&q=80', // Virtual Assistant
    'project-2': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=300&fit=crop&crop=center&q=80', // Smart Insights
    'project-3': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=300&fit=crop&crop=center&q=80'  // Autonomous ML
  };
  return caseStudyImages[projectId];
};

function DetailedProjects() {
  return (
    <div className="detailed-projects-container" id="detailed-projects">
      <div className="projects-header">
        <h1>Key Projects & Products</h1>
        <p className="projects-subtitle">Enterprise AI solutions and research projects that drive innovation</p>
      </div>
      
      <div className="projects-grid">
        {portfolioData.projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image">
              <img 
                src={getProjectImage(index)}
                alt={`${project.title} preview`}
                className="project-preview-image"
              />
            </div>
            
            <div className="project-header">
              <h2 className="project-title">{project.title}</h2>
              <span className="project-company">{project.company}</span>
            </div>
            
            <div className="project-content">
              <p className="project-description">{project.description}</p>
              
              <div className="project-tech-stack">
                <h4>Technology Stack</h4>
                <div className="tech-tags">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              
              <div className="project-impact">
                <h4>Business Impact</h4>
                <p>{project.impact}</p>
              </div>
              
              <div className="project-details-link">
                <a href={`#project-${index + 1}`} className="details-btn">
                  View Detailed Case Study →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="project-case-studies">
        <h2>Detailed Case Studies</h2>
        
        <div className="case-study" id="project-1">
          <div className="case-study-header">
            <img 
              src={getCaseStudyImage('project-1')}
              alt="Virtual Assistant Chatbot"
              className="case-study-image"
            />
            <h3>Virtual Assistant Chatbot - HP Enterprise Solution</h3>
          </div>
          <div className="case-study-content">
            <div className="case-study-section">
              <h4>Challenge</h4>
              <p>HP needed to enhance customer support efficiency and provide 24/7 assistance for enterprise clients dealing with complex technical issues across multiple product lines.</p>
            </div>
            
            <div className="case-study-section">
              <h4>Solution Architecture</h4>
              <ul>
                <li>Implemented Large Language Model (LLM) fine-tuned on HP's knowledge base</li>
                <li>Integrated with existing customer support systems and ticketing platforms</li>
                <li>Built multi-modal interface supporting text, voice, and visual inputs</li>
                <li>Developed context-aware conversation management system</li>
              </ul>
            </div>
            
            <div className="case-study-section">
              <h4>Technical Implementation</h4>
              <ul>
                <li>Utilized transformer-based models with domain-specific fine-tuning</li>
                <li>Implemented retrieval-augmented generation (RAG) for accurate responses</li>
                <li>Built scalable microservices architecture on AWS</li>
                <li>Integrated real-time analytics for performance monitoring</li>
              </ul>
            </div>
            
            <div className="case-study-section">
              <h4>Results & Impact</h4>
              <ul>
                <li>Significantly enhanced response efficiency for customer inquiries</li>
                <li>Reduced average resolution time by 60%</li>
                <li>Improved customer satisfaction scores by 35%</li>
                <li>Enabled 24/7 support coverage without additional staffing</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="case-study" id="project-2">
          <div className="case-study-header">
            <img 
              src={getCaseStudyImage('project-2')}
              alt="Smart Insight Generation Platform"
              className="case-study-image"
            />
            <h3>Smart Insight Generation Platform - Business Intelligence</h3>
          </div>
          <div className="case-study-content">
            <div className="case-study-section">
              <h4>Challenge</h4>
              <p>Enterprise organizations needed actionable insights from vast amounts of structured and unstructured data to make informed business decisions quickly.</p>
            </div>
            
            <div className="case-study-section">
              <h4>Solution Architecture</h4>
              <ul>
                <li>Developed LLM-powered analytics platform for automated insight generation</li>
                <li>Created natural language query interface for business users</li>
                <li>Built automated report generation with market foresight capabilities</li>
                <li>Implemented real-time data processing and visualization</li>
              </ul>
            </div>
            
            <div className="case-study-section">
              <h4>Key Features</h4>
              <ul>
                <li>Natural language to SQL query conversion</li>
                <li>Automated trend analysis and anomaly detection</li>
                <li>Predictive modeling for market forecasting</li>
                <li>Interactive dashboards with drill-down capabilities</li>
              </ul>
            </div>
            
            <div className="case-study-section">
              <h4>Results & Impact</h4>
              <ul>
                <li>Delivered actionable business intelligence to stakeholders</li>
                <li>Reduced time-to-insight from weeks to hours</li>
                <li>Enabled data-driven decision making across organization</li>
                <li>Improved forecast accuracy by 40%</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="case-study" id="project-3">
          <div className="case-study-header">
            <img 
              src={getCaseStudyImage('project-3')}
              alt="Autonomous Driving ML Models"
              className="case-study-image"
            />
            <h3>Autonomous Driving ML Models - General Motors</h3>
          </div>
          <div className="case-study-content">
            <div className="case-study-section">
              <h4>Challenge</h4>
              <p>Develop robust machine learning models for autonomous vehicle systems capable of handling complex real-world driving scenarios with high-dimensional sensor data.</p>
            </div>
            
            <div className="case-study-section">
              <h4>Technical Approach</h4>
              <ul>
                <li>Advanced predictive modeling using high-dimensional time series data</li>
                <li>Processing highly imbalanced datasets for edge case detection</li>
                <li>Multi-sensor fusion algorithms for comprehensive scene understanding</li>
                <li>Real-time inference optimization for vehicle deployment</li>
              </ul>
            </div>
            
            <div className="case-study-section">
              <h4>Innovation Highlights</h4>
              <ul>
                <li>Novel approaches to handling temporal dependencies in driving data</li>
                <li>Ensemble methods for robust decision making</li>
                <li>Transfer learning techniques for rapid model adaptation</li>
                <li>Uncertainty quantification for safety-critical applications</li>
              </ul>
            </div>
            
            <div className="case-study-section">
              <h4>Results & Impact</h4>
              <ul>
                <li>Contributed significantly to GM's autonomous vehicle technology development</li>
                <li>Improved model accuracy in complex driving scenarios</li>
                <li>Enhanced safety through better edge case handling</li>
                <li>Accelerated development cycles through automated workflows</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailedProjects;