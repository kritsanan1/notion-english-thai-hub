import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useAuth } from '@/hooks/useAuth';
import { Play } from 'lucide-react';
import RegistrationModal from '../RegistrationModal';
import HeroBadge from './HeroBadge';
import HeroStats from './HeroStats';
import HeroImage from './HeroImage';
import TrustIndicators from './TrustIndicators';

/**
 * HeroSection Component
 * 
 * Main hero section of the landing page featuring:
 * - Promotional badge for free trial
 * - Bilingual heading (Thai/English)
 * - Call-to-action buttons with authentication handling
 * - Social proof statistics
 * - Hero image with floating elements
 * - Trust indicators
 * 
 * The component handles user authentication state and shows appropriate CTAs.
 * Includes a registration modal for non-authenticated users.
 */
const HeroSection: React.FC = () => {
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const { user } = useAuth();

  /**
   * Handles the main CTA button click
   * Redirects authenticated users to courses, shows registration modal for others
   */
  const handleCTAClick = () => {
    if (user) {
      // TODO: Implement navigation to courses page
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
            {/* Left Content Column */}
            <div className="space-y-8 animate-fade-in">
              {/* Promotional Badge */}
              <HeroBadge />

              {/* Main Heading Section */}
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

              {/* Call-to-Action Buttons */}
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

              {/* Social Proof Statistics */}
              <HeroStats />
            </div>

            {/* Right Content Column - Hero Image */}
            <HeroImage />
          </div>

          {/* Trust Indicators Section */}
          <TrustIndicators />
        </div>
      </section>

      {/* Registration Modal */}
      <RegistrationModal 
        isOpen={showRegistrationModal} 
        onClose={() => setShowRegistrationModal(false)} 
      />
    </>
  );
};

export default HeroSection;