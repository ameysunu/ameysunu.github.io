import { usePortfolio } from '../context/PortfolioContext';
import Section from './Section';

export default function AboutSection() {
  const { about } = usePortfolio();
  return (
    <Section id="about" title="about">
      {about.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </Section>
  );
}
