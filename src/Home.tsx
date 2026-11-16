import Hero from './components/Hero';
import Aside from './components/Aside';
import AboutSection from './components/AboutSection';
import StackSection from './components/StackSection';

export default function Home() {
  return (
    <>
      <Hero />
      <div className="layout">
        <Aside />
        <div className="body">
          <AboutSection />
          <StackSection />
        </div>
      </div>
    </>
  );
}
