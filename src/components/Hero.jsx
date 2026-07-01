import React from 'react';
import { motion } from 'framer-motion';
import { Users, ChevronDown, ArrowRight } from 'lucide-react';
import heroImg from '../assets/hero.png';
import Slide from './Slide';

// Stagger container variant
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

// Each child fades in + blur + scale + translateY
const childVariants = {
  hidden: {
    opacity: 0,
    y: 22,
    filter: 'blur(8px)',
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    scale: 1,
    transition: {
      duration: 0.9,
      ease: [0.23, 1, 0.32, 1],
    },
  },
};

// Image variant — slightly different timing
const imageVariants = {
  hidden: {
    opacity: 0,
    scale: 0.92,
    filter: 'blur(12px)',
  },
  visible: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 1.2,
      ease: [0.23, 1, 0.32, 1],
      delay: 0.4,
    },
  },
};

// Team cards stagger
const teamContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.8,
    },
  },
};

const teamCardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: 'blur(6px)',
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.23, 1, 0.32, 1],
    },
  },
};

export default function Hero({ onStart }) {
  const members = [
    { name: 'Nguyễn Tiến Duy', role: 'Mở đầu & Lý thuyết độc quyền theo giáo trình' },
    { name: 'Nguyễn Huy Hoàng', role: 'Biểu hiện mới của độc quyền số: dữ liệu, thuật toán, nền tảng, hệ sinh thái & lợi nhuận siêu ngạch' },
    { name: 'Nguyễn Việt Thắng', role: 'Case Big Tech Mỹ: Google, Meta, Apple/Amazon/Microsoft' },
    { name: 'Phạm Minh Hiếu', role: 'Case Việt Nam & so sánh: Zalo, Grab, Shopee/MoMo' },
    { name: 'Phú', role: 'Game tương tác, kết luận & câu hỏi phản biện' }
  ];

  return (
    <section id="hero" className="hero-section-root">
      <Slide className="hero-title-slide">
      <div className="container hero-grid">
        <motion.div
          className="hero-info"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span className="tag" variants={childVariants}>
            Bài tập nhóm thuyết trình
          </motion.span>

          <motion.h1 className="hero-title" variants={childVariants}>
            <span className="gold-text-title font-cinzel">ĐỘC QUYỀN & CẠNH TRANH</span>
            <br />
            <span className="sub-title-serif">Trong Kỷ Nguyên Số</span>
          </motion.h1>

          <motion.p className="hero-desc" variants={childVariants}>
            Phân tích quá trình phát triển khách quan từ cạnh tranh tự do đến độc quyền theo học thuyết 
            Kinh tế chính trị Mác - Lênin và khảo sát thực tiễn sinh động qua các nền tảng công nghệ số: 
            <strong> Meta (Mỹ)</strong> & <strong>Zalo (Việt Nam)</strong>.
          </motion.p>

          <motion.div className="lenin-quote glass-panel" variants={childVariants}>
            <p className="quote-text italic-serif">
              "...tự do cạnh tranh đẻ ra tập trung sản xuất và sự tập trung sản xuất này, khi phát triển đến mức độ nhất định, lại dẫn tới độc quyền"
            </p>
            <p className="quote-author">— V.I. Lênin</p>
          </motion.div>

          <motion.div className="hero-actions" variants={childVariants}>
            <button className="primary-btn" onClick={onStart}>
              <span>Khám phá đề tài</span>
              <ArrowRight size={16} />
            </button>
            <div className="course-badge">
              <span className="course-code">MLN122</span>
              <span className="course-name">Kinh tế chính trị Mác - Lênin</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="image-wrapper">
            <img src={heroImg} alt="Monopoly Network Graphic" className="hero-main-img" />
          </div>
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        onClick={onStart}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
      >
        <span>Cuộn để khám phá tiếp</span>
        <ChevronDown className="bounce-arrow" size={14} />
      </motion.div>
      </Slide>

      <Slide className="hero-team-slide">
      <motion.div
        className="container team-container"
        variants={teamContainerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="team-header" variants={teamCardVariants}>
          <Users className="team-icon" size={14} />
          <h3>Thành viên thực hiện — Nhóm Tày Quá</h3>
        </motion.div>

        <div className="team-grid">
          {members.map((member, idx) => (
            <motion.div
              key={idx}
              className="member-card glass-panel"
              variants={teamCardVariants}
            >
              <h4 className="member-name">{member.name}</h4>
              <p className="member-role">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      </Slide>

      <style>{`
        .hero-section-root {
          position: relative;
        }

        .hero-title-slide {
          padding-top: 100px;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.25fr 0.75fr;
          gap: 60px;
          align-items: center;
          margin-bottom: 60px;
        }
        
        .hero-info {
          text-align: left;
        }
        
        .hero-title {
          font-size: 42px;
          line-height: 1.2;
          margin-bottom: 24px;
          font-weight: 500;
        }
        
        .gold-text-title {
          font-size: 44px;
          color: var(--color-gold);
          background: linear-gradient(135deg, var(--color-gold-light) 0%, var(--color-gold) 60%, var(--color-gold-dark) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: 0.05em;
        }
        
        .font-cinzel {
          font-family: var(--font-cinzel);
        }
        
        .sub-title-serif {
          font-family: var(--font-serif);
          font-weight: 400;
          color: var(--text-primary);
          font-size: 38px;
          font-style: italic;
        }
        
        .hero-desc {
          font-size: 15px;
          color: var(--text-secondary);
          margin-bottom: 28px;
          line-height: 1.7;
        }
        
        .hero-desc strong {
          color: var(--color-gold-light);
        }
        
        .lenin-quote {
          padding: 24px 30px;
          border-left: 2px solid var(--color-gold);
          margin-bottom: 30px;
          background: rgba(207, 168, 60, 0.02);
          border-radius: 0;
        }
        
        .quote-text {
          color: var(--text-secondary);
          font-size: 14.5px;
          line-height: 1.7;
        }
        
        .quote-author {
          text-align: right;
          font-weight: 600;
          color: var(--color-gold-light);
          margin-top: 8px;
          font-size: 12px;
          letter-spacing: 0.05em;
        }
        
        .hero-actions {
          display: flex;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
        }
        
        .primary-btn {
          background: var(--color-gold);
          border: 1px solid var(--color-gold);
          color: #05060a;
          padding: 12px 28px;
          border-radius: 2px;
          font-weight: 700;
          font-size: 14px;
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        
        .primary-btn:hover {
          transform: translateY(-2px);
          background: transparent;
          color: var(--color-gold);
          box-shadow: var(--shadow-glow);
        }
        
        .course-badge {
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(255, 255, 255, 0.01);
          border: 1px solid var(--border-color);
          padding: 10px 18px;
          border-radius: 2px;
        }
        
        .course-code {
          background: rgba(207, 168, 60, 0.1);
          color: var(--color-gold-light);
          border: 1px solid rgba(207, 168, 60, 0.2);
          font-weight: 700;
          font-size: 10px;
          padding: 2px 8px;
          border-radius: 2px;
          letter-spacing: 0.05em;
        }
        
        .course-name {
          font-size: 12.5px;
          font-weight: 500;
          color: var(--text-secondary);
        }
        
        .hero-visual {
          display: flex;
          justify-content: center;
          position: relative;
        }
        
        .image-wrapper {
          position: relative;
          z-index: 2;
          border-radius: 2px;
          overflow: hidden;
          box-shadow: var(--shadow-lg);
          border: 1px solid var(--border-color);
          width: 100%;
          max-width: 380px;
          aspect-ratio: 1 / 1;
        }
        
        .hero-main-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        
        /* Team Section */
        .team-container {
          width: 100%;
        }
        
        .team-header {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-bottom: 30px;
        }
        
        .team-header h3 {
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--text-secondary);
          font-weight: 600;
        }
        
        .team-icon {
          color: var(--color-gold);
        }
        
        .team-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 20px;
        }

        .member-card {
          padding: 24px 18px;
          text-align: center;
          border-radius: 2px;
          border: 1px solid var(--border-color);
          transition: all 0.3s ease;
        }
        
        .member-card:hover {
          border-color: var(--color-gold);
          transform: translateY(-4px);
          box-shadow: var(--shadow-glow);
        }
        
        .member-name {
          font-size: 13.5px;
          font-weight: 600;
          margin-bottom: 6px;
          font-family: var(--font-sans);
          color: var(--text-primary);
        }
        
        .member-role {
          font-size: 11.5px;
          color: var(--text-secondary);
          line-height: 1.5;
        }
        
        .scroll-indicator {
          margin-top: 60px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          color: var(--text-muted);
          font-size: 11px;
          cursor: pointer;
          transition: color 0.2s ease;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        
        .scroll-indicator:hover {
          color: var(--color-gold);
        }
        
        .bounce-arrow {
          animation: bounce 2s infinite;
        }
        
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-6px); }
          60% { transform: translateY(-3px); }
        }
        
        @media (max-width: 992px) {
          .hero-grid {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 40px;
          }
          .hero-info { text-align: center; }
          .hero-title { font-size: 34px; }
          .gold-text-title { font-size: 36px; }
          .sub-title-serif { font-size: 28px; }
          .hero-actions { justify-content: center; }
          .lenin-quote { border-left: none; border-top: 2px solid var(--color-gold); }
          .team-grid { grid-template-columns: repeat(2, 1fr); }
          .image-wrapper { margin: 0 auto; }
        }

        @media (max-width: 576px) {
          .team-grid { grid-template-columns: 1fr; }
          .hero-title { font-size: 28px; }
          .gold-text-title { font-size: 30px; }
          .sub-title-serif { font-size: 24px; }
        }
      `}</style>
    </section>
  );
}
