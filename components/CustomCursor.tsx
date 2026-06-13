'use client';

import useCursor from '@/hooks/useCursor';

export default function CustomCursor() {
  const { cursorRef, cursorDotRef, isVisible, isHovering } = useCursor();

  return (
    <>
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 w-10 h-10 rounded-full border border-[#00FF88]/50 pointer-events-none z-[9999] transition-opacity duration-200 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } ${isHovering ? 'scale-150 opacity-80' : 'scale-100 opacity-100'}`}
        style={{
          background: 'radial-gradient(circle, rgba(0,255,136,0.1) 0%, transparent 70%)',
          mixBlendMode: 'screen',
        }}
      />
      <div
        ref={cursorDotRef}
        className={`fixed top-0 left-0 w-2 h-2 bg-[#00FF88] rounded-full pointer-events-none z-[10000] transition-all duration-75 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } ${isHovering ? 'scale-0' : 'scale-100'}`}
      />
    </>
  );
}