import * as React from "react";
import App from "../App";
import "../css/Splash.css";
import Lottie from "lottie-react";
import animationData from "../assets/splash.json";

function Splash() {
  const [show, setShow] = React.useState(true);
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(false);
    }, 2500);
    return () => clearTimeout(timeout);
  }, []);
  if (show) {
    return (
      <div className="splash-screen fading">
        <style>
          {
            "body { background-color: #9c2c34; -webkit-transition: left 1s ease-in-out, background-color color 1s ease-out 1s; transition: left 1s ease-in-out, background-color 1s ease-out 1s;}"
          }
        </style>
        <Lottie animationData={animationData} />
        <div style={{ paddingLeft: "10px", paddingRight: "10px" }}>
          Welcome{" "}
        </div>
      </div>
    );
  } else {
    return <App />;
  }
}

export default Splash;
