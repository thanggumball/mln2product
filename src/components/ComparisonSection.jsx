import React, { useState } from 'react';
import { Sparkles, ArrowLeftRight } from 'lucide-react';
import Slide from './Slide';

export default function ComparisonSection() {
  const [hoveredRow, setHoveredRow] = useState(null);

  const criteria = [
    {
      id: 'type',
      label: 'Loại nền tảng',
      meta: 'Big Tech toàn cầu',
      zalo: 'Nền tảng Việt Nam',
      color: 'rgba(212, 175, 55, 0.03)'
    },
    {
      id: 'products',
      label: 'Sản phẩm chính',
      meta: 'Facebook, Instagram, Messenger, WhatsApp',
      zalo: 'Zalo chat, Zalo OA, Zalo Mini App',
      color: 'rgba(212, 175, 55, 0.03)'
    },
    {
      id: 'users',
      label: 'Quy mô người dùng',
      meta: '3.58 tỷ Family Daily Active People toàn cầu năm 2025',
      zalo: '78.3 triệu monthly active users tại Việt Nam theo DataReportal 2026',
      color: 'rgba(212, 175, 55, 0.03)'
    },
    {
      id: 'coverage',
      label: 'Mức độ phủ tại Việt Nam',
      meta: 'Facebook ad reach tương đương 77.6% dân số; Messenger ad reach 57.8 triệu người',
      zalo: 'Zalo MAU tương đương 77.0% dân số và 91.4% người dùng internet Việt Nam',
      color: 'rgba(212, 175, 55, 0.03)'
    },
    {
      id: 'revenue',
      label: 'Nguồn thu chính',
      meta: 'Quảng cáo số dựa trên dữ liệu người dùng',
      zalo: 'Dịch vụ giá trị gia tăng, dịch vụ doanh nghiệp, hệ sinh thái Zalo',
      color: 'rgba(212, 175, 55, 0.03)'
    },
    {
      id: 'mechanism',
      label: 'Cơ chế độc quyền',
      meta: 'Dữ liệu lớn, thuật toán, quảng cáo, hệ sinh thái toàn cầu',
      zalo: 'Thói quen sử dụng, mạng lưới quan hệ, tích hợp dịch vụ nội địa',
      color: 'rgba(212, 175, 55, 0.03)'
    },
    {
      id: 'barriers',
      label: 'Rào cản cho đối thủ',
      meta: 'Đối thủ mới khó có dữ liệu và mạng lưới toàn cầu tương đương',
      zalo: 'Đối thủ mới khó thay thế thói quen dùng Zalo trong đời sống Việt Nam',
      color: 'rgba(212, 175, 55, 0.03)'
    },
    {
      id: 'conclusion',
      label: 'Kết luận',
      meta: 'Độc quyền nền tảng ở quy mô toàn cầu',
      zalo: 'Quyền lực nền tảng nội địa, chưa phải độc quyền tuyệt đối',
      color: 'rgba(212, 175, 55, 0.03)'
    }
  ];

  return (
    <section id="comparison" className="comparison-section-root">
      <Slide>
      <div className="container">
        <div className="section-header reveal">
          <span className="tag">Đối chiếu trực quan</span>
          <h2>So Sánh Meta và Zalo</h2>
          <p>
            Bảng đối chiếu chi tiết các tiêu chí hoạt động, nguồn thu và cơ chế tạo lập vị thế độc quyền nền tảng giữa hai mô hình.
          </p>
        </div>

        {/* Comparison Table Box */}
        <div className="table-wrapper glass-panel reveal">
          <div className="table-header-row">
            <div className="table-header-cell criteria-header">
              <ArrowLeftRight size={18} className="header-icon" />
              <span>Tiêu chí</span>
            </div>
            <div className="table-header-cell meta-header">
              <span className="gold-text">META</span>
              <span className="sub-title">Big Tech Toàn Cầu</span>
            </div>
            <div className="table-header-cell zalo-header">
              <span className="gold-text">ZALO</span>
              <span className="sub-title">Nền Tảng Việt Nam</span>
            </div>
          </div>

          <div className="table-body">
            {criteria.map((item) => {
              const isHovered = hoveredRow === item.id;
              return (
                <div 
                  key={item.id} 
                  className={`table-row ${isHovered ? 'row-hovered' : ''}`}
                  onMouseEnter={() => setHoveredRow(item.id)}
                  onMouseLeave={() => setHoveredRow(null)}
                  style={{ '--row-accent': item.color }}
                >
                  <div className="table-cell criteria-cell">
                    <strong>{item.label}</strong>
                  </div>
                  <div className="table-cell meta-cell">
                    <p>{item.meta}</p>
                  </div>
                  <div className="table-cell zalo-cell">
                    <p>{item.zalo}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      </Slide>

      {/* Marxist Summary Note */}
      <Slide>
      <div className="container">
        <div className="summary-note glass-panel reveal">
          <div className="note-icon-wrap">
            <Sparkles size={20} className="gold-text" />
          </div>
          <div className="note-content">
            <h4 className="gold-text">Nhận định chung dưới góc độ Kinh tế chính trị</h4>
            <p>
              Cả Meta và Zalo đều cho thấy xu hướng tất yếu: <strong>Cạnh tranh tự do dẫn đến tích tụ và tập trung sản xuất</strong>
              (trong kỷ nguyên số là tập trung lưu lượng truy cập, dữ liệu và người dùng). Dù ở quy mô toàn cầu hay nội địa,
              quyền lực nền tảng đang tạo ra các rào cản gia nhập cực lớn cho đối thủ mới.
            </p>
            <p>
              Tuy nhiên, cả hai đều không đạt tới độc quyền tuyệt đối, mà vẫn phải liên tục đổi mới, cạnh tranh với các đối thủ mới nổi
              (như TikTok trong trường hợp Meta, hay Telegram/Viber trong trường hợp Zalo).
            </p>
          </div>
        </div>
      </div>
      </Slide>

      <style>{`
        .comparison-section-root {
          background-color: var(--bg-secondary);
        }
        
        .table-wrapper {
          overflow: hidden;
          margin-bottom: 40px;
          border: 1px solid var(--border-color);
          border-radius: 4px;
        }
        
        .table-header-row {
          display: grid;
          grid-template-columns: 220px 1fr 1fr;
          background: rgba(5, 7, 12, 0.95);
          border-bottom: 1px solid var(--border-color);
        }
        
        .table-header-cell {
          padding: 20px 24px;
          text-align: left;
          font-weight: 700;
          font-size: 15px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        
        .criteria-header {
          color: var(--text-secondary);
          flex-direction: row;
          align-items: center;
          gap: 8px;
        }
        
        .header-icon {
          color: var(--color-gold);
        }
        
        .meta-header {
          border-left: 1px solid var(--border-color);
          background: rgba(212, 175, 55, 0.02);
        }
        
        .zalo-header {
          border-left: 1px solid var(--border-color);
          background: rgba(212, 175, 55, 0.02);
        }
        
        .table-header-cell .sub-title {
          font-size: 10px;
          font-weight: 500;
          color: var(--text-muted);
          margin-top: 4px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        
        .table-body {
          display: flex;
          flex-direction: column;
        }
        
        .table-row {
          display: grid;
          grid-template-columns: 220px 1fr 1fr;
          border-bottom: 1px solid var(--border-color);
          transition: all 0.2s ease;
        }
        
        .table-row:last-child {
          border-bottom: none;
        }
        
        .row-hovered {
          background: var(--row-accent);
          box-shadow: inset 0 0 12px rgba(212, 175, 55, 0.05);
        }
        
        .table-cell {
          padding: 20px 24px;
          text-align: left;
          font-size: 14px;
          display: flex;
          align-items: center;
          color: var(--text-secondary);
          line-height: 1.6;
        }
        
        .criteria-cell {
          color: var(--text-primary);
        }
        
        .meta-cell {
          border-left: 1px solid var(--border-color);
        }
        
        .zalo-cell {
          border-left: 1px solid var(--border-color);
        }
        
        .table-row:hover .table-cell {
          color: var(--text-primary);
        }
        
        /* Summary Note */
        .summary-note {
          display: flex;
          gap: 20px;
          padding: 40px;
          text-align: left;
          background: linear-gradient(135deg, rgba(212, 175, 55, 0.02) 0%, rgba(5, 7, 12, 0.9) 100%);
          border-left: 3px solid var(--color-gold);
          align-items: center;
        }
        
        .note-icon-wrap {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(212, 175, 55, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border: 1px solid var(--border-color);
        }
        
        .note-content h4 {
          font-family: var(--font-serif);
          font-size: 18px;
          margin-bottom: 8px;
        }
        
        .note-content p {
          font-size: 14.5px;
          color: var(--text-secondary);
          line-height: 1.7;
        }
        
        .note-content strong {
          color: var(--color-gold-light);
        }
        
        @media (max-width: 768px) {
          .table-header-row, .table-row {
            grid-template-columns: 1fr;
            border-bottom: 2px solid var(--border-color);
          }
          
          .table-header-cell, .table-cell {
            padding: 14px 20px;
          }
          
          .meta-header, .zalo-header, .meta-cell, .zalo-cell {
            border-left: none;
          }
          
          .meta-cell {
            background: rgba(212, 175, 55, 0.01);
            border-top: 1px dashed var(--border-color);
          }
          
          .zalo-cell {
            background: rgba(212, 175, 55, 0.01);
            border-top: 1px dashed var(--border-color);
          }
          
          .meta-cell::before {
            content: 'Meta: ';
            font-weight: 700;
            color: var(--color-gold);
            margin-right: 8px;
          }
          
          .zalo-cell::before {
            content: 'Zalo: ';
            font-weight: 700;
            color: var(--color-gold);
            margin-right: 8px;
          }
        }
      `}</style>
    </section>
  );
}
