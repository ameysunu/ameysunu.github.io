import { useEffect, useRef } from 'react';

const STAR_COUNT = 25;
const STAR_SPEED = 0.05;
const STAR_LENGTH = 1.5;
const STAR_COLOR = 'rgba(200, 220, 255, 0.88)';

interface Star {
  x: number;
  y: number;
  z: number;
  prevX: number;
  prevY: number;
}

function randomStar(width: number, height: number): Star {
  const angle = Math.random() * 2 * Math.PI;
  const radius = Math.random() * (width + height) / 4;
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;
  return {
    x,
    y,
    z: Math.random(),
    prevX: x,
    prevY: y,
  };
}

export default function LightspeedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const starsRef = useRef<Star[]>([]);
  const sizeRef = useRef({ width: 0, height: 0 });

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      sizeRef.current = { width, height };
      if (canvasRef.current) {
        canvasRef.current.width = width;
        canvasRef.current.height = height;
      }
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Initialize stars
  useEffect(() => {
    const { width, height } = sizeRef.current;
    starsRef.current = Array.from({ length: STAR_COUNT }, () => randomStar(width, height));
  }, []);

  // Animation loop
  useEffect(() => {
    function animate() {
      const ctx = canvasRef.current?.getContext('2d');
      if (!ctx) return;
      const { width, height } = sizeRef.current;
      ctx.clearRect(0, 0, width, height);
      ctx.save();
      ctx.translate(width / 2, height / 2);
      for (let star of starsRef.current) {
        // Save previous position
        star.prevX = star.x * (1 + star.z * STAR_LENGTH);
        star.prevY = star.y * (1 + star.z * STAR_LENGTH);
        // Move star outward
        star.z += STAR_SPEED;
        // Project to screen
        const sx = star.x * (1 + star.z);
        const sy = star.y * (1 + star.z);
        // Draw streak
        ctx.beginPath();
        ctx.moveTo(star.prevX, star.prevY);
        ctx.lineTo(sx, sy);
        ctx.strokeStyle = STAR_COLOR;
        ctx.lineWidth = Math.max(1, 2.5 - star.z * 1.5);
        ctx.shadowColor = '#b8d0ff';
        ctx.shadowBlur = 8;
        ctx.stroke();
        ctx.shadowBlur = 0;
        // If star is out of bounds, respawn
        if (
          Math.abs(sx) > width / 2 + 100 ||
          Math.abs(sy) > height / 2 + 100
        ) {
          const newStar = randomStar(width, height);
          star.x = newStar.x;
          star.y = newStar.y;
          star.z = 0;
        }
      }
      ctx.restore();
      animationRef.current = requestAnimationFrame(animate);
    }
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        pointerEvents: 'none',
        background: 'transparent',
      }}
      aria-hidden="true"
    />
  );
} 