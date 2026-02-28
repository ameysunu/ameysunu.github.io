import { useEffect, useState } from 'react';
import './index.css';
import LightMode from './assets/LightMode';
import DarkMode from './assets/DarkMode';

export default function Nav() {
    const [isDark, setIsDark] = useState<boolean>(() => {
        const saved = localStorage.getItem('theme');
        return (
            saved === 'dark' ||
            (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)
        );
    });

    useEffect(() => {
        const root = document.documentElement;

        if (isDark) {
            root.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            root.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }

        window.dispatchEvent(new Event('themeChange'));
    }, [isDark]);

    return (
        <div className="nav-wrapper">
            <div className="nav-links">
                <a href="/" className="nav-link">home</a>
                <a href="https://blogs.ameys.eu" className="nav-link">blog</a>
                <a href="/about" className="nav-link">about</a>
            </div>
            <div onClick={() => setIsDark(prev => !prev)} className="nav-theme-toggle">
                {isDark ? <LightMode /> : <DarkMode />}
            </div>
        </div>
    );
}