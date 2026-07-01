import React, { useState } from 'react';
import {
  Globe, Building2, Banknote, Send, Map, Flag,
  Users, Landmark, SlidersHorizontal,
  TrendingDown, Database, Network, Lock, Zap, Award
} from 'lucide-react';
import Slide from './Slide';

export default function ModernMonopolySection() {
  const [activeForm, setActiveForm] = useState('capital');

  const newForms = [
    {
      key: 'capital',
      label: 'Tích tụ & tập trung tư bản',
      icon: Building2,
      summary: 'Vượt ra ngoài biên giới một quốc gia',
      desc: 'Độc quyền hiện nay không chỉ tồn tại trong phạm vi một quốc gia, mà phát triển thành các công ty xuyên quốc gia, các tập đoàn đa ngành như Concern và Conglomerate. Doanh nghiệp vừa và nhỏ vẫn tồn tại, nhưng nhiều doanh nghiệp bị phụ thuộc vào các tập đoàn lớn về vốn, công nghệ, thị trường hoặc đơn đặt hàng.'
    },
    {
      key: 'finance',
      label: 'Vai trò tư bản tài chính',
      icon: Banknote,
      summary: 'Mở rộng ra ngoài ngân hàng — công nghiệp',
      desc: 'Tư bản tài chính hiện nay không chỉ gắn với ngân hàng và công nghiệp, mà còn mở rộng sang dịch vụ, bảo hiểm, phần mềm, tài chính và công nghệ. Thông qua cổ phiếu, chế độ ủy nhiệm, ngân hàng đa quốc gia và trung tâm tài chính thế giới, các tập đoàn lớn chi phối doanh nghiệp và thị trường bằng quyền lực tài chính.'
    },
    {
      key: 'export',
      label: 'Xuất khẩu tư bản',
      icon: Send,
      summary: 'Đa dạng hình thức, đa chiều dòng vốn',
      desc: 'Dòng vốn không chỉ đi từ nước phát triển sang nước kém phát triển, mà còn diễn ra mạnh giữa các nước tư bản phát triển với nhau. Hình thức xuất khẩu tư bản cũng đa dạng hơn: đầu tư trực tiếp, dịch vụ, công nghệ, chất xám, hợp đồng xây dựng — chuyển giao và hoạt động của công ty xuyên quốc gia.'
    },
    {
      key: 'market',
      label: 'Phân chia thị trường thế giới',
      icon: Map,
      summary: 'Qua liên minh kinh tế, không chỉ tranh giành trực tiếp',
      desc: 'Các tập đoàn độc quyền không chỉ tranh giành thị trường theo kiểu cũ, mà còn thông qua công ty xuyên quốc gia, liên minh kinh tế khu vực, hiệp định thương mại tự do và các tổ chức kinh tế quốc tế để mở rộng ảnh hưởng.'
    },
    {
      key: 'territory',
      label: 'Phân chia lãnh thổ ảnh hưởng',
      icon: Flag,
      summary: '"Biên giới mềm" thay cho thuộc địa trực tiếp',
      desc: 'Các cường quốc tư bản không còn chủ yếu chiếm thuộc địa trực tiếp, mà sử dụng vốn, công nghệ, thương mại, ngoại giao và "biên giới mềm" để chi phối các quốc gia khác.'
    }
  ];

  const stateForms = [
    {
      icon: Users,
      title: 'Quan hệ nhân sự',
      desc: 'Nhà nước tư sản thực hiện cơ chế thỏa hiệp, phân chia quyền lực giữa các nhóm tư bản, tránh để một thế lực tư bản độc tôn hoàn toàn.'
    },
    {
      icon: Landmark,
      title: 'Sở hữu nhà nước',
      desc: 'Nhà nước tham gia sâu hơn vào kinh tế qua ngân sách, dự trữ quốc gia, cổ phần trong ngân hàng/công ty lớn, đầu tư công, nghiên cứu khoa học và hạ tầng — nhưng vẫn có thể phục vụ lợi ích tập đoàn độc quyền qua dự án công, trợ cấp và cứu trợ khủng hoảng.'
    },
    {
      icon: SlidersHorizontal,
      title: 'Công cụ điều tiết kinh tế',
      desc: 'Nhà nước dùng ngân sách, lãi suất, trợ cấp, giá cả, tỷ giá, mua sắm công và viện trợ quốc tế để ổn định kinh tế — nhưng các công cụ này vẫn gắn với bảo vệ kinh tế tư bản và lợi ích tập đoàn độc quyền.'
    }
  ];

  const bigTechEdges = [
    { icon: TrendingDown, title: 'Chi phí biên thấp', desc: 'Sản phẩm số phục vụ thêm người dùng mới mà chi phí không tăng tương ứng.' },
    { icon: Database, title: 'Dữ liệu người dùng khổng lồ', desc: 'Dữ liệu giúp tối ưu quảng cáo và cải thiện thuật toán liên tục.' },
    { icon: Network, title: 'Hiệu ứng mạng lưới', desc: 'Nền tảng càng đông người dùng thì càng có giá trị, càng khó cạnh tranh.' },
    { icon: Lock, title: 'Hệ sinh thái khép kín', desc: 'Người dùng và doanh nghiệp khó rời bỏ nền tảng khi đã gắn sâu vào hệ sinh thái dịch vụ.' }
  ];

  return (
    <section id="modern" className="modern-monopoly-root">

      {/* MỞ ĐẦU */}
      <Slide>
        <div className="container">
          <div className="section-header reveal">
            <span className="tag">Biểu hiện mới của độc quyền</span>
            <h2>Độc Quyền Trong Điều Kiện Hiện Nay</h2>
          </div>

          <div className="mm-intro-box glass-panel reveal">
            <div className="mm-intro-icon">
              <Globe size={28} />
            </div>
            <p>
              Trong điều kiện hiện nay, độc quyền và độc quyền nhà nước trong chủ nghĩa tư bản
              <strong> không mất đi, mà chuyển sang những hình thức mới</strong>. Những biểu hiện này gắn với
              toàn cầu hóa, cách mạng khoa học – công nghệ, sự phát triển của công ty xuyên quốc gia,
              tư bản tài chính và vai trò điều tiết của nhà nước tư sản.
            </p>
          </div>
        </div>
      </Slide>

      {/* 5 BIỂU HIỆN MỚI CỦA ĐỘC QUYỀN */}
      <Slide>
        <div className="container">
          <div className="section-header reveal">
            <span className="tag">Độc quyền tư bản</span>
            <h2>5 Biểu Hiện Mới Của Độc Quyền</h2>
            <p>Click vào từng biểu hiện để xem phân tích chi tiết.</p>
          </div>

          <div className="mm-tabs glass-panel reveal">
            <div className="mm-tab-nav">
              {newForms.map((form, idx) => {
                const Icon = form.icon;
                return (
                  <button
                    key={form.key}
                    className={`mm-tab-btn ${activeForm === form.key ? 'active' : ''}`}
                    onClick={() => setActiveForm(form.key)}
                  >
                    <Icon size={18} />
                    <span className="mm-tab-step">Thứ {idx + 1}</span>
                    <span className="mm-tab-label">{form.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="mm-tab-content fade-in">
              {newForms.filter((f) => f.key === activeForm).map((form) => (
                <React.Fragment key={form.key}>
                  <h3 className="gold-text font-cinzel">{form.label}</h3>
                  <p className="mm-tab-summary italic-serif">{form.summary}</p>
                  <p className="mm-tab-desc">{form.desc}</p>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </Slide>

      {/* BIỂU HIỆN MỚI CỦA ĐỘC QUYỀN NHÀ NƯỚC */}
      <Slide>
        <div className="container">
          <div className="section-header reveal">
            <span className="tag">Độc quyền nhà nước</span>
            <h2>Biểu Hiện Mới Của Độc Quyền Nhà Nước</h2>
          </div>

          <div className="grid-3 mm-state-grid reveal">
            {stateForms.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="mm-state-card glass-panel">
                  <div className="mm-state-icon">
                    <Icon size={22} />
                  </div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </Slide>

      {/* KẾT LUẬN PHẦN ĐỘC QUYỀN / ĐQNN */}
      <Slide>
        <div className="container">
          <div className="mm-conclusion-box glass-panel reveal">
            <h4 className="gold-text">Kết luận</h4>
            <p>
              Độc quyền trong chủ nghĩa tư bản hiện đại <strong>không biến mất</strong>, mà chuyển sang các hình thức mới
              như công ty xuyên quốc gia, tập đoàn đa ngành, tư bản tài chính, xuất khẩu tư bản, phân chia thị trường
              và sự điều tiết của nhà nước tư sản.
            </p>
            <p>
              Chủ nghĩa tư bản có vai trò thúc đẩy sản xuất phát triển, nhưng cũng có giới hạn do mục tiêu lợi nhuận,
              bất bình đẳng và mâu thuẫn cơ bản trong chính nó.
            </p>
          </div>
        </div>
      </Slide>

      {/* LỢI NHUẬN SIÊU NGẠCH — KHÁI NIỆM */}
      <Slide>
        <div className="container">
          <div className="section-header reveal">
            <span className="tag">Khái niệm cốt lõi</span>
            <h2>Lợi Nhuận Siêu Ngạch</h2>
          </div>

          <div className="mm-concept-box glass-panel reveal">
            <Zap size={26} className="gold-text mm-concept-icon" />
            <blockquote className="mm-concept-quote italic-serif">
              Phần lợi nhuận vượt trội mà doanh nghiệp có được khi áp dụng công nghệ, kỹ thuật hoặc cách tổ chức
              sản xuất tốt hơn, làm cho giá trị cá biệt của hàng hoá thấp hơn giá trị xã hội.
            </blockquote>
            <p className="mm-concept-ref">— Từ khái niệm giá trị thặng dư siêu ngạch trong giáo trình</p>
            <p className="mm-concept-desc">
              Nói đơn giản: doanh nghiệp sản xuất với chi phí thấp hơn đối thủ nhưng vẫn bán theo giá thị trường,
              nên thu được lợi nhuận cao hơn bình thường. Trong kinh tế số, Big Tech cũng tạo lợi nhuận siêu ngạch
              theo logic này, nhưng lợi thế của họ không đến từ máy móc mà đến từ
              <strong> dữ liệu, thuật toán, trí tuệ nhân tạo, điện toán đám mây, hệ sinh thái người dùng và hiệu ứng mạng lưới</strong>.
            </p>
          </div>
        </div>
      </Slide>

      {/* 4 LỢI THẾ CỦA BIG TECH + KẾT LUẬN */}
      <Slide>
        <div className="container">
          <div className="section-header reveal">
            <span className="tag">Vì sao Big Tech dễ tạo siêu lợi nhuận</span>
            <h2>4 Lợi Thế Tạo Lợi Nhuận Siêu Ngạch</h2>
          </div>

          <div className="mm-edge-grid reveal">
            {bigTechEdges.map((edge, idx) => {
              const Icon = edge.icon;
              return (
                <div key={idx} className="mm-edge-card glass-panel">
                  <span className="mm-edge-num">{idx + 1}</span>
                  <div className="mm-edge-icon">
                    <Icon size={22} />
                  </div>
                  <h5>{edge.title}</h5>
                  <p>{edge.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="mm-final-note reveal">
            <Award size={18} className="mm-final-icon" />
            <p>
              Lợi nhuận siêu ngạch thông thường chỉ mang tính tạm thời, vì công nghệ lan rộng khiến đối thủ bắt chước được.
              Nhưng với Big Tech, lợi thế kéo dài hơn nhờ dữ liệu lớn, thương hiệu mạnh, vốn lớn, mạng lưới người dùng,
              hệ sinh thái dịch vụ và khả năng mua lại đối thủ tiềm năng — khiến <strong>lợi nhuận siêu ngạch chuyển hoá thành
              lợi nhuận độc quyền cao</strong>: siêu ngạch đến từ ưu thế công nghệ và dữ liệu, độc quyền đến từ khả năng
              duy trì ưu thế đó bằng quyền lực thị trường.
            </p>
          </div>
        </div>
      </Slide>

      <style>{`
        .modern-monopoly-root {
          background-color: var(--bg-primary);
        }

        /* Intro box */
        .mm-intro-box {
          display: flex;
          align-items: center;
          gap: 28px;
          padding: 40px;
          max-width: 820px;
          margin: 0 auto;
          border-left: 3px solid var(--color-gold);
          text-align: left;
        }

        .mm-intro-icon {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: rgba(207, 168, 60, 0.08);
          color: var(--color-gold);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border: 1px solid var(--border-color);
        }

        .mm-intro-box p {
          font-size: 15px;
          color: var(--text-secondary);
          line-height: 1.75;
        }

        .mm-intro-box strong {
          color: var(--color-gold-light);
        }

        /* Tab switcher */
        .mm-tabs {
          padding: 40px;
          border-radius: 4px;
        }

        .mm-tab-nav {
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 15px;
          gap: 10px;
          overflow-x: auto;
        }

        .mm-tab-btn {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          background: transparent;
          border: 1px solid transparent;
          color: var(--text-secondary);
          padding: 12px 10px;
          cursor: pointer;
          min-width: 130px;
          border-radius: 2px;
          transition: all 0.2s ease;
        }

        .mm-tab-btn:hover {
          background: rgba(255, 255, 255, 0.02);
        }

        .mm-tab-btn.active {
          background: rgba(207, 168, 60, 0.06);
          border-color: var(--border-color);
          color: var(--color-gold-light);
        }

        .mm-tab-step {
          font-size: 9px;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          font-weight: 700;
          color: var(--text-muted);
        }

        .mm-tab-btn.active .mm-tab-step {
          color: var(--color-gold);
        }

        .mm-tab-label {
          font-size: 12.5px;
          font-weight: 600;
          text-align: center;
        }

        .mm-tab-content {
          padding-top: 36px;
          text-align: left;
        }

        .mm-tab-content h3 {
          font-size: 22px;
          margin-bottom: 8px;
        }

        .mm-tab-summary {
          font-size: 14px;
          color: var(--color-gold-light);
          margin-bottom: 20px;
        }

        .mm-tab-desc {
          font-size: 14.5px;
          color: var(--text-secondary);
          line-height: 1.75;
        }

        /* State monopoly 3-card grid */
        .mm-state-grid {
          margin-top: 10px;
        }

        .mm-state-card {
          padding: 30px;
          text-align: left;
          border-radius: 4px;
        }

        .mm-state-icon {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(207, 168, 60, 0.06);
          color: var(--color-gold);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
          border: 1px solid var(--border-color);
        }

        .mm-state-card h4 {
          font-size: 16px;
          margin-bottom: 10px;
        }

        .mm-state-card p {
          font-size: 13.5px;
          color: var(--text-secondary);
          line-height: 1.65;
        }

        /* Conclusion box */
        .mm-conclusion-box {
          padding: 40px;
          max-width: 760px;
          margin: 0 auto;
          text-align: left;
          background: linear-gradient(135deg, rgba(207, 168, 60, 0.03) 0%, rgba(5, 6, 10, 0.95) 100%);
        }

        .mm-conclusion-box h4 {
          font-family: var(--font-serif);
          font-size: 18px;
          margin-bottom: 14px;
        }

        .mm-conclusion-box p {
          font-size: 14.5px;
          color: var(--text-secondary);
          line-height: 1.75;
          margin-bottom: 12px;
        }

        .mm-conclusion-box p:last-child {
          margin-bottom: 0;
        }

        .mm-conclusion-box strong {
          color: var(--color-gold-light);
        }

        /* Lợi nhuận siêu ngạch concept */
        .mm-concept-box {
          padding: 44px;
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }

        .mm-concept-icon {
          margin-bottom: 18px;
        }

        .mm-concept-quote {
          font-size: 19px;
          line-height: 1.7;
          color: var(--text-primary);
          margin-bottom: 16px;
        }

        .mm-concept-ref {
          font-size: 12.5px;
          color: var(--color-gold-light);
          font-weight: 600;
          letter-spacing: 0.05em;
          margin-bottom: 28px;
        }

        .mm-concept-desc {
          font-size: 14.5px;
          color: var(--text-secondary);
          line-height: 1.75;
          text-align: left;
          border-top: 1px solid var(--border-color);
          padding-top: 24px;
        }

        .mm-concept-desc strong {
          color: var(--text-primary);
        }

        /* Big Tech edges grid */
        .mm-edge-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin: 30px 0;
        }

        .mm-edge-card {
          padding: 26px 20px;
          text-align: center;
          border-radius: 4px;
          position: relative;
        }

        .mm-edge-num {
          position: absolute;
          top: 16px;
          right: 18px;
          font-size: 22px;
          font-weight: 800;
          color: rgba(207, 168, 60, 0.12);
        }

        .mm-edge-icon {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.02);
          color: var(--color-gold);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 16px;
          border: 1px solid var(--border-color);
        }

        .mm-edge-card h5 {
          font-size: 14px;
          margin-bottom: 8px;
          color: var(--text-primary);
        }

        .mm-edge-card p {
          font-size: 12.5px;
          color: var(--text-secondary);
          line-height: 1.55;
        }

        .mm-final-note {
          display: flex;
          gap: 14px;
          align-items: flex-start;
          background: rgba(207, 168, 60, 0.02);
          border-left: 3px solid var(--color-gold);
          padding: 22px 24px;
          border-radius: 0 4px 4px 0;
        }

        .mm-final-icon {
          color: var(--color-gold);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .mm-final-note p {
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.7;
        }

        .mm-final-note strong {
          color: var(--color-gold-light);
        }

        @media (max-width: 900px) {
          .mm-edge-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .mm-intro-box {
            flex-direction: column;
            text-align: center;
            border-left: none;
            border-top: 2px solid var(--color-gold);
          }
        }

        @media (max-width: 600px) {
          .mm-edge-grid {
            grid-template-columns: 1fr;
          }
          .mm-tab-nav {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
}
