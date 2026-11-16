import { usePortfolio } from '../context/PortfolioContext';
import Section from './Section';
import StackCategory from './StackCategory';

export default function StackSection() {
  const { stack } = usePortfolio();
  return (
    <Section id="stack" title="stack">
      <div className="stack">
        {stack.map((c) => (
          <StackCategory key={c.title} {...c} />
        ))}
      </div>
    </Section>
  );
}
