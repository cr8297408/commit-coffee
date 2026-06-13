'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const isVisibleRef = useRef(false);
  const isHoveringRef = useRef(false);
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const cursorX = useRef(0);
  const cursorY = useRef(0);
  const dotX = useRef(0);
  const dotY = useRef(0);
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    if (!cursor || !cursorDot) return;

    const onMouseMove = (e: MouseEvent) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;
      if (!isVisibleRef.current) {
        isVisibleRef.current = true;
        gsap.to([cursor, cursorDot], { opacity: 1, duration: 0.2 });
      }
    };

    const onMouseLeave = () => {
      isVisibleRef.current = false;
      gsap.to([cursor, cursorDot], { opacity: 0, duration: 0.2 });
    };

    const onMouseEnter = () => {
      isVisibleRef.current = true;
      gsap.to([cursor, cursorDot], { opacity: 1, duration: 0.2 });
    };

    const onHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
        if (!isHoveringRef.current) {
          isHoveringRef.current = true;
          gsap.to(cursor, { scale: 2, opacity: 0.6, duration: 0.3, ease: 'power2.out' });
          gsap.to(cursorDot, { scale: 0, duration: 0.15 });
        }
      }
    };

    const onHoverEnd = () => {
      if (isHoveringRef.current) {
        isHoveringRef.current = false;
        gsap.to(cursor, { scale: 1, opacity: 1, duration: 0.3, ease: 'power2.out' });
        gsap.to(cursorDot, { scale: 1, duration: 0.15 });
      }
    };

    const animate = () => {
      cursorX.current += (mouseX.current - cursorX.current) * 0.15;
      cursorY.current += (mouseY.current - cursorY.current) * 0.15;
      dotX.current += (mouseX.current - dotX.current) * 0.35;
      dotY.current += (mouseY.current - dotY.current) * 0.35;

      cursor.style.transform = `translate(${cursorX.current - 20}px, ${cursorY.current - 20}px)`;
      cursorDot.style.transform = `translate(${dotX.current - 4}px, ${dotY.current - 4}px)`;

      animationRef.current = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseover', onHoverStart);
    document.addEventListener('mouseout', onHoverEnd);

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseover', onHoverStart);
      document.removeEventListener('mouseout', onHoverEnd);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-[#00FF88]/50 pointer-events-none z-[9999]"
        style={{
          background: 'radial-gradient(circle, rgba(0,255,136,0.15) 0%, transparent 70%)',
          mixBlendMode: 'screen',
        }}
      />
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-[#00FF88] rounded-full pointer-events-none z-[10000]"
      />
    </>
  );
}