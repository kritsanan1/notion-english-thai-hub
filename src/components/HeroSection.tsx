
import React from 'react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-hero to-light px-4 py-16">
      <div className="container mx-auto max-w-6xl text-center animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-sarabun leading-tight">
            เรียนภาษาอังกฤษง่ายๆ กับเรา!
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-sarabun max-w-2xl mx-auto leading-relaxed">
            คอร์สออนไลน์ที่ออกแบบสำหรับคุณ
          </p>
          <p className="text-lg md:text-xl text-white/80 mb-12 font-poppins max-w-3xl mx-auto">
            Learn English easily with our comprehensive online courses designed specifically for young Thai adults. 
            Start your journey to fluency today!
          </p>
          <Button 
            className="bg-cta hover:bg-cta/90 text-white font-sarabun font-semibold text-lg px-8 py-6 h-12 rounded-lg transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            aria-label="Sign up for free English courses"
          >
            สมัครฟรี
          </Button>
          
          {/* Floating elements for visual interest */}
          <div className="mt-16 relative">
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-white/10 rounded-full animate-pulse hidden md:block"></div>
            <div className="absolute -top-8 -right-8 w-16 h-16 bg-white/20 rounded-full animate-pulse delay-200 hidden lg:block"></div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
              <p className="text-white font-poppins text-sm md:text-base">
                Join over <span className="font-bold text-cta">10,000+</span> students who have improved their English with us
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
