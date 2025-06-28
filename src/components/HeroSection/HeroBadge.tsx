import React from 'react';
import { Badge } from "@/components/ui/badge";

/**
 * HeroBadge Component
 * 
 * Displays the promotional badge for the free trial offer.
 * Features a gradient background and bilingual text (Thai/English).
 */
const HeroBadge: React.FC = () => {
  return (
    <div className="inline-flex items-center space-x-2">
      <Badge className="bg-teal-100 text-teal-700 hover:bg-teal-200 px-4 py-2 text-sm font-medium">
        🎉 ลองฟรี 7 วัน! Try Free for 7 Days!
      </Badge>
    </div>
  );
};

export default HeroBadge;