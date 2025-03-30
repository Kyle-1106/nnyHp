import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import './Layout.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';

const Layout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    // URLにハッシュがある場合、該当セクションまでスクロール
    if (location.hash) {
      const sectionId = location.hash.slice(1);
      const element = document.getElementById(sectionId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="layout">
      <header className="header">
        <div className="header-content">
          <Link to="/" className="logo">nny.illustration</Link>
          <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
            <ul>
              <li><a onClick={() => scrollToSection('top')}>Home</a></li>
              <li><a onClick={() => scrollToSection('about-section')}>About</a></li>
              <li><a onClick={() => scrollToSection('works-section')}>Works</a></li>
              <li><a onClick={() => scrollToSection('service-section')}>Service</a></li>
              <li><a onClick={() => scrollToSection('faq-section')}>FAQ</a></li>
            </ul>
            <div className="social-links">
              <a href="https://www.instagram.com/nny.illustration/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://www.tiktok.com/@nny.illustration" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTiktok} />
              </a>
            </div>
          </nav>
          <button className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-links">
            <a href="https://www.instagram.com/nny.illustration/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} /> Instagram: @nny.illustration
            </a>
            <a href="https://www.tiktok.com/@nny.illustration" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTiktok} /> TikTok: @nny.illustration
            </a>
          </div>
          <p className="copyright">&copy; 2024 nny.illustration All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout; 