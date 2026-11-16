import { usePortfolio } from '../context/PortfolioContext';

export default function Hero() {
  const { name } = usePortfolio();
  return <h1 className="hero">{name}</h1>;
}
