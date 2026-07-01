import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code, Heart, AlertCircle, CheckCircle2 } from 'lucide-react';

const fadeBlurUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30, filter: 'blur(8px)', scale: 0.97 },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 },
  transition: { duration: 0.9, ease: [0.23, 1, 0.32, 1], delay },
});

export default function AiUsagePage() {
  const [activeTool, setActiveTool] = useState('notebooklm');

  const tools = {
    notebooklm: {
      name: 'NotebookLM',
      provider: 'GOOGLE',
      status: 'Hỗ trợ tóm tắt',
      filename: 'notebooklm_research_sources.json',
      goal: 'TỔNG HỢP & TRA CỨU TÀI LIỆU HỌC TẬP',
      goalDesc: 'Phân tích tài liệu giáo trình và tìm kiếm nhanh các nội dung liên quan đến nguồn gốc độc quyền, cách thức vận hành và case study Meta/Zalo.',
      prompt: 'Upload tài liệu giáo trình "Kinh tế chính trị Mác - Lênin" chương 4. Truy vấn: Trích xuất khái niệm độc quyền, 3 nguồn gốc ra đời, các hình thức độc quyền lịch sử và số liệu thống kê liên quan.',
      output: `"Khái niệm độc quyền: sự liên minh giữa các doanh nghiệp lớn... Nguồn gốc: 1. Sự phát triển LLSX; 2. Cạnh tranh quyết liệt; 3. Khủng hoảng & Tín dụng. Các hình thức: Cartel, Syndicate, Trust, Consortium..."`,
      refinement: 'Nhóm tiến hành đối chiếu kết quả tóm tắt của NotebookLM với bản cứng PDF giáo trình trang 78-95 để đảm bảo trích dẫn chính xác số trang học thuật.'
    },
    gemini: {
      name: 'Gemini 3.5',
      provider: 'GOOGLE',
      status: 'Hỗ trợ thiết kế & code',
      filename: 'gemini_code_generation.sh',
      goal: 'PHÁT TRIỂN GIAO DIỆN WEB TƯƠNG TÁC',
      goalDesc: 'Xây dựng cấu trúc dự án React + Vite, lập trình các logic tương tác cho dòng thời gian độc quyền, case study và bộ câu hỏi trắc nghiệm.',
      prompt: `Write a React component for a monopoly forms interactive timeline. Use Playfair Display Serif for title, glassmorphism CSS, and custom states to highlight active elements like Cartel or Syndicate. Include Recharts component for Zalo.`,
      output: `import React, { useState } from 'react';
import { ResponsiveContainer, BarChart } from 'recharts';
// Component code implementing timeline state, charts, and CSS logic...`,
      refinement: 'Căn chỉnh CSS, chỉnh sửa kiểu chữ Serif, tích hợp các icon Lucide, viết tay các câu hỏi trắc nghiệm và điều chỉnh biểu đồ Recharts cho tương thích hoàn toàn trên mobile.'
    },
    claude: {
      name: 'Claude 3.5',
      provider: 'ANTHROPIC',
      status: 'Hỗ trợ hiệu chỉnh nội dung',
      filename: 'claude_content_editor.md',
      goal: 'BIÊN TẬP NỘI DUNG & SO SÁNH CASE STUDY',
      goalDesc: 'Biên soạn nội dung phân tích lý thuyết Mác - Lênin về độc quyền nền tảng và viết lời giải thích chi tiết cho bộ câu hỏi trắc nghiệm.',
      prompt: 'Hãy giúp tôi so sánh chi tiết Meta và Zalo dưới góc độ Kinh tế chính trị Mác-Lênin về các khía cạnh: loại nền tảng, cơ chế quyền lực, rào cản đối thủ. Hãy viết chi tiết, mạch lạc.',
      output: `### So sánh Meta và Zalo dưới góc độ Mác - Lênin:
- Meta: Quyền lực nền tảng quy mô toàn cầu. Cơ chế: Big Data & Thuật toán.
- Zalo: Quyền lực nền tảng nội địa. Cơ chế: Hiệu ứng mạng lưới cục bộ, Soft Lock-in...`,
      refinement: 'Nhóm tinh giản nội dung để đưa vào bảng so sánh đối chiếu của trang web, đảm bảo thông tin súc tích, dễ đọc và mang tính học thuật cao.'
    }
  };

  return (
    <div className="ai-page-container container">
      <motion.div className="ai-header text-left" {...fadeBlurUp(0.1)}>
        <span className="tag">Tính minh bạch học thuật</span>
        <h2 className="ai-page-title gold-text">AI Usage</h2>
        <p className="ai-page-desc">
          Nhóm sử dụng trí tuệ nhân tạo như một trợ lý kỹ thuật đắc lực nhằm hiện thực hóa các ý tưởng trình bày và tóm lược thông tin một cách trực quan, sinh động nhất.
        </p>
      </motion.div>

      <motion.div className="ai-layout-grid" {...fadeBlurUp(0.3)}>
        {/* Left Column: Selectors */}
        <div className="ai-tools-list">
          <span className="list-title">Công cụ được dùng</span>
          <div className="tools-cards-stack">
            {Object.keys(tools).map((key) => {
              const tool = tools[key];
              const isActive = activeTool === key;
              return (
                <div 
                  key={key} 
                  className={`tool-selector-card glass-panel ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveTool(key)}
                >
                  <div className="tool-card-info">
                    <h5>{tool.name}</h5>
                    <span>{tool.provider}</span>
                  </div>
                  <span className={`status-badge ${isActive ? 'active-badge' : ''}`}>{tool.status}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Code Terminal Dashboard */}
        <div className="ai-terminal-wrapper glass-panel">
          <div className="terminal-header">
            <div className="terminal-dots">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
            </div>
            <div className="terminal-filename">
              <Terminal size={14} className="term-icon" />
              <span>{tools[activeTool].filename}</span>
            </div>
            <span className="terminal-status">CONNECTED</span>
          </div>

          <div className="terminal-body">
            {/* Goal Section */}
            <div className="term-section">
              <span className="term-tag tag-goal">GOAL</span>
              <span className="term-section-title">MỤC ĐÍCH SỬ DỤNG</span>
              <p className="term-text bold-text">{tools[activeTool].goal}</p>
              <p className="term-text secondary-text">{tools[activeTool].goalDesc}</p>
            </div>

            {/* Prompt Section */}
            <div className="term-section">
              <span className="term-tag tag-prompt">PROMPT</span>
              <span className="term-section-title">YÊU CẦU & KỸ THUẬT TRUY VẤN</span>
              <div className="code-block prompt-block">
                <span className="prompt-symbol">&gt; initiate_query --tool={activeTool.toUpperCase()}</span>
                <p>prompt_payload: "{tools[activeTool].prompt}"</p>
              </div>
            </div>

            {/* Output Section */}
            <div className="term-section">
              <span className="term-tag tag-output">OUTPUT</span>
              <span className="term-section-title">KẾT QUẢ ĐẦU RA</span>
              <div className="code-block output-block">
                <pre>{tools[activeTool].output}</pre>
              </div>
            </div>

            {/* Refinement Section */}
            <div className="term-section refinement-section">
              <span className="term-tag tag-refine">REFINEMENT</span>
              <span className="term-section-title">NHÓM HIỆU CHỈNH (HUMAN REFINEMENT)</span>
              <div className="refine-content">
                <CheckCircle2 size={16} className="refine-icon" />
                <p>{tools[activeTool].refinement}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>


      <style>{`
        .ai-page-container {
          padding-top: 100px;
          padding-bottom: 60px;
          animation: fadeIn 0.4s ease-out;
        }
        
        .ai-header {
          margin-bottom: 40px;
          max-width: 600px;
        }
        
        .ai-page-title {
          font-size: 38px;
          margin-top: 8px;
          margin-bottom: 12px;
        }
        
        .ai-page-desc {
          font-size: 15px;
          color: var(--text-secondary);
          line-height: 1.6;
        }
        
        .ai-layout-grid {
          display: grid;
          grid-template-columns: 320px 1fr;
          gap: 30px;
          align-items: start;
        }
        
        .ai-tools-list {
          text-align: left;
        }
        
        .list-title {
          display: block;
          font-size: 11px;
          font-weight: 700;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 15px;
        }
        
        .tools-cards-stack {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        
        .tool-selector-card {
          padding: 20px;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          gap: 12px;
          text-align: left;
        }
        
        .tool-selector-card.active {
          border-color: var(--color-gold);
          background: rgba(212, 175, 55, 0.05);
          box-shadow: var(--shadow-glow);
        }
        
        .tool-card-info h5 {
          font-size: 16px;
          color: var(--text-primary);
          margin-bottom: 4px;
        }
        
        .tool-card-info span {
          font-size: 10px;
          font-weight: 700;
          color: var(--text-muted);
          letter-spacing: 0.05em;
        }
        
        .status-badge {
          align-self: flex-start;
          font-size: 11px;
          font-weight: 500;
          color: var(--text-secondary);
          background: rgba(255, 255, 255, 0.03);
          padding: 4px 10px;
          border-radius: 4px;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        
        .status-badge.active-badge {
          background: rgba(212, 175, 55, 0.1);
          color: var(--color-gold-light);
          border-color: rgba(212, 175, 55, 0.2);
        }
        
        /* Terminal styles */
        .ai-terminal-wrapper {
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 8px;
          overflow: hidden;
          background: #03050a;
          box-shadow: var(--shadow-lg);
          text-align: left;
        }
        
        .terminal-header {
          background: #080c14;
          padding: 12px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }
        
        .terminal-dots {
          display: flex;
          gap: 6px;
        }
        
        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
        
        .dot-red { background: #ef4444; }
        .dot-yellow { background: #f59e0b; }
        .dot-green { background: #10b981; }
        
        .terminal-filename {
          display: flex;
          align-items: center;
          gap: 6px;
          color: var(--text-secondary);
          font-size: 12px;
          font-family: monospace;
        }
        
        .term-icon {
          color: var(--color-gold);
        }
        
        .terminal-status {
          font-size: 10px;
          font-weight: 700;
          color: #10b981;
          letter-spacing: 0.05em;
        }
        
        .terminal-body {
          padding: 30px;
          display: flex;
          flex-direction: column;
          gap: 30px;
          font-family: var(--font-sans);
        }
        
        .term-section {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        
        .term-tag {
          align-self: flex-start;
          font-size: 9px;
          font-weight: 800;
          padding: 2px 6px;
          border-radius: 2px;
          color: #fff;
          letter-spacing: 0.05em;
        }
        
        .tag-goal { background: #3b82f6; }
        .tag-prompt { background: #a855f7; }
        .tag-output { background: #ec4899; }
        .tag-refine { background: #10b981; }
        
        .term-section-title {
          font-size: 11px;
          font-weight: 700;
          color: var(--text-muted);
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        
        .term-text {
          font-size: 14px;
        }
        
        .term-text.bold-text {
          font-weight: 700;
          color: var(--text-primary);
        }
        
        .term-text.secondary-text {
          color: var(--text-secondary);
          line-height: 1.5;
        }
        
        .code-block {
          padding: 16px;
          background: #060910;
          border: 1px solid rgba(255, 255, 255, 0.04);
          border-radius: 6px;
          font-family: monospace;
          font-size: 12px;
          line-height: 1.5;
        }
        
        .prompt-block {
          color: #a855f7;
        }
        
        .prompt-symbol {
          color: #10b981;
          display: block;
          margin-bottom: 6px;
        }
        
        .output-block {
          color: #e2e8f0;
          max-height: 200px;
          overflow-y: auto;
          white-space: pre-wrap;
        }
        
        .refine-content {
          display: flex;
          gap: 10px;
          background: rgba(16, 185, 129, 0.03);
          border-left: 3px solid #10b981;
          padding: 12px;
          border-radius: 0 4px 4px 0;
        }
        
        .refine-icon {
          color: #10b981;
          flex-shrink: 0;
          margin-top: 2px;
        }
        
        .refine-content p {
          font-size: 13px;
          color: var(--text-secondary);
          line-height: 1.5;
        }
        
        @media (max-width: 900px) {
          .ai-layout-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
