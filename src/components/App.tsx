import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Portfolio from './Portfolio';
import About from './About';
import Contact from './Contact';

const App = () => {
  const [currentSection, setCurrentSection] = useState('About');

  const renderSection = () => {
    switch (currentSection) {
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <div>
      <Header currentSection={currentSection} setCurrentSection={setCurrentSection} />
      <main>{renderSection()}</main>
      <Footer />
    </div>
  );
};

export default App;