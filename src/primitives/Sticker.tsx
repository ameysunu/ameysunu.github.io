import type { CSSProperties, ReactNode } from 'react';

type StickerProps = {
  children: ReactNode;
  bg?: string;
  color?: string;
  tilt?: number;
  style?: CSSProperties;
};

export default function Sticker({
  children,
  bg = 'var(--accent)',
  color = 'var(--accent-ink)',
  tilt = -4,
  style,
}: StickerProps) {
  return (
    <span
      className="mono"
      style={{
        display: 'inline-block',
        padding: '6px 10px',
        background: bg,
        color,
        border: 'var(--border) solid var(--rule)',
        boxShadow: '3px 3px 0 0 var(--rule)',
        transform: `rotate(${tilt}deg)`,
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        whiteSpace: 'nowrap',
        ...style,
      }}
    >
      {children}
    </span>
  );
}
