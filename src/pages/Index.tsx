
import React, { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import CourseHighlights from '@/components/CourseHighlights';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Add scroll-triggered animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up');
        }
      });
    }, observerOptions);

    // Observe all sections for scroll animations
    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-light">
      {/* Skip to main content for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-hero text-white px-4 py-2 rounded-lg z-50"
      >
        ข้ามไปยังเนื้อหาหลัก
      </a>
      
      <main id="main-content">
        <HeroSection />
        <CourseHighlights />
        <TestimonialsSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
