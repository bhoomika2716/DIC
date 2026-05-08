import React, { useEffect, useRef } from 'react';

const DRIFT_POINTS = [
  { x: 0.18, y: 0.2, radius: 0.24, alpha: 0.18, phase: 0 },
  { x: 0.8, y: 0.3, radius: 0.3, alpha: 0.12, phase: 1.7 },
  { x: 0.52, y: 0.78, radius: 0.26, alpha: 0.14, phase: 3.2 }
];

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const Squares = ({
  direction = 'right',
  speed = 0.5,
  borderColor = 'rgba(184, 154, 66, 0.1)',
  squareSize = 52,
  hoverFillColor = 'rgba(184, 154, 66, 0.06)',
  accentColor = '184, 154, 66'
}) => {
  const canvasRef = useRef(null);
  const pointerRef = useRef({
    x: typeof window !== 'undefined' ? window.innerWidth * 0.72 : 0,
    y: typeof window !== 'undefined' ? window.innerHeight * 0.2 : 0,
    active: false
  });
  const gridOffset = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let reducedMotion = false;
    let lastTimestamp = 0;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const updateReducedMotion = () => {
      reducedMotion = mediaQuery.matches;
    };

    updateReducedMotion();

    const resizeCanvas = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const updatePointer = (event) => {
      pointerRef.current = {
        x: event.clientX,
        y: event.clientY,
        active: true
      };
    };

    const deactivatePointer = () => {
      pointerRef.current.active = false;
    };

    const drawGradientWash = () => {
      const base = ctx.createLinearGradient(0, 0, 0, height);
      base.addColorStop(0, 'rgba(255, 251, 243, 0.88)');
      base.addColorStop(0.45, 'rgba(255, 255, 255, 0.62)');
      base.addColorStop(1, 'rgba(248, 243, 232, 0.92)');
      ctx.fillStyle = base;
      ctx.fillRect(0, 0, width, height);
    };

    const drawDriftingGlows = (time) => {
      DRIFT_POINTS.forEach((point, index) => {
        const travel = reducedMotion ? 0 : Math.sin(time * 0.00018 + point.phase) * 36;
        const px = width * point.x + Math.cos(time * 0.00012 + index) * travel;
        const py = height * point.y + Math.sin(time * 0.00015 + point.phase) * travel;
        const radius = Math.max(width, height) * point.radius;
        const glow = ctx.createRadialGradient(px, py, 0, px, py, radius);
        glow.addColorStop(0, `rgba(${accentColor}, ${point.alpha})`);
        glow.addColorStop(0.45, `rgba(${accentColor}, ${point.alpha * 0.35})`);
        glow.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.fillStyle = glow;
        ctx.fillRect(px - radius, py - radius, radius * 2, radius * 2);
      });
    };

    const drawSweep = (time) => {
      const progress = reducedMotion ? 0.55 : (time * 0.000035) % 1;
      const sweepX = width * progress;
      const sweep = ctx.createLinearGradient(sweepX - 180, 0, sweepX + 180, 0);
      sweep.addColorStop(0, 'rgba(255, 255, 255, 0)');
      sweep.addColorStop(0.5, `rgba(${accentColor}, 0.08)`);
      sweep.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = sweep;
      ctx.fillRect(sweepX - 180, 0, 360, height);
    };

    const drawGrid = () => {
      const axisStep = reducedMotion ? 0 : speed;

      if (direction === 'right') gridOffset.current.x = (gridOffset.current.x + axisStep) % squareSize;
      if (direction === 'left') gridOffset.current.x = (gridOffset.current.x - axisStep + squareSize) % squareSize;
      if (direction === 'up') gridOffset.current.y = (gridOffset.current.y - axisStep + squareSize) % squareSize;
      if (direction === 'down') gridOffset.current.y = (gridOffset.current.y + axisStep) % squareSize;

      const { x: offsetX, y: offsetY } = gridOffset.current;

      ctx.strokeStyle = borderColor;
      ctx.lineWidth = 1;

      for (let y = offsetY; y < height + squareSize; y += squareSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      for (let x = offsetX; x < width + squareSize; x += squareSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      return { offsetX, offsetY };
    };

    const drawNodes = (offsetX, offsetY, time) => {
      ctx.fillStyle = `rgba(${accentColor}, 0.18)`;

      for (let x = offsetX; x < width + squareSize; x += squareSize * 4) {
        for (let y = offsetY; y < height + squareSize; y += squareSize * 4) {
          const pulse = reducedMotion ? 0.55 : 0.35 + (Math.sin((x + y) * 0.01 + time * 0.0012) + 1) * 0.16;
          ctx.globalAlpha = clamp(pulse, 0.12, 0.48);
          ctx.beginPath();
          ctx.arc(x, y, 1.3, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      ctx.globalAlpha = 1;
    };

    const drawPointerResponse = (offsetX, offsetY) => {
      const { x, y, active } = pointerRef.current;
      const focusX = active ? x : width * 0.72;
      const focusY = active ? y : height * 0.22;

      const glow = ctx.createRadialGradient(focusX, focusY, 0, focusX, focusY, 260);
      glow.addColorStop(0, `rgba(${accentColor}, ${active ? 0.16 : 0.1})`);
      glow.addColorStop(0.45, `rgba(${accentColor}, 0.05)`);
      glow.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = glow;
      ctx.fillRect(focusX - 260, focusY - 260, 520, 520);

      const fillX = Math.floor((focusX - offsetX) / squareSize) * squareSize + offsetX;
      const fillY = Math.floor((focusY - offsetY) / squareSize) * squareSize + offsetY;

      ctx.fillStyle = hoverFillColor;
      ctx.fillRect(fillX, fillY, squareSize, squareSize);

      ctx.strokeStyle = `rgba(${accentColor}, 0.26)`;
      ctx.lineWidth = 1.25;
      ctx.strokeRect(fillX, fillY, squareSize, squareSize);
    };

    const drawVignette = () => {
      const vignette = ctx.createRadialGradient(
        width * 0.5,
        height * 0.35,
        Math.min(width, height) * 0.1,
        width * 0.5,
        height * 0.45,
        Math.max(width, height) * 0.82
      );
      vignette.addColorStop(0, 'rgba(255, 255, 255, 0)');
      vignette.addColorStop(1, 'rgba(120, 96, 32, 0.08)');
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, width, height);
    };

    const draw = (timestamp) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      lastTimestamp = timestamp;

      ctx.clearRect(0, 0, width, height);
      drawGradientWash();
      drawDriftingGlows(timestamp);
      drawSweep(timestamp);
      const { offsetX, offsetY } = drawGrid();
      drawNodes(offsetX, offsetY, timestamp);
      drawPointerResponse(offsetX, offsetY);
      drawVignette();

      animationFrameId = window.requestAnimationFrame(draw);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', updatePointer);
    window.addEventListener('mouseleave', deactivatePointer);

    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', updateReducedMotion);
    } else {
      mediaQuery.addListener(updateReducedMotion);
    }

    animationFrameId = window.requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', updatePointer);
      window.removeEventListener('mouseleave', deactivatePointer);

      if (typeof mediaQuery.removeEventListener === 'function') {
        mediaQuery.removeEventListener('change', updateReducedMotion);
      } else {
        mediaQuery.removeListener(updateReducedMotion);
      }

      window.cancelAnimationFrame(animationFrameId);
    };
  }, [accentColor, borderColor, direction, hoverFillColor, speed, squareSize]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: -2,
        pointerEvents: 'none',
        width: '100%',
        height: '100%',
        background: 'transparent'
      }}
    />
  );
};

export default Squares;
