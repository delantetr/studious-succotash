import React from 'react';

const Resume = () => {
  const proficiencies = [
    'JavaScript',
    'React',
    'Node.js',
    'HTML',
    'CSS',
    'Git',
  ];

  return (
    <div>
      <h1>Resume</h1>
      <p>
        You can download my resume <a href="/path-to-resume.pdf" download>here</a>.
      </p>
      <h2>Proficiencies</h2>
      <ul>
        {proficiencies.map((proficiency, index) => (
          <li key={index}>{proficiency}</li>
        ))}
      </ul>
    </div>
  );
};

export default Resume;
