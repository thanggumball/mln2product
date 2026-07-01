import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Globe, Database, Cpu, Target, CircleDollarSign, RefreshCw, MessageSquare, Award, Users, Share2, Layers } from 'lucide-react';
import Slide from './Slide';

export default function CaseStudySection() {
  const [activeCase, setActiveCase] = useState('meta');
  const [hoveredLoopStep, setHoveredLoopStep] = useState(null);

  // Meta Stats & Loop data
  const metaStats = [
    { label: 'Người dùng hoạt động hàng ngày (Family of Apps)', value: '3.58 tỷ', detail: 'Hơn 44% dân số thế giới' },
    { label: 'Doanh thu năm 2025', value: '$200.97 tỷ USD', detail: 'Tương đương 5.000.000 tỷ VND' },
    { label: 'Doanh thu quảng cáo số', value: '$196.18 tỷ USD', detail: 'Chiếm 97.6% tổng doanh thu' }
  ];

  const metaLoopSteps = [
    { id: 1, title: 'Người Dùng Khổng Lồ', text: '3.58 tỷ người dùng hoạt động hàng ngày, dành hàng giờ trên các app.', icon: Users, color: '#d4af37' },
    { id: 2, title: 'Dữ Liệu Hành Vi Lớn', text: 'Mọi hoạt động, lượt thích, và bình luận tạo nên kho Big Data khổng lồ.', icon: Database, color: '#d4af37' },
    { id: 3, title: 'Thuật Toán Học Máy', text: 'AI phân tích dữ liệu để vẽ nên chân dung sở thích chính xác của từng cá nhân.', icon: Cpu, color: '#d4af37' },
    { id: 4, title: 'Quảng Cáo Nhắm Mục Tiêu', text: 'Các nhà quảng cáo đấu giá để phân phối quảng cáo siêu chính xác đến người dùng.', icon: Target, color: '#d4af37' },
    { id: 5, title: 'Doanh Thu Khổng Lồ', text: 'Hơn $196 tỷ USD thu về được dùng để mua lại đối thủ và tối ưu nền tảng.', icon: CircleDollarSign, color: '#d4af37' }
  ];

  // Zalo Stats & Data
  const zaloStats = [
    { label: 'Người dùng hàng tháng (MAU)', value: '78.3 triệu', detail: 'Theo báo cáo DataReportal 2026' },
    { label: 'Tỷ lệ phủ dân số', value: '77.0%', detail: 'Gần như toàn bộ người trưởng thành' },
    { label: 'Tỷ lệ phủ người dùng Internet', value: '91.4%', detail: 'Hạ tầng giao tiếp số cốt lõi' }
  ];

  const zaloEcosystem = [
    { name: 'Zalo Chat', role: 'Nhắn tin & Gọi điện cá nhân/nhóm', status: 'Cốt lõi' },
    { name: 'Zalo OA', role: 'Kênh truyền thông & chăm sóc khách hàng doanh nghiệp/công sở', status: 'Hạ tầng' },
    { name: 'Zalo Mini App', role: 'Tích hợp dịch vụ công, mua sắm trực tiếp không cần cài đặt', status: 'Sinh thái' },
    { name: 'Dịch Vụ Số', role: 'Zalo Pay, Zalo Cloud, Zalo Ads phục vụ thương mại nội địa', status: 'Tiện ích' }
  ];

  const zaloChartData = [
    { name: 'Dân số VN', percentage: 100, color: 'rgba(212, 175, 55, 0.15)' },
    { name: 'Internet users', percentage: 84.2, color: 'rgba(212, 175, 55, 0.4)' },
    { name: 'Zalo Users', percentage: 77.0, color: 'var(--color-gold)' }
  ];

  return (
    <section id="cases" className="case-section-root">
      <Slide>
      <div className="container">
        <div className="section-header reveal">
          <span className="tag">Thực tế sinh động</span>
          <h2>Độc Quyền Nền Tảng Trong Kỷ Nguyên Số</h2>
          <p>
            Phân tích quá trình tập trung tư bản và cơ chế tạo lập quyền lực nền tảng qua 2 Case Study thực tiễn:
            Big Tech Meta (Toàn cầu) và Zalo (Việt Nam).
          </p>
        </div>

        {/* Case Toggle Switch */}
        <div className="case-toggle glass-panel reveal">
          <button
            className={`toggle-btn ${activeCase === 'meta' ? 'active-case' : ''}`}
            onClick={() => setActiveCase('meta')}
          >
            <Globe size={16} />
            <span>Case Study 1: Meta (Mỹ)</span>
          </button>
          <button
            className={`toggle-btn ${activeCase === 'zalo' ? 'active-case' : ''}`}
            onClick={() => setActiveCase('zalo')}
          >
            <MessageSquare size={16} />
            <span>Case Study 2: Zalo (Việt Nam)</span>
          </button>
        </div>

        {/* CASE INTRO: META */}
        {activeCase === 'meta' && (
          <div className="case-content-wrapper fade-in">
            <div className="case-intro">
              <span className="case-badge-type">Big Tech Toàn Cầu</span>
              <h3 className="gold-text italic-serif">Meta Platforms — Hệ sinh thái thống trị sự chú ý</h3>
              <p>
                Meta (sở hữu Facebook, Instagram, Messenger và WhatsApp) đại diện cho quá trình tích tụ và tập trung tư bản
                ở mức độ cực kỳ cao trong thời đại số. Sức mạnh của Meta không đến từ các nhà máy hay hầm mỏ truyền thống,
                mà đến từ <strong>hiệu ứng mạng lưới toàn cầu</strong> và quyền kiểm soát hạ tầng giao tiếp xã hội.
              </p>
            </div>

            <div className="grid-3 stats-grid">
              {metaStats.map((stat, idx) => (
                <div key={idx} className="stat-card glass-panel">
                  <span className="stat-label">{stat.label}</span>
                  <span className="stat-value gold-text">{stat.value}</span>
                  <span className="stat-detail">{stat.detail}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CASE INTRO: ZALO */}
        {activeCase === 'zalo' && (
          <div className="case-content-wrapper fade-in">
            <div className="case-intro">
              <span className="case-badge-type">Nền Tảng Việt Nam</span>
              <h3 className="gold-text italic-serif">Zalo — Hạ tầng giao tiếp số quốc gia</h3>
              <p>
                Zalo ban đầu chỉ là ứng dụng nhắn tin OTT thuần túy ra mắt năm 2012, nhưng đã vươn lên thành một
                hệ sinh thái số quốc nội vô cùng mạnh mẽ. Sức mạnh của Zalo thể hiện rõ ràng cơ chế tạo lập quyền lực nền tảng
                thông qua <strong>Hiệu ứng mạng lưới cục bộ (Local Network Effects)</strong> và việc tích hợp sâu rộng vào đời sống xã hội.
              </p>
            </div>

            <div className="grid-3 stats-grid">
              {zaloStats.map((stat, idx) => (
                <div key={idx} className="stat-card glass-panel">
                  <span className="stat-label">{stat.label}</span>
                  <span className="stat-value gold-text">{stat.value}</span>
                  <span className="stat-detail">{stat.detail}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      </Slide>

      {/* CASE DETAIL: META — Loop Interactive Diagram */}
      {activeCase === 'meta' && (
        <Slide>
        <div className="container">
          <div className="loop-container glass-panel fade-in">
            <div className="loop-header">
              <RefreshCw className="loop-icon-title rotate-anim" size={20} />
              <h4>Vòng Lặp Quyền Lực Độc Quyền Của Meta</h4>
              <p>Di chuột qua các bước để xem cách Meta tích lũy quyền lực và doanh thu khép kín</p>
            </div>

            <div className="loop-flow">
              {metaLoopSteps.map((step) => {
                const Icon = step.icon;
                const isHovered = hoveredLoopStep === step.id;
                return (
                  <div
                    key={step.id}
                    className={`loop-node-card ${isHovered ? 'active' : ''}`}
                    onMouseEnter={() => setHoveredLoopStep(step.id)}
                    onMouseLeave={() => setHoveredLoopStep(null)}
                    style={{ '--step-color': step.color }}
                  >
                    <div className="node-number">{step.id}</div>
                    <div className="node-icon-bg">
                      <Icon size={22} />
                    </div>
                    <h5>{step.title}</h5>
                    <p className="node-text">{step.text}</p>
                  </div>
                );
              })}
            </div>

            <div className="loop-conclusion">
              <Award size={18} className="conclusion-icon" />
              <p>
                <strong>Góc nhìn Kinh tế chính trị:</strong> Meta không độc quyền tuyệt đối (vẫn có TikTok, YouTube cạnh tranh),
                nhưng nắm giữ lợi thế độc quyền nhóm (Oligopoly) cực kỳ vững chắc nhờ kiểm soát tài nguyên quan trọng nhất kỷ nguyên số:
                <strong> Dữ liệu người dùng & Thuật toán phân phối.</strong>
              </p>
            </div>
          </div>
        </div>
        </Slide>
      )}

      {/* CASE DETAIL: ZALO — Chart + Network Lock-in */}
      {activeCase === 'zalo' && (
        <Slide>
        <div className="container">
          <div className="grid-2 zalo-visual-grid fade-in">
            <div className="visual-card glass-panel">
              <h4>Độ Phủ Cực Lớn Tại Việt Nam (2026)</h4>
              <p className="visual-desc">So sánh tỷ lệ người dùng Zalo so với Dân số và người dùng Internet Việt Nam</p>
              <div className="chart-wrapper">
                <ResponsiveContainer width="100%" height={220}>
                  <BarChart data={zaloChartData} layout="vertical" margin={{ top: 10, right: 30, left: 10, bottom: 5 }}>
                    <XAxis type="number" domain={[0, 100]} unit="%" stroke="#64748b" fontSize={11} />
                    <YAxis type="category" dataKey="name" stroke="#64748b" fontSize={12} width={100} />
                    <Tooltip formatter={(value) => `${value}%`} contentStyle={{ background: '#0a0d14', border: '1px solid rgba(212,175,55,0.15)', color: '#fff' }} />
                    <Bar dataKey="percentage" radius={[0, 4, 4, 0]} barSize={20}>
                      {zaloChartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="visual-card glass-panel">
              <h4>Cơ Chế "Khóa Người Dùng Mềm" (Soft Lock-in)</h4>
              <div className="lockin-nodes">
                <div className="lockin-center-node">
                  <Share2 size={20} className="node-icon" />
                  <span>Zalo</span>
                </div>
                <div className="lockin-sub-node node-1">Gia đình & Bạn bè</div>
                <div className="lockin-sub-node node-2">Công sở & Đồng nghiệp</div>
                <div className="lockin-sub-node node-3">Trường học & Phụ huynh</div>
                <div className="lockin-sub-node node-4">Dịch vụ hành chính công</div>
              </div>
              <p className="lockin-text">
                Khi tất cả các mối quan hệ xã hội đều sử dụng Zalo, chi phí rời bỏ (Switching Cost) của người dùng
                trở nên cực kỳ cao. Mất Zalo đồng nghĩa với mất các kênh liên lạc thiết yếu trong đời sống hằng ngày.
              </p>
            </div>
          </div>
        </div>
        </Slide>
      )}

      {/* CASE DETAIL: ZALO — Ecosystem */}
      {activeCase === 'zalo' && (
        <Slide>
        <div className="container">
          <div className="zalo-ecosystem-box glass-panel fade-in">
            <div className="eco-header">
              <Layers className="eco-icon" size={20} />
              <h4>Hệ Sinh Thái Số Toàn Diện của Zalo</h4>
            </div>
            <div className="grid-2 eco-grid">
              {zaloEcosystem.map((item, idx) => (
                <div key={idx} className="eco-item">
                  <div className="eco-item-header">
                    <h5>{item.name}</h5>
                    <span className={`eco-status-tag ${item.status === 'Cốt lõi' ? 'core-tag' : item.status === 'Hạ tầng' ? 'infra-tag' : 'eco-tag'}`}>
                      {item.status}
                    </span>
                  </div>
                  <p>{item.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        </Slide>
      )}


      <style>{`
        .case-section-root {
          background-color: var(--bg-primary);
        }
        
        .case-toggle {
          display: flex;
          padding: 6px;
          border-radius: 4px;
          max-width: 540px;
          margin: 0 auto 50px;
        }
        
        .toggle-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: transparent;
          border: none;
          color: var(--text-secondary);
          padding: 10px 20px;
          border-radius: 2px;
          font-weight: 600;
          font-size: 13.5px;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .toggle-btn:hover {
          color: var(--text-primary);
          background: rgba(255, 255, 255, 0.02);
        }
        
        .toggle-btn.active-case {
          background: var(--color-gold);
          color: #05070c;
          font-weight: 700;
        }
        
        .case-content-wrapper {
          text-align: left;
        }
        
        .case-intro {
          margin-bottom: 30px;
        }
        
        .case-badge-type {
          display: inline-block;
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 2px;
          margin-bottom: 12px;
          background: rgba(212, 175, 55, 0.1);
          color: var(--color-gold-light);
          border: 1px solid var(--border-color);
          letter-spacing: 0.05em;
        }
        
        .case-intro h3 {
          font-size: 26px;
          margin-bottom: 12px;
        }
        
        .case-intro p {
          font-size: 15px;
          color: var(--text-secondary);
          line-height: 1.7;
        }
        
        .stats-grid {
          margin-bottom: 40px;
        }
        
        .stat-card {
          padding: 24px;
          text-align: center;
          border-radius: 4px;
        }
        
        .stat-card:hover {
          border-color: var(--color-gold);
        }
        
        .stat-label {
          display: block;
          font-size: 11px;
          color: var(--text-muted);
          margin-bottom: 8px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 600;
        }
        
        .stat-value {
          display: block;
          font-size: 32px;
          font-weight: 800;
          margin-bottom: 4px;
        }
        
        .stat-detail {
          display: block;
          font-size: 12.5px;
          color: var(--text-muted);
        }
        
        /* Meta Loop styles */
        .loop-container {
          padding: 40px 30px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 4px;
        }
        
        .loop-header {
          text-align: center;
          margin-bottom: 40px;
        }
        
        .loop-icon-title {
          color: var(--color-gold);
          margin-bottom: 8px;
        }
        
        .rotate-anim {
          animation: spin-slow 20s linear infinite;
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .loop-header h4 {
          font-size: 20px;
          margin-bottom: 6px;
          font-family: var(--font-serif);
        }
        
        .loop-header p {
          font-size: 13px;
          color: var(--text-muted);
        }
        
        .loop-flow {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 16px;
          margin-bottom: 30px;
        }
        
        .loop-node-card {
          background: rgba(255, 255, 255, 0.01);
          border: 1px solid var(--border-color);
          border-radius: 4px;
          padding: 24px 16px;
          text-align: center;
          transition: all 0.3s ease;
          cursor: default;
          position: relative;
        }
        
        .loop-node-card:hover, .loop-node-card.active {
          background: rgba(212, 175, 55, 0.04);
          border-color: var(--color-gold);
          transform: translateY(-5px);
          box-shadow: var(--shadow-glow);
        }
        
        .node-number {
          position: absolute;
          top: 10px;
          right: 12px;
          font-size: 11px;
          font-weight: 800;
          color: var(--text-muted);
        }
        
        .loop-node-card:hover .node-number {
          color: var(--color-gold-light);
        }
        
        .node-icon-bg {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.02);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 16px;
          color: var(--text-muted);
          transition: all 0.3s ease;
          border: 1px solid var(--border-color);
        }
        
        .loop-node-card:hover .node-icon-bg {
          background: var(--color-gold);
          color: #05070c;
          border-color: var(--color-gold);
        }
        
        .loop-node-card h5 {
          font-size: 14px;
          margin-bottom: 8px;
          color: var(--text-primary);
        }
        
        .node-text {
          font-size: 12px;
          color: var(--text-secondary);
          line-height: 1.5;
        }
        
        .loop-conclusion {
          display: flex;
          gap: 12px;
          background: rgba(212, 175, 55, 0.02);
          border-left: 3px solid var(--color-gold);
          padding: 16px;
          border-radius: 0 4px 4px 0;
          font-size: 14px;
          align-items: center;
        }
        
        .conclusion-icon {
          color: var(--color-gold);
          flex-shrink: 0;
        }
        
        /* Zalo visual grid */
        .zalo-visual-grid {
          margin-bottom: 40px;
          gap: 30px;
        }
        
        .visual-card {
          padding: 40px;
          min-height: 320px;
        }
        
        .visual-card h4 {
          font-family: var(--font-serif);
          font-size: 18px;
          margin-bottom: 4px;
        }
        
        .visual-desc {
          font-size: 12px;
          color: var(--text-muted);
          margin-bottom: 24px;
        }
        
        .chart-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 220px;
        }
        
        /* Lockin Nodes diagram */
        .lockin-nodes {
          position: relative;
          height: 180px;
          margin: 20px 0;
        }
        
        .lockin-center-node {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: var(--color-gold);
          color: #05070c;
          width: 70px;
          height: 70px;
          border-radius: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          font-weight: 700;
          box-shadow: var(--shadow-glow);
          z-index: 2;
        }
        
        .node-icon {
          margin-bottom: 2px;
        }
        
        .lockin-sub-node {
          position: absolute;
          background: rgba(255, 255, 255, 0.01);
          border: 1px solid var(--border-color);
          border-radius: 4px;
          padding: 6px 14px;
          font-size: 12px;
          color: var(--text-secondary);
          white-space: nowrap;
          z-index: 1;
          transition: all 0.3s ease;
        }
        
        .lockin-sub-node:hover {
          background: rgba(212, 175, 55, 0.08);
          border-color: var(--color-gold);
          color: var(--text-primary);
          transform: scale(1.05);
        }
        
        .node-1 { top: 10px; left: 10%; }
        .node-2 { top: 10px; right: 10%; }
        .node-3 { bottom: 10px; left: 8%; }
        .node-4 { bottom: 10px; right: 8%; }
        
        .lockin-text {
          font-size: 13.5px;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-top: 10px;
        }
        
        /* Zalo ecosystem box */
        .zalo-ecosystem-box {
          padding: 40px;
        }
        
        .eco-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 24px;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 12px;
        }
        
        .eco-header h4 {
          font-family: var(--font-serif);
          font-size: 18px;
        }
        
        .eco-icon {
          color: var(--color-gold);
        }
        
        .eco-grid {
          gap: 20px;
        }
        
        .eco-item {
          background: rgba(255, 255, 255, 0.01);
          border: 1px solid var(--border-color);
          padding: 18px;
          border-radius: 4px;
          text-align: left;
          transition: all 0.2s ease;
        }
        
        .eco-item:hover {
          border-color: var(--color-gold);
          background: rgba(212, 175, 55, 0.02);
        }
        
        .eco-item-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }
        
        .eco-item-header h5 {
          font-size: 14px;
          color: var(--text-primary);
        }
        
        .eco-status-tag {
          font-size: 9px;
          font-weight: 700;
          padding: 2px 8px;
          border-radius: 2px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          border: 1px solid rgba(212, 175, 55, 0.15);
        }
        
        .core-tag { background: rgba(212, 175, 55, 0.15); color: var(--color-gold-light); }
        .infra-tag { background: rgba(255, 255, 255, 0.03); color: var(--text-secondary); }
        .eco-tag { background: rgba(212, 175, 55, 0.15); color: var(--color-gold); }
        
        .eco-item p {
          font-size: 13px;
          color: var(--text-secondary);
          line-height: 1.5;
        }
        
        .fade-in {
          animation: fadeIn 0.4s ease-out;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @media (max-width: 992px) {
          .loop-flow {
            grid-template-columns: 1fr;
            gap: 12px;
          }
          
          .loop-node-card {
            display: flex;
            align-items: center;
            text-align: left;
            padding: 16px;
            gap: 16px;
          }
          
          .node-icon-bg {
            margin: 0;
            flex-shrink: 0;
          }
          
          .node-number {
            top: 50%;
            transform: translateY(-50%);
            right: 20px;
          }
        }
      `}</style>
    </section>
  );
}
