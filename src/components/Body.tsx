import React from "react";
import "../css/Body.css";
import Header from "../components/Header";
import Typed from 'typed.js';
import Lottie from "lottie-react";
import animationData from "../assets/developer_yoga.json";
import scrollData from "../assets/scroll.json";
// import Skills from "./Skills";
import Fadeup from "../models/fadeup";
import Contact from "./Contact";
import Skills from "./Skills";

function Body() {

  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Flutter and SwiftUI developer.'],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);


  return (
    <div>
      <Header />
      <Fadeup>
        <div className="title body-space">
          <div className="body-img">
            <Lottie animationData={animationData} />
          </div>
          Hi, I'm Amey! <br />{" "}
          {/* <Typical
            wrapper="p"
            steps={["Flutter and SwiftUI developer.", 1500]}
          /> */}
          <span ref={el} />
          <div className="body-content">
            {" "}
            {/* I am a Computer Science student, doing Masters at University College Cork, County Cork, Ireland, currently living at Cork, Ireland. I
            develop native applications for iOS, iPadOS using SwiftUI and cross
            platform apps for Android, iOS and Web using Flutter. <br /> <br />
            When I'm not coding and pushing stuff to Git, you'll find me online
            at Social Club or either procrastinating. */}
            I'm a Software Engineer, currently living at Dublin, Ireland. I develop native applications for iOS, iPadOS using SwiftUI and cross
            platform apps for Android, iOS and Web using Flutter. <br /><br />

            When I'm not coding and pushing stuff to Git, you'll find me online
            at Social Club or either procrastinating.
          </div>
          <br />
          <a href="https://quiet-cranachan-9703db.netlify.app/" className="blog-button">
            My Blog
          </a>
          <br />
          <br />
          <div className="scroll-img">
            <Lottie animationData={scrollData} />
          </div>
          <br />
          <br />
          <Skills />
        </div>
      </Fadeup>
      <br />
      <br />
      <Contact />
    </div>
  );
}

export default Body;
