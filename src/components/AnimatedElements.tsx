'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

interface ScribbleProps {
  children?: React.ReactNode;
}

export function AnimatedScribble({ children }: ScribbleProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const paths = svg.querySelectorAll('path');
    paths.forEach((path) => {
      const length = path.getTotalLength();
      path.style.strokeDasharray = length.toString();
      path.style.strokeDashoffset = length.toString();

      gsap.to(path, {
        strokeDashoffset: 0,
        duration: 2,
        ease: 'power2.out',
        delay: Math.random() * 0.5,
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
      <path
        d="M 50 100 Q 100 50 150 100"
        stroke="url(#gradient)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M 60 120 Q 100 80 140 120"
        stroke="url(#gradient)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(107, 79, 255, 0.8)" />
          <stop offset="100%" stopColor="rgba(139, 95, 255, 0.8)" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function GradientGlow() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-light/20 rounded-full blur-3xl opacity-40" />
    </div>
  );
}

export function AnimatedCard({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="h-full"
    >
      <div className="card-modern h-full group">
        {children}
      </div>
    </motion.div>
  );
}

export function HeroGradientBg() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-radial from-accent/50 to-transparent rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-gradient-radial from-accent-light/40 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-accent/20 to-transparent rounded-full blur-3xl" />
      <svg className="absolute w-full h-full opacity-5" viewBox="0 0 1200 800">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="1200" height="800" fill="url(#grid)" />
      </svg>
    </div>
  );
}

export function Section({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <section className={`py-24 md:py-40 px-6 md:px-8 relative overflow-hidden ${className}`}>
      <div className="max-w-7xl mx-auto relative z-10">
        {children}
      </div>
    </section>
  );
}
