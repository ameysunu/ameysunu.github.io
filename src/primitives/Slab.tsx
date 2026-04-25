import type { CSSProperties, ElementType, ReactNode } from 'react';

type SlabProps = {
  as?: ElementType;
  bg?: string;
  color?: string;
  pad?: number | string;
  children?: ReactNode;
  style?: CSSProperties;
  shadow?: boolean;
  tilt?: number;
};

export default function Slab({
  as: Cmp = 'div',
  bg,
  color,
  pad = 20,
  children,
  style,
  shadow = true,
  tilt = 0,
}: SlabProps) {
  return (
    <Cmp
      style={{
        background: bg || 'var(--paper)',
        color: color || 'var(--ink)',
        border: 'var(--border) solid var(--rule)',
        boxShadow: shadow ? 'var(--shadow) var(--shadow) 0 0 var(--rule)' : 'none',
        padding: pad,
        transform: tilt ? `rotate(${tilt}deg)` : undefined,
        ...style,
      }}
    >
      {children}
    </Cmp>
  );
}
