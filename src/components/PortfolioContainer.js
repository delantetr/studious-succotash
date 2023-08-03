import React, { useState } from 'react';
import Header from './Header';
// import NavTabs from './NavTabs';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Footer from './Footer'

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    currentPage === 'About' && <About />
    currentPage === 'Portfolio' && <Portfolio />
    currentPage === 'Contact' && <Contact />
    currentPage === 'Resume' && <Resume />
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header currentPage={currentPage} onPageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
}
