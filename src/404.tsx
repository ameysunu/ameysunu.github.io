import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Slab from './primitives/Slab';
import Star from './primitives/Star';
import Sticker from './primitives/Sticker';

const JOKES = [
  'the page ran away from home.',
  'it is not here. it has never been here.',
  'gone. like a goroutine with no backpressure.',
  'the kernel panicked. then it left.',
  'returned 404. would not elaborate.',
  'compiled. shipped. deleted.',
];

const TRACE = [
  'GET /somewhere',
  '  → route.match() → null',
  '  → router.fallback()',
  '  → throw new Error("not here")',
  '  → caught by <NotFound />',
  '  → you, reading this',
];

export default function NotFound() {
  const path = typeof window !== 'undefined' ? window.location.pathname : '/';
  const [jokeIdx, setJokeIdx] = useState(0);

  useEffect(() => {
    setJokeIdx(Math.floor(Math.random() * JOKES.length));
  }, []);

  return (
    <div style={{ display: 'grid', gap: 22 }}>
      <section className="grid-hero">
        <Slab
          bg="var(--accent)"
          color="var(--accent-ink)"
          pad={0}
          style={{ position: 'relative', overflow: 'visible' }}
        >
          <div
            aria-hidden
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'radial-gradient(var(--accent-ink) 1.2px, transparent 1.2px)',
              backgroundSize: '16px 16px',
              opacity: 0.12,
              pointerEvents: 'none',
            }}
          />
          <div style={{ position: 'absolute', top: -14, right: 22, zIndex: 3 }}>
            <Sticker bg="var(--ink)" color="var(--bg)" tilt={6}>★ error · 404</Sticker>
          </div>
          <div style={{ position: 'absolute', top: 120, right: -18, zIndex: 3 }}>
            <Sticker bg="var(--paper)" color="var(--ink)" tilt={-8}>
              not found · core dumped
            </Sticker>
          </div>
          <Star size={28} color="var(--ink)" stroke="var(--ink)" style={{ position: 'absolute', bottom: 24, right: 24, zIndex: 3 }} />
          <Star size={18} color="var(--paper)" stroke="var(--ink)" style={{ position: 'absolute', top: 180, left: 30, zIndex: 3 }} />

          <div
            className="hero-left-pad"
            style={{
              padding: '28px 30px 10px',
              borderBottom: 'var(--border) solid var(--rule)',
              display: 'flex',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: 8,
              position: 'relative',
            }}
          >
            <span className="mono" style={{ fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
              ∎ status 404
            </span>
            <span className="mono" style={{ fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
              page · missing
            </span>
          </div>
          <div className="hero-left-body" style={{ padding: '26px 30px 30px', position: 'relative' }}>
            <h1
              className="display"
              style={{ margin: 0, fontSize: 'clamp(72px, 14vw, 180px)', lineHeight: 0.86, letterSpacing: '-0.04em' }}
            >
              four.<br />oh.<br />four.
            </h1>
            <p className="mono" style={{ marginTop: 22, marginBottom: 0, fontSize: 14, letterSpacing: '0.02em', maxWidth: 440 }}>
              {JOKES[jokeIdx]}
            </p>
          </div>
        </Slab>

        <div style={{ display: 'grid', gridTemplateRows: 'auto 1fr', gap: 22 }}>
          <Slab bg="var(--ink)" color="var(--bg)" pad={18} style={{ position: 'relative' }}>
            <Star size={22} color="var(--accent)" stroke="var(--bg)" style={{ position: 'absolute', top: -10, right: -10 }} />
            <div className="caption" style={{ opacity: 0.7 }}>request dump</div>
            <Slab pad={0}>
              <div className="row-kv-lg" style={{ borderBottom: 'var(--border) solid var(--rule)' }}>
                <KVKey>path</KVKey>
                <KVVal mono>{path}</KVVal>
              </div>
              <div className="row-kv-lg" style={{ borderBottom: 'var(--border) solid var(--rule)' }}>
                <KVKey>status</KVKey>
                <KVVal>404 — not found</KVVal>
              </div>
              <div className="row-kv-lg">
                <KVKey>fix</KVKey>
                <KVVal>see below ↓</KVVal>
              </div>
            </Slab>
          </Slab>

          <Slab bg="var(--paper)" pad={18} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div className="caption" style={{ marginBottom: 10 }}>stack.trace</div>
            <pre className="mono" style={{ margin: 0, fontSize: 11, lineHeight: 1.55, whiteSpace: 'pre', color: 'var(--ink)', overflowX: 'auto' }}>
              {TRACE.join('\n')}
            </pre>
          </Slab>
        </div>
      </section>

      <section className="grid-split">
        <Link
          to="/"
          className="mono"
          style={{
            textDecoration: 'none',
            background: 'var(--ink)',
            color: 'var(--bg)',
            border: 'var(--border) solid var(--rule)',
            boxShadow: 'var(--shadow) var(--shadow) 0 0 var(--rule)',
            padding: '18px 22px',
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          ← take me home
          <span aria-hidden style={{ color: 'var(--accent)' }}>★</span>
        </Link>

        <Link
          to="/blog"
          className="mono"
          style={{
            textDecoration: 'none',
            background: 'var(--accent)',
            color: 'var(--accent-ink)',
            border: 'var(--border) solid var(--rule)',
            boxShadow: 'var(--shadow) var(--shadow) 0 0 var(--rule)',
            padding: '18px 22px',
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          read something instead →
          <span aria-hidden>◆</span>
        </Link>
      </section>
    </div>
  );
}

function KVKey({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="mono caption"
      style={{ padding: '10px 14px', borderRight: 'var(--border) solid var(--rule)' }}
    >
      {children}
    </div>
  );
}

function KVVal({ children, mono }: { children: React.ReactNode; mono?: boolean }) {
  return (
    <div className={mono ? 'mono' : undefined} style={{ padding: '10px 14px', fontSize: 14, wordBreak: 'break-all' }}>
      {children}
    </div>
  );
}
