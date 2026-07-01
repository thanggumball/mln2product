import React, { useState } from 'react';
import { CheckCircle2, XCircle, Award, RotateCcw, AlertTriangle, Lightbulb } from 'lucide-react';
import Slide from './Slide';

export default function QuizSection() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const questions = [
    {
      q: 'Theo giáo trình Kinh tế chính trị Mác - Lênin, độc quyền là sự liên minh giữa:',
      options: [
        { text: 'Các doanh nghiệp nhỏ lẻ để cùng tồn tại.', isCorrect: false },
        { text: 'Các doanh nghiệp lớn để thâu tóm sản xuất, tiêu thụ và định giá cả độc quyền.', isCorrect: true },
        { text: 'Các cơ quan quản lý nhà nước để thúc đẩy xuất khẩu.', isCorrect: false },
        { text: 'Các hợp tác xã nông nghiệp nhằm bảo vệ người tiêu dùng.', isCorrect: false }
      ],
      explanation: 'Độc quyền là sự liên minh giữa các doanh nghiệp lớn, có khả năng thâu tóm việc sản xuất và tiêu thụ một số loại hàng hoá, định ra giá cả độc quyền nhằm thu lợi nhuận độc quyền cao.'
    },
    {
      q: 'Ai là người đã tổng kết luận điểm: "...tự do cạnh tranh đẻ ra tập trung sản xuất và sự tập trung sản xuất này, khi phát triển đến mức độ nhất định, lại dẫn tới độc quyền"?',
      options: [
        { text: 'Karl Marx', isCorrect: false },
        { text: 'Friedrich Engels', isCorrect: false },
        { text: 'V.I. Lênin', isCorrect: true },
        { text: 'Adam Smith', isCorrect: false }
      ],
      explanation: 'Lênin đã tổng hợp luận điểm này trong tác phẩm nổi tiếng nghiên cứu về chủ nghĩa tư bản độc quyền đầu thế kỷ XX.'
    },
    {
      q: 'Tiến trình phát triển các hình thức tổ chức độc quyền trong lịch sử từ thấp đến cao là:',
      options: [
        { text: 'Các-ten (Cartel) -> Xanh-đi-ca (Syndicate) -> Tờ-rót (Trust) -> Công-xoóc-xi-om (Consortium)', isCorrect: true },
        { text: 'Xanh-đi-ca (Syndicate) -> Các-ten (Cartel) -> Tờ-rót (Trust) -> Công-xoóc-xi-om (Consortium)', isCorrect: false },
        { text: 'Các-ten (Cartel) -> Tờ-rót (Trust) -> Xanh-đi-ca (Syndicate) -> Công-xoóc-xi-om (Consortium)', isCorrect: false },
        { text: 'Công-xoóc-xi-om (Consortium) -> Tờ-rót (Trust) -> Xanh-đi-ca (Syndicate) -> Các-ten (Cartel)', isCorrect: false }
      ],
      explanation: 'Các hình thức độc quyền lịch sử phát triển từ liên kết lỏng lẻo về giá/thị trường (Cartel), liên kết lưu thông chung (Syndicate), sáp nhập hoàn toàn (Trust), đến liên kết dọc đa ngành (Consortium).'
    },
    {
      q: 'Cơ chế tạo lập quyền lực nền tảng cốt lõi của Big Tech Meta (Facebook) trong kỷ nguyên số là gì?',
      options: [
        { text: 'Đăng ký sở hữu bản quyền tất cả phần mềm trên thế giới.', isCorrect: false },
        { text: 'Vòng lặp: Quy mô người dùng lớn -> Dữ liệu lớn -> Thuật toán AI -> Quảng cáo nhắm mục tiêu chính xác -> Doanh thu quảng cáo lớn.', isCorrect: true },
        { text: 'Sự bao cấp tài chính hoàn toàn từ chính phủ Hoa Kỳ.', isCorrect: false },
        { text: 'Bán phần cứng và các thiết bị viễn thông vật lý.', isCorrect: false }
      ],
      explanation: 'Sức mạnh của Meta nằm ở vòng lặp khép kín: hệ sinh thái hàng tỷ người dùng tạo ra Big Data, nuôi dưỡng AI để phân phối quảng cáo chính xác, tạo doanh thu cực cao để tái đầu tư duy trì vị thế thống trị.'
    },
    {
      q: 'Lý do chính khiến người dùng Zalo ở Việt Nam rất khó rời bỏ nền tảng này (hiện tượng Khóa người dùng mềm - Soft Lock-in) là gì?',
      options: [
        { text: 'Zalo thu phí phạt rất nặng nếu người dùng xóa tài khoản.', isCorrect: false },
        { text: 'Zalo có hệ thống bảo mật tuyệt đối không thể bị hack.', isCorrect: false },
        { text: 'Hiệu ứng mạng lưới: Tất cả các mối quan hệ (gia đình, đồng nghiệp, trường học, dịch vụ hành chính) đều ở trên Zalo.', isCorrect: true },
        { text: 'Zalo tích hợp các trò chơi giải trí độc quyền hấp dẫn nhất.', isCorrect: false }
      ],
      explanation: 'Hiệu ứng mạng lưới tạo ra rào cản chuyển đổi cực lớn. Khi mọi người xung quanh đều dùng Zalo, việc cá nhân rời bỏ sẽ cắt đứt liên lạc quan trọng trong học tập, công việc và đời sống.'
    }
  ];

  const handleOptionSelect = (idx) => {
    if (isSubmitted) return;
    setSelectedAnswer(idx);
  };

  const handleSubmit = () => {
    if (selectedAnswer === null || isSubmitted) return;
    
    const isCorrect = questions[currentQuestion].options[selectedAnswer].isCorrect;
    if (isCorrect) {
      setScore(score + 1);
    }
    setIsSubmitted(true);
  };

  const handleNext = () => {
    setSelectedAnswer(null);
    setIsSubmitted(false);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setIsSubmitted(false);
    setScore(0);
    setQuizFinished(false);
  };

  const getScoreMessage = () => {
    if (score === 5) return { text: 'Xuất sắc! Bạn đã nắm vững 100% kiến thức. Xứng đáng điểm A môn Kinh tế chính trị!', color: '#10b981' };
    if (score >= 3) return { text: 'Rất tốt! Bạn hiểu rõ bản chất của cạnh tranh và độc quyền nền tảng.', color: '#38bdf8' };
    return { text: 'Bạn nên ôn lại lý thuyết một chút để nắm vững bài hơn nhé!', color: '#f59e0b' };
  };

  return (
    <section id="quiz" className="quiz-section">
      <Slide>
      <div className="container">
        <div className="section-header reveal">
          <span className="tag">Ôn tập kiến thức</span>
          <h2>Trắc Nghiệm Tương Tác</h2>
          <p>
            Kiểm tra mức độ hiểu bài của bạn thông qua 5 câu hỏi nhanh về lý thuyết độc quyền và thực tiễn Meta - Zalo.
          </p>
        </div>

        <div className="quiz-card-wrapper glass-panel reveal">

          {!quizFinished ? (
            <div className="quiz-content">
              {/* Progress */}
              <div className="quiz-progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                ></div>
                <span className="progress-text">Câu hỏi {currentQuestion + 1} / {questions.length}</span>
              </div>

              {/* Question */}
              <h3 className="question-text">{questions[currentQuestion].q}</h3>

              {/* Options */}
              <div className="options-grid">
                {questions[currentQuestion].options.map((option, idx) => {
                  let optionClass = '';
                  if (selectedAnswer === idx) {
                    optionClass = 'selected';
                  }
                  if (isSubmitted) {
                    if (option.isCorrect) {
                      optionClass = 'correct';
                    } else if (selectedAnswer === idx) {
                      optionClass = 'incorrect';
                    } else {
                      optionClass = 'disabled';
                    }
                  }
                  return (
                    <button
                      key={idx}
                      className={`option-btn ${optionClass}`}
                      onClick={() => handleOptionSelect(idx)}
                      disabled={isSubmitted}
                    >
                      <span className="option-label">{String.fromCharCode(65 + idx)}.</span>
                      <span className="option-content">{option.text}</span>
                      {isSubmitted && option.isCorrect && <CheckCircle2 className="feedback-icon correct-icon" size={18} />}
                      {isSubmitted && selectedAnswer === idx && !option.isCorrect && <XCircle className="feedback-icon incorrect-icon" size={18} />}
                    </button>
                  );
                })}
              </div>

              {/* Explanation (Shown post-submission) */}
              {isSubmitted && (
                <div className="explanation-box fade-in">
                  <div className="expl-header">
                    <Lightbulb size={16} className="bulb-icon" />
                    <span>Giải thích đáp án:</span>
                  </div>
                  <p>{questions[currentQuestion].explanation}</p>
                </div>
              )}

              {/* Actions */}
              <div className="quiz-actions">
                {!isSubmitted ? (
                  <button 
                    className="submit-quiz-btn"
                    onClick={handleSubmit}
                    disabled={selectedAnswer === null}
                  >
                    Trả lời
                  </button>
                ) : (
                  <button 
                    className="next-quiz-btn"
                    onClick={handleNext}
                  >
                    {currentQuestion === questions.length - 1 ? 'Xem kết quả' : 'Câu tiếp theo'}
                  </button>
                )}
              </div>
            </div>
          ) : (
            // Results screen
            <div className="results-content text-center fade-in">
              <Award className="result-award-icon float-animation" size={70} style={{ color: getScoreMessage().color }} />
              <h3 className="result-title">Kết quả trắc nghiệm</h3>
              <div className="score-display">
                <span className="score-number" style={{ color: getScoreMessage().color }}>{score}</span>
                <span className="score-total">/ {questions.length}</span>
              </div>
              
              <div className="result-msg-box" style={{ borderColor: getScoreMessage().color }}>
                <p className="result-msg">{getScoreMessage().text}</p>
              </div>

              <button className="reset-quiz-btn" onClick={handleReset}>
                <RotateCcw size={16} />
                <span>Làm lại trắc nghiệm</span>
              </button>
            </div>
          )}
        </div>
      </div>
      </Slide>

      <style>{`
        .quiz-section {
          background: rgba(15, 22, 36, 0.2);
        }
        
        .quiz-card-wrapper {
          max-width: 750px;
          margin: 0 auto;
          padding: 40px;
          min-height: 400px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        
        .quiz-progress-bar {
          position: relative;
          height: 6px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 3px;
          margin-bottom: 30px;
        }
        
        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #38bdf8, #a855f7);
          border-radius: 3px;
          transition: width 0.3s ease;
        }
        
        .progress-text {
          position: absolute;
          right: 0;
          top: -24px;
          font-size: 12px;
          color: var(--text-muted);
          font-weight: 600;
        }
        
        .question-text {
          font-size: 20px;
          text-align: left;
          color: var(--text-primary);
          margin-bottom: 24px;
          line-height: 1.5;
        }
        
        .options-grid {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 24px;
        }
        
        .option-btn {
          display: flex;
          align-items: center;
          text-align: left;
          padding: 16px 20px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.04);
          border-radius: 12px;
          color: var(--text-secondary);
          cursor: pointer;
          font-size: 14px;
          font-weight: 500;
          transition: all 0.2s ease;
          position: relative;
        }
        
        .option-btn:hover:not(:disabled) {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(56, 189, 248, 0.3);
          color: var(--text-primary);
        }
        
        .option-btn.selected {
          background: rgba(56, 189, 248, 0.05);
          border-color: var(--color-accent);
          color: var(--text-primary);
        }
        
        .option-btn.correct {
          background: rgba(16, 185, 129, 0.08);
          border-color: #10b981;
          color: #10b981;
          font-weight: 600;
        }
        
        .option-btn.incorrect {
          background: rgba(244, 63, 94, 0.08);
          border-color: #f43f5e;
          color: #f43f5e;
        }
        
        .option-btn.disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        
        .option-label {
          font-weight: 700;
          margin-right: 12px;
          font-size: 15px;
        }
        
        .option-content {
          flex: 1;
        }
        
        .feedback-icon {
          margin-left: 12px;
          flex-shrink: 0;
        }
        
        .correct-icon {
          color: #10b981;
        }
        
        .incorrect-icon {
          color: #f43f5e;
        }
        
        .explanation-box {
          background: rgba(56, 189, 248, 0.03);
          border: 1px solid rgba(56, 189, 248, 0.1);
          padding: 16px;
          border-radius: 8px;
          text-align: left;
          margin-bottom: 24px;
        }
        
        .expl-header {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          font-weight: 700;
          color: var(--color-accent);
          text-transform: uppercase;
          margin-bottom: 6px;
        }
        
        .bulb-icon {
          color: var(--color-accent);
        }
        
        .explanation-box p {
          font-size: 13px;
          color: var(--text-secondary);
          line-height: 1.5;
        }
        
        .quiz-actions {
          display: flex;
          justify-content: flex-end;
        }
        
        .submit-quiz-btn {
          background: var(--text-primary);
          color: var(--bg-primary);
          border: none;
          padding: 12px 30px;
          border-radius: 8px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .submit-quiz-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(255, 255, 255, 0.15);
        }
        
        .submit-quiz-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        
        .next-quiz-btn {
          background: linear-gradient(135deg, #38bdf8 0%, #a855f7 100%);
          color: white;
          border: none;
          padding: 12px 30px;
          border-radius: 8px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .next-quiz-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(56, 189, 248, 0.3);
        }
        
        /* Result screen */
        .result-award-icon {
          margin: 0 auto 20px;
        }
        
        .result-title {
          font-size: 24px;
          margin-bottom: 8px;
        }
        
        .score-display {
          margin-bottom: 20px;
        }
        
        .score-number {
          font-size: 56px;
          font-weight: 800;
          font-family: var(--font-heading);
        }
        
        .score-total {
          font-size: 24px;
          color: var(--text-muted);
          font-weight: 600;
        }
        
        .result-msg-box {
          border: 1px solid;
          background: rgba(255, 255, 255, 0.01);
          padding: 20px;
          border-radius: 12px;
          max-width: 500px;
          margin: 0 auto 30px;
        }
        
        .result-msg {
          font-size: 15px;
          color: var(--text-primary);
          font-weight: 500;
          line-height: 1.5;
        }
        
        .reset-quiz-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: var(--text-secondary);
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .reset-quiz-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          color: var(--text-primary);
          border-color: rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </section>
  );
}
