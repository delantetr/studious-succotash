import React from 'react';
// import Project from '../Project';
import projects from '../Project';


const styles = {
  cardContainer: {
    display: 'flex',
    overflowX: 'auto',
    margin: '-10px' 
  },
  
  card: {
    margin: '10px',
    width: '18rem'
  }
};

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <div className={styles.cardContainer}>
        {/* <Project /> */}
        {projects.map((project) => (
          <div className="card" style={styles.card} key={project.id}>
            <a href={project.deployedLink}>
                <img 
                  src={process.env.PUBLIC_URL + project.image} 
                  className="card-img-top" 
                  alt={project.title}
                />
            </a>
            <div className="card-body">
              <h5 className="card-title">{project.title}</h5>
              <p className="card-text">{project.description}</p>
              <a href={project.githubLink} className="card-link">
                Github link
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
