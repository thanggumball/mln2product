import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import PresentationNav from './components/PresentationNav';
import Hero from './components/Hero';
import TheorySection from './components/TheorySection';
import TransitionSection from './components/TransitionSection';
import ModernMonopolySection from './components/ModernMonopolySection';
import CaseStudySection from './components/CaseStudySection';
import ComparisonSection from './components/ComparisonSection';
import QuizSection from './components/QuizSection';
import AiUsagePage from './components/AiUsagePage';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [activePage, setActivePage] = useState('content');
  const [activeSection, setActiveSection] = useState('hero');

  // Handle intersection observer only when we are on the main 'content' page
  useEffect(() => {
    if (activePage !== 'content') return;

    const sections = ['hero', 'theory', 'transition', 'modern', 'cases', 'quiz'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, [activePage]);

  // Scroll to top when changing pages
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  // Scroll reveal Intersection Observer
  useEffect(() => {
    if (activePage !== 'content') return;

    // Timeout allows DOM content to fully mount before selecting elements
    const timer = setTimeout(() => {
      const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      }, {
        root: null,
        threshold: 0.05,
        rootMargin: '0px 0px -40px 0px'
      });

      revealElements.forEach((el) => observer.observe(el));
    }, 100);

    return () => clearTimeout(timer);
  }, [activePage]);

  return (
    <>
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      {activePage === 'content' && <PresentationNav />}

      <main style={{ flex: 1 }}>
        {activePage === 'content' && (
          <div className="fade-in">
            <Hero />
            <TheorySection />
            <TransitionSection />
            <ModernMonopolySection />
            <CaseStudySection />
            <ComparisonSection />
            <QuizSection />
          </div>
        )}
        
        {activePage === 'ai-usage' && <AiUsagePage />}
      </main>

      <Footer />
    </>
  );
}

export default App;
