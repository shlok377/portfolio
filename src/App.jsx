import React from 'react';
import { motion } from 'framer-motion';
import Particles from './components/ReactBits/Particles';
import TextPressure from './components/ReactBits/TextPressure';
import ClickSpark from './components/ReactBits/ClickSpark';
import { THEME_CONFIG } from './config';

function App() {
  const { colors, particles, image, title, tagline, sparks } = THEME_CONFIG;

  return (
    <ClickSpark
      sparkColor={sparks.color}
      sparkSize={sparks.size}
      sparkRadius={sparks.radius}
      sparkCount={sparks.count}
      duration={sparks.duration}
      easing={sparks.easing}
      extraScale={sparks.extraScale}
    >
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
        <main className="relative z-10 min-h-screen flex flex-col items-center justify-center pointer-events-none">
          {/* Text Group (Title + Tagline) */}
          <div 
            style={{ 
              position: 'absolute',
              top: title.topOffset,
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              zIndex: 20,
              pointerEvents: 'none'
            }}
          >
            <div 
              style={{ 
                width: `calc(100% - (2 * ${title.marginSides}))`, 
                height: title.height,
                pointerEvents: 'auto'
              }}
            >
              <TextPressure
                text={title.text}
                flex={title.flex}
                alpha={title.alpha}
                stroke={title.stroke}
                width={title.width}
                weight={title.weight}
                italic={title.italic}
                textColor={title.textColor}
                strokeColor={title.strokeColor}
                minFontSize={title.minFontSize}
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: tagline.animation.initialY }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: tagline.animation.duration, 
                delay: tagline.animation.delay 
              }}
              style={{ 
                color: tagline.color, 
                fontSize: tagline.fontSize, 
                letterSpacing: tagline.letterSpacing,
                marginTop: tagline.marginTop,
                pointerEvents: 'auto'
              }}
              className="uppercase font-medium text-center relative"
            >
              {tagline.text}
            </motion.div>
          </div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, y: image.animation.initialY }}
            animate={{ opacity: 1, y: colors.imageYOffset }}
            transition={{ 
              duration: image.animation.duration, 
              ease: image.animation.ease 
            }}
            className="relative z-[5]"
          >
            <img 
              src="img/me_transparent.png" 
              alt="Shlok Dalsania" 
              style={{
                width: image.width,
                height: image.height,
                maxWidth: image.maxWidth,
                maxHeight: image.maxHeight,
                filter: `${colors.imageBrightness} ${colors.imageGrayscale}`,
                maskImage: `linear-gradient(to bottom, black ${image.fadeStart}, transparent ${image.fadeEnd})`,
                WebkitMaskImage: `linear-gradient(to bottom, black ${image.fadeStart}, transparent ${image.fadeEnd})`
              }}
              className="block"
            />
          </motion.div>
        </main>
      </div>
    </ClickSpark>
  );
}

export default App;
