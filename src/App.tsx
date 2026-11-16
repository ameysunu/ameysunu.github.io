import { PortfolioProvider } from './context/PortfolioContext';
import Shell from './Shell';
import Home from './Home';
import NotFound from './components/NotFound';

export default function App() {
  const isHome = window.location.pathname === '/';
  return (
    <PortfolioProvider>
      <Shell>{isHome ? <Home /> : <NotFound />}</Shell>
    </PortfolioProvider>
  );
}
