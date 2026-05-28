import { useRef, useEffect } from 'react';

const Waves = ({
  lineColor = 'rgba(255, 77, 0, 0.3)',
  backgroundColor = 'transparent',
  waveSpeedX = 0.0125,
  waveSpeedY = 0.005,
  waveAmpX = 40,
  waveAmpY = 20,
  friction = 0.9,
  tension = 0.01,
  maxCursorMove = 120,
  xGap = 12,
  yGap = 36,
}) => {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0, lx: 0, ly: 0, sx: 0, sy: 0, v: 0, vs: 0, a: 0, as: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const points = [];
    const initPoints = () => {
      points.length = 0;
      for (let x = -xGap; x < canvas.width + xGap; x += xGap) {
        for (let y = -yGap; y < canvas.height + yGap; y += yGap) {
          points.push({ x, y, lx: x, ly: y, vx: 0, vy: 0 });
        }
      }
    };

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initPoints();
    };

    window.addEventListener('resize', resize);
    resize();

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = lineColor;
      ctx.lineWidth = 1;

      const time = Date.now() * 0.001;

      points.forEach((p) => {
        const dx = mouse.current.x - p.x;
        const dy = mouse.current.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxCursorMove) {
          const force = (maxCursorMove - dist) / maxCursorMove;
          p.vx -= dx * force * 0.03;
          p.vy -= dy * force * 0.03;
        }

        p.vx += (p.lx - p.x) * tension;
        p.vy += (p.ly - p.y) * tension;

        p.vx *= friction;
        p.vy *= friction;

        p.x += p.vx;
        p.y += p.vy;

        // Add some wave movement
        p.x += Math.sin(time + p.y * waveSpeedY) * waveAmpX * waveSpeedX;
        p.y += Math.cos(time + p.x * waveSpeedX) * waveAmpY * waveSpeedY;
      });

      for (let x = 0; x < canvas.width + xGap; x += xGap) {
        ctx.beginPath();
        let first = true;
        points.filter(p => p.lx === x).forEach(p => {
          if (first) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
          first = false;
        });
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current.x = e.clientX - rect.left;
      mouse.current.y = e.clientY - rect.top;
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [lineColor, backgroundColor, waveSpeedX, waveSpeedY, waveAmpX, waveAmpY, friction, tension, maxCursorMove, xGap, yGap]);

  return <canvas ref={canvasRef} className="w-full h-full block" />;
};

export default Waves;
