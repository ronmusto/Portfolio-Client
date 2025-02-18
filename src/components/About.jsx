import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <h1>About Me</h1>
        <p>
          I'm Renaldo Musto, a passionate software engineer with expertise in full-stack development, 
          data analysis, and cloud technologies. I thrive on building innovative solutions and exploring 
          cutting-edge fields like machine learning and AI.
        </p>
      </section>

      {/* Skills Section */}
      <section className="about-skills">
        <h2>What I Do</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <h3>Full-Stack Development</h3>
            <p>Building scalable and robust web applications using React, Node.js, and MongoDB.</p>
          </div>
          <div className="skill-card">
            <h3>Data Analysis</h3>
            <p>Creating powerful visualizations and insights with Python, Tableau, and PowerBI.</p>
          </div>
          <div className="skill-card">
            <h3>Cloud Platforms</h3>
            <p>Deploying applications and managing infrastructure with AWS and Docker.</p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="about-education">
        <h2>My Education</h2>
        <ul>
          <li>
            <strong>M.S. in Computer Science</strong>, Merrimack College, North Andover, MA
            <br />
            <em>Expected: October 2025, GPA: 4.00</em>
          </li>
          <li>
            <strong>B.S. in Computer Science</strong>, Southern New Hampshire University, Manchester, NH
            <br />
            <em>Graduated: July 2023, Summa Cum Laude, GPA: 3.94</em>
          </li>
        </ul>
      </section>

      {/* Contact Section */}
      <section className="about-contact">
        <h2>Let's Connect</h2>
        <p>
          Feel free to reach out to discuss projects, ideas, or opportunities. 
          I'm always excited to collaborate and learn!
        </p>
        <a href="/contact" className="btn">Contact Me</a>
      </section>
    </div>
  );
}

export default About;
