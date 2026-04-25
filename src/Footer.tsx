const SOCIAL = [
  { label: 'github', href: 'https://github.com/ameysunu' },
  { label: 'dev.to', href: 'https://dev.to/ameysunu' },
  { label: 'linkedin', href: 'https://linkedin.com/in/ameysunu' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        {SOCIAL.map((s) => (
          <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="mono footer-link">
            {s.label} <span aria-hidden>↗</span>
          </a>
        ))}
      </div>
      <div className="footer-copy">© amey · dublin, ie · made loudly</div>
    </footer>
  );
}
