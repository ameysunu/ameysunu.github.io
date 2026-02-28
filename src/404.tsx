function NotFound() {
    const path = window.location.pathname;

    return (
        <div className="nf-center">
        <div className="title">404</div>
        <div className="subtitle">you're lost, mate</div>
        <br />

        <div className="nf-stack" style={{marginTop: '1rem'}}>
            <div className="nf-stack-item">
                <span className="nf-stack-label">error</span>
                <span className="nf-stack-value">page not found</span>
            </div>
            <div className="nf-stack-item">
                <span className="nf-stack-label">url</span>
                <span className="nf-stack-value">{path}</span>
            </div>
            <div className="nf-stack-item">
                <span className="nf-stack-label">fix</span>
                <a href="/" className="cb-bar-link nf-stack-value">go back home</a>
            </div>
        </div>
        </div>
    );
}

export default NotFound;
