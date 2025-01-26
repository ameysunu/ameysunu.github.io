import React from "react";
import "../css/Contact.css";
import Lottie from "lottie-react";
import contactData from "../assets/contact.json";
import {
  SiGithub,
  SiLinkedin,
  SiTwitter,
  SiFacebook,
  SiDart,
} from "react-icons/si";
import { FaDev } from "react-icons/fa";
import { FiCoffee } from "react-icons/fi";
import Post from "./Post";

function Contact() {
  return (
    <section id="contact" className="contact-details">
      <div
        style={{
          paddingTop: "5%",
          paddingRight: "10%",
          paddingLeft: "10%",
          paddingBottom: "10%",
        }}
      >
        <p style={{ fontSize: "50px" }}>Contact me </p>
        <br />
        <div className="contact-container">
          <div className="contact-img">
            <Lottie animationData={contactData} />
          </div>
          <div className="contact-body-font">
            Feel free to get in touch with me. From an email to a pull request,
            I'll always be available.
            <div className="contact-button-align">
              <a
                href="mailto:ameysunu00719@gmail.com"
                className="contact-button"
              >
                Say Hello!
              </a>
            </div>
          </div>
        </div>
        <div style={{ paddingTop: "30px" }}>
          <a href="https://github.com/ameysunu">
            <SiGithub className="second-size" />
          </a>
          <a href="https://www.linkedin.com/in/amey-sunu-187103171/">
            <SiLinkedin className="second-size" />
          </a>
          <a href="https://twitter.com/ameysunu">
            <SiTwitter className="second-size" />
          </a>
          <a href="https://www.facebook.com/ameysunu.sunu">
            <SiFacebook className="second-size" />
          </a>
          <a href="https://dev.to/ameysunu">
            <FaDev className="second-size" />
          </a>
          <a href="https://www.educative.io/profile/view/6521930417438720">
            <FiCoffee className="second-size" />
          </a>
          <a href="https://pub.dev/packages/flutter_witai">
            <SiDart className="second-size" />
          </a>
        </div>
        <div style={{ textAlign: "center" }}>
          <a href="https://github.com/ameysunu">
            <SiGithub className="first-size" />
          </a>
          <a href="https://www.linkedin.com/in/amey-sunu-187103171/">
            <SiLinkedin className="first-size" />
          </a>
          <a href="https://twitter.com/ameysunu">
            <SiTwitter className="first-size" />
          </a>
          <a href="https://www.facebook.com/ameysunu.sunu">
            <SiFacebook className="first-size" />
          </a>
          <a href="https://dev.to/ameysunu">
            <FaDev className="first-size" />
          </a>
          <a href="https://www.educative.io/profile/view/6521930417438720">
            <FiCoffee className="first-size" />
          </a>
          <a href="https://pub.dev/packages/flutter_witai">
            <SiDart className="first-size" />
          </a>
        </div>
      </div>
      <Post />
    </section>
  );
}

export default Contact;
