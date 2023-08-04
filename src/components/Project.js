import React from 'react';

const Project = ({ title, description, deployedLink, githubLink }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={deployedLink}>Deployed App</a>
      <a href={githubLink}>GitHub Repo</a>
    </div>
  );
};

export default Project;
