import React, { useState } from 'react';
import Navigation from './Navigation';
import Header from './Header';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Footer from './Footer'

const PortfolioContainer = () => {
  const [currentPage, setCurrentPage] = useState('About Me');
  

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    return (
      currentPage === 'About Me' ? <About /> :
      currentPage === 'Portfolio' ? <Portfolio /> :
      currentPage === 'Contact' ? <Contact /> :
      currentPage === 'Resume' ? <Resume /> :
      <div>Page not found</div>
    );
  };
  

  const handlePageChange = (currentPage) => {
    setCurrentPage(currentPage);
    console.log('currentPage: ', currentPage);
  };

  return (
    <div>
      <Header />
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default PortfolioContainer