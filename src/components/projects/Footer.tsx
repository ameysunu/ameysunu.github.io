import React from 'react';
import "./Projects.css";
import "./Footer.css";
import Lottie from "lottie-react";
import githubData from "./assets/github.json";
import Post from '../Post';

function Footer() {
    return (
      <section id="footer" className="footer-details">
        <div
          style={{
            paddingTop: "5%",
            paddingRight: "10%",
            paddingLeft: "10%",
            paddingBottom: "10%",
          }}
        >
          <p style={{ fontSize: "50px" }}>Github </p>
          <br />
          <div className="footer-container">
            <div className="footer-img">
              <Lottie animationData={githubData} />
            </div>
            <div className="footer-body-font">
              My other projects are available on Github. Feel free to give me a pull request, or create an issue.
              <div className="footer-button-align">
                <a
                  href="https://github.com/ameysunu"
                  className="footer-button"
                >
                  Amey's Github
                </a>
              </div>
            </div>
          </div>
        </div>
        <Post />
      </section>
    );
  }

export default Footer;