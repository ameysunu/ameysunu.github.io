import type { ReactNode } from 'react';
import Nav from './Nav';
import Footer from './Footer';

export default function Shell({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        maxWidth: 1180,
        margin: '0 auto',
        padding: '28px clamp(18px, 4vw, 40px) 40px',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Nav />
      <main style={{ flex: 1, paddingTop: 28 }}>{children}</main>
      <Footer />
    </div>
  );
}
