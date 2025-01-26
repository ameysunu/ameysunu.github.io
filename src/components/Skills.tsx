import React from "react";
import { ProgressBar } from "react-bootstrap";
import "../css/Skills.css";
import { RiFlutterFill } from "react-icons/ri";
import {
  SiFirebase,
  SiGooglecloud,
  SiDocker,
  SiReact,
  SiTravisci,
  SiGithubactions,
  SiTypescript,
  SiSwift,
  SiRealm,
  SiGit,
  SiXcode,
} from "react-icons/si";
import Lottie from "lottie-react";
import animationData from "../assets/mobile.json";
import cloudData from "../assets/cloud-dbms.json";
import webData from "../assets/web.json";
import devData from "../assets/devops.json";
import dockData from "../assets/cloud.json";
import langData from "../assets/languages.json";
import Fadeup from "../models/fadeup";

function Skills() {
  return (
    <section id="skills">
      <div>
        Skills
        <br />
        <br />
        <Fadeup>
          <div className="grid">
            <div className="skill-box skill-font">
              <div className="mobile-img">
                <Lottie animationData={animationData} />
              </div>
              <div style={{ fontFamily: "Sans-Bold" }}>
                Mobile App Development
              </div>
              <br />
              <br />
              <p style={{ paddingBottom: "5px" }}>
                <RiFlutterFill /> &nbsp; Flutter{" "}
              </p>
              <ProgressBar variant={"progress-cont"} now={90} />
              <br />
              <p style={{ paddingBottom: "5px" }}>
                <SiSwift /> &nbsp; SwiftUI{" "}
              </p>
              <ProgressBar variant={"progress-cont"} now={85} />
              <br />
            </div>
            <div className="skill-box-2 skill-font-2">
              <div className="mobile-img">
                <Lottie animationData={cloudData} />
              </div>
              <div style={{ fontFamily: "Sans-Bold" }}>Databases</div>
              <br />
              <br />
              <p style={{ paddingBottom: "5px" }}>
                <SiFirebase /> &nbsp; Firebase{" "}
              </p>
              <ProgressBar variant={"progress-cont-2"} now={85} />
              <br />
              <p style={{ paddingBottom: "5px" }}>
                <SiRealm /> &nbsp; MongoDB Realm{" "}
              </p>
              <ProgressBar variant={"progress-cont-2"} now={60} />
              <br />
            </div>
            <div className="skill-box skill-font">
              <div className="mobile-img">
                <Lottie animationData={webData} />
              </div>
              <div style={{ fontFamily: "Sans-Bold" }}>Web Development</div>
              <br />
              <br />
              <p style={{ paddingBottom: "5px" }}>
                <SiReact /> &nbsp; ReactJS{" "}
              </p>
              <ProgressBar variant={"progress-cont"} now={75} />
              <br />
              <p style={{ paddingBottom: "5px" }}>
                <SiTypescript /> &nbsp; Typescript{" "}
              </p>
              <ProgressBar variant={"progress-cont"} now={60} />
              <br />
            </div>
            <div className="skill-box-2 skill-font-2">
              <div className="mobile-img">
                <Lottie animationData={devData} />
              </div>
              <div style={{ fontFamily: "Sans-Bold" }}>DevOps</div>
              <br />
              <br />
              <p style={{ paddingBottom: "5px" }}>
                <SiGithubactions /> &nbsp; Github Actions{" "}
              </p>
              <ProgressBar variant={"progress-cont-2"} now={85} />
              <br />
              <p style={{ paddingBottom: "5px" }}>
                <SiTravisci /> &nbsp; Travis CI{" "}
              </p>
              <ProgressBar variant={"progress-cont-2"} now={80} />
              <br />
            </div>
            <div className="skill-box skill-font">
              <div className="mobile-img">
                <Lottie animationData={langData} />
              </div>
              <div style={{ fontFamily: "Sans-Bold" }}>Tools</div>
              <br />
              <br />
              <p style={{ paddingBottom: "5px" }}>
                <SiGit /> &nbsp; Git{" "}
              </p>
              <ProgressBar variant={"progress-cont"} now={90} />
              <br />
              <p style={{ paddingBottom: "5px" }}>
                <SiXcode /> &nbsp; Xcode{" "}
              </p>
              <ProgressBar variant={"progress-cont"} now={90} />
              <br />
            </div>
            <div className="skill-box-2 skill-font-2">
              <div className="mobile-img">
                <Lottie animationData={dockData} />
              </div>
              <div style={{ fontFamily: "Sans-Bold" }}>
                Cloud Technologies and Docker
              </div>
              <br />
              <br />
              <p style={{ paddingBottom: "5px" }}>
                <SiGooglecloud /> &nbsp; Google Cloud Platform{" "}
              </p>
              <ProgressBar variant={"progress-cont-2"} now={55} />
              <br />
              <p style={{ paddingBottom: "5px" }}>
                <SiDocker /> &nbsp; Docker{" "}
              </p>
              <ProgressBar variant={"progress-cont-2"} now={60} />
              <br />
            </div>
          </div>
          <div className="mobile-grid">
            <div className="skill-box skill-font">
              <div className="mobile-img">
                <Lottie animationData={animationData} />
              </div>
              <div style={{ fontFamily: "Sans-Bold" }}>
                Mobile App Development
              </div>
              <br />
              <br />
              <p style={{ paddingBottom: "5px" }}>
                <RiFlutterFill /> &nbsp; Flutter{" "}
              </p>
              <ProgressBar variant={"progress-cont"} now={90} />
              <br />
              <p style={{ paddingBottom: "5px" }}>
                <SiSwift /> &nbsp; SwiftUI{" "}
              </p>
              <ProgressBar variant={"progress-cont"} now={85} />
              <br />
            </div>
            <br />
            <div className="skill-box-2 skill-font-2">
              <div className="mobile-img">
                <Lottie animationData={cloudData} />
              </div>
              <div style={{ fontFamily: "Sans-Bold" }}>Databases</div>
              <br />
              <br />
              <p style={{ paddingBottom: "5px" }}>
                <SiFirebase /> &nbsp; Firebase{" "}
              </p>
              <ProgressBar variant={"progress-cont-2"} now={85} />
              <br />
              <p style={{ paddingBottom: "5px" }}>
                <SiRealm /> &nbsp; MongoDB Realm{" "}
              </p>
              <ProgressBar variant={"progress-cont-2"} now={60} />
              <br />
            </div>
            <br />
            <div className="skill-box skill-font">
              <div className="mobile-img">
                <Lottie animationData={webData} />
              </div>
              <div style={{ fontFamily: "Sans-Bold" }}>Web Development</div>
              <br />
              <br />
              <p style={{ paddingBottom: "5px" }}>
                <SiReact /> &nbsp; ReactJS{" "}
              </p>
              <ProgressBar variant={"progress-cont"} now={75} />
              <br />
              <p style={{ paddingBottom: "5px" }}>
                <SiTypescript /> &nbsp; Typescript{" "}
              </p>
              <ProgressBar variant={"progress-cont"} now={60} />
              <br />
            </div>
            <br />
            <div className="skill-box-2 skill-font-2">
              <div className="mobile-img">
                <Lottie animationData={devData} />
              </div>
              <div style={{ fontFamily: "Sans-Bold" }}>DevOps</div>
              <br />
              <br />
              <p style={{ paddingBottom: "5px" }}>
                <SiGithubactions /> &nbsp; Github Actions{" "}
              </p>
              <ProgressBar variant={"progress-cont-2"} now={85} />
              <br />
              <p style={{ paddingBottom: "5px" }}>
                <SiTravisci /> &nbsp; Travis CI{" "}
              </p>
              <ProgressBar variant={"progress-cont-2"} now={80} />
              <br />
            </div>
            <br />
            <div className="skill-box skill-font">
              <div className="mobile-img">
                <Lottie animationData={langData} />
              </div>
              <div style={{ fontFamily: "Sans-Bold" }}>Tools</div>
              <br />
              <br />
              <p style={{ paddingBottom: "5px" }}>
                <SiGit /> &nbsp; Git{" "}
              </p>
              <ProgressBar variant={"progress-cont"} now={90} />
              <br />
              <p style={{ paddingBottom: "5px" }}>
                <SiXcode /> &nbsp; Xcode{" "}
              </p>
              <ProgressBar variant={"progress-cont"} now={90} />
              <br />
            </div>
            <br />
            <div className="skill-box-2 skill-font-2">
              <div className="mobile-img">
                <Lottie animationData={dockData} />
              </div>
              <div style={{ fontFamily: "Sans-Bold" }}>
                Cloud Technologies and Docker
              </div>
              <br />
              <br />
              <p style={{ paddingBottom: "5px" }}>
                <SiGooglecloud /> &nbsp; Google Cloud Platform{" "}
              </p>
              <ProgressBar variant={"progress-cont-2"} now={55} />
              <br />
              <p style={{ paddingBottom: "5px" }}>
                <SiDocker /> &nbsp; Docker{" "}
              </p>
              <ProgressBar variant={"progress-cont-2"} now={60} />
              <br />
            </div>
            <br />
          </div>
        </Fadeup>
      </div>
    </section>
  );
}
export default Skills;
