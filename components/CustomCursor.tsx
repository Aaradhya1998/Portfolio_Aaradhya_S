'use client';

import { useEffect, useRef } from 'react';

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const dot = dotRef.current;
    const ring = ringRef.current;
    const glow = glowRef.current;

    if (!dot || !ring || !glow) {
      return;
    }

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let ringX = targetX;
    let ringY = targetY;
    let glowX = targetX;
    let glowY = targetY;
    let frameId = 0;
    let isVisible = false;

    const moveCursor = (event: MouseEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      dot.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;

      if (!isVisible) {
        isVisible = true;
        dot.style.opacity = '1';
        ring.style.opacity = '1';
        glow.style.opacity = '1';
      }
    };

    const hideCursor = () => {
      isVisible = false;
      dot.style.opacity = '0';
      ring.style.opacity = '0';
      glow.style.opacity = '0';
      document.body.classList.remove('cursor-hovering');
      document.body.classList.remove('cursor-pressed');
    };

    const handlePointerOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const isInteractive = target?.closest('a, button, input, textarea, select, label');

      if (isInteractive) {
        document.body.classList.add('cursor-hovering');
      } else {
        document.body.classList.remove('cursor-hovering');
      }
    };

    const handlePointerDown = () => {
      document.body.classList.add('cursor-pressed');
    };

    const handlePointerUp = () => {
      document.body.classList.remove('cursor-pressed');
    };

    const animate = () => {
      ringX += (targetX - ringX) * 0.2;
      ringY += (targetY - ringY) * 0.2;
      glowX += (targetX - glowX) * 0.1;
      glowY += (targetY - glowY) * 0.1;

      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      glow.style.transform = `translate3d(${glowX}px, ${glowY}px, 0)`;

      frameId = window.requestAnimationFrame(animate);
    };

    frameId = window.requestAnimationFrame(animate);
    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handlePointerOver);
    window.addEventListener('mousedown', handlePointerDown);
    window.addEventListener('mouseup', handlePointerUp);
    window.addEventListener('mouseleave', hideCursor);
    window.addEventListener('blur', hideCursor);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handlePointerOver);
      window.removeEventListener('mousedown', handlePointerDown);
      window.removeEventListener('mouseup', handlePointerUp);
      window.removeEventListener('mouseleave', hideCursor);
      window.removeEventListener('blur', hideCursor);
      document.body.classList.remove('cursor-hovering');
      document.body.classList.remove('cursor-pressed');
    };
  }, []);

  return (
    <>
      <div ref={glowRef} className="custom-cursor custom-cursor-glow" />
      <div ref={ringRef} className="custom-cursor custom-cursor-ring" />
      <div ref={dotRef} className="custom-cursor custom-cursor-dot" />
    </>
  );
}
