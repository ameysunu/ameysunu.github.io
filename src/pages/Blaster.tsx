import { useState, useEffect } from "react";

const Blaster = () => {
    const [blasterPos, setBlasterPos] = useState(3);
    const [bullets, setBullets] = useState<{ x: number; y: number }[]>([]);
    const [bugs, setBugs] = useState<{ x: number; y: number }[]>([]);
    const [score, setScore] = useState(0);

    useEffect(() => {
        const moveBugs = setInterval(() => {
            setBugs((prevBugs) => prevBugs.map(b => ({ ...b, y: b.y + 1 })).filter(b => b.y < 6));
        }, 500);

        return () => clearInterval(moveBugs);
    }, []);

    useEffect(() => {
        const moveBullets = setInterval(() => {
            setBullets((prevBullets) => prevBullets.map(b => ({ ...b, y: b.y - 1 })).filter(b => b.y >= 0));
        }, 100);

        return () => clearInterval(moveBullets);
    }, []);

    useEffect(() => {
        const spawnBug = setInterval(() => {
            setBugs((prevBugs) => [...prevBugs, { x: Math.floor(Math.random() * 7), y: 0 }]);
        }, 1000);

        return () => clearInterval(spawnBug);
    }, []);

    useEffect(() => {
        setBullets((prevBullets) => prevBullets.filter(bullet => {
            const hitBugIndex = bugs.findIndex(b => b.x === bullet.x && b.y === bullet.y);
            if (hitBugIndex !== -1) {
                setBugs(prevBugs => prevBugs.filter((_, i) => i !== hitBugIndex));
                setScore(prev => prev + 1);
                return false;
            }
            return true;
        }));
    }, [bullets, bugs]);

    const handleKeyPress = (e: { key: string; }) => {
        if (e.key === "ArrowLeft" && blasterPos > 0) {
            setBlasterPos(blasterPos - 1);
        } else if (e.key === "ArrowRight" && blasterPos < 6) {
            setBlasterPos(blasterPos + 1);
        } else if (e.key === " ") {
            setBullets([...bullets, { x: blasterPos, y: 5 }]);
        }
    };

    useEffect(() => {
        window.addEventListener("keydown", handleKeyPress);
        return () => window.removeEventListener("keydown", handleKeyPress);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [blasterPos, bullets]);

    const renderGrid = () => {
        const grid = Array(6).fill(null).map(() => Array(7).fill(" "));
        bugs.forEach(b => grid[b.y][b.x] = "X");
        bullets.forEach(b => grid[b.y][b.x] = "|");
        grid[5][blasterPos] = "^";
        return grid.map((row, i) => <pre key={i}>{row.join(" ")}</pre>);
    };

    return (
        <div style={{ textAlign: "center", fontFamily: "monospace", color: "white" }}>
            <h3>Bug Blaster - Score: {score}</h3>
            {renderGrid()}
            <p>Move: ← → | Shoot: Space</p>
        </div>
    );
};

export default Blaster;
