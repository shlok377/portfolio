import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { THEME_CONFIG } from '../config';
import Magnet from './ReactBits/Magnet';

const NavLink = ({ link, isMobile, active, colors, config }) => {
  return (
    <Magnet
      padding={config.animation.magnetPadding}
      disabled={isMobile}
      magnetStrength={config.animation.magnetStrength}
      activeTransition={config.animation.activeTransition}
      inactiveTransition={config.animation.inactiveTransition}
    >
      <motion.a
        href={link.href}
        className={`relative text-[10px] md:text-[12px] uppercase tracking-[0.2em] font-bold transition-all duration-300 px-4 py-2 group block`}
      >
        <span 
          className={`relative z-10 transition-colors duration-300 ${active ? 'text-primary' : 'text-white group-hover:text-primary'}`}
          style={{ 
            textShadow: active ? config.animation.glowStrength : 'none'
          }}
        >
          {link.label}
        </span>
        
        {/* Glow effect on hover */}
        <span 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{ 
            textShadow: config.animation.glowStrength,
            color: colors.primary,
            left: '16px', // Align with padding
            top: '8px'
          }}
        >
          {link.label}
        </span>
      </motion.a>
    </Magnet>
  );
};

const Navbar = ({ isMobile }) => {
  const { colors, navbar } = THEME_CONFIG;
  const [activeLink, setActiveLink] = useState('#home');

  return (
    <nav 
      className="fixed top-0 left-0 w-full z-[10000] flex items-center transition-all duration-300"
      style={{ 
        height: navbar.height,
        backgroundColor: `rgba(0, 0, 0, ${navbar.backgroundOpacity})`,
        paddingLeft: navbar.paddingSides,
        paddingRight: navbar.paddingSides,
      }}
    >
      <div className="w-full flex justify-evenly items-center overflow-x-auto no-scrollbar">
        {navbar.links.map((link) => (
          <NavLink 
            key={link.label} 
            link={link} 
            isMobile={isMobile}
            active={activeLink === link.href}
            colors={colors}
            config={navbar}
          />
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
