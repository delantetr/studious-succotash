import React from 'react';

// THIS SECTINO OF CODE WILL BE USED TO DYNAMICALLY ADD DATA FROM A DATABASE
// const Project = ({ title, description, deployedLink, githubLink }) => {
//   return (
//     <div className="card" style={{ width: '18rem' }}>
//       <a href={deployedLink}>
//         <img src={process.env.PUBLIC_URL + "./rhythmreview.png"} className="card-img-top" alt="Rhythm Review Homepage"></img>
//       </a>
//       <div className="card-body">
//         <h5 className="card-title">{title}</h5>
//         <p className="card-text">{description}</p>
//         <a href={githubLink} className="card-link">Github link</a>
//       </div>
//     </div>
//   );
// };

// export default Project;


const projects = [
  {
    id: 1,
    title: 'Rhythm Review',
    description: 'An online platform that serves as the ultimate hub for music discovery, where users can explore an expansive database of artists, albums, and reviews.',
    image: process.env.PUBLIC_URL + '/rhythmreview.png',
    deployedLink: 'https://agile-springs-19422-e0a9573c7a30.herokuapp.com/',
    githubLink: 'https://github.com/delantetr'
  },
  {
    id: 2,
    title: 'Project 1',
    description: '',
    image: 'https://picsum.photos/640/360',
    deployedLink: '',
    githubLink: 'https://github.com/delantetr'
  },
  {
    id: 3,
    title: 'Project 2',
    description: '',
    image: 'https://picsum.photos/640/360',
    deployedLink: '',
    githubLink: 'https://github.com/delantetr'
  },
  {
    id: 4,
    title: 'Project 3',
    description: '',
    image: 'https://picsum.photos/640/360',
    deployedLink: '',
    githubLink: 'https://github.com/delantetr'
  },
  {
    id: 5,
    title: 'Project 4',
    description: '',
    image: 'https://picsum.photos/640/360',
    deployedLink: '',
    githubLink: 'https://github.com/delantetr'
  },
  {
    id: 6,
    title: 'Project 5',
    description: '',
    image: 'https://picsum.photos/640/360',
    deployedLink: '',
    githubLink: 'https://github.com/delantetr'
  },
];
export default projects;