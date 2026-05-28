import React from 'react';
import { motion } from 'framer-motion';
import Particles from './components/ReactBits/Particles';
import { THEME_CONFIG } from './config';

function App() {
  const { colors, particles, image } = THEME_CONFIG;

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
          moveParticlesOnHover={particles.moveParticlesOnHover}
          particleHoverFactor={particles.particleHoverFactor}
          alphaParticles={particles.alphaParticles}
          disableRotation={particles.disableRotation}
          pixelRatio={particles.pixelRatio}
          cameraDistance={particles.cameraDistance}
          sizeRandomness={particles.sizeRandomness}
        />
      </div>

      {/* Hero Content */}
      <main className="relative z-10 min-h-screen flex items-center justify-center px-6 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: image.animation.initialY }}
          animate={{ opacity: 1, y: colors.imageYOffset }}
          transition={{ 
            duration: image.animation.duration, 
            ease: image.animation.ease 
          }}
          className="relative"
        >
          <img 
            src="img/me_transparent.png" 
            alt="Shlok Dalsania" 
            style={{ 
              filter: colors.imageBrightness,
              maskImage: `linear-gradient(to bottom, black ${image.fadeStart}, transparent ${image.fadeEnd})`,
              WebkitMaskImage: `linear-gradient(to bottom, black ${image.fadeStart}, transparent ${image.fadeEnd})`
            }}
            className="relative z-10 block"
            style={{
              width: image.width,
              height: image.height,
              maxWidth: image.maxWidth,
              maxHeight: image.maxHeight,
              filter: colors.imageBrightness,
              maskImage: `linear-gradient(to bottom, black ${image.fadeStart}, transparent ${image.fadeEnd})`,
              WebkitMaskImage: `linear-gradient(to bottom, black ${image.fadeStart}, transparent ${image.fadeEnd})`
            }}
          />
        </motion.div>
      </main>
    </div>
  );
}

export default App;
