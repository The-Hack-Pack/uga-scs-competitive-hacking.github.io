import React, { useEffect, useRef } from 'react';
import styles from './NeuralBackground.module.css';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

const NeuralBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Detect theme
    const isDarkTheme = () => document.documentElement.getAttribute('data-theme') === 'dark';
    let darkTheme = isDarkTheme();

    // Watch for theme changes
    const observer = new MutationObserver(() => {
      darkTheme = isDarkTheme();
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mouse position
    const mouse = { x: -1000, y: -1000 };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Particle system
    const particles: Particle[] = [];
    const particleCount = 100;
    const maxDistance = 150;
    const mouseDistance = 200;
    const particleSpeed = 0.3;

    // Initialize particles with colors
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * particleSpeed,
        vy: (Math.random() - 0.5) * particleSpeed,
      });
    }

    // Animation loop
    const animate = () => {
      // Clear canvas with fade effect
      ctx.fillStyle = darkTheme ? 'rgba(18, 4, 4, 0.05)' : 'rgba(245, 245, 245, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, i) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Determine if this is a blue particle (odd indices)
        const isBlue = i % 2 === 1;
        const particleColor = darkTheme 
          ? (isBlue ? '#5697d7' : '#ff4444')
          : (isBlue ? '#056a98' : '#a63a3a');
        const particleColorHover = darkTheme
          ? (isBlue ? '#7ab3e8' : '#ff6666')
          : (isBlue ? '#0789c7' : '#c94c4c');

        // Check distance to mouse
        const dmx = mouse.x - particle.x;
        const dmy = mouse.y - particle.y;
        const distanceToMouse = Math.sqrt(dmx * dmx + dmy * dmy);

        // Draw particle (larger if near mouse)
        const particleSize = distanceToMouse < mouseDistance ? 3 : 2;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particleSize, 0, Math.PI * 2);
        ctx.fillStyle = distanceToMouse < mouseDistance ? particleColorHover : particleColor;
        ctx.fill();

        // Draw connection to mouse
        if (distanceToMouse < mouseDistance) {
          const opacity = (1 - distanceToMouse / mouseDistance) * 0.8;
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(mouse.x, mouse.y);
          const mouseLineColor = darkTheme
            ? (isBlue ? '86, 151, 215' : '255, 102, 102')
            : (isBlue ? '5, 106, 152' : '166, 58, 58');
          ctx.strokeStyle = `rgba(${mouseLineColor}, ${opacity})`;
          ctx.lineWidth = 2;
          ctx.stroke();
        }

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[j].x - particle.x;
          const dy = particles[j].y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.5;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            // Use blue if either particle is blue
            const lineColor = darkTheme
              ? ((i % 2 === 1 || j % 2 === 1) ? '86, 151, 215' : '255, 68, 68')
              : ((i % 2 === 1 || j % 2 === 1) ? '5, 106, 152' : '166, 58, 58');
            ctx.strokeStyle = `rgba(${lineColor}, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      observer.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.neuralBackground} />;
};

export default NeuralBackground;
