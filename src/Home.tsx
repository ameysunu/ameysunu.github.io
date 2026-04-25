import Slab from './primitives/Slab';
import Star from './primitives/Star';
import Sticker from './primitives/Sticker';

const UPTO = [
  { tag: 'building', body: 'lisaos — an operating system built in c', meta: '001' },
  { tag: 'learning', body: 'golang, systems design, swift concurrency & distributed systems', meta: '002' },
  { tag: 'playing',  body: 'call of duty mw4 remastered + microsoft flight simulator', meta: '003' },
];

const STACK = [
  { k: 'backend', v: '.NET · C#', sub: 'apis, services, all the wiring' },
  { k: 'mobile',  v: 'Swift',     sub: 'swiftui + concurrency' },
  { k: 'systems', v: 'C',         sub: 'lisaos kernel work' },
  { k: 'going',   v: 'Go',        sub: 'learning in public' },
  { k: 'web',     v: 'React',     sub: 'against my will' },
  { k: 'data',    v: 'Postgres',  sub: 'always postgres' },
];

export default function Home() {
  return (
    <div style={{ display: 'grid', gap: 22 }}>
      <section className="grid-hero">
        <Slab
          bg="var(--accent)"
          color="var(--accent-ink)"
          pad={0}
          style={{ overflow: 'visible', position: 'relative' }}
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
            <Sticker bg="var(--ink)" color="var(--bg)" tilt={5}>★ v03 · 2026</Sticker>
          </div>
          <div style={{ position: 'absolute', top: 120, right: -18, zIndex: 3 }}>
            <Sticker bg="var(--paper)" color="var(--ink)" tilt={-8}>
              hand-written, hand-broken
            </Sticker>
          </div>
          <Star
            size={28}
            color="var(--ink)"
            stroke="var(--ink)"
            style={{ position: 'absolute', bottom: 24, right: 24, zIndex: 3 }}
          />
          <Star
            size={18}
            color="var(--paper)"
            stroke="var(--ink)"
            style={{ position: 'absolute', top: 180, left: 30, zIndex: 3 }}
          />

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
              ∎ now serving
            </span>
            <span className="mono" style={{ fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
              dublin · 53.34°n
            </span>
          </div>
          <div className="hero-left-body" style={{ padding: '26px 30px 30px', position: 'relative' }}>
            <h1
              className="display"
              style={{
                margin: 0,
                fontSize: 'clamp(48px, 8.2vw, 108px)',
                lineHeight: 0.88,
                letterSpacing: '-0.035em',
              }}
            >
              hey<br />i&rsquo;m<br />amey
              <span style={{ display: 'inline-block', transform: 'translateY(-0.05em)' }}>.</span>
            </h1>
            <p
              className="mono"
              style={{ marginTop: 22, marginBottom: 0, fontSize: 14, letterSpacing: '0.02em', maxWidth: 420 }}
            >
              software developer · backend in .net · mobile in swift · occasionally react, badly.
            </p>
          </div>
        </Slab>

        <div style={{ display: 'grid', gridTemplateRows: 'auto auto 1fr', gap: 22 }}>
          <Slab bg="var(--paper)" pad={0}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
              <StatCell k="years shipping" v="06" />
              <StatCell k="langs fluent" v="04" right />
            </div>
            <div
              style={{
                borderTop: 'var(--border) solid var(--rule)',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
              }}
            >
              <StatCell k="coffees / day" v="∞" />
              <StatCell k="bugs in prod" v="yes" right />
            </div>
          </Slab>

          <Slab bg="var(--ink)" color="var(--bg)" pad={18} style={{ position: 'relative' }}>
            <Star
              size={22}
              color="var(--accent)"
              stroke="var(--bg)"
              style={{ position: 'absolute', top: -10, right: -10 }}
            />
            <div className="caption" style={{ opacity: 0.7 }}>status</div>
            <div style={{ marginTop: 8, display: 'flex', alignItems: 'center', gap: 10 }}>
              <span className="status-dot" />
              <span style={{ fontWeight: 600, fontSize: 18 }}>open to interesting work</span>
            </div>
            <div className="mono" style={{ marginTop: 10, fontSize: 12, opacity: 0.7 }}>
              → systems · backend · mobile · anything low-level
            </div>
          </Slab>

          <Slab
            bg="var(--paper)"
            pad={18}
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
          >
            <div className="caption">location.exe</div>
            <AsciiMap />
          </Slab>
        </div>
      </section>

      <section>
        <SectionHead left="// currently upto" right="03 items · updated this week" />
        <Slab pad={0} bg="var(--paper)">
          {UPTO.map((row, i) => (
            <UptoRow key={row.tag} row={row} last={i === UPTO.length - 1} />
          ))}
        </Slab>
      </section>

      <section>
        <SectionHead left="// the stack" right="↓ what I reach for first" />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
            gap: 0,
            border: 'var(--border) solid var(--rule)',
            boxShadow: 'var(--shadow) var(--shadow) 0 0 var(--rule)',
            background: 'var(--paper)',
          }}
        >
          {STACK.map((s, i) => (
            <StackCell key={s.k} {...s} idx={i} />
          ))}
        </div>
      </section>
    </div>
  );
}

