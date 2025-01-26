import React from "react";
// @ts-ignore
import Typed from 'typed.js';

function Post() {


  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["React and Typescript.",
        "Stackoverflow as witness.",
        "Creed Bratton's curiousity.",
        "no vicious elements, just bugs.",
        "with no love, just tears and pain."],
      typeSpeed: 50,
      backSpeed: 10,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div style={{ textAlign: "center", paddingBottom: "20px" }}>
      Made by Amey with{" "}
      {/* <Typical
        loop={Infinity}
        wrapper="c"
        steps={[
          "React and Typescript.",
          2000,
          "stackoverflow as witness.",
          2000,
          "creed's curiousity.",
          2000,
          "no vicious elements.",
          2000,
          "dwight's beet juice.",
          2000,
        ]}
      /> */}
      <span ref={el} />
    </div>
  );
}

export default Post;
