import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero container">
        <h1>Welcome to My Portfolio</h1>
        <p>Hi, I'm Renaldo Musto, a software engineer passionate about building innovative solutions.</p>
        <a href="/about" className="btn">Learn More About Me</a>
      </section>

      {/* About Section */}
      <section className="about-preview container">
        <h2>About Me</h2>
        <p>
          I'm a Computer Science graduate with expertise in software engineering, data analysis, and web development. 
          I thrive on tackling challenges in machine learning, AI, and cloud technologies.
        </p>
        <a href="/about" className="link">Read More</a>
      </section>

      {/* Skills Overview */}
      <section className="skills-overview container">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          <div className="skill-card">JavaScript</div>
          <div className="skill-card">React</div>
          <div className="skill-card">Node.js</div>
          <div className="skill-card">Python</div>
          <div className="skill-card">AWS</div>
          <div className="skill-card">MongoDB</div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="portfolio-preview container">
        <h2>Portfolio</h2>
        <div className="portfolio-grid">
          <p>Coming soon...</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-cta container">
        <h2>Let's Connect</h2>
        <p>Have a question or want to work together? Feel free to reach out!</p>
        <a href="/contact" className="btn">Contact Me</a>
      </section>
    </div>
  );
}

export default Home;
