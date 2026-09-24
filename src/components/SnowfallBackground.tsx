import React, { useEffect, useRef, useState } from 'react';
import { Snowflake } from 'lucide-react';

interface Particle {
  x: number;
  y: number;
  radius: number;
  density: number;
  speedY: number;
  speedX: number;
  angle: number;
  angularSpeed: number;
  opacity: number;
  armCount: number;
  type: 'crystal' | 'frost' | 'star';
}

export const SnowfallBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isEnabled, setIsEnabled] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setIsEnabled(false);
    }
  }, []);

  useEffect(() => {
    if (!isEnabled) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const isMobile = width < 768;
    // Higher density and visible light blue flakes
    const particleCount = isMobile ? 48 : 85;

    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 3.5 + 2.0,
        density: Math.random() * particleCount,
        speedY: Math.random() * 1.6 + 0.8,
        speedX: (Math.random() - 0.5) * 0.7,
        angle: Math.random() * Math.PI * 2,
        angularSpeed: (Math.random() - 0.5) * 0.025,
        opacity: Math.random() * 0.45 + 0.55, // Stronger visibility
        armCount: 6,
        type: Math.random() > 0.4 ? 'crystal' : Math.random() > 0.5 ? 'star' : 'frost',
      });
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize, { passive: true });

    // Draw crystalline 6-arm snowflake in vibrant light blue
    const drawCrystal = (x: number, y: number, r: number, alpha: number, angle: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);
      
      // Light icy blue stroke
      ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
      ctx.fillStyle = `rgba(186, 230, 253, ${alpha * 0.8})`;
      ctx.lineWidth = 1.4;
      ctx.lineCap = 'round';

      // Center core
      ctx.beginPath();
      ctx.arc(0, 0, r * 0.25, 0, Math.PI * 2);
      ctx.fill();

      // 6 Crystal branches with needles
      for (let i = 0; i < 6; i++) {
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(0, r);

        // Branch needles
        ctx.moveTo(0, r * 0.5);
        ctx.lineTo(r * 0.35, r * 0.75);
        ctx.moveTo(0, r * 0.5);
        ctx.lineTo(-r * 0.35, r * 0.75);

        ctx.moveTo(0, r * 0.78);
        ctx.lineTo(r * 0.2, r * 0.95);
        ctx.moveTo(0, r * 0.78);
        ctx.lineTo(-r * 0.2, r * 0.95);

        ctx.stroke();
        ctx.rotate(Math.PI / 3);
      }
      ctx.restore();
    };

    // Draw crisp starry ice flake
    const drawStar = (x: number, y: number, r: number, alpha: number, angle: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);
      ctx.strokeStyle = `rgba(14, 165, 233, ${alpha})`;
      ctx.lineWidth = 1.2;

      for (let i = 0; i < 4; i++) {
        ctx.beginPath();
        ctx.moveTo(0, -r);
        ctx.lineTo(0, r);
        ctx.stroke();
        ctx.rotate(Math.PI / 4);
      }
      ctx.restore();
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.angle += p.angularSpeed;
        p.y += p.speedY;
        p.x += Math.sin(p.angle) * 1.1 + p.speedX;

        // Wrap around viewport edges
        if (p.y > height + 15) {
          p.y = -15;
          p.x = Math.random() * width;
        }
        if (p.x > width + 15) {
          p.x = -15;
        } else if (p.x < -15) {
          p.x = width + 15;
        }

        if (p.type === 'crystal') {
          drawCrystal(p.x, p.y, p.radius * 2.2, p.opacity, p.angle);
        } else if (p.type === 'star') {
          drawStar(p.x, p.y, p.radius * 1.6, p.opacity, p.angle);
        } else {
          // Frost dot with vibrant ice-blue halo
          ctx.beginPath();
          const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 2.2);
          gradient.addColorStop(0, `rgba(224, 242, 254, ${p.opacity})`);
          gradient.addColorStop(0.4, `rgba(56, 189, 248, ${p.opacity * 0.85})`);
          gradient.addColorStop(0.8, `rgba(14, 165, 233, ${p.opacity * 0.4})`);
          gradient.addColorStop(1, 'rgba(56, 189, 248, 0)');
          ctx.fillStyle = gradient;
          ctx.arc(p.x, p.y, p.radius * 2.2, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [isEnabled]);

  if (!isEnabled) {
    return (
      <button
        onClick={() => setIsEnabled(true)}
        title="Turn Frost Effect ON"
        className="fixed bottom-20 sm:bottom-4 right-4 z-40 bg-white/90 backdrop-blur-xs text-xs text-sky-700 border border-sky-200 px-3 py-1.5 rounded-full shadow-md hover:bg-white transition-colors flex items-center gap-1.5 font-semibold cursor-pointer"
      >
        <Snowflake className="w-3.5 h-3.5 text-sky-500" />
        <span>Frost Effect</span>
      </button>
    );
  }

  return (
    <>
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-30 w-full h-full"
      />
      <button
        onClick={() => setIsEnabled(false)}
        title="Toggle Frost Effect"
        className="fixed bottom-20 sm:bottom-4 right-4 z-40 bg-white/80 hover:bg-white text-xs text-sky-800 border border-sky-200 px-2.5 py-1 rounded-full shadow-xs transition-colors hidden sm:inline-flex items-center gap-1.5 opacity-70 hover:opacity-100 cursor-pointer"
      >
        <Snowflake className="w-3 h-3 text-sky-500 animate-spin-slow" />
        <span>Frost Falling</span>
      </button>
    </>
  );
};
