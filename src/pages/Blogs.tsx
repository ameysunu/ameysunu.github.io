import { useEffect, useState } from "react";

const BLOG_URL = "https://blogs.ameys.eu";

export default function Blogs() {
    const [countdown, setCountdown] = useState(5);

    useEffect(() => {
        const redirectTimeout = window.setTimeout(() => {
            window.location.href = BLOG_URL;
        }, 5000);

        const intervalId = window.setInterval(() => {
            setCountdown((prev) => {
                if (prev <= 1) {
                    window.clearInterval(intervalId);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => {
            window.clearTimeout(redirectTimeout);
            window.clearInterval(intervalId);
        };
    }, []);

    const handleRedirect = () => {
        window.location.href = BLOG_URL;
    };

    return (
        <div
            style={{
                minHeight: "70vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                gap: "1.5rem",
                padding: "2rem"
            }}
        >
            <h1 style={{ fontSize: "3rem", margin: 0, color: "#5b63b7" }}>Blogs</h1>
            <p style={{ fontSize: "1.2rem", margin: 0 }}>
                Redirecting to blogs.ameys.eu in {countdown}...
            </p>
            <p style={{ fontSize: "1rem", maxWidth: "520px" }}>
                Redirecting to blogs.ameys.eu in 5..4...3..2...1. If you're not automatically redirected <a href={BLOG_URL}>click here</a>.
            </p>
            <button className="redirect-button" onClick={handleRedirect}>
                Go to Amey's Blogs
            </button>
        </div>
    );
}
