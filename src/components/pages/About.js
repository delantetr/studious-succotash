import React from 'react';

 const About = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <img src="./headshot.jpg" alt="Developer Avatar" className="img-thumbnail rounded-circle" />
        </div>
        <div className="col-md-8">
          <h2>About Me</h2>
          <p>
          Hi there! I'm Delante' Randolph, a passionate and dedicated software developer with a love for creating clean, efficient, and user-friendly applications. I am a Full-Stack Developer with a specialty in Server-Side development. I enjoy working on diverse projects that challenge my problem-solving skills.
        </p>
        <p>
          My journey in the world of coding began back in 2019 when I began to learn SQL through a self-teaching program. From there I made the decision to begin a full stack developemtn bootcamp with UNCC once I discovered my drive to build and create applications. Since then, I've been on an exciting adventure, constantly learning and honing my skills to stay up-to-date with the latest technologies and trends.
        </p>
        <p>
          When I'm not coding, you'll often find me playing saxophone, watching movies, or DJing weddings on the weekends. I believe that a well-rounded life outside of work is essential for maintaining creativity and mental well-being.
        </p>
        <p>
          I'm always open to collaboration and eager to take on new challenges. Feel free to explore my portfolio and get in touch if you'd like to work together on a project!
        </p>
        </div>
      </div>
    </div>
  );
};

export default About;