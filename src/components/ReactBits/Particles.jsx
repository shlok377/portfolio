import { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const ParticleSystem = ({
  particleCount = 200,
  particleSpread = 10,
  speed = 0.1,
  particleColors = ['#ffffff'],
  moveParticlesOnHover = false,
  particleHoverFactor = 1,
  alphaParticles = false,
  particleBaseSize = 100,
  sizeRandomness = 1,
  disableRotation = false,
  isInView = true,
}) => {
  const points = useRef();
  const { viewport, mouse } = useThree();

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < particleCount; i++) {
      const t = Math.random() * 100;
      const factor = 20 + Math.random() * 100;
      const speedValue = 0.01 + Math.random() / 200;
      const xFactor = -particleSpread + Math.random() * (particleSpread * 2);
      const yFactor = -particleSpread + Math.random() * (particleSpread * 2);
      const zFactor = -particleSpread + Math.random() * (particleSpread * 2);
      const color = particleColors[Math.floor(Math.random() * particleColors.length)];
      
      temp.push({ t, factor, speed: speedValue, xFactor, yFactor, zFactor, color });
    }
    return temp;
  }, [particleCount, particleSpread, particleColors]);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame((state) => {
    if (!isInView) return;

    if (!disableRotation && points.current) {
      points.current.rotation.x = THREE.MathUtils.lerp(points.current.rotation.x, state.mouse.y * 0.2, 0.05);
      points.current.rotation.y = THREE.MathUtils.lerp(points.current.rotation.y, state.mouse.x * 0.2, 0.05);
    }
  });

  const [positions, colors, sizes] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const col = new Float32Array(particleCount * 3);
    const siz = new Float32Array(particleCount);
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      const p = particles[i];
      pos[i3] = p.xFactor;
      pos[i3 + 1] = p.yFactor;
      pos[i3 + 2] = p.zFactor;

      const c = new THREE.Color(p.color);
      col[i3] = c.r;
      col[i3 + 1] = c.g;
      col[i3 + 2] = c.b;

      siz[i] = (particleBaseSize / 10) * (1 + Math.random() * sizeRandomness);
    }
    return [pos, col, siz];
  }, [particles, particleCount, particleBaseSize, sizeRandomness]);

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        vertexColors
        transparent={alphaParticles}
        opacity={alphaParticles ? 0.6 : 1}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

const Particles = (props) => {
  const containerRef = useRef();
  const [isInView, setIsInView] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full absolute inset-0">
      <Canvas
        camera={{ position: [0, 0, props.cameraDistance || 20], fov: 75 }}
        dpr={props.pixelRatio || [1, 2]}
        frameloop={isInView ? 'always' : 'never'}
      >
        <ParticleSystem {...props} isInView={isInView} />
      </Canvas>
    </div>
  );
};

export default Particles;
