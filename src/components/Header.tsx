import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

interface HeaderProps {
  currentSection: string;
  setCurrentSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentSection, setCurrentSection }) => {
  return (
    <header className="header">
      <h1 className="header-title">Your Name</h1>
      <nav className="header-nav">
        <ul>
          <li>
            <Link
              to="#about"
              className={currentSection === 'about' ? 'active' : ''}
              onClick={() => setCurrentSection('about')}
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              to="#portfolio"
              className={currentSection === 'portfolio' ? 'active' : ''}
              onClick={() => setCurrentSection('portfolio')}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="#contact"
              className={currentSection === 'contact' ? 'active' : ''}
              onClick={() => setCurrentSection('contact')}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="#resume"
              className={currentSection === 'resume' ? 'active' : ''}
              onClick={() => setCurrentSection('resume')}
            >
              Resume
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;