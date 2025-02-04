import { useEffect, useState } from "react";

export default function Footer() {

    const [year, setYear] = useState<number>();

    useEffect(() => {
        const year = new Date().getFullYear();
        setYear(year);
    }, []);

    return (
        <div className="footer-container">
           <div style={{fontSize: "1.1rem", fontWeight: "bold"}}> © {year} Amey Sunu • Built with React + Typescript and a lot of tears </div>
            <div className="footer-contact">
                <strong style={{ paddingBottom: "10px" }}>Get in touch</strong>
                <a className="footer-contact-text" href="https://github.com/ameysunu">Github</a>
                <a className="footer-contact-text" href="https://linkedin.com/in/ameysunu">LinkedIn</a>
                <a className="footer-contact-text" href="https://twitter.com/ameysunu">Twitter</a>
                <a className="footer-contact-text" href="https://dev.to/ameysunu">dev.to</a>
            </div>
            <div className="footer-contact">
                <strong style={{ paddingBottom: "10px" }}>Contact</strong>
                <a className="footer-contact-text">Email</a>
            </div>
        </div>

    );
}