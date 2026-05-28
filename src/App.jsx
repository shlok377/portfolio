import React from 'react';
import { motion } from 'framer-motion';
import Particles from './components/ReactBits/Particles';
import { THEME_CONFIG } from './config';

function App() {
  const { colors, particles } = THEME_CONFIG;

  return (
    <div className={`min-h-screen text-white relative overflow-hidden`} style={{ backgroundColor: colors.background }}>
      {/* Background Particles */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={colors.particles}
          particleCount={particles.count}
          particleSpread={particles.spread}
          speed={particles.speed}
          particleBaseSize={particles.baseSize}
          moveParticlesOnHover
          alphaParticles={false}
          disableRotation={false}
          pixelRatio={particles.pixelRatio}
        />
      </div>

      {/* Hero Content */}
      <main className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-white/10 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <img 
            src="img/me_transparent.png" 
            alt="Shlok Dalsania" 
            className="w-64 h-64 md:w-[450px] md:h-[450px] object-cover relative z-10 grayscale border border-white/5 shadow-2xl transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.02]"
          />
        </motion.div>
      </main>
    </div>
  );
}

export default App;
