import React from "react";
import '../assets/styles/Personal.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCamera, 
  faPlane, 
  faBook, 
  faChess,
  faUserFriends
} from '@fortawesome/free-solid-svg-icons';

const personalData = {
  interests: [
    {
      title: "Photography",
      icon: faCamera,
      description: "Passionate about landscape and street photography, capturing moments that tell stories. Especially enjoy photographing during golden hour and exploring urban architecture.",
      highlights: ["Digital and Film Photography", "Landscape & Urban Scenes", "Photo Editing & Post-Processing"]
    },
    {
      title: "Travel & Exploration",
      icon: faPlane,
      description: "Love discovering new cultures, cuisines, and perspectives. Travel has broadened my understanding of global perspectives and enhanced my cross-cultural communication skills.",
      highlights: ["Cultural Immersion", "Adventure Travel", "Food & Cuisine Exploration", "Historical Sites"]
    },
    {
      title: "Reading & Learning",
      icon: faBook,
      description: "Avid reader of science fiction, non-fiction, and technical publications. Always curious about emerging technologies and their societal implications.",
      highlights: ["Science Fiction Literature", "Technology & Innovation Books", "Philosophy & Ethics", "Biographies"]
    },
    {
      title: "Strategic Games",
      icon: faChess,
      description: "Enjoy chess, strategy board games, and puzzle-solving. These activities help sharpen analytical thinking and decision-making skills that complement my technical work.",
      highlights: ["Chess", "Strategy Board Games", "Logic Puzzles", "Problem Solving Games"]
    }
  ],
  
  philosophy: {
    personal: "I believe in the power of continuous learning and maintaining curiosity about the world around us. Balance between technical expertise and creative pursuits is essential for personal growth and innovation.",
    professional: "Technology should serve humanity, not the other way around. I'm passionate about developing AI solutions that are ethical, inclusive, and beneficial to society as a whole.",
    collaboration: "The best innovations emerge from diverse perspectives and collaborative efforts. I value building bridges between technical and non-technical communities."
  },
  
  communityInvolvement: [
    {
      title: "STEM Education Mentoring",
      description: "Volunteer mentor for underrepresented students in STEM fields, helping bridge the gap between academic learning and industry applications.",
      impact: "Mentored 15+ students over the past 3 years"
    },
    {
      title: "AI Ethics Discussion Groups",
      description: "Active participant in local AI ethics discussion groups, contributing to conversations about responsible AI development and deployment.",
      impact: "Regular contributor to monthly discussions"
    },
    {
      title: "Open Source Contributions",
      description: "Contribute to open-source projects related to scientific computing and machine learning tools, believing in democratizing access to advanced technologies.",
      impact: "Multiple contributions to scientific Python libraries"
    }
  ],
  
  personalValues: [
    {
      value: "Integrity",
      description: "Maintaining honesty and strong moral principles in both personal and professional contexts"
    },
    {
      value: "Innovation",
      description: "Constantly seeking creative solutions and pushing the boundaries of what's possible"
    },
    {
      value: "Collaboration",
      description: "Believing that the best outcomes emerge from diverse teams working together"
    },
    {
      value: "Continuous Learning",
      description: "Embracing lifelong learning and staying curious about new developments"
    },
    {
      value: "Social Impact",
      description: "Using technology and expertise to create positive change in society"
    }
  ]
};

function Personal() {
  return (
    <div className="personal-container" id="personal">
      <div className="personal-header">
        <h1>Beyond the Technical</h1>
        <p className="personal-subtitle">
          Exploring the person behind the data scientist - interests, values, and perspectives that shape my approach to life and work
        </p>
      </div>

      <div className="personal-section">
        <h2>
          <FontAwesomeIcon icon={faUserFriends} />
          Personal Interests & Hobbies
        </h2>
        <div className="interests-grid">
          {personalData.interests.map((interest, index) => (
            <div key={index} className="interest-card">
              <div className="interest-header">
                <FontAwesomeIcon icon={interest.icon} className="interest-icon" />
                <h3>{interest.title}</h3>
              </div>
              <p className="interest-description">{interest.description}</p>
              <div className="interest-highlights">
                {interest.highlights.map((highlight, i) => (
                  <span key={i} className="highlight-tag">{highlight}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="personal-section">
        <h2>
          <FontAwesomeIcon icon={faBook} />
          Philosophy & Worldview
        </h2>
        <div className="philosophy-grid">
          <div className="philosophy-card">
            <h3>Personal Philosophy</h3>
            <p>{personalData.philosophy.personal}</p>
          </div>
          <div className="philosophy-card">
            <h3>Professional Ethics</h3>
            <p>{personalData.philosophy.professional}</p>
          </div>
          <div className="philosophy-card">
            <h3>Collaboration & Innovation</h3>
            <p>{personalData.philosophy.collaboration}</p>
          </div>
        </div>
      </div>

      <div className="personal-section">
        <h2>
          <FontAwesomeIcon icon={faUserFriends} />
          Community Involvement
        </h2>
        <div className="community-activities">
          {personalData.communityInvolvement.map((activity, index) => (
            <div key={index} className="community-card">
              <h3>{activity.title}</h3>
              <p className="community-description">{activity.description}</p>
              <div className="community-impact">
                <strong>Impact:</strong> {activity.impact}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="personal-section">
        <h2>Core Values</h2>
        <div className="values-grid">
          {personalData.personalValues.map((item, index) => (
            <div key={index} className="value-card">
              <h3>{item.value}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="personal-section">
        <h2>Life Beyond Work</h2>
        <div className="life-balance-content">
          <div className="balance-text">
            <p>
              While I'm passionate about technology and advancing the field of AI/ML, I believe that a well-rounded 
              life enriches both personal fulfillment and professional creativity. My diverse interests help me 
              approach technical challenges from unique angles and maintain the curiosity that drives innovation.
            </p>
            <p>
              Whether I'm capturing a sunrise through photography, exploring a new city, reading about emerging 
              technologies, or mentoring the next generation of technologists, these experiences contribute to my 
              holistic approach to problem-solving and leadership.
            </p>
          </div>
          
          <div className="fun-facts">
            <h3>Fun Facts</h3>
            <ul>
              <li>🎯 Can solve a Rubik's cube in under 2 minutes</li>
              <li>📚 Read 24+ books per year across various genres</li>
              <li>🌍 Visited 12+ countries and counting</li>
              <li>♟️ Chess rating consistently above intermediate level</li>
              <li>📸 Photography portfolio includes 500+ curated shots</li>
              <li>🎵 Enjoy both classical music and modern jazz</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="personal-footer">
        <div className="connecting-text">
          <h3>Connecting Personal & Professional</h3>
          <p>
            These personal interests and values don't exist in isolation from my professional work. They inform 
            my approach to ethical AI development, my commitment to mentoring and education, and my belief that 
            technology should serve to enhance human potential and creativity. I'm always excited to connect with 
            others who share similar passions or who bring different perspectives to the conversation.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Personal;