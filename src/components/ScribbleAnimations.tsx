'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

export function ScribbleAnimation({ width = 200, height = 200, delay = 0 }) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const paths = svg.querySelectorAll('path');
    paths.forEach((path, index) => {
      const length = (path as SVGPathElement).getTotalLength();
      (path as SVGPathElement).style.strokeDasharray = length.toString();
      (path as SVGPathElement).style.strokeDashoffset = length.toString();

      gsap.to(path, {
        strokeDashoffset: 0,
        duration: 2.5,
        ease: 'power2.out',
        delay: delay + index * 0.15,
      });
    });
  }, [delay]);

  return (
    <svg
      ref={svgRef}
      className="absolute pointer-events-none"
      viewBox="0 0 200 200"
      width={width}
      height={height}
      style={{ filter: 'drop-shadow(0 0 1px rgba(107, 79, 255, 0.5))' }}
    >
      <path
        d="M 50 100 Q 100 50 150 100 T 250 100"
        stroke="url(#scribbleGradient)"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 40 120 Q 100 80 160 120"
        stroke="url(#scribbleGradient)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 60 140 L 140 140"
        stroke="url(#scribbleGradient)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        opacity="0.6"
      />
      <defs>
        <linearGradient id="scribbleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(107, 79, 255, 0.9)" />
          <stop offset="100%" stopColor="rgba(139, 95, 255, 0.9)" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function CircleScribble() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const circles = svg.querySelectorAll('circle');
    circles.forEach((circle, index) => {
      const length = (circle as SVGCircleElement).getTotalLength?.() || 2 * Math.PI * 80;
      (circle as any).style.strokeDasharray = length.toString();
      (circle as any).style.strokeDashoffset = length.toString();

      gsap.to(circle, {
        strokeDashoffset: 0,
        duration: 3,
        ease: 'power1.out',
        delay: index * 0.2,
      });
    });
  }, []);

  return (
    <svg
      ref={svgRef}
      className="absolute pointer-events-none"
      viewBox="0 0 200 200"
      width="200"
      height="200"
    >
      <circle
        cx="100"
        cy="100"
        r="80"
        stroke="url(#circleGradient)"
        strokeWidth="2"
        fill="none"
        opacity="0.7"
      />
      <circle
        cx="100"
        cy="100"
        r="60"
        stroke="url(#circleGradient)"
        strokeWidth="1.5"
        fill="none"
        opacity="0.5"
      />
      <defs>
        <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(107, 79, 255, 0.6)" />
          <stop offset="100%" stopColor="rgba(139, 95, 255, 0.6)" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function FloatingScribbles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute top-20 right-10"
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ScribbleAnimation width={120} height={120} />
      </motion.div>
      <motion.div
        className="absolute bottom-32 left-10"
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      >
        <CircleScribble />
      </motion.div>
    </div>
  );
}
