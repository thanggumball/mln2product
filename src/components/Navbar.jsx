import React, { useState, useEffect } from 'react';
import { Shield } from 'lucide-react';
import fptLogo from '../assets/fpt-logo.webp';

export default function Navbar({ activePage, setActivePage }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar-container ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-content container">
        <div className="navbar-logo" onClick={() => setActivePage('content')}>
          <img src={fptLogo} alt="FPT University" className="fpt-logo" />
          <div className="logo-divider" />
          <Shield className="logo-icon" size={16} />
          <span className="logo-text">MLN122</span>
          <span className="logo-subtext">Độc quyền & Cạnh tranh</span>
        </div>

        <ul className="navbar-links">
          <li>
            <button
              className={`navbar-link-btn ${activePage === 'content' ? 'active' : ''}`}
              onClick={() => setActivePage('content')}
            >
              Nội Dung
            </button>
          </li>
        </ul>
      </div>
      <style>{`
        .navbar-container {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          transition: all 0.3s ease;
          border-bottom: 1px solid transparent;
          background: rgba(5, 6, 10, 0.4);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }
        
        .navbar-scrolled {
          background: rgba(5, 6, 10, 0.95);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border-color);
        }
        
        .navbar-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 64px;
        }
        
        .navbar-logo {
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
        }

        .fpt-logo {
          height: 32px;
          width: auto;
          display: block;
          flex-shrink: 0;
        }

        .logo-divider {
          width: 1px;
          height: 24px;
          background: rgba(255, 255, 255, 0.12);
          flex-shrink: 0;
          margin: 0 2px;
        }
        
        .logo-icon {
          color: var(--color-gold);
        }
        
        .logo-text {
          font-family: 'Cinzel', serif;
          font-weight: 600;
          font-size: 14px;
          color: var(--color-gold);
          letter-spacing: 0.1em;
        }
        
        .logo-subtext {
          font-family: var(--font-sans);
          font-weight: 500;
          font-size: 11px;
          color: var(--text-secondary);
          border-left: 1px solid rgba(255, 255, 255, 0.1);
          padding-left: 8px;
          margin-left: 2px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        
        .navbar-links {
          display: flex;
          list-style: none;
          gap: 20px;
          align-items: center;
        }
        
        .navbar-link-btn {
          background: transparent;
          border: none;
          color: var(--text-secondary);
          padding: 6px 12px;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          cursor: pointer;
          transition: all 0.2s ease;
          position: relative;
        }
        
        .navbar-link-btn:hover {
          color: var(--text-primary);
        }
        
        .navbar-link-btn.active {
          color: var(--color-gold);
        }
        
        .navbar-link-btn.active::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 12px;
          right: 12px;
          height: 1px;
          background: var(--color-gold);
        }
        
        .navbar-ai-btn {
          background: rgba(207, 168, 60, 0.08);
          border: 1px solid rgba(207, 168, 60, 0.25);
          color: var(--color-gold-light);
          padding: 6px 16px;
          border-radius: 2px;
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .navbar-ai-btn:hover {
          background: rgba(207, 168, 60, 0.15);
          border-color: var(--color-gold);
          color: #fff;
          box-shadow: var(--shadow-glow);
        }
        
        .navbar-ai-btn.active {
          background: var(--color-gold);
          border-color: var(--color-gold);
          color: #05060a;
        }
        
        @media (max-width: 576px) {
          .logo-subtext {
            display: none;
          }
          .navbar-links {
            gap: 10px;
          }
        }
      `}</style>
    </nav>
  );
}
