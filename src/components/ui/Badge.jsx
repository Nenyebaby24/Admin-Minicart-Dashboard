import React from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';

const Badge = ({ children, isUp }) => {
  return (
    <div className={`
      flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-bold
      ${isUp 
        ? 'bg-[#e6fcf5] text-[#0ca678]' // Green theme for increase
        : 'bg-[#fff5f5] text-[#ff6b6b]' // Red theme for decrease
      }
    `}>
      {/* Dynamic Arrow Icons */}
      {isUp ? <ArrowUp size={12} strokeWidth={3} /> : <ArrowDown size={12} strokeWidth={3} />}
      <span>{children}</span>
    </div>
  );
};

export default Badge;