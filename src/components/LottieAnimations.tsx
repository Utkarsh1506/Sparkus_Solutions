'use client';

import React from 'react';
import Lottie from 'lottie-react';

// Simple Lottie JSON animations (built-in)
const loadingAnimation = {
  v: '5.7.0',
  meta: { g: 'LottieFiles Generator', a: '', d: '', tc: '' },
  fr: 30,
  ip: 0,
  op: 120,
  w: 200,
  h: 200,
  nm: 'Loading',
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: 'Circle',
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 1, k: [{ i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 0, s: [0] }, { t: 120, s: [360] }] },
        p: { a: 0, k: [100, 100, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ao: 0,
      shapes: [
        {
          ty: 'el',
          s: { a: 0, k: [40, 40] },
          p: { a: 0, k: [0, 0] },
          nm: 'Ellipse Path 1',
          mn: 'ADBE Vector Shape - Ellipse',
          hd: false,
        },
        {
          ty: 'st',
          c: { a: 0, k: [0.42, 0.31, 1, 1] },
          o: { a: 0, k: 100 },
          w: { a: 0, k: 3 },
          lc: 2,
          lj: 2,
          ml: 4,
          nm: 'Stroke 1',
          mn: 'ADBE Vector Graphic - Stroke',
          hd: false,
        },
        {
          ty: 'tr',
          p: { a: 0, k: [0, -60] },
          a: { a: 0, k: [0, 0] },
          s: { a: 0, k: [100, 100] },
          r: { a: 0, k: 0 },
          o: { a: 0, k: 100 },
          nm: 'Transform',
        },
      ],
      ip: 0,
      op: 120,
      st: 0,
      bm: 0,
    },
  ],
};

const successAnimation = {
  v: '5.7.0',
  meta: { g: 'LottieFiles Generator' },
  fr: 30,
  ip: 0,
  op: 60,
  w: 200,
  h: 200,
  nm: 'Success',
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: 'Checkmark',
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [100, 100, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ao: 0,
      shapes: [
        {
          ty: 'el',
          s: { a: 0, k: [150, 150] },
          p: { a: 0, k: [0, 0] },
          nm: 'Circle',
          hd: false,
        },
        {
          ty: 'fl',
          c: { a: 0, k: [0.06, 0.68, 0.51, 1] },
          o: { a: 0, k: 100 },
          nm: 'Fill',
          hd: false,
        },
      ],
      ip: 0,
      op: 60,
      st: 0,
      bm: 0,
    },
  ],
};

interface LottieAnimationProps {
  animationType?: 'loading' | 'success' | 'custom';
  customAnimation?: any;
  loop?: boolean;
  autoplay?: boolean;
  width?: number;
  height?: number;
  className?: string;
}

export function LottieAnimation({
  animationType = 'loading',
  customAnimation,
  loop = true,
  autoplay = true,
  width = 200,
  height = 200,
  className = '',
}: LottieAnimationProps) {
  const getAnimation = () => {
    if (customAnimation) return customAnimation;
    if (animationType === 'success') return successAnimation;
    return loadingAnimation;
  };

  return (
    <div className={className} style={{ width, height }}>
      <Lottie
        animationData={getAnimation()}
        loop={loop}
        autoplay={autoplay}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
}

// Inline Lottie wrapper for section backgrounds
export function LottieBackground({ animationType = 'loading' }: { animationType?: 'loading' | 'success' | 'custom' }) {
  return (
    <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ width: '100%', height: '100%' }}>
      <LottieAnimation animationType={animationType} width={300} height={300} />
    </div>
  );
}
