import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useAuth } from '@/hooks/useAuth';
import RegistrationModal from './RegistrationModal';
const HeroSection = () => {
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const {
    user
  } = useAuth();
  const handleCTAClick = () => {
    if (user) {
      // Redirect to courses page or dashboard
      console.log('User is logged in, redirect to courses');
    } else {
      setShowRegistrationModal(true);
    }
  };
  return <>
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-hero to-light px-4 py-16">
        <div className="container mx-auto max-w-6xl text-center animate-fade-in">
          <div className="max-w-4xl mx-auto">
            {/* Free Trial Banner */}
            <div className="inline-block bg-cta/20 border border-cta rounded-full px-6 py-2 mb-6">
              <span className="font-sarabun text-cta font-semibold text-sm">
                🎉 ลองฟรี 7 วัน! Try Free for 7 Days!
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-sarabun leading-tight lg:text-8xl">เรียนภาษาอังกฤษง่ายๆกับครูจอย</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-sarabun max-w-2xl mx-auto leading-relaxed">
              คอร์สออนไลน์ที่ออกแบบสำหรับคุณ
            </p>
            <p className="text-lg md:text-xl text-white/80 mb-12 font-poppins max-w-3xl mx-auto">
              Learn English easily with our comprehensive online courses designed specifically for young Thai adults. 
              Start your journey to fluency today!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button onClick={handleCTAClick} className="bg-cta hover:bg-cta/90 text-white font-sarabun font-semibold text-lg px-8 py-6 h-12 rounded-lg transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl" aria-label="Sign up for free English courses">
                {user ? 'เข้าสู่คอร์สเรียน' : 'สมัครฟรี'}
              </Button>
              
              {!user && <Button variant="outline" className="border-white text-white hover:bg-white/10 font-sarabun font-semibold text-lg px-8 py-6 h-12 rounded-lg transform hover:scale-105 transition-all duration-200" onClick={() => window.location.href = '/auth'}>
                  เข้าสู่ระบบ
                </Button>}
            </div>
            
            {/* Floating elements for visual interest */}
            <div className="mt-16 relative">
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-white/10 rounded-full animate-pulse hidden md:block"></div>
              <div className="absolute -top-8 -right-8 w-16 h-16 bg-white/20 rounded-full animate-pulse delay-200 hidden lg:block"></div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
                <p className="text-white font-poppins text-sm md:text-base">
                  Join over <span className="font-bold text-cta">10,000+</span> students who have improved their English with us
                </p>
                <div className="flex justify-center mt-4 space-x-1">
                  {[...Array(5)].map((_, i) => <span key={i} className="text-yellow-400 text-xl">⭐</span>)}
                  <span className="text-white/80 font-sarabun ml-2">4.8/5 คะแนน</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RegistrationModal isOpen={showRegistrationModal} onClose={() => setShowRegistrationModal(false)} />
    </>;
};
export default HeroSection;