import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NAV = [
  { to: '/', label: 'home', match: (p: string) => p === '/' },
  { to: '/blog', label: 'blog', match: (p: string) => p.startsWith('/blog') },
  { to: '/about', label: 'about', match: (p: string) => p.startsWith('/about') },
];

export default function Nav() {
  const { pathname } = useLocation();
  const [dark, setDark] = useState<boolean>(
    () => document.documentElement.getAttribute('data-theme') === 'dark'
  );

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    try {
      localStorage.setItem('amey.theme', dark ? 'dark' : 'light');
    } catch {
      /* ignore */
    }
  }, [dark]);

  return (
    <header className="site-header">
      <nav style={{ display: 'flex' }}>
        {NAV.map((n) => {
          const active = n.match(pathname);
          return (
            <Link
              key={n.to}
              to={n.to}
              className={`mono nav-btn${active ? ' nav-btn--active' : ''}`}
            >
              {n.label}
            </Link>
          );
        })}
      </nav>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div className="mono nav-v03">v03 · 2026</div>
        <button
          onClick={() => setDark((d) => !d)}
          aria-label="toggle theme"
          className="theme-btn"
        >
          {dark ? '☾' : '☀'}
        </button>
      </div>
    </header>
  );
}
