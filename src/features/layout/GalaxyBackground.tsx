import { useEffect, useRef } from 'react';

const GalaxyBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Star properties
    interface Star {
      x: number;
      y: number;
      size: number;
      opacity: number;
      speed: number;
      twinkleSpeed: number;
      twinkleOffset: number;
    }

    const stars: Star[] = [];
    const numStars = 200;

    // Initialize stars
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.3,
        speed: Math.random() * 8 + 0.5,
        twinkleSpeed: Math.random() * 0.02 + 0.01,
        twinkleOffset: Math.random() * Math.PI * 2,
      });
    }

    // Nebula clouds
    interface Nebula {
      x: number;
      y: number;
      radius: number;
      color: string;
      opacity: number;
    }

    const nebulae: Nebula[] = [
      { x: canvas.width * 0.2, y: canvas.height * 0.3, radius: 300, color: '124, 124, 255', opacity: 0.03 },
      { x: canvas.width * 0.8, y: canvas.height * 0.7, radius: 400, color: '183, 148, 244', opacity: 0.025 },
      { x: canvas.width * 0.5, y: canvas.height * 0.5, radius: 350, color: '100, 200, 255', opacity: 0.02 },
    ];

    let animationId: number;
    let time = 0;

    const animate = () => {
      ctx.fillStyle = '#020617';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw nebulae
      nebulae.forEach((nebula) => {
        const gradient = ctx.createRadialGradient(
          nebula.x, nebula.y, 0,
          nebula.x, nebula.y, nebula.radius
        );
        gradient.addColorStop(0, `rgba(${nebula.color}, ${nebula.opacity})`);
        gradient.addColorStop(0.5, `rgba(${nebula.color}, ${nebula.opacity * 0.5})`);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        ctx.beginPath();
        ctx.arc(nebula.x, nebula.y, nebula.radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      // Draw and animate stars
      stars.forEach((star) => {
        const twinkle = Math.sin(time * star.twinkleSpeed + star.twinkleOffset);
        const currentOpacity = star.opacity + twinkle * 0.3;
        const currentSize = star.size + twinkle * 0.3;

        ctx.beginPath();
        ctx.arc(star.x, star.y, Math.max(0.5, currentSize), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0.1, currentOpacity)})`;
        ctx.fill();

        // Add glow to brighter stars
        if (star.size > 1.5) {
          const glow = ctx.createRadialGradient(
            star.x, star.y, 0,
            star.x, star.y, star.size * 4
          );
          glow.addColorStop(0, `rgba(124, 124, 255, ${currentOpacity * 0.3})`);
          glow.addColorStop(1, 'rgba(124, 124, 255, 0)');
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size * 4, 0, Math.PI * 2);
          ctx.fillStyle = glow;
          ctx.fill();
        }

        // Move stars slowly upward
        star.y -= star.speed * 0.1;
        if (star.y < -10) {
          star.y = canvas.height + 10;
          star.x = Math.random() * canvas.width;
        }
      });

      time += 1;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10"
      style={{ background: '#020617' }}
    />
  );
};

export default GalaxyBackground;
