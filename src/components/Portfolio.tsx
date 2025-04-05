import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      title: 'Project 1',
      image: 'path/to/image1.jpg',
      deployedLink: 'https://deployed-link1.com',
      githubLink: 'https://github.com/user/project1',
    },
    {
      title: 'Project 2',
      image: 'path/to/image2.jpg',
      deployedLink: 'https://deployed-link2.com',
      githubLink: 'https://github.com/user/project2',
    },
    {
      title: 'Project 3',
      image: 'path/to/image3.jpg',
      deployedLink: 'https://deployed-link3.com',
      githubLink: 'https://github.com/user/project3',
    },
    {
      title: 'Project 4',
      image: 'path/to/image4.jpg',
      deployedLink: 'https://deployed-link4.com',
      githubLink: 'https://github.com/user/project4',
    },
    {
      title: 'Project 5',
      image: 'path/to/image5.jpg',
      deployedLink: 'https://deployed-link5.com',
      githubLink: 'https://github.com/user/project5',
    },
    {
      title: 'Project 6',
      image: 'path/to/image6.jpg',
      deployedLink: 'https://deployed-link6.com',
      githubLink: 'https://github.com/user/project6',
    },
  ];

  return (
    <div className="portfolio">
      <h2>My Projects</h2>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div key={index} className="portfolio-item">
            <h3>{project.title}</h3>
            <img src={project.image} alt={project.title} />
            <div className="portfolio-links">
              <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">View Deployed</a>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">View GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;