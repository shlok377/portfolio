export const THEME_CONFIG = {
  colors: {
    background: "#000000",
    primary: "#52d4ff", // New Accent color
    text: "#ffffff",
    particles: ["#ffffff"],
    zinc: {
      500: "#71717a",
      600: "#52525b",
    },
    imageBrightness: "brightness(0.3)", // Adjusted darkness
    imageGrayscale: "grayscale(100%)", // Greyscale filter
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
    maxWidth: "90vw",
    maxHeight: "87vh",
    fadeStart: "77%", // Where the bottom fade starts
    fadeEnd: "100%",  // Where the bottom fade ends
    animation: {
      initialY: 20,
      duration: 1,
      ease: "easeOut"
    }
  },
  title: {
    text: "SHLOK DALSANIA",
    height: "00px",
    marginSides: "5vw",
    minFontSize: 36,
    flex: true,
    alpha: false,
    stroke: false,
    width: true,
    weight: true,
    italic: true,
    textColor: "#ffffff",
    strokeColor: "#52d4ff",
  },
  sparks: {
    color: "#52d4ff",
    size: 27,
    radius: 75,
    count: 8,
    duration: 400,
    easing: "ease-out",
    extraScale: 1.0,
  }
};
