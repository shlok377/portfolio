export const THEME_CONFIG = {
  colors: {
    background: "#000000",
    backgroundGradient: "radial-gradient(circle at center, #101010 0%, #000000 100%)",
    primary: "#00d0ff", // New Accent color
    text: "#ffffff",
    particles: ["#ffffff"],
    zinc: {
      500: "#232323",
      600: "#1a1a1d",
    },
    imageBrightness: "brightness(0.3)", // Adjusted darkness
    imageGrayscale: "grayscale(100%)", // Greyscale filter
    imageYOffset: "100px", // Vertical offset
  },
  particles: {
    count: 250,
    spread: 20,
    speed: 0.4,
    baseSize: 100,
    pixelRatio: 1,
    moveParticlesOnHover: true,
    particleHoverFactor: 1,
    alphaParticles: true,
    disableRotation: false,
    cameraDistance: 20,
    sizeRandomness: 1,
  },
  image: {
    width: "auto",
    height: "auto",
    maxWidth: "107vw",
    maxHeight: "97vh",
    fadeStart: "77%", // Where the bottom fade starts
    fadeEnd: "100%",  // Where the bottom fade ends
    animation: {
      initialY: 20,
        duration: 1,
        ease: "easeOut"
      },
      mobile: {
        maxWidth: "95vw",
        maxHeight: "60vh",
        imageYOffset: "80px",
      }
      },
      title: {
      text: "SHLOK DALSANIA",
      height: "00px",
      topOffset: "80%", // Position from top
      marginSides: "5vw",
      minFontSize: 36,
      flex: true,
      alpha: false,
      stroke: false,
      width: true,
      weight: true,
      italic: true,
      textColor: "#ffffff",
      strokeColor: "#00d0ff",
      mobile: {
        topOffset: "75%",
        marginSides: "8vw",
        minFontSize: 24,
      }
      },
      tagline: {
        text: "putting AI to good use",
        color: "#00d0ff", // Zinc-500 for a subtle look
        fontSize: "20px",
        letterSpacing: "0.2em",
        marginTop: "224px",
        animation: {
          initialY: 10,
          duration: 1,
          delay: 0.5,
        },
        mobile: {
          fontSize: "12px",
          letterSpacing: "0.15em",
          marginTop: "100px",
        }
        },
        sideCards: {
        left: {
          header: "Currently working on:",
          title: "AI-Powered Products",
          description: "Developing intelligent study companions and automated workflows using LLMs.",
        },
        right: {
          header: "Recent Highlight:",
          title: "SCET Computer Engineering",
          description: "Building a strong foundation in software systems and engineering principles.",
        },
        horizontalOffset: "30vw", // Distance from center
        verticalOffset: "100px",  // Staggered vertical distance
        baseYOffset: "150px",     // Base shift for both cards
        mobile: {
          horizontalOffset: "0", // Center on mobile
          marginTop: "400px",   // Space between stacked elements
        },
        backgroundOpacity: 0.4, // 0 to 1
        },
        navbar: {
        links: [
          { label: "Home", href: "#home" },
          { label: "Experience", href: "#experience" },
          { label: "Skills", href: "#skills" },
          { label: "Testimonials", href: "#testimonials" },
          { label: "Get in Touch", href: "#contact" },
        ],
        backgroundOpacity: "0.4",
        height: "80px",
        paddingSides: "10vw",
        animation: {
          magnetPadding: 180,
          magnetStrength: 20, // Higher = less movement, Lower = more movement
          activeTransition: "transform 0.3s ease-out",
          inactiveTransition: "transform 0.5s ease-in-out",
          glowStrength: "0 0 15px rgba(0, 208, 255, 0.8)",
        }
        },
      breakpoints: {
      mobile: 768, // px
      },
      sparks: {
    color: "#00d0ff",
    size: 27,
    radius: 75,
    count: 8,
    duration: 400,
    easing: "ease-out",
    extraScale: 1.0,
  }
};
