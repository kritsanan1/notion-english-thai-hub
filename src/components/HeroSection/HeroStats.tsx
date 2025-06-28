import React from 'react';
import { Star, Award } from 'lucide-react';

/**
 * HeroStats Component
 * 
 * Displays social proof statistics including student count, ratings, and awards.
 * Shows avatar placeholders and star ratings to build trust.
 */
const HeroStats: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-6 pt-4">
      {/* Student Count with Avatars */}
      <div className="flex items-center space-x-2">
        <div className="flex -space-x-2">
          {[1, 2, 3, 4].map((i) => (
            <div 
              key={i} 
              className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-400 to-emerald-500 border-2 border-white"
            />
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
      
      {/* Average Rating */}
      <div className="flex items-center space-x-2">
        <Award className="w-8 h-8 text-teal-600" />
        <div>
          <p className="font-semibold text-gray-900">4.8/5</p>
          <p className="text-sm text-gray-600 font-sarabun">คะแนนเฉลี่ย</p>
        </div>
      </div>
    </div>
  );
};

export default HeroStats;