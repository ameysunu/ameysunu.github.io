import { createContext, useContext, type ReactNode } from 'react';
import data from './portfolio.json';

export type PortfolioData = typeof data;
export type NavItem = PortfolioData['nav'][number];
export type StackCategory = PortfolioData['stack'][number];

const PortfolioContext = createContext<PortfolioData | null>(null);

export function PortfolioProvider({ children }: { children: ReactNode }) {
  return <PortfolioContext.Provider value={data}>{children}</PortfolioContext.Provider>;
}

export function usePortfolio(): PortfolioData {
  const v = useContext(PortfolioContext);
  if (!v) throw new Error('usePortfolio must be used inside PortfolioProvider');
  return v;
}
