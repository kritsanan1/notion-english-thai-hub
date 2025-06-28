import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useAuth } from '@/hooks/useAuth';
import { Play, Star, Users, Award, TrendingUp } from 'lucide-react';
import RegistrationModal from './RegistrationModal';

const HeroSection = () => {
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const { user } = useAuth();

  const handleCTAClick = () => {
    if (user) {
      console.log('User is logged in, redirect to courses');
    } else {
      setShowRegistrationModal(true);
    }
  };

  return (
    <>
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 via-white to-emerald-50 px-4 py-20 pt-24">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2">
                <Badge className="bg-teal-100 text-teal-700 hover:bg-teal-200 px-4 py-2 text-sm font-medium">
                  🎉 ลองฟรี 7 วัน! Try Free for 7 Days!
                </Badge>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  <span className="font-sarabun">เรียนภาษาอังกฤษ</span>
                  <br />
                  <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent font-poppins">
                    ง่ายๆ กับครูจอย
                  </span>
                </h1>
                <p className="text-xl text-gray-600 font-sarabun max-w-lg">
                  คอร์สออนไลน์ที่ออกแบบสำหรับคุณ พร้อมเทคนิคการเรียนรู้ที่ทันสมัย
                </p>
                <p className="text-lg text-gray-500 font-poppins max-w-lg">
                  Learn English easily with our comprehensive online courses designed specifically for young Thai adults.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handleCTAClick}
                  size="lg"
                  className="bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-sarabun font-semibold px-8 py-4 h-auto rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  {user ? 'เข้าสู่คอร์สเรียน' : 'เริ่มเรียนฟรี'}
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-teal-600 text-teal-600 hover:bg-teal-50 font-sarabun font-semibold px-8 py-4 h-auto rounded-xl transition-all duration-300 group"
                >
                  <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  ดูวิดีโอแนะนำ
                </Button>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-400 to-emerald-500 border-2 border-white"></div>
                    ))}
                  </div>
                  <div>
                    <div className="flex items-center space-x-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 font-sarabun">10,000+ นักเรียน</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Award className="w-8 h-8 text-teal-600" />
                  <div>
                    <p className="font-semibold text-gray-900">4.8/5</p>
                    <p className="text-sm text-gray-600 font-sarabun">คะแนนเฉลี่ย</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative animate-scale-in">
              <div className="relative">
                {/* Main Image Container */}
                <div className="relative bg-gradient-to-br from-teal-100 to-emerald-100 rounded-3xl p-8 shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&crop=faces"
                    alt="Happy student learning English"
                    className="w-full h-80 object-cover rounded-2xl shadow-lg"
                  />
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-lg animate-float">
                    <div className="flex items-center space-x-2">
                      <Users className="w-6 h-6 text-teal-600" />
                      <div>
                        <p className="font-bold text-gray-900">250k</p>
                        <p className="text-sm text-gray-600">Students</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-lg animate-float" style={{animationDelay: '1s'}}>
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="w-6 h-6 text-emerald-600" />
                      <div>
                        <p className="font-bold text-gray-900">95%</p>
                        <p className="text-sm text-gray-600">Success Rate</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Background Decorations */}
                <div className="absolute -z-10 top-10 right-10 w-32 h-32 bg-gradient-to-br from-teal-200 to-emerald-200 rounded-full opacity-50 animate-pulse-glow"></div>
                <div className="absolute -z-10 bottom-10 left-10 w-24 h-24 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full opacity-50 animate-pulse-glow" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 text-center">
            <p className="text-gray-500 font-sarabun mb-8">ได้รับความไว้วางใจจาก</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="bg-gray-100 rounded-lg px-6 py-3">
                <span className="text-gray-600 font-sarabun text-sm">🏢 บริษัทชั้นนำ 50+ แห่ง</span>
              </div>
              <div className="bg-gray-100 rounded-lg px-6 py-3">
                <span className="text-gray-600 font-sarabun text-sm">🎓 มหาวิทยาลัยพันธมิตร</span>
              </div>
              <div className="bg-gray-100 rounded-lg px-6 py-3">
                <span className="text-gray-600 font-sarabun text-sm">🏆 รางวัลการศึกษาดีเด่น</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RegistrationModal isOpen={showRegistrationModal} onClose={() => setShowRegistrationModal(false)} />
    </>
  );
};

export default HeroSection;