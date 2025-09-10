export default function BackgroundDecor() {
  return (
    <div className="bg-decor" aria-hidden="true">
      <svg
        className="bg-decor-svg bg-decor-top-right"
        width="420"
        height="420"
        viewBox="0 0 420 420"
        role="img"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <linearGradient id="bgGrad1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#5b63b7" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#718af4" stopOpacity="0.08" />
          </linearGradient>
        </defs>
        <circle cx="210" cy="210" r="200" fill="url(#bgGrad1)" />
      </svg>

      <svg
        className="bg-decor-svg bg-decor-bottom-left"
        width="520"
        height="520"
        viewBox="0 0 520 520"
        role="img"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <linearGradient id="bgGrad2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2c2f49" stopOpacity="0.50" />
            <stop offset="100%" stopColor="#5b63b7" stopOpacity="0.30" />
          </linearGradient>
        </defs>
        <circle
          cx="260"
          cy="260"
          r="210"
          fill="none"
          stroke="url(#bgGrad2)"
          strokeWidth="2"
          strokeDasharray="6 10"
        />
        <circle
          cx="260"
          cy="260"
          r="160"
          fill="none"
          stroke="url(#bgGrad2)"
          strokeWidth="1.5"
          opacity="0.6"
        />
      </svg>
    </div>
  );
}

