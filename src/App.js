import React from "react";
import { FaLinkedin, FaWhatsapp, FaPhone, FaGithub, FaEnvelope } from "react-icons/fa";
import './App.css';

const App = () => {
  return (
    <div className="hero-container">
      <nav className="navbar">
        <h2 className="logo">MyPortfolio</h2>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section className="hero" id="home">
        <div className="hero-text">
          <h1>Hi, I'm <span className="highlight">Sangeetha Burla</span></h1>
          <h3>Creative Web Developer & Designer</h3>
          <p>Bringing ideas to life through design & code.</p>
          <a href="#about" className="cta-button">Hire Me →</a>
        </div>
        <div className="hero-icon">
          <div className="icon-placeholder">👩‍💻</div>
        </div>
      </section>

      <section id="about" className="about-section">
        <h2>About Me</h2>
        <div className="about-content">
          <p className="bio">Seeking to excel in a dynamic and challenging environment by leveraging my skills to contribute to both personal and organizational growth.</p>
          <div className="skills">
            <h3>Technical Skills</h3>
            <ul>
              <li>HTML, CSS, JavaScript, Python, C, C++, DSA, Kotlin</li>
              <li>MERN Stack: MongoDB, Express.js, React.js, Node.js</li>
              <li>Database: MySQL, MongoDB</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="projects" className="projects-section">
        <h2>Projects</h2>
        <div className="projects-container">
          <div className="project-card">
            <h3>Lane Detection System</h3>
            <p>Advanced lane detection with ensemble models integrating ResNet & VGG.</p>
          </div>
          <div className="project-card">
            <h3>Online Pet Store</h3>
            <p>A frontend-based pet store showcasing different pet categories.</p>
          </div>
          <div className="project-card">
            <h3>Library Management System</h3>
            <p>Built a MERN-based library system with book borrowing & user dashboards.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <h2>Contact Me</h2>
        <div className="contact-info">
          <p><FaEnvelope /> <a href="mailto:burlasangeetha2005@gmail.com">burlasangeetha2005@gmail.com</a></p>
          <p><FaLinkedin /> <a href="https://www.linkedin.com/in/Sangeetha-Burla" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
        </div>
        <form className="contact-form">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit" className="cta-button">Send Message</button>
        </form>
      </section>
      <footer className="footer">
      <div className="footer-container">
        <p>© {new Date().getFullYear()} Sangeetha. All Rights Reserved.</p>
        
        <div className="social-icons">
          
          <a href="https://www.linkedin.com/in/Sangeetha-Burla" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          
          <a href="https://wa.me/7013313683" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>

          
          <a href="tel:+7013313683" target="_blank" rel="noopener noreferrer">
            <FaPhone />
          </a>

          
          <a href="https://github.com/sangeetha-3075" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>

        <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          ↑ Back to Top
        </button>
      </div>
    </footer>
    </div>
  );
};

export default App;
