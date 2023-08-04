import React from 'react';

const Navigation = ({ currentPage, handlePageChange }) => {
  const sections = [
    { title: 'About Me', link: '#about-section' },
    { title: 'Portfolio', link: '#portfolio-section' },
    { title: 'Contact', link: '#contact-section' },
    { title: 'Resume', link: '#resume-section' },
  ];

  return (
    <nav>
      <ul className="nav nav-tabs">
        {sections.map((section) => (
          <li
            className="nav-item"
            key={section.title}
            onClick={() => handlePageChange(section.title)}
          >
            <a
              href={section.link}
              className={currentPage === section.title ? 'nav-link active' : 'nav-link'}
            >
              {section.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
