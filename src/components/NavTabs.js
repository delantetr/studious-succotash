import React from 'react';

const NavTabs = ({ currentPage, handlePageChange }) => {
  const sections = ['About', 'Portfolio', 'Contact', 'Resume']
  return (
    <nav>
      <ul className="nav nav-tabs">
        {sections.map((section) => (
          <li 
            key={section}
            className={currentPage === section ? 'nav-link active' : 'nav-link'}
            onClick={() => handlePageChange(section)}
          >
            {section}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavTabs;
