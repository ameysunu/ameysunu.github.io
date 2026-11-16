export default function NotFound() {
  return (
    <>
      <h1 className="hero">404</h1>
      <div className="layout">
        <aside>
          <p className="muted">page not found. probably a typo, or something that used to exist.</p>
        </aside>
        <div className="body">
          <p>
            <a href="/">← back home</a>
          </p>
        </div>
      </div>
    </>
  );
}
