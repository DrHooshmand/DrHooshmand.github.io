import React from "react";
import '../assets/styles/Courses.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const coursesData = {
  certifications: [
    {
      title: "AWS Certified Solutions Architect - Professional",
      provider: "Amazon Web Services",
      year: "2023",
      credential: "AWS-SAP-2023-SH",
      description: "Advanced certification covering complex AWS architectures, security, and optimization"
    },
    {
      title: "Machine Learning Engineering for Production (MLOps)",
      provider: "DeepLearning.AI (Coursera)",
      year: "2022",
      credential: "DL-MLOPS-2022",
      description: "End-to-end ML pipeline development, deployment, and monitoring in production environments"
    },
    {
      title: "Deep Learning Specialization",
      provider: "DeepLearning.AI (Coursera)",
      year: "2021",
      credential: "DL-SPEC-2021",
      description: "Comprehensive deep learning curriculum covering neural networks, CNNs, RNNs, and transformers"
    },
    {
      title: "Google Cloud Professional Data Engineer",
      provider: "Google Cloud",
      year: "2022",
      credential: "GCP-PDE-2022",
      description: "Data engineering on Google Cloud Platform, including BigQuery, Dataflow, and ML services"
    },
    {
      title: "Kubernetes Application Developer (CKAD)",
      provider: "Cloud Native Computing Foundation",
      year: "2023",
      credential: "CKAD-2023-SH",
      description: "Container orchestration and application deployment using Kubernetes"
    }
  ],
  professionalCourses: [
    {
      title: "Large Language Models: Application through Production",
      provider: "UC Berkeley Extension",
      year: "2023",
      duration: "8 weeks",
      description: "Advanced course on LLM implementation, fine-tuning, and production deployment"
    },
    {
      title: "Advanced AI for Enterprise Solutions",
      provider: "Stanford Online",
      year: "2023",
      duration: "12 weeks",
      description: "Enterprise AI strategy, implementation challenges, and organizational transformation"
    },
    {
      title: "High-Performance Computing with GPU Acceleration",
      provider: "NVIDIA Deep Learning Institute",
      year: "2022",
      duration: "6 weeks",
      description: "CUDA programming, GPU optimization, and parallel computing for AI workloads"
    },
    {
      title: "Distributed Systems and Microservices Architecture",
      provider: "MIT Professional Education",
      year: "2022",
      duration: "10 weeks",
      description: "Design and implementation of scalable distributed systems for enterprise applications"
    }
  ],
  academicCourses: [
    {
      title: "Advanced Machine Learning Theory",
      provider: "The Ohio State University",
      year: "2018",
      level: "Graduate",
      description: "Mathematical foundations of ML algorithms, optimization theory, and statistical learning"
    },
    {
      title: "Computer Vision and Pattern Recognition",
      provider: "The Ohio State University",
      year: "2017",
      level: "Graduate",
      description: "Image processing, feature extraction, object detection, and deep learning for vision"
    },
    {
      title: "Artificial Intelligence and Expert Systems",
      provider: "The Ohio State University",
      year: "2017",
      level: "Graduate",
      description: "AI fundamentals, knowledge representation, search algorithms, and expert systems"
    },
    {
      title: "Scientific Computing and Numerical Methods",
      provider: "UC Berkeley",
      year: "2020",
      level: "Postdoc Research",
      description: "Advanced numerical methods for scientific computing and computational materials science"
    }
  ]
};

function Courses() {
  return (
    <div className="courses-container" id="courses">
      <div className="courses-header">
        <h1>Courses & Certifications</h1>
        <p className="courses-subtitle">Continuous learning in AI/ML, cloud computing, and enterprise technologies</p>
      </div>
      
      <div className="courses-section">
        <div className="section-header">
          <FontAwesomeIcon icon={faCertificate} />
          <h2>Professional Certifications</h2>
        </div>
        <div className="courses-grid">
          {coursesData.certifications.map((cert, index) => (
            <div key={index} className="course-card certification">
              <div className="course-header">
                <h3>{cert.title}</h3>
                <span className="provider">{cert.provider}</span>
                <span className="year">{cert.year}</span>
              </div>
              <div className="course-content">
                <p className="description">{cert.description}</p>
                <div className="credential">
                  <strong>Credential ID:</strong> {cert.credential}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="courses-section">
        <div className="section-header">
          <FontAwesomeIcon icon={faGraduationCap} />
          <h2>Professional Development Courses</h2>
        </div>
        <div className="courses-grid">
          {coursesData.professionalCourses.map((course, index) => (
            <div key={index} className="course-card professional">
              <div className="course-header">
                <h3>{course.title}</h3>
                <span className="provider">{course.provider}</span>
                <div className="course-meta">
                  <span className="year">{course.year}</span>
                  <span className="duration">{course.duration}</span>
                </div>
              </div>
              <div className="course-content">
                <p className="description">{course.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="courses-section">
        <div className="section-header">
          <FontAwesomeIcon icon={faGraduationCap} />
          <h2>Academic Coursework</h2>
        </div>
        <div className="courses-grid">
          {coursesData.academicCourses.map((course, index) => (
            <div key={index} className="course-card academic">
              <div className="course-header">
                <h3>{course.title}</h3>
                <span className="provider">{course.provider}</span>
                <div className="course-meta">
                  <span className="year">{course.year}</span>
                  <span className="level">{course.level}</span>
                </div>
              </div>
              <div className="course-content">
                <p className="description">{course.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="courses-summary">
        <div className="summary-stats">
          <div className="stat">
            <span className="stat-number">{coursesData.certifications.length}</span>
            <span className="stat-label">Professional Certifications</span>
          </div>
          <div className="stat">
            <span className="stat-number">{coursesData.professionalCourses.length}</span>
            <span className="stat-label">Professional Courses</span>
          </div>
          <div className="stat">
            <span className="stat-number">{coursesData.academicCourses.length}</span>
            <span className="stat-label">Academic Courses</span>
          </div>
        </div>
        <p className="summary-note">
          Committed to continuous learning and staying current with rapidly evolving AI/ML technologies and enterprise best practices.
        </p>
      </div>
    </div>
  );
}

export default Courses;