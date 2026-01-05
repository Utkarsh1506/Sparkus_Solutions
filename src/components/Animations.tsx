'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function TextReveal({ text, delay = 0 }: { text: string; delay?: number }) {
  const words = text.split(' ');

  return (
    <div className="flex flex-wrap gap-2">
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: delay + index * 0.05,
          }}
          viewport={{ once: true }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}

export function CounterAnimation({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      setCount(Math.floor((value / steps) * currentStep));

      if (currentStep === steps) {
        clearInterval(interval);
        setCount(value);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export function BatchAnimation({ children, staggerDelay = 0.1 }: { children: React.ReactNode[]; staggerDelay?: number }) {
  return (
    <>
      {React.Children.map(children, (child, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: index * staggerDelay,
          }}
          viewport={{ once: true, margin: '-100px' }}
        >
          {child}
        </motion.div>
      ))}
    </>
  );
}
