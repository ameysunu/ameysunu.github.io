import { motion } from "motion/react";
import Header from "./Header";
import { useEffect, useState } from "react";
import cat from '../assets/cat.gif';
import Footer from "./Footer";

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
                <div className="about-layout-row">
                    <p className="about-body">
                        I'm a Software Engineer based out of Dublin, Ireland with a passion of building solutions across various tech stacks - mainly writing Swift iOS/macOS apps, designing
                        scalable and powerful backend code in .NET and Golang and having fun with both SQL and Non-SQL databases.

                        <br />
                        <br />

                        Currently I'm learning how to write more scalable and efficient backend applications in Golang, GraphQL and understanding how to make the
                        best of Generative AI based technologies in mordern applications.
                    </p>

                    <img className="about-images" src={cat}></img>

                </div>
                <div style={{ padding: "2%" }}>
                    <div className="about-box">
                        <p className="mid-heading" style={{ color: "white" }}>My Vision?</p>

                        <p style={{ fontSize: "1.25rem" }}>
                            Building a powerful, cost effective, sustainable and scalable software solutions for enterprises and day to day user experiences to streamline
                            workflows, enhance productivity and unlock intelligent automations.

                            <br />
                            <br />

                            From writing backend code to creating mobile/desktop apps, my goal is to write softwares that are not just efficient but are very easy to use. This very nature of mine
                            has lead to take an interest in DevOps to automate, build, test and release everything via pipelines and workflows, while I can focus on what's more important.
                            This has given me a much much more insight into DevOps and infrastructure as a code, and have gathered enough knowledge to write pipelines and powerful functionalities in
                            the area of DevOps.

                            <br />
                            <br />

                            Whether it is optimizing day to day DevOps pipelines, crafting innovative iOS/macOS applications or even trying to push the boundary of cloud computing. I'm committed to delivering
                            high quality solutions that drive a meaningful impact. And of course, everyday something to always learn!
                        </p>
                    </div>
                </div>


            </motion.div>
            <Footer />
        </div>
    );
}