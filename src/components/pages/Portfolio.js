import React from 'react';
import projects from '../Project';
import '../Portfolio.css'; // Import the CSS file

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <div className="card-container">
        {projects.map((project) => (
          <div className="card" key={project.id}>
            <div className="card-overlay">
              <div className="card-overlay-text">
                <h4>
                  <a href={project.deployedLink} className="card-title-link">
                    {project.title}
                  </a>
                </h4>
                <p>{project.description}</p>
                <a href={project.githubLink} className="card-link">
                  Github
                </a>
              </div>
            </div>
            <a href={project.deployedLink}>
              <img
                src={process.env.PUBLIC_URL + project.image}
                className="card-img"
                alt={project.title}
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
