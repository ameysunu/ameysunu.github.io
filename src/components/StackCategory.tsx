import type { StackCategory as Cat } from '../context/PortfolioContext';

export default function StackCategory({ title, items }: Cat) {
  return (
    <div>
      <h3>{title}</h3>
      <ul>
        {items.map((it) => (
          <li key={it}>{it}</li>
        ))}
      </ul>
    </div>
  );
}
