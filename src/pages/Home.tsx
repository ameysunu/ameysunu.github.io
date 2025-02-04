import { useEffect, useState } from "react";
import Header from "./Header";
import { motion } from "motion/react"
import phishtank from '../assets/phishtank.png';
import innerbalance from '../assets/innerbalance.png';
import flutterwitai from '../assets/flutterwitai.png';
import dataverse from '../assets/dataverse.webp';
import cloudbackup from '../assets/cloudbackup.png';

import Footer from "./Footer";
function Home() {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        console.log('%cAhh, a curious developer I see. Try not wandering into the dark side of the code. May the force be with you!', 'color: yellow;');
        setIsVisible(true);
    }, []);
    return (
        <>
            <Header />
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
                transition={{ duration: 0.5 }}
            >
                <div className="home">
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
                </div>

                <div className="card-container">
                    <div className="card-box-1">
                        <div className="card-heading-left">
                            <div className="card-main-heading">InnerBalance - Mental Wellbeing App</div>
                            Swift, iOS, MongoDB
                        </div>
                        <img src={innerbalance} className="card-image"></img>
                    </div>
                    <div className="card-box-2">
                        <div className="card-heading-left">
                            <div className="card-main-heading">PhishTank</div>
                            Swift, macOS, Google Gemini
                        </div>
                        <img src={phishtank} className="card-image"></img>
                    </div>
                </div>
                <div className="card-container" style={{ paddingTop: "1%" }}>
                    <div className="card-box-1" style={{ backgroundColor: "#3b4375" }}>
                        <div className="card-heading-left">
                            <div className="card-main-heading">Flutter X wit.ai integration</div>
                            Flutter
                        </div>
                        <img src={flutterwitai} className="card-image"></img>
                    </div>

                </div>
            </motion.div>
            <div className="home">
                <h1 className="big-heading" style={{ color: "#5b63b7" }}>
                    Work In Progress.
                </h1>
                <p className="home-text-center">
                    Few of my side projects that I'm currently working on - iOS, .NET and others.
                </p>
            </div>

            <br />

            <div className="card-container" style={{ paddingTop: "2%" }}>
                <div className="card-box-1" style={{ backgroundColor: "#743136" }}>
                    <div className="card-heading-left">
                        <div className="card-main-heading">Attribute Editor</div>
                        .NET, Microsoft Dataverse
                    </div>
                    <img src={dataverse} className="card-image"></img>
                </div>

                <div className="card-box-1" style={{ backgroundColor: "#5c518a" }}>
                    <div className="card-heading-left">
                        <div className="card-main-heading">Cloud Backup</div>
                        Swift, iOS, .NET, MongoDb
                    </div>
                    <img src={cloudbackup} className="card-image"></img>
                </div>

            </div>

            <br />

            <Footer />
        </>
    );
}

export default Home;