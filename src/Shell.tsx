import type { ReactNode } from 'react';
import TopBar from './components/TopBar';
import SiteFooter from './components/SiteFooter';

export default function Shell({ children }: { children: ReactNode }) {
  return (
    <main>
      <TopBar />
      {children}
      <SiteFooter />
    </main>
  );
}
