import { usePortfolio } from '../context/PortfolioContext';

export default function TopBar() {
  const { brand, nav } = usePortfolio();
  return (
    <header className="topbar">
      <a className="topbar-home" href="/">
        {brand}
      </a>
      <nav className="topbar-nav" aria-label="Main">
        {nav.map((n) => (
          <a key={n.label} href={n.href}>
            {n.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
