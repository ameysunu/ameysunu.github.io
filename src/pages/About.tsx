import { motion } from "motion/react";
import Header from "./Header";
import { useEffect, useState } from "react";

export default function About() {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div>
            <Header />
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
                transition={{ duration: 0.5 }}
            >
                <div className="home">
                    <h1 className="big-heading">
                        I'm Amey.
                    </h1>
                </div>

            </motion.div>

        </div>
    );
}