function StatCell({ k, v, right }: { k: string; v: string; right?: boolean }) {
  return (
    <div style={{ padding: '16px 18px', borderRight: right ? 'none' : 'var(--border) solid var(--rule)' }}>
      <div className="caption">{k}</div>
      <div className="display" style={{ fontSize: 34, lineHeight: 1, marginTop: 4 }}>{v}</div>
    </div>
  );
}

export function SectionHead({ left, right }: { left: string; right: string }) {
  return (
    <div className="section-head">
      <h2 className="mono section-head__title">
        <Star size={14} color="var(--accent)" stroke="var(--rule)" />
        {left}
      </h2>
      <div className="mono section-head__meta">{right}</div>
    </div>
  );
}

function UptoRow({
  row,
  last,
}: {
  row: { tag: string; body: string; meta: string };
  last: boolean;
}) {
  return (
    <div
      className="row-upto"
      style={{ borderBottom: last ? 'none' : 'var(--border) solid var(--rule)' }}
    >
      <div
        className="mono row-upto-meta caption"
        style={{ padding: '16px 18px', borderRight: 'var(--border) solid var(--rule)', fontSize: 12 }}
      >
        {row.meta}
      </div>
      <div
        className="mono"
        style={{
          padding: '16px 18px',
          borderRight: 'var(--border) solid var(--rule)',
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
        }}
      >
        {row.tag}
      </div>
      <div style={{ padding: '16px 18px', fontSize: 15, fontWeight: 500 }}>{row.body}</div>
      <div className="mono row-upto-arrow" aria-hidden style={{ padding: '0 18px', fontSize: 18 }}>
        →
      </div>
    </div>
  );
}

function StackCell({ k, v, sub, idx }: { k: string; v: string; sub: string; idx: number }) {
  return (
    <div className="stack-cell">
      <div className="mono caption">
        {String(idx + 1).padStart(2, '0')} / {k}
      </div>
      <div>
        <div className="display" style={{ fontSize: 24, lineHeight: 1 }}>{v}</div>
        <div className="mono" style={{ fontSize: 11, marginTop: 6, opacity: 0.8 }}>{sub}</div>
      </div>
    </div>
  );
}

function AsciiMap() {
  const rows = [
    '     ░▒▓█████▓▒',
    '   ░▓██████████▓▒',
    '  ░██████████████▓',
    ' ▒████ dublin  ●██▓',
    ' ▓██████████████▓',
    '  ░▓██████████▒',
    '     ░▒▓███▓▒',
  ];
  return (
    <pre
      className="mono"
      style={{ margin: 0, marginTop: 10, fontSize: 10, lineHeight: 1.1, whiteSpace: 'pre', color: 'var(--ink)' }}
    >
      {rows.join('\n')}
    </pre>
  );
}
