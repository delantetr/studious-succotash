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
            My name is Delante' Randolph. I am a recent graduate of the UNC Charlotte Coding Bootcamp. Through this program I learned HTML, CSS, and Javascript.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;