import React, { useState, useEffect, useRef } from 'react';
import { HelpCircle, Landmark, ShieldAlert, Award, TrendingUp, Layers, CheckCircle2, Terminal } from 'lucide-react';
import Slide from './Slide';

export default function TheorySection() {
  const [selectedForm, setSelectedForm] = useState('cartel');
  const roomRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Monitor scroll for 3D room zoom effect
  useEffect(() => {
    const handleScroll = () => {
      if (!roomRef.current) return;
      const rect = roomRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const totalScrollable = rect.height - windowHeight;
      if (totalScrollable <= 0) return;
      
      const scrolled = -rect.top;
      const progress = Math.min(Math.max(scrolled / totalScrollable, 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sources = [
    {
      title: 'Phát triển Lực lượng sản xuất',
      desc: 'Sự phát triển của lực lượng sản xuất dưới tác động của tiến bộ khoa học – kỹ thuật, thúc đẩy các xí nghiệp quy mô lớn xuất hiện. Việc áp dụng các phát minh công nghệ mới đòi hỏi lượng vốn khổng lồ mà các xí nghiệp nhỏ không thể đáp ứng.',
      tagline: 'Sức ép từ cách mạng công nghiệp thứ 2 và thứ 3',
      icon: TrendingUp,
      years: 'THẾ KỶ XIX - XX',
      color: '#cfa83c',
      isOdd: true
    },
    {
      title: 'Cạnh tranh quyết liệt',
      desc: 'Cạnh tranh gay gắt buộc các doanh nghiệp nhỏ phá sản hoặc bị thâu tóm, các doanh nghiệp lớn còn lại phải chủ động liên kết, thỏa thuận với nhau để tránh những thiệt hại tài chính hủy diệt và cùng nhau lũng đoạn thị trường.',
      tagline: 'Cạnh tranh tự do đẻ ra tập trung sản xuất',
      icon: ShieldAlert,
      years: 'QUY LUẬT CẠNH TRANH',
      color: '#cfa83c',
      isOdd: false
    },
    {
      title: 'Khủng hoảng & Tín dụng',
      desc: 'Cuộc khủng hoảng kinh tế 1873 đẩy nhanh quá trình phá sản xí nghiệp nhỏ, làm sạch thị trường để tập trung tư bản vào tay số ít đại xí nghiệp. Song song, hệ thống ngân hàng và tín dụng phát triển trở thành đòn bẩy tài chính cực mạnh thúc đẩy sáp nhập.',
      tagline: 'Đòn bẩy đẩy nhanh tích tụ tư bản',
      icon: Landmark,
      years: 'HỆ THỐNG TÍN DỤNG',
      color: '#cfa83c',
      isOdd: true
    }
  ];

  const monopolyForms = {
    cartel: {
      name: 'Các-ten (Cartel)',
      vietnamese: 'Liên minh thỏa thuận',
      level: 'Thấp (Liên kết lỏng lẻo)',
      desc: 'Hình thức liên minh độc quyền về ký kết hiệp định thỏa thuận giá cả, quy mô sản xuất, thị trường tiêu thụ, kỳ hạn thanh toán...',
      autonomy: 'Các doanh nghiệp tham gia giữ nguyên độc lập về cả sản xuất và thương mại (lưu thông).',
      vulnerability: 'Dễ bị phá vỡ nếu một thành viên tự ý hạ giá hoặc tăng sản lượng để chiếm lợi thế riêng.',
    },
    syndicate: {
      name: 'Xanh-đi-ca (Syndicate)',
      vietnamese: 'Liên minh lưu thông chung',
      level: 'Trung bình (Liên kết lưu thông)',
      desc: 'Hình thức liên minh độc quyền tập trung việc mua nguyên liệu và bán hàng hóa vào một đầu mối chung.',
      autonomy: 'Các doanh nghiệp mất đi tính độc lập thương mại (mua - bán phải qua ban quản trị), nhưng vẫn độc lập về sản xuất.',
      vulnerability: 'Tạo sức ép mua rẻ bán đắt mạnh hơn, nhưng mâu thuẫn nội bộ về phân chia lợi nhuận vẫn gay gắt.',
    },
    trust: {
      name: 'Tờ-rót (Trust)',
      vietnamese: 'Liên hợp sản xuất & tiêu thụ',
      level: 'Cao (Sáp nhập hoàn toàn)',
      desc: 'Hình thức liên minh độc quyền cao hơn, trong đó các doanh nghiệp sáp nhập hoàn toàn thành một công ty cổ phần chung.',
      autonomy: 'Mất hoàn toàn tính độc lập về cả sản xuất lẫn thương mại. Các chủ doanh nghiệp trở thành cổ đông nhận cổ tức.',
      vulnerability: 'Được quản lý tập trung bởi hội đồng trị sự, có sức mạnh lũng đoạn cực lớn trên thị trường.',
    },
    consortium: {
      name: 'Công-xoóc-xi-om (Consortium)',
      vietnamese: 'Liên minh đa ngành dọc',
      level: 'Rất cao (Liên kết dọc)',
      desc: 'Hình thức tổ chức độc quyền có quy mô khổng lồ, liên kết các doanh nghiệp thuộc nhiều ngành khác nhau nhưng có liên quan về mặt kỹ thuật sản xuất.',
      autonomy: 'Các doanh nghiệp lớn giữ độc lập sản xuất nhưng phụ thuộc chặt chẽ về tài chính vào nhóm đứng đầu.',
      vulnerability: 'Thường do một nhóm tư bản tài chính chi phối, kiểm soát chuỗi cung ứng khép kín từ nguyên liệu đến thành phẩm.',
    },
    modern: {
      name: 'Concern & Conglomerate',
      vietnamese: 'Tập đoàn tài chính đa ngành hiện đại',
      level: 'Tối cao (Hệ sinh thái hiện đại)',
      desc: 'Các hình thức độc quyền đa ngành xuất hiện trong điều kiện hiện nay. Concern liên kết hàng trăm xí nghiệp đa ngành dựa trên chi phối tài chính. Conglomerate liên kết cực rộng các ngành không liên quan kỹ thuật sản xuất.',
      autonomy: 'Độc lập pháp lý tương đối ở cấp con nhưng chịu sự điều phối chiến lược và dòng vốn từ tập đoàn mẹ.',
      vulnerability: 'Tạo nên sức mạnh độc quyền nền tảng, thâu tóm dòng vốn và triệt tiêu đối thủ cạnh tranh mới qua thâu tóm (M&A).',
    }
  };

  return (
    <div id="theory" className="theory-container-root">

      {/* 3D SCROLL ROOM SECTION */}
      {/* data-scroll-block="center" → PresentationNav scrolls to the midpoint of
          this 180vh slide so scrollProgress≈0.5 and the card is fully visible */}
      <Slide noPad data-scroll-block="center">
      <div ref={roomRef} className="s3d-room">
        <div className="s3d-sticky">
          <div className="s3d-ambient"></div>
          <div className="s3d-perspective">
            <div 
              className="s3d-card"
              style={{
                transform: `translate3d(0, 0, ${scrollProgress * 700 - 350}px) rotateX(${scrollProgress * 15 - 5}deg)`,
                opacity: scrollProgress < 0.15 ? scrollProgress * 6.6 : scrollProgress > 0.85 ? (1 - scrollProgress) * 6.6 : 1,
              }}
            >
              <div className="s3d-card-tint"></div>
              {/* Scanline Animation */}
              <div 
                className="s3d-scan" 
                style={{ 
                  transform: `translateX(${(scrollProgress * 200) - 50}%)`,
                  opacity: scrollProgress > 0.1 && scrollProgress < 0.9 ? 1 : 0 
                }}
              ></div>
              
              <div className="s3d-caption">
                <span className="s3d-eyebrow">Khái niệm cốt lõi</span>
                <h3 className="s3d-heading gold-text font-cinzel">ĐỘC QUYỀN LÀ GÌ?</h3>
                <span className="s3d-sub">Kinh tế chính trị Mác - Lênin</span>
              </div>
              
              <div className="s3d-card-body">
                <blockquote className="concept-blockquote italic-serif">
                  "Độc quyền là sự liên minh giữa các doanh nghiệp lớn, có khả năng thâu tóm việc sản xuất và tiêu thụ một số loại hàng hoá, có khả năng định ra giá cả độc quyền, nhằm thu lợi nhuận độc quyền cao."
                </blockquote>
                <p className="concept-ref">— Giáo trình Kinh tế chính trị Mác - Lênin (Trang 78)</p>
              </div>
            </div>
          </div>
          <div className="s3d-vignette"></div>
        </div>
      </div>
      </Slide>

      {/* SPLIT SCROLL PAIRS */}
      <section className="scroll-pairs-section">
        <Slide>
        <div className="container">
          <div className="section-header reveal">
            <span className="tag">Nguồn gốc độc quyền</span>
            <h2>Vì Sao Độc Quyền Xuất Hiện?</h2>
            <p>Phân tích 3 nguồn gốc kinh tế - xã hội chính đưa nền kinh tế tư bản chuyển đổi từ cạnh tranh tự do lên độc quyền.</p>
          </div>
        </div>
        </Slide>

        {sources.map((src, idx) => {
          const Icon = src.icon;
          const visRevealClass = src.isOdd ? 'reveal-left' : 'reveal-right';
          const contentRevealClass = src.isOdd ? 'reveal-right' : 'reveal-left';
          return (
            <Slide key={idx}>
              <div className={`pr ${src.isOdd ? 'pr--odd' : 'pr--even'}`}>
                {/* Visual Stack Column */}
                <div className={`pr-vis ${visRevealClass}`}>
                  <div className="pr-art-stack">
                    <div className="pr-art-slot">
                      <div className="pr-art-portrait">
                        <Icon size={40} className="pr-art-icon" />
                        <span className="pr-art-initial italic-serif">{src.title.charAt(0)}</span>
                        <span className="pr-art-label">{src.title}</span>
                        <span className="pr-art-years">{src.years}</span>
                      </div>
                    </div>
                  </div>
                  {/* Transition overlays for borders */}
                  <div className={`pr-vis-fade ${src.isOdd ? 'pr-vis-fade--left' : 'pr-vis-fade--right'}`}></div>
                </div>

                {/* Content Text Column */}
                <div className={`pr-content ${contentRevealClass}`}>
                  <span className="pr-school gold-text">{src.years}</span>
                  <h3 className="pr-title font-cinzel">{src.title}</h3>
                  <p className="pr-tagline italic-serif">"{src.tagline}"</p>
                  <div className="pr-body">
                    <p>{src.desc}</p>
                  </div>
                </div>
              </div>
            </Slide>
          );
        })}
      </section>

      {/* MECHANISM SECTION */}
      <section className="mechanism-section-root">
        <Slide>
        <div className="container">
          <div className="section-header reveal">
            <span className="tag">Cơ chế kinh tế</span>
            <h2>Cách Thức Vận Hành & Mục Đích</h2>
            <p>Cách thức các tổ chức độc quyền áp đặt ý chí kinh tế của mình và mục tiêu tối cao của liên minh.</p>
          </div>

          <div className="grid-2 mechanism-grid">
            <div className="mechanism-card glass-panel reveal d-100">
              <span className="card-num">01</span>
              <h4>Cách thức vận hành</h4>
              <p className="mech-highlight gold-text italic-serif">Áp đặt giá cả độc quyền</p>
              <ul className="mech-list">
                <li><strong>Giá bán độc quyền cao</strong> — cao hơn giá trị hàng hoá</li>
                <li><strong>Giá mua độc quyền thấp</strong> — mua nguyên liệu của người sản xuất nhỏ với giá dưới giá trị</li>
              </ul>
            </div>
            <div className="mechanism-card glass-panel reveal d-300">
              <span className="card-num">02</span>
              <h4>Mục đích tối cao</h4>
              <p className="mech-highlight gold-text italic-serif">Lợi nhuận độc quyền cao</p>
              <p className="mech-desc">
                Nguồn thu khổng lồ vượt mức lợi nhuận bình quân, có nguồn gốc từ lao động không công của
                công nhân trong xí nghiệp độc quyền và việc chiếm đoạt một phần giá trị thặng dư của các nhà sản xuất nhỏ.
              </p>
            </div>
          </div>
        </div>
        </Slide>
      </section>

      {/* FORMS OF MONOPOLY (Timeline switcher) */}
      <section className="forms-section-root">
        <Slide>
        <div className="container">
          <div className="section-header reveal">
            <span className="tag">Lịch sử tiến hóa</span>
            <h2>Sự Tiến Hóa Của Các Hình Thức Độc Quyền</h2>
            <p>Click vào từng hình thức để xem mức độ liên kết và sự thay đổi quyền tự chủ qua các giai đoạn lịch sử.</p>
          </div>

          <div className="timeline-container glass-panel reveal">
            <div className="timeline-nav">
              {Object.keys(monopolyForms).map((key) => (
                <button
                  key={key}
                  className={`timeline-btn ${selectedForm === key ? 'active' : ''}`}
                  onClick={() => setSelectedForm(key)}
                >
                  <span className="nav-step">{key === 'modern' ? 'Hiện đại' : key.toUpperCase()}</span>
                  <span className="nav-name">{monopolyForms[key].name.split(' (')[0]}</span>
                </button>
              ))}
            </div>

            <div className="timeline-content fade-in">
              <div className="content-main">
                <div className="content-header">
                  <h3 className="gold-text font-cinzel">{monopolyForms[selectedForm].name}</h3>
                  <span className="level-badge">{monopolyForms[selectedForm].level}</span>
                </div>
                <p className="sub-text-gold italic-serif">{monopolyForms[selectedForm].vietnamese}</p>

                <div className="detail-section">
                  <h5>Mô tả hình thức:</h5>
                  <p className="detail-desc">{monopolyForms[selectedForm].desc}</p>
                </div>

                <div className="grid-2 detail-sub-grid">
                  <div className="sub-detail-card">
                    <span className="sub-detail-title">Tính tự chủ của doanh nghiệp:</span>
                    <p>{monopolyForms[selectedForm].autonomy}</p>
                  </div>
                  <div className="sub-detail-card">
                    <span className="sub-detail-title">Đặc tính / Hạn chế:</span>
                    <p>{monopolyForms[selectedForm].vulnerability}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </Slide>

        {/* State Monopoly advanced card */}
        <Slide>
        <div className="container">
          <div className="state-monopoly-box glass-panel reveal">
            <div className="state-badge">
              <Landmark size={20} className="gold-text" />
              <span>Phát triển nâng cao</span>
            </div>
            <div className="state-content">
              <h4 className="gold-text font-cinzel">Chủ nghĩa Tư bản Độc quyền Nhà nước</h4>
              <p>
                Sự kết hợp sức mạnh của các tổ chức độc quyền tư nhân với sức mạnh của nhà nước tư sản thành một
                thiết chế thống nhất nhằm duy trì sự thống trị của giai cấp tư sản và bảo vệ hệ thống tư bản chủ nghĩa.
                Đây không phải là một phương thức sản xuất mới, mà là một nấc thang phát triển mới của Chủ nghĩa tư bản độc quyền.
              </p>
            </div>
          </div>
        </div>
        </Slide>
      </section>


      <style>{`
        .theory-container-root {
          background-color: var(--bg-primary);
        }
        
        .s3d-room {
          position: relative;
          height: 180vh;
        }
        
        .s3d-sticky {
          position: sticky;
          top: 0;
          height: 100vh;
          overflow: hidden;
          background: #05060a;
        }
        
        .s3d-ambient {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 50%, rgba(207, 168, 60, 0.03) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }
        
        .s3d-perspective {
          perspective: 1000px;
          perspective-origin: 50% 45%;
          position: absolute;
          inset: 0;
          display: grid;
          place-items: center;
          z-index: 2;
        }
        
        .s3d-card {
          width: min(90vw, 980px);
          height: min(54vh, 580px);
          position: relative;
          transform-origin: 50% 80%;
          will-change: transform, opacity;
          border-radius: 2px;
          overflow: hidden;
          border: 1px solid var(--border-color);
          background: #0a0b12;
          box-shadow: 0 40px 120px rgba(0, 0, 0, 0.9);
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 40px 60px;
          text-align: center;
        }
        
        .s3d-card-tint {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(5, 6, 10, 0.1), rgba(5, 6, 10, 0.85));
          z-index: 1;
          pointer-events: none;
        }
        
        .s3d-scan {
          position: absolute;
          inset-block: 0;
          left: 0;
          width: 2px;
          background: linear-gradient(to bottom, transparent, rgba(207, 168, 60, 0.5), transparent);
          filter: blur(1px);
          z-index: 3;
          will-change: transform, opacity;
          transition: transform 0.1s linear;
        }
        
        .s3d-caption {
          position: absolute;
          top: 5vh;
          left: 0;
          right: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          z-index: 10;
        }
        
        .s3d-eyebrow {
          font-size: 10px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--color-gold);
          opacity: 0.8;
          font-weight: 700;
        }
        
        .s3d-heading {
          font-family: var(--font-cinzel);
          font-size: clamp(24px, 3.5vw, 42px);
          font-weight: 500;
          margin: 0;
        }
        
        .s3d-sub {
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.35);
          margin-top: 2px;
        }
        
        .s3d-card-body {
          position: relative;
          z-index: 2;
          max-width: 760px;
          margin: 60px auto 0;
        }
        
        .concept-blockquote {
          font-size: 19px;
          line-height: 1.75;
          color: var(--text-primary);
          font-weight: 400;
          margin-bottom: 24px;
          border-left: none;
          padding: 0;
          background: transparent;
        }
        
        .concept-ref {
          font-size: 12.5px;
          color: var(--color-gold-light);
          font-weight: 600;
          letter-spacing: 0.05em;
        }
        
        .s3d-vignette {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(5, 6, 10, 0.8) 0%, transparent 15%),
                      linear-gradient(to top, rgba(5, 6, 10, 0.85) 0%, transparent 20%);
          pointer-events: none;
          z-index: 7;
        }
        
        /* Split Scroll Pairs */
        .pr {
          display: grid;
          width: 100%;
        }

        .pr--odd {
          grid-template-columns: 38% 62%;
        }
        
        .pr--even {
          grid-template-columns: 62% 38%;
        }
        
        .pr--even .pr-vis {
          order: 2;
        }
        
        .pr--even .pr-content {
          order: 1;
        }
        
        .pr-vis {
          position: relative;
          overflow: hidden;
          min-height: 480px;
          background: var(--bg-secondary);
        }
        
        .pr-art-stack {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .pr-art-portrait {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          border: 1px solid var(--border-color);
          padding: 30px 40px;
          background: rgba(255, 255, 255, 0.005);
          border-radius: 2px;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .pr-vis:hover .pr-art-portrait {
          border-color: var(--color-gold);
          background: rgba(207, 168, 60, 0.02);
          box-shadow: var(--shadow-glow);
          transform: scale(1.02);
        }
        
        .pr-art-icon {
          color: var(--color-gold);
        }
        
        .pr-art-initial {
          font-size: 60px;
          font-weight: 500;
          line-height: 1;
          color: var(--text-primary);
        }
        
        .pr-art-label {
          font-size: 10px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--text-secondary);
          font-weight: 700;
          text-align: center;
        }
        
        .pr-art-years {
          font-size: 9.5px;
          letter-spacing: 0.15em;
          color: var(--color-gold);
          opacity: 0.8;
          font-weight: 600;
        }
        
        .pr-vis-fade {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 25%;
          pointer-events: none;
          z-index: 3;
        }
        
        .pr-vis-fade--left {
          right: 0;
          background: linear-gradient(to right, transparent, var(--bg-primary));
        }
        
        .pr-vis-fade--right {
          left: 0;
          background: linear-gradient(to left, transparent, var(--bg-primary));
        }
        
        .pr-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 16px;
          padding: 60px 80px;
          text-align: left;
        }
        
        .pr--odd .pr-content {
          padding-left: 50px;
          padding-right: 80px;
        }
        
        .pr--even .pr-content {
          padding-left: 80px;
          padding-right: 50px;
        }
        
        .pr-school {
          font-size: 10px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          font-weight: 700;
        }
        
        .pr-title {
          font-size: 26px;
          color: var(--text-primary);
          line-height: 1.3;
          font-weight: 500;
        }
        
        .pr-tagline {
          font-size: 13.5px;
          line-height: 1.7;
          color: var(--color-gold-light);
          font-style: italic;
          padding: 8px 16px;
          background: rgba(207, 168, 60, 0.04);
          border-left: 2px solid var(--color-gold);
          border-radius: 2px;
        }
        
        .pr-body {
          padding-top: 16px;
          border-top: 1px solid var(--border-color);
        }
        
        .pr-body p {
          font-size: 14.5px;
          color: var(--text-secondary);
          line-height: 1.7;
        }
        
        /* Mechanism Section */
        .mechanism-grid {
          gap: 40px;
          margin-top: 40px;
        }
        
        .mechanism-card {
          padding: 40px;
          text-align: left;
          position: relative;
          border-radius: 2px;
        }
        
        .card-num {
          position: absolute;
          top: 24px;
          right: 30px;
          font-size: 32px;
          font-weight: 800;
          color: rgba(207, 168, 60, 0.1);
        }
        
        .mechanism-card h4 {
          font-size: 11px;
          margin-bottom: 12px;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--text-secondary);
          font-weight: 700;
        }
        
        .mech-highlight {
          font-size: 20px;
          font-weight: 500;
          margin-bottom: 16px;
        }
        
        .mech-desc {
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.7;
        }
        
        .mech-desc strong {
          color: var(--text-primary);
        }

        .mech-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .mech-list li {
          font-size: 14.5px;
          color: var(--text-secondary);
          line-height: 1.6;
          padding-left: 16px;
          border-left: 2px solid var(--border-color);
        }

        .mech-list strong {
          color: var(--text-primary);
        }
        
        /* Interactive Timeline switcher */
        .timeline-container {
          padding: 40px;
          margin-bottom: 40px;
          border-radius: 2px;
        }
        
        .timeline-nav {
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 15px;
          gap: 10px;
          overflow-x: auto;
        }
        
        .timeline-btn {
          flex: 1;
          background: transparent;
          border: none;
          padding: 10px 15px;
          cursor: pointer;
          text-align: center;
          min-width: 120px;
          border-radius: 2px;
          transition: all 0.2s ease;
        }
        
        .timeline-btn:hover {
          background: rgba(255, 255, 255, 0.02);
        }
        
        .timeline-btn.active {
          background: rgba(207, 168, 60, 0.06);
          border: 1px solid var(--border-color);
        }
        
        .nav-step {
          display: block;
          font-size: 9px;
          color: var(--text-secondary);
          font-weight: 700;
          margin-bottom: 4px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }
        
        .timeline-btn.active .nav-step {
          color: var(--color-gold);
        }
        
        .nav-name {
          font-size: 13px;
          font-weight: 600;
          color: var(--text-secondary);
        }
        
        .timeline-btn.active .nav-name {
          color: var(--text-primary);
        }
        
        .timeline-content {
          padding-top: 40px;
          text-align: left;
        }
        
        .content-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }
        
        .content-header h3 {
          font-size: 22px;
          font-weight: 500;
        }
        
        .level-badge {
          background: rgba(207, 168, 60, 0.08);
          color: var(--color-gold-light);
          border: 1px solid var(--border-color);
          font-size: 10px;
          padding: 4px 12px;
          border-radius: 2px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        
        .sub-text-gold {
          color: var(--color-gold);
          font-weight: 600;
          font-size: 13.5px;
          margin-bottom: 24px;
          letter-spacing: 0.05em;
        }
        
        .detail-section {
          margin-bottom: 28px;
        }
        
        .detail-section h5 {
          font-size: 11px;
          color: var(--text-secondary);
          margin-bottom: 8px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 700;
        }
        
        .detail-desc {
          font-size: 14.5px;
          color: var(--text-primary);
          line-height: 1.7;
        }
        
        .detail-sub-grid {
          gap: 20px;
        }
        
        .sub-detail-card {
          background: rgba(255, 255, 255, 0.005);
          border: 1px solid var(--border-color);
          padding: 20px;
          border-radius: 2px;
        }
        
        .sub-detail-title {
          display: block;
          font-size: 10px;
          font-weight: 700;
          color: var(--text-secondary);
          text-transform: uppercase;
          margin-bottom: 6px;
          letter-spacing: 0.05em;
        }
        
        .sub-detail-card p {
          font-size: 13px;
          color: var(--text-secondary);
          line-height: 1.6;
        }
        
        /* State Monopoly advanced card */
        .state-monopoly-box {
          display: flex;
          gap: 30px;
          padding: 40px;
          text-align: left;
          background: linear-gradient(135deg, rgba(207, 168, 60, 0.03) 0%, rgba(5, 6, 10, 0.95) 100%);
          align-items: center;
          margin-top: 40px;
          border-radius: 2px;
        }
        
        .state-badge {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          background: rgba(207, 168, 60, 0.06);
          color: var(--color-gold-light);
          padding: 24px;
          border-radius: 2px;
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          text-align: center;
          width: 150px;
          flex-shrink: 0;
          border: 1px solid var(--border-color);
          letter-spacing: 0.05em;
        }
        
        .state-content h4 {
          font-size: 18px;
          margin-bottom: 8px;
          font-weight: 500;
        }
        
        .state-content p {
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.7;
        }
        
        @media (max-width: 900px) {
          .pr {
            grid-template-columns: 1fr!important;
          }
          .pr-vis {
            min-height: 320px;
          }
          .pr-vis-fade {
            display: none;
          }
          .pr-content {
            padding: 30px 20px!important;
          }
          .state-monopoly-box {
            flex-direction: column;
            text-align: center;
            padding: 30px 20px;
          }
          .state-badge {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
