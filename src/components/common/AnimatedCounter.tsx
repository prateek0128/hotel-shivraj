import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';
import { Typography } from '@mui/material';
import type { TypographyProps } from '@mui/material';

interface AnimatedCounterProps extends TypographyProps {
  value: number;
  suffix?: string;
  duration?: number;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  suffix = '',
  duration = 1.2,
  sx,
  ...props
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const totalFrames = Math.round(duration * 60);
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      // Ease-out cubic calculation
      const progress = 1 - Math.pow(1 - frame / totalFrames, 3);
      const current = Math.round(start + (end - start) * progress);

      setCount(current);

      if (frame >= totalFrames) {
        clearInterval(counter);
        setCount(end);
      }
    }, 1000 / 60);

    return () => clearInterval(counter);
  }, [isInView, value, duration]);

  return (
    <Typography
      ref={ref}
      component="span"
      sx={{
        fontVariantNumeric: 'tabular-nums',
        ...sx,
      }}
      {...props}
    >
      {count}
      {suffix}
    </Typography>
  );
};
