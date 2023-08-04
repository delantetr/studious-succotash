import React from 'react';

const Project = ({ title, description, deployedLink, githubLink }) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <a href="https://agile-springs-19422-e0a9573c7a30.herokuapp.com/">
        <img src={process.env.PUBLIC_URL + "./rhythmreview.png"} className="card-img-top" alt="Rhythm Review Homepage"></img>
      </a>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={githubLink} className="card-link">Github link</a>
      </div>
    </div>
  );
};

export default Project;
