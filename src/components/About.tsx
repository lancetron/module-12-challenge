import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about">
      <img src="path/to/your/photo.jpg" alt="Developer" className="about-photo" />
      <h2>About Me</h2>
      <p>
        I am a passionate web developer with experience in building dynamic and responsive web applications. 
        My skills include React, JavaScript, TypeScript, and more. I love creating user-friendly interfaces 
        and solving complex problems through code.
      </p>
    </div>
  );
};

export default About;