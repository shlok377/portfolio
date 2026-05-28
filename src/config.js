export const THEME_CONFIG = {
  colors: {
    background: "#0f0f0f",
    primary: "#ff4d00", // Bright Orange accent
    text: "#ffffff",
    particles: ["#ffffff"],
    zinc: {
      500: "#71717a",
      600: "#52525b",
    },
    imageBrightness: "brightness(0.5)", // Adjusted darkness
    imageYOffset: "120px", // Vertical offset
  },
  particles: {
    count: 250,
    spread: 20,
    speed: 0.4,
    baseSize: 100,
    pixelRatio: 1,
    moveParticlesOnHover: true,
    particleHoverFactor: 1,
    alphaParticles: false,
    disableRotation: false,
    cameraDistance: 20,
    sizeRandomness: 1,
  },
  image: {
    width: "auto",
    height: "auto",
    maxWidth: "100vw",
    maxHeight: "90vh",
    fadeStart: "50%", // Where the bottom fade starts
    fadeEnd: "100%",  // Where the bottom fade ends
    animation: {
      initialY: 20,
      duration: 1,
      ease: "easeOut"
    }
  }
};
