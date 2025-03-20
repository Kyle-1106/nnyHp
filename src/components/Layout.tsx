import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import './Layout.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';

const Layout: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // セクションへのスクロール関数
  const scrollToSection = (sectionId: string) => {
    setMenuOpen(false);
    
    // 現在のページがホームページでない場合は、ホームページに遷移してからスクロール
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      // すでにホームページにいる場合は直接スクロール
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // ページ遷移後にスクロールを実行
  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const sectionId = location.state.scrollTo;
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
          // stateをリセット
          navigate(location.pathname, { replace: true, state: {} });
        }
      }, 100); // ページ読み込み後少し待ってからスクロール
    }
  }, [location, navigate]);

  return (
    <div className="layout">
      <header>
        <div className="header-container">
          <div className="logo">
            <Link to="/">nny.illustration</Link>
          </div>
          
          {/* ハンバーガーメニューボタン */}
          <div className={`hamburger-menu ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          
          {/* ナビゲーション */}
          <nav className={menuOpen ? 'open' : ''}>
            <ul className="nav-links">
              <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
              <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('works-section'); }}>Works</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('service-section'); }}>Service</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('faq-section'); }}>FAQ</a></li>
              <li><Link to="/policy" onClick={() => setMenuOpen(false)}>Policy</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <div className="footer-container">
          <div className="footer-logo">
            <h2>nny.illstration</h2>
          </div>
          <div className="footer-links">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><a href="#works-section">Works</a></li>
              <li><a href="#service-section">Service</a></li>
              <li><a href="#faq-section">FAQ</a></li>
              <li><Link to="/policy">Policy</Link></li>
            </ul>
          </div>
          <div className="social-links">
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} /> Instagram
            </a>
            <a href="https://tiktok.com/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTiktok} /> TikTok
            </a>
          </div>
          <p className="copyright">&copy; 2025 nny.illstration All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout; 