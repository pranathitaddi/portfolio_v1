"use client";
import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Main tiny dot cursor */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          x: -6, // Center offset
          y: -6, // Center offset
        }}
        animate={{
          scale: isHovering ? 2.5 : 1,
        }}
      />
      
      {/* Subtle glow follower */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-40"
        style={{
          translateX: cursorX, // No spring for instant tracking, or use heavier spring
          translateY: cursorY,
          x: -150, // Center offset (half of width)
          y: -150, // Center offset (half of height)
        }}
      >
        <div className="w-[300px] h-[300px] bg-white opacity-5 rounded-full blur-3xl" />
      </motion.div>
    </>
  );
};

export default CustomCursor;