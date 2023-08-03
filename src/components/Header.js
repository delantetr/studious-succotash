import React from 'react';
import NavTabs from './NavTabs';

const Header = ({ currentPage, handlePageChange }) => {
  return (
    <header>
      <h1>Delante' Randolph</h1>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
    </header>
  );
};

export default Header;
