import type { CSSProperties } from 'react';

type StarProps = {
  size?: number;
  color?: string;
  stroke?: string;
  spin?: number;
  style?: CSSProperties;
};

export default function Star({
  size = 22,
  color = 'var(--accent)',
  stroke = 'var(--rule)',
  spin = 0,
  style,
}: StarProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden
      style={{ transform: spin ? `rotate(${spin}deg)` : undefined, display: 'block', ...style }}
    >
      <path
        d="M12 1 L14 10 L23 12 L14 14 L12 23 L10 14 L1 12 L10 10 Z"
        fill={color}
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
