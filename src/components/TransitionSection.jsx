import React, { useState } from 'react';
import { Sparkles, ArrowRight, Zap, Target, Users, Scale } from 'lucide-react';
import Slide from './Slide';

export default function TransitionSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: 'Tự do Cạnh tranh',
      subtitle: 'Quy luật sinh tồn',
      icon: Scale,
      color: '#d4af37',
      details: 'Trong nền sản xuất hàng hóa tư bản chủ nghĩa, cạnh tranh tự do là động lực thúc đẩy cải tiến kỹ thuật. Nhưng chính cạnh tranh khốc liệt dẫn đến sự phân hóa sâu sắc: kẻ mạnh thắng thế, kẻ yếu phá sản hoặc bị thôn tính.'
    },
    {
      title: 'Tích tụ & Tập trung',
      subtitle: 'Phình to quy mô',
      icon: Target,
      color: '#d4af37',
      details: 'Tích tụ sản xuất (tăng quy mô bằng tích lũy tư bản tự thân) và Tập trung sản xuất (sáp nhập các doanh nghiệp nhỏ thành lớn) diễn ra mạnh mẽ. Lực lượng sản xuất phát triển yêu cầu quy mô quản lý lớn hơn.'
    },
    {
      title: 'Đại Xí nghiệp Ra đời',
      subtitle: 'Cách mạng Công nghiệp',
      icon: Zap,
      color: '#d4af37',
      details: 'Vào cuối thế kỷ XIX, các tiến bộ kỹ thuật (luyện kim, cơ khí, năng lượng) thúc đẩy hình thành các xí nghiệp quy mô khổng lồ. Chi phí vận hành lớn khiến chỉ các tập đoàn lớn mới có thể tồn tại.'
    },
    {
      title: 'Thỏa thuận liên minh',
      subtitle: 'Tránh tổn hại chung',
      icon: Users,
      color: '#d4af37',
      details: 'Khi số lượng xí nghiệp lớn trong mỗi ngành trở nên ít đi, việc tiếp tục cạnh tranh gay gắt sẽ gây thiệt hại nặng nề cho tất cả các bên. Họ nhận ra dễ dàng thỏa thuận và bắt tay nhau hơn là đối đầu.'
    },
    {
      title: 'Độc quyền hình thành',
      subtitle: 'Thống trị thị trường',
      icon: Sparkles,
      color: '#d4af37',
      details: 'Các thỏa thuận liên minh chính thức ra đời dưới dạng các tổ chức độc quyền, thâu tóm sản xuất và tiêu thụ, áp đặt giá cả độc quyền để thu lợi nhuận siêu ngạch. Cạnh tranh tự do chính thức chuyển hóa thành độc quyền.'
    }
  ];

  return (
    <section id="transition" className="transition-section-root">
      <Slide>
      <div className="container">
        <div className="section-header reveal">
          <span className="tag">Quy luật khách quan</span>
          <h2>Cạnh Tranh Dẫn Đến Độc Quyền</h2>
          <p>
            Phân tích logic phát triển khách quan từ Tự do Cạnh tranh đến Độc quyền theo học thuyết của các nhà kinh điển Mác-Lênin.
          </p>
        </div>

        {/* Quotes & Prediction Box */}
        <div className="prediction-box glass-panel reveal">
          <div className="pred-content">
            <h4 className="gold-text">Dự báo của C. Mác và Ph. Ăngghen</h4>
            <p>
              Các nhà kinh điển đã chỉ ra rằng tự do cạnh tranh đẻ ra tích tụ và tập trung sản xuất,
              và sự tập trung sản xuất đó khi phát triển đến một trình độ nhất định sẽ dẫn thẳng đến độc quyền.
              V.I. Lênin sau đó đã tổng kết thực tiễn sinh động của chủ nghĩa tư bản giai đoạn cuối thế kỷ XIX - đầu thế kỷ XX
              để hoàn thiện lý luận về Chủ nghĩa tư bản độc quyền.
            </p>
          </div>
        </div>
      </div>
      </Slide>

      {/* Interactive Step-by-Step Flow */}
      <Slide>
      <div className="container">
        <div className="flow-container reveal">
          <h3 className="flow-title gold-text">Tiến trình chuyển hóa (5 Giai đoạn)</h3>
          <p className="flow-subtitle italic-serif">Nhấp vào từng bước để theo dõi tiến trình sáp nhập và độc chiếm thị trường</p>
          
          <div className="flow-steps">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeStep === idx;
              const isPast = idx < activeStep;
              return (
                <React.Fragment key={idx}>
                  <div 
                    className={`flow-node glass-panel ${isActive ? 'active' : ''} ${isPast ? 'past' : ''}`}
                    onClick={() => setActiveStep(idx)}
                    style={{ '--node-color': step.color }}
                  >
                    <div className="node-icon-wrap">
                      <Icon size={20} />
                    </div>
                    <span className="node-index">Bước {idx + 1}</span>
                    <span className="node-title">{step.title}</span>
                  </div>
                  {idx < steps.length - 1 && (
                    <div className={`flow-connector ${isPast ? 'past' : ''}`}>
                      <ArrowRight size={16} />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          <div className="flow-details-panel glass-panel">
            <div className="details-header">
              <span className="details-badge">
                {steps[activeStep].subtitle}
              </span>
              <h3>Giai đoạn {activeStep + 1}: {steps[activeStep].title}</h3>
            </div>
            <p className="details-text">{steps[activeStep].details}</p>
          </div>
        </div>
      </div>
      </Slide>

      {/* HỆ THỐNG TÍN DỤNG — kết thúc phần Trần Hoàng Duy */}
      <Slide>
      <div className="container">
        <div className="section-header reveal">
          <span className="tag">Giáo trình · Trang 79–80 · Mục 4.1.1.1</span>
          <h2 className="font-cinzel">Hệ Thống Tín Dụng</h2>
          <p>Nhân tố trực tiếp thúc đẩy tập trung sản xuất và tạo tiền đề cho sự ra đời của các tổ chức độc quyền</p>
        </div>

        <div className="credit-content-box glass-panel reveal d-100">
          <p className="credit-body">
            Sự phát triển của hệ thống tín dụng, đặc biệt thông qua các công ty cổ phần, đã thúc đẩy tập trung
            sản xuất và tạo tiền đề trực tiếp cho sự ra đời của các tổ chức độc quyền.
          </p>
          <span className="credit-ref-label">Giáo trình Kinh tế chính trị Mác - Lênin — Trang 80</span>
        </div>

        <div className="credit-quote-box glass-panel reveal d-300">
          <blockquote className="credit-blockquote italic-serif">
            "...tự do cạnh tranh đẻ ra tập trung sản xuất và sự tập trung sản xuất này, khi phát triển đến
            mức độ nhất định, lại dẫn tới độc quyền"
          </blockquote>
          <p className="credit-quote-attr">— V.I. Lênin</p>
        </div>
      </div>
      </Slide>



      <style>{`
        .transition-section-root {
          background-color: var(--bg-primary);
        }

        .credit-content-box {
          padding: 36px 40px;
          margin-bottom: 24px;
          border-left: 2px solid var(--color-gold);
        }
        .credit-body {
          font-size: 16px;
          line-height: 1.8;
          color: var(--text-secondary);
          margin-bottom: 14px;
        }
        .credit-ref-label {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-muted);
        }
        .credit-quote-box {
          padding: 32px 40px;
          border-left: 2px solid rgba(207, 168, 60, 0.4);
        }
        .credit-blockquote {
          font-size: 18px;
          line-height: 1.7;
          color: var(--color-gold-light);
          margin-bottom: 16px;
        }
        .credit-quote-attr {
          text-align: right;
          font-size: 13px;
          font-weight: 600;
          color: var(--color-gold);
          letter-spacing: 0.05em;
        }
        
        .prediction-box {
          padding: 40px;
          margin-bottom: 50px;
          border-left: 3px solid var(--color-gold);
          text-align: left;
        }
        
        .prediction-box h4 {
          font-family: var(--font-serif);
          font-size: 20px;
          margin-bottom: 12px;
        }
        
        .prediction-box p {
          font-size: 14.5px;
          color: var(--text-secondary);
          line-height: 1.7;
        }
        
        .flow-container {
          margin: 60px 0;
        }
        
        .flow-title {
          font-size: 22px;
          font-weight: 700;
          text-align: center;
          margin-bottom: 8px;
        }
        
        .flow-subtitle {
          font-size: 14px;
          color: var(--text-secondary);
          text-align: center;
          margin-bottom: 40px;
        }
        
        .flow-steps {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 40px;
          overflow-x: auto;
          padding: 10px 0;
          gap: 12px;
        }
        
        .flow-node {
          flex: 1;
          padding: 24px 16px;
          cursor: pointer;
          min-width: 150px;
          text-align: center;
          transition: all 0.3s ease;
          border: 1px solid var(--border-color);
          border-radius: 4px;
        }
        
        .flow-node:hover {
          transform: translateY(-4px);
          border-color: var(--color-gold);
        }
        
        .flow-node.active {
          background: rgba(212, 175, 55, 0.08);
          border-color: var(--color-gold);
          box-shadow: var(--shadow-glow);
        }
        
        .flow-node.past {
          border-color: rgba(212, 175, 55, 0.3);
        }
        
        .node-icon-wrap {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.02);
          color: var(--text-muted);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 16px;
          transition: all 0.3s ease;
          border: 1px solid var(--border-color);
        }
        
        .flow-node.active .node-icon-wrap {
          background: rgba(212, 175, 55, 0.15);
          color: var(--color-gold-light);
          border-color: var(--color-gold);
        }
        
        .flow-node.past .node-icon-wrap {
          color: var(--color-gold-light);
          border-color: var(--color-gold-dark);
        }
        
        .node-index {
          display: block;
          font-size: 10px;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-bottom: 6px;
          font-weight: 700;
          letter-spacing: 0.05em;
        }
        
        .node-title {
          font-size: 13.5px;
          font-weight: 600;
          color: var(--text-secondary);
        }
        
        .flow-node.active .node-title {
          color: var(--text-primary);
        }
        
        .flow-connector {
          color: var(--color-gold-dark);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          flex-shrink: 0;
          opacity: 0.5;
        }
        
        .flow-connector.past {
          color: var(--color-gold-light);
          opacity: 1;
        }
        
        .flow-details-panel {
          padding: 40px;
          text-align: left;
          animation: fadeIn 0.4s ease;
          background: var(--bg-secondary);
          border-left: 3px solid var(--color-gold);
        }
        
        .details-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 16px;
          flex-wrap: wrap;
        }
        
        .details-badge {
          font-size: 10px;
          text-transform: uppercase;
          font-weight: 700;
          padding: 4px 12px;
          border-radius: 4px;
          background: rgba(212, 175, 55, 0.1);
          color: var(--color-gold-light);
          border: 1px solid var(--border-color);
          letter-spacing: 0.05em;
        }
        
        .details-header h3 {
          font-size: 20px;
          color: var(--text-primary);
          font-family: var(--font-serif);
        }
        
        .details-text {
          font-size: 15px;
          color: var(--text-secondary);
          line-height: 1.7;
        }
        
        .relationship-box {
          padding: 40px;
          background: linear-gradient(135deg, rgba(212, 175, 55, 0.02) 0%, rgba(5, 7, 12, 0.9) 100%);
          border-left: 3px solid var(--color-gold-dark);
          text-align: left;
          margin-top: 40px;
        }
        
        .relationship-box h4 {
          font-family: var(--font-serif);
          font-size: 18px;
          margin-bottom: 12px;
        }
        
        .relationship-box p {
          font-size: 14.5px;
          color: var(--text-secondary);
          line-height: 1.7;
        }
        
        .relationship-box strong {
          color: var(--color-gold-light);
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @media (max-width: 992px) {
          .flow-steps {
            flex-direction: column;
            gap: 12px;
            align-items: stretch;
          }
          
          .flow-node {
            min-width: 100%;
            display: flex;
            align-items: center;
            text-align: left;
            padding: 16px 20px;
            gap: 16px;
          }
          
          .node-icon-wrap {
            margin: 0;
          }
          
          .flow-connector {
            transform: rotate(90deg);
            margin: 4px 0;
          }
          
          .node-index {
            margin-bottom: 0;
          }
        }
      `}</style>
    </section>
  );
}
