import React, { useRef, useEffect, useState } from 'react';

const Squares = ({ 
  direction = 'right',
  speed = 0.5,
  borderColor = 'rgba(184, 154, 66, 0.08)',
  squareSize = 40,
  hoverFillColor = 'rgba(184, 154, 66, 0.03)'
}) => {
  const canvasRef = useRef(null);
  const [hoveredSquare, setHoveredSquare] = useState(null);
  const gridOffset = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update offset based on speed and direction
      if (direction === 'right') gridOffset.current.x = (gridOffset.current.x + speed) % squareSize;
      if (direction === 'left') gridOffset.current.x = (gridOffset.current.x - speed + squareSize) % squareSize;
      if (direction === 'up') gridOffset.current.y = (gridOffset.current.y - speed + squareSize) % squareSize;
      if (direction === 'down') gridOffset.current.y = (gridOffset.current.y + speed) % squareSize;

      const { x: offsetX, y: offsetY } = gridOffset.current;

      ctx.strokeStyle = borderColor;
      ctx.lineWidth = 1;

      // Draw horizontal lines
      for (let y = offsetY; y < canvas.height; y += squareSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw vertical lines
      for (let x = offsetX; x < canvas.width; x += squareSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Draw hovered square highlight
      if (hoveredSquare) {
        // Calculate the square's position relative to the moving grid
        // This is tricky because the grid moves. For simplicity, we'll just highlight the static pixel area for now
        // or we can calculate based on current offset.
        ctx.fillStyle = hoverFillColor;
        const fillX = Math.floor((hoveredSquare.x - offsetX) / squareSize) * squareSize + offsetX;
        const fillY = Math.floor((hoveredSquare.y - offsetY) / squareSize) * squareSize + offsetY;
        ctx.fillRect(fillX, fillY, squareSize, squareSize);
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [direction, speed, borderColor, squareSize, hoveredSquare, hoverFillColor]);

  const handleMouseMove = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    setHoveredSquare({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const handleMouseLeave = () => {
    setHoveredSquare(null);
  };

  return (
    <canvas 
      ref={canvasRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: -2,
        pointerEvents: 'auto', // Allow mouse interaction
        width: '100%',
        height: '100%',
        background: 'transparent'
      }}
    />
  );
};

export default Squares;
