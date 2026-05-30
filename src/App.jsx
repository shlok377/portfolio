import React from 'react';
import { motion } from 'framer-motion';
import Particles from './components/ReactBits/Particles';
import TextPressure from './components/ReactBits/TextPressure';
import ClickSpark from './components/ReactBits/ClickSpark';
import Navbar from './components/Navbar';
import AnimatedCard from './components/AnimatedCard';
import { THEME_CONFIG } from './config';

function App() {
  const { colors, particles, image, title, tagline, sideCards, sparks, breakpoints } = THEME_CONFIG;
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < breakpoints.mobile);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [breakpoints.mobile]);

  // Responsive values
  const currentTitle = isMobile ? { ...title, ...title.mobile } : title;
  const currentTagline = isMobile ? { ...tagline, ...tagline.mobile } : tagline;
  const currentImage = isMobile ? { ...image, ...image.mobile } : image;
  const currentImageYOffset = isMobile ? image.mobile.imageYOffset : colors.imageYOffset;

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
      <Navbar isMobile={isMobile} />
      <div className={`min-h-screen text-white relative overflow-hidden`} style={{ background: colors.backgroundGradient || colors.background }}>
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
          {/* Text Group (Name + Tagline) */}
          <div 
            style={{ 
              position: 'absolute',
              top: currentTitle.topOffset,
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
                width: `calc(100% - (2 * ${currentTitle.marginSides}))`, 
                height: currentTitle.height,
                pointerEvents: 'auto'
              }}
            >
              <TextPressure
                text={currentTitle.text}
                flex={currentTitle.flex}
                alpha={currentTitle.alpha}
                stroke={currentTitle.stroke}
                width={currentTitle.width}
                weight={currentTitle.weight}
                italic={currentTitle.italic}
                textColor={currentTitle.textColor}
                strokeColor={currentTitle.strokeColor}
                minFontSize={currentTitle.minFontSize}
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: tagline.animation.initialY }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: currentTagline.animation.duration, 
                delay: currentTagline.animation.delay 
              }}
              style={{ 
                color: currentTagline.color, 
                fontSize: currentTagline.fontSize, 
                letterSpacing: currentTagline.letterSpacing,
                marginTop: currentTagline.marginTop,
                pointerEvents: 'auto'
              }}
              className="uppercase font-medium text-center relative"
            >
              {currentTagline.text}
            </motion.div>
          </div>

          {/* Image and Cards Section */}
          <motion.div
            initial={{ opacity: 0, y: image.animation.initialY }}
            animate={{ opacity: 1, y: currentImageYOffset }}
            transition={{ 
              duration: image.animation.duration, 
              ease: image.animation.ease 
            }}
            className="relative z-[5] flex flex-col items-center justify-center w-full"
          >
            {/* Desktop Side Cards */}
            {!isMobile && (
              <>
                <motion.div
                  initial={{ opacity: 0, x: -50, y: sideCards.baseYOffset }}
                  animate={{ 
                    opacity: 1, 
                    x: `calc(-${sideCards.horizontalOffset})`,
                    y: `calc(${sideCards.baseYOffset} - ${sideCards.verticalOffset})` // Shifted Quadrant 2
                  }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="absolute"
                  style={{ pointerEvents: 'auto' }}
                >
                  <AnimatedCard 
                    header={sideCards.left.header}
                    title={sideCards.left.title}
                    description={sideCards.left.description}
                    backgroundOpacity={sideCards.backgroundOpacity}
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 50, y: sideCards.baseYOffset }}
                  animate={{ 
                    opacity: 1, 
                    x: sideCards.horizontalOffset,
                    y: `calc(${sideCards.baseYOffset} + ${sideCards.verticalOffset})` // Shifted Quadrant 4
                  }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="absolute"
                  style={{ pointerEvents: 'auto' }}
                >
                  <AnimatedCard 
                    header={sideCards.right.header}
                    title={sideCards.right.title}
                    description={sideCards.right.description}
                    backgroundOpacity={sideCards.backgroundOpacity}
                  />
                </motion.div>
              </>
            )}

                  <img 
                  src="img/me_transparent.png" 
                  alt="Shlok Dalsania" 
                  style={{
                  width: currentImage.width,
                  height: currentImage.height,
                  maxWidth: currentImage.maxWidth,
                  maxHeight: currentImage.maxHeight,
                  filter: `${colors.imageBrightness} ${colors.imageGrayscale}`,
                  maskImage: `linear-gradient(to bottom, black ${image.fadeStart}, transparent ${image.fadeEnd})`,
                  WebkitMaskImage: `linear-gradient(to bottom, black ${image.fadeStart}, transparent ${image.fadeEnd})`
                  }}
                  className="block"
                  />

                  {/* Mobile Cards Stack */}
                  {isMobile && (
                  <div className="flex flex-col gap-6 items-center w-full pointer-events-auto mt-8 px-6">
                  <AnimatedCard 
                  header={sideCards.left.header}
                  title={sideCards.left.title}
                  description={sideCards.left.description}
                  backgroundOpacity={sideCards.backgroundOpacity}
                  />
                  <AnimatedCard 
                  header={sideCards.right.header}
                  title={sideCards.right.title}
                  description={sideCards.right.description}
                  backgroundOpacity={sideCards.backgroundOpacity}
                  />
                  </div>
                  )}
          </motion.div>
        </main>
      </div>
    </ClickSpark>
  );
}

export default App;
