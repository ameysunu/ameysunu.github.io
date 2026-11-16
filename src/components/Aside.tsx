import { usePortfolio } from '../context/PortfolioContext';

export default function Aside() {
  const { tagline } = usePortfolio();
  return (
    <aside>
      <p className="muted">{tagline}</p>
    </aside>
  );
}
