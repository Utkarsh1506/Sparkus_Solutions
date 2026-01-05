'use client';

import React from 'react';

export function PageLoader() {
  return (
    <div className="fixed inset-0 bg-dark-bg z-50 flex items-center justify-center">
      <div className="relative">
        <div className="w-20 h-20 border-4 border-accent/30 border-t-accent rounded-full animate-spin" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-accent font-bold text-sm">SPARKUS</span>
        </div>
      </div>
    </div>
  );
}

export function ContentLoader({ lines = 3 }: { lines?: number }) {
  return (
    <div className="space-y-4 animate-pulse">
      {[...Array(lines)].map((_, i) => (
        <div key={i} className="h-4 bg-gradient-to-r from-dark-secondary to-dark-tertiary rounded loading-shimmer" />
      ))}
    </div>
  );
}

export function CardSkeleton() {
  return (
    <div className="glass-effect rounded-2xl p-8 animate-pulse">
      <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-accent-light/20 rounded-lg mb-4" />
      <div className="h-6 bg-dark-secondary rounded mb-3 w-3/4" />
      <div className="space-y-2">
        <div className="h-4 bg-dark-secondary rounded w-full" />
        <div className="h-4 bg-dark-secondary rounded w-5/6" />
      </div>
    </div>
  );
}
