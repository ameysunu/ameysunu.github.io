import { usePortfolio } from '../context/PortfolioContext';

export default function SiteFooter() {
  const { footer } = usePortfolio();
  return (
    <footer>
      <span>{footer.location}</span>
      <span>{footer.year}</span>
    </footer>
  );
}
