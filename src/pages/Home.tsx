import { useEffect, useState } from "react";
import Header from "./Header";
import { motion } from "motion/react"

function Home() {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        console.log('%cAhh, a curious developer I see. Try not wandering into the dark side of the code. May the force be with you!', 'color: yellow;');
        setIsVisible(true);
    }, []);
    return (
        <>
            <Header />
            <div className="home">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="big-heading">
                        Hey, I'm Amey
                        <p className="mid-heading">A Software Engineer.</p>
                        <p className="home-text-center">I'm an iOS and a Backend Developer, hence you will find this site buggy. </p>
                        <p className="home-text-center">
                            If you're a fellow <del>developer</del> frontend developer, please feel free to open a PR at my <a href="https://github.com/ameysunu/ameysunu.github.io"> code repository
                            </a> and in return, I will write you the buggiest backend code with &nbsp;
                            <a href="/system-crash" className="system-null-ref">System.NullReferenceException&nbsp;</a>
                            errors.
                        </p>
                    </h1>
                </motion.div>
            </div>
        </>
    );
}

export default Home;