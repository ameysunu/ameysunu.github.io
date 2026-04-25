import { useEffect, useState } from 'react';
import Slab from './primitives/Slab';
import { SectionHead } from './Home';

const ROLES = ['bug maker.', 'engineer.', 'developer.'];

const TOOLS: [string, string][] = [
  ['editor', 'visual studio, jet brains rider and xcode'],
  ['shell', 'zsh, always'],
  ['notes', 'plain .md files'],
  ['music', 'edm'],
];

const TIMELINE: [string, string][] = [
  ['2025', 'next .net backend gig, full-time, dublin'],
  ['2024', 'deep into swift concurrency + mobile architecture'],
  ['2022', 'first .net backend gig, as intern and full-time, dublin'],
  ['2021', 'university — masters, cs, caffeine, catastrophe'],
  ['2017', 'university - bachelors, cs, caffeine'],
];

export default function About() {
  const [active, setActive] = useState(2);
  useEffect(() => {
    const id = window.setInterval(() => setActive((a) => (a + 1) % ROLES.length), 2200);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div style={{ display: 'grid', gap: 22 }}>
      <section className="grid-split">
        <Slab bg="var(--paper)" pad={0}>
          <div style={{ padding: '22px 28px 10px', borderBottom: 'var(--border) solid var(--rule)' }}>
            <span className="caption">/about.md</span>
          </div>
          <div style={{ padding: '24px 28px 28px' }}>
            <h1
              className="display"
              style={{
                margin: 0,
                fontSize: 'clamp(52px, 9vw, 120px)',
                lineHeight: 0.88,
                letterSpacing: '-0.035em',
              }}
            >
              about
            </h1>
            <div style={{ marginTop: 18, display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {ROLES.map((r, i) => (
                <RoleTab key={r} label={r} active={active === i} onClick={() => setActive(i)} />
              ))}
            </div>
          </div>
        </Slab>

        <Slab bg="var(--ink)" color="var(--bg)" pad={28}>
          <div className="caption" style={{ opacity: 0.65 }}>// tagline</div>
          <h2
            className="display"
            style={{
              margin: '12px 0 0',
              fontSize: 'clamp(32px, 4.5vw, 52px)',
              lineHeight: 0.95,
              letterSpacing: '-0.025em',
            }}
          >
            i write code.<br />
            and it works<span style={{ color: 'var(--accent)' }}>,</span><br />
            sometimes.
          </h2>
          <div className="mono" style={{ marginTop: 22, fontSize: 12, opacity: 0.7, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            ↳ mileage may vary
          </div>
        </Slab>
      </section>

      <section className="grid-split-wide">
        <Slab bg="var(--paper)" pad={28}>
          <p style={{ marginTop: 0, fontSize: 17, lineHeight: 1.55 }}>
            so, all i do is write software. mainly — backend in <Chip>.net</Chip> and mobile
            development in <Chip>swift</Chip>. i also sometimes write websites in <Chip>react</Chip>,
            like this one, but i suck at it.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.55, marginBottom: 0 }}>
            i care about building things that are{' '}
            <u style={{ textDecorationThickness: '3px', textUnderlineOffset: 4 }}>fast</u>,{' '}
            <u style={{ textDecorationThickness: '3px', textUnderlineOffset: 4 }}>minimal</u>, and{' '}
            <u style={{ textDecorationThickness: '3px', textUnderlineOffset: 4 }}>powerful</u>. right
            now that&rsquo;s <strong>lisaos</strong>, an operating system written in c, and i&rsquo;m
            slowly diving into more systems-level programming — learning about os design,
            distributed systems and concurrency.
          </p>
        </Slab>

        <div style={{ display: 'grid', gridTemplateRows: 'auto 1fr', gap: 22 }}>
          <Slab bg="var(--accent)" color="var(--accent-ink)" pad={22}>
            <div className="mono" style={{ fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase' }}>
              currently
            </div>
            <div className="display" style={{ marginTop: 8, fontSize: 28, lineHeight: 1 }}>
              shipping lisaos v0.1
            </div>
            <div className="mono" style={{ marginTop: 10, fontSize: 12 }}>
              ~ 3 months in. boot sector works. mostly.
            </div>
          </Slab>

          <Slab bg="var(--paper)" pad={0}>
            <div style={{ padding: '14px 18px', borderBottom: 'var(--border) solid var(--rule)' }}>
              <span className="caption">tools on the bench</span>
            </div>
            {TOOLS.map(([k, v], i) => (
              <div
                key={k}
                className="row-kv"
                style={{ borderBottom: i === TOOLS.length - 1 ? 'none' : 'var(--border) solid var(--rule)' }}
              >
                <div
                  className="mono caption"
                  style={{ padding: '10px 14px', borderRight: 'var(--border) solid var(--rule)', fontSize: 11 }}
                >
                  {k}
                </div>
                <div style={{ padding: '10px 14px', fontSize: 14 }}>{v}</div>
              </div>
            ))}
          </Slab>
        </div>
      </section>

      <section>
        <SectionHead left="// the brief history" right="09 years · mostly typing" />
        <Slab bg="var(--paper)" pad={0}>
          {TIMELINE.map(([y, t], i) => (
            <div
              key={y}
              className="row-timeline"
              style={{ borderBottom: i === TIMELINE.length - 1 ? 'none' : 'var(--border) solid var(--rule)' }}
            >
              <div
                className="display"
                style={{ fontSize: 30, padding: '14px 20px', borderRight: 'var(--border) solid var(--rule)' }}
              >
                {y}
              </div>
              <div style={{ padding: '14px 20px', fontSize: 15 }}>{t}</div>
              <div className="mono row-timeline-idx caption" aria-hidden style={{ padding: '0 20px' }}>
                {String(TIMELINE.length - i).padStart(2, '0')}
              </div>
            </div>
          ))}
        </Slab>
      </section>
    </div>
  );
}

function RoleTab({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <span
      onClick={onClick}
      style={{
        cursor: 'pointer',
        padding: '8px 12px',
        border: 'var(--border) solid var(--rule)',
        background: active ? 'var(--accent)' : 'var(--paper)',
        color: active ? 'var(--accent-ink)' : 'var(--muted)',
        fontWeight: active ? 700 : 500,
        fontSize: 15,
        transition: 'all .1s',
        transform: active ? 'translate(-2px, -2px)' : 'none',
        boxShadow: active ? '3px 3px 0 0 var(--rule)' : 'none',
      }}
    >
      {label}
    </span>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return <span className="mono chip">{children}</span>;
}
