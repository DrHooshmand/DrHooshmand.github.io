import React from "react";
import '../assets/styles/Teaching.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChalkboardTeacher, faUniversity, faUsers } from '@fortawesome/free-solid-svg-icons';

const teachingData = {
  courses: [
    {
      title: "Introduction to Programming",
      institution: "Sharif University of Technology",
      period: "2012-2013",
      level: "Undergraduate",
      students: 150,
      description: "Taught programming fundamentals using C++ to students from various engineering disciplines",
      topics: ["C++ Programming", "Data Structures", "Algorithm Design", "Problem Solving"]
    },
    {
      title: "Advanced Computer Science Concepts",
      institution: "Sharif University of Technology", 
      period: "2013-2014",
      level: "Undergraduate",
      students: 80,
      description: "Advanced programming concepts including object-oriented programming and software design patterns",
      topics: ["Object-Oriented Programming", "Design Patterns", "Software Architecture", "Code Optimization"]
    },
    {
      title: "Materials Science Computational Methods",
      institution: "The Ohio State University",
      period: "2016-2019",
      level: "Graduate",
      students: 25,
      description: "Teaching assistant for graduate-level computational materials science course",
      topics: ["Finite Element Analysis", "Computational Modeling", "MATLAB Programming", "Scientific Computing"]
    },
    {
      title: "Machine Learning for Scientific Applications",
      institution: "UC Berkeley (Guest Lectures)",
      period: "2020-2021",
      level: "Graduate",
      students: 40,
      description: "Guest lecturer covering applications of machine learning in materials science and engineering",
      topics: ["AI in Science", "Data-Driven Materials Discovery", "Neural Networks", "Scientific ML"]
    }
  ],
  workshops: [
    {
      title: "Introduction to High-Performance Computing",
      venue: "Ohio State University HPC Workshop",
      year: "2018",
      duration: "2 days",
      participants: 50,
      description: "Intensive workshop on parallel computing and GPU acceleration for scientific applications"
    },
    {
      title: "Machine Learning for Engineers",
      venue: "HP Internal Training Program",
      year: "2023",
      duration: "1 week",
      participants: 120,
      description: "Corporate training program introducing ML concepts and applications to engineering teams"
    },
    {
      title: "AI/ML Best Practices for Enterprise",
      venue: "Various Industry Conferences",
      year: "2022-2023",
      duration: "Various",
      participants: 300,
      description: "Speaking engagements at industry conferences on implementing AI/ML in enterprise environments"
    }
  ],
  mentoring: [
    {
      title: "Graduate Student Mentoring",
      institution: "UC Berkeley",
      period: "2019-2021",
      students: 8,
      description: "Mentored graduate students in computational materials science research projects"
    },
    {
      title: "Data Science Team Leadership",
      institution: "HP Inc.",
      period: "2023-Present",
      students: 12,
      description: "Leading and mentoring a multidisciplinary team of data scientists and ML engineers"
    },
    {
      title: "Undergraduate Research Program",
      institution: "The Ohio State University",
      period: "2017-2019",
      students: 6,
      description: "Supervised undergraduate research projects in computational modeling and simulation"
    }
  ]
};

function Teaching() {
  const totalStudents = teachingData.courses.reduce((sum, course) => sum + course.students, 0) +
                       teachingData.workshops.reduce((sum, workshop) => sum + workshop.participants, 0);

  return (
    <div className="teaching-container" id="teaching">
      <div className="teaching-header">
        <h1>Teaching & Mentoring</h1>
        <p className="teaching-subtitle">Sharing knowledge and developing future talent in STEM and AI/ML</p>
        
        <div className="teaching-stats">
          <div className="stat">
            <FontAwesomeIcon icon={faUsers} />
            <span className="stat-number">{totalStudents}+</span>
            <span className="stat-label">Students Taught</span>
          </div>
          <div className="stat">
            <FontAwesomeIcon icon={faChalkboardTeacher} />
            <span className="stat-number">{teachingData.courses.length}</span>
            <span className="stat-label">Courses</span>
          </div>
          <div className="stat">
            <FontAwesomeIcon icon={faUniversity} />
            <span className="stat-number">6+</span>
            <span className="stat-label">Years Experience</span>
          </div>
        </div>
      </div>

      <div className="teaching-section">
        <h2>Course Instruction</h2>
        <div className="courses-timeline">
          {teachingData.courses.map((course, index) => (
            <div key={index} className="course-item">
              <div className="course-header">
                <h3>{course.title}</h3>
                <div className="course-meta">
                  <span className="institution">{course.institution}</span>
                  <span className="period">{course.period}</span>
                  <span className="level">{course.level}</span>
                </div>
              </div>
              <div className="course-details">
                <p className="description">{course.description}</p>
                <div className="course-info">
                  <span className="students">{course.students} students</span>
                </div>
                <div className="topics">
                  <h4>Key Topics Covered:</h4>
                  <div className="topic-tags">
                    {course.topics.map((topic, i) => (
                      <span key={i} className="topic-tag">{topic}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="teaching-section">
        <h2>Workshops & Training</h2>
        <div className="workshops-grid">
          {teachingData.workshops.map((workshop, index) => (
            <div key={index} className="workshop-card">
              <h3>{workshop.title}</h3>
              <div className="workshop-meta">
                <span className="venue">{workshop.venue}</span>
                <span className="year">{workshop.year}</span>
                <span className="duration">{workshop.duration}</span>
              </div>
              <p className="description">{workshop.description}</p>
              <div className="participants">
                <FontAwesomeIcon icon={faUsers} />
                <span>{workshop.participants} participants</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="teaching-section">
        <h2>Mentoring & Leadership</h2>
        <div className="mentoring-grid">
          {teachingData.mentoring.map((item, index) => (
            <div key={index} className="mentoring-card">
              <h3>{item.title}</h3>
              <div className="mentoring-meta">
                <span className="institution">{item.institution}</span>
                <span className="period">{item.period}</span>
              </div>
              <p className="description">{item.description}</p>
              <div className="mentored-count">
                <FontAwesomeIcon icon={faUsers} />
                <span>{item.students} individuals mentored</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="teaching-philosophy">
        <h2>Teaching Philosophy</h2>
        <div className="philosophy-content">
          <blockquote>
            "I believe in fostering critical thinking and practical problem-solving skills by connecting theoretical concepts 
            to real-world applications. My approach emphasizes hands-on learning, collaborative problem-solving, and encouraging 
            students to explore the intersection of traditional engineering with cutting-edge AI/ML technologies."
          </blockquote>
          
          <div className="philosophy-principles">
            <div className="principle">
              <h4>Practical Application</h4>
              <p>Connecting academic concepts to industry applications and real-world problem solving</p>
            </div>
            <div className="principle">
              <h4>Collaborative Learning</h4>
              <p>Encouraging peer interaction and team-based projects that mirror professional environments</p>
            </div>
            <div className="principle">
              <h4>Continuous Innovation</h4>
              <p>Integrating latest technologies and methodologies to keep curriculum relevant and engaging</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Teaching;