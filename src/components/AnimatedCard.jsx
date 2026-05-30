import React from 'react';
import { motion } from 'framer-motion';

const AnimatedCard = ({ header, title, description, className = "", style = {}, backgroundOpacity = 0.4 }) => {
  return (
    <div 
      className={`relative w-[250px] h-[200px] rounded-xl border border-white/10 flex flex-col p-6 justify-center ${className}`} 
      style={{
        ...style,
        backgroundColor: `rgba(255, 255, 255, ${backgroundOpacity / 10})`,
      }}
    >
      <span className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold mb-2">
        {header}
      </span>
      <h4 className="text-white text-lg font-bold mb-2 leading-tight">
        {title}
      </h4>
      <p className="text-zinc-500 text-xs leading-relaxed line-clamp-3">
        {description}
      </p>
    </div>
  );
};

export default AnimatedCard;
