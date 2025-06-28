import React from 'react';
import { Users, TrendingUp } from 'lucide-react';

/**
 * HeroImage Component
 * 
 * Displays the main hero image with floating statistics cards and decorative elements.
 * Includes animated floating cards showing student count and success rate.
 */
const HeroImage: React.FC = () => {
  return (
    <div className="relative animate-scale-in">
      <div className="relative">
        {/* Main Image Container */}
        <div className="relative bg-gradient-to-br from-teal-100 to-emerald-100 rounded-3xl p-8 shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&crop=faces"
            alt="Happy student learning English"
            className="w-full h-80 object-cover rounded-2xl shadow-lg"
          />
          
          {/* Floating Statistics Cards */}
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

        {/* Background Decorative Elements */}
        <div className="absolute -z-10 top-10 right-10 w-32 h-32 bg-gradient-to-br from-teal-200 to-emerald-200 rounded-full opacity-50 animate-pulse-glow" />
        <div className="absolute -z-10 bottom-10 left-10 w-24 h-24 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full opacity-50 animate-pulse-glow" style={{animationDelay: '1s'}} />
      </div>
    </div>
  );
};

export default HeroImage;