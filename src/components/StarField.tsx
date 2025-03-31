import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  color: string;
}

const StarField: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stars = useRef<Star[]>([]);
  const animationFrameId = useRef<number>();

  const createStar = (canvas: HTMLCanvasElement, initialSetup: boolean = false): Star => {
    // Calculate the margins (about 10% of screen width)
    const margin = canvas.width * 0.1;
    const size = 0.5 + Math.random() * 1.2; // Smaller star sizes
    
    // Determine speed based on size - smaller stars move faster
    const speed = size < 1.0 ? 0.1 + Math.random() * 0.2 : 0.03 + Math.random() * 0.1;
    
    // Determine color based on size - bigger stars are white, smaller are cyan
    const color = size >= 1.0 ? '#FFFFFF' : '#06B6D4';
    
    return {
      // Restrict x position to be between the margins
      x: margin + Math.random() * (canvas.width - margin * 2),
      y: initialSetup 
        ? Math.random() * canvas.height 
        : canvas.height + Math.random() * 100,
      size,
      speed,
      opacity: 0.2 + Math.random() * 0.4, // Reduced opacity
      color,
    };
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      stars.current = Array(120).fill(null).map(() => createStar(canvas, true)); // Increased number of stars from 80 to 120
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.current.forEach((star, index) => {
        star.y -= star.speed;

        // Reset star position when it reaches the top
        if (star.y < 0) {
          stars.current[index] = createStar(canvas);
          return;
        }

        // Apply a slight twinkle effect with moderate intensity
        star.opacity = 0.25 + Math.sin(Date.now() * 0.0008 + index) * 0.15;

        ctx.globalAlpha = star.opacity;
        ctx.fillStyle = star.color;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none backdrop-blur-[0.5px]"
    />
  );
};

export default StarField; 