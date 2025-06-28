import React from 'react';

/**
 * TrustIndicators Component
 * 
 * Displays trust badges and partnership indicators to build credibility.
 * Shows company partnerships, university affiliations, and awards.
 */
const TrustIndicators: React.FC = () => {
  const trustBadges = [
    { icon: '🏢', text: 'บริษัทชั้นนำ 50+ แห่ง' },
    { icon: '🎓', text: 'มหาวิทยาลัยพันธมิตร' },
    { icon: '🏆', text: 'รางวัลการศึกษาดีเด่น' }
  ];

  return (
    <div className="mt-16 text-center">
      <p className="text-gray-500 font-sarabun mb-8">ได้รับความไว้วางใจจาก</p>
      <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
        {trustBadges.map((badge, index) => (
          <div key={index} className="bg-gray-100 rounded-lg px-6 py-3">
            <span className="text-gray-600 font-sarabun text-sm">
              {badge.icon} {badge.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustIndicators;