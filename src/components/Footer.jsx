import React from 'react';
import { ArrowUp, Heart, Shield } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer-container">
      <div className="container footer-content">
        <div className="footer-brand">
          <div className="brand-logo">
            <Shield className="logo-icon" size={20} />
            <span>Nhóm 3</span>
          </div>
          <p className="brand-desc">
            Sản phẩm học tập trực quan tương tác phục vụ thuyết trình chuyên đề môn học Kinh tế chính trị Mác - Lênin.
          </p>
        </div>

        <div className="footer-meta">
          <span>Khóa học: MLN122 - Đại học FPT</span>
          <span>© 2026 Nhóm 3. Thiết kế với <Heart size={12} className="heart-icon" /> và React.</span>
        </div>

        <button className="top-btn" onClick={scrollToTop} aria-label="Cuộn lên đầu trang">
          <ArrowUp size={16} />
        </button>
      </div>

      <style>{`
        .footer-container {
          background: #05080e;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding: 40px 0;
          margin-top: auto;
          position: relative;
        }
        
        .footer-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
          text-align: center;
        }
        
        .footer-brand {
          max-width: 500px;
        }
        
        .brand-logo {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-bottom: 12px;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 16px;
          color: var(--text-primary);
        }
        
        .brand-logo span {
          background: linear-gradient(135deg, #38bdf8 0%, #a855f7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .logo-icon {
          color: var(--color-accent);
        }
        
        .brand-desc {
          font-size: 13px;
          color: var(--text-secondary);
          line-height: 1.5;
        }
        
        .footer-meta {
          display: flex;
          flex-direction: column;
          gap: 6px;
          font-size: 12px;
          color: var(--text-muted);
        }
        
        .heart-icon {
          color: #f43f5e;
          display: inline;
          animation: heartbeat 1.5s infinite;
          vertical-align: middle;
        }
        
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }
        
        .top-btn {
          position: absolute;
          right: 24px;
          bottom: 24px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: var(--text-secondary);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .top-btn:hover {
          background: var(--color-accent);
          color: #070b13;
          border-color: var(--color-accent);
          transform: translateY(-2px);
        }
        
        @media (max-width: 768px) {
          .top-btn {
            position: static;
            margin-top: 10px;
          }
        }
      `}</style>
    </footer>
  );
}
