import Header from "./Header";
import Fadeup from "../models/fadeup";
import '../css/NotFound.css';
import Lottie from "lottie-react";
import imageData from "../assets/404-page.json";
import rocketData from "../assets/404rocket.json";
import { Col, Row } from "react-bootstrap";
import Post from "./Post";

function NotFound() {
    return (
        <div>
            <Header />
            <Fadeup>
                <div className="body-space">
                    <div className="body-content">
                        <Row>
                            <Col>
                                <div className="title" style={{ fontSize: "70px" }}>404</div>
                                <div className="title">Page not found</div>
                                <div>Hi Explorer! It seems you've wandered off to the dark side.</div>
                                <br />
                                <a href="/" className="blog-button">
                                    Go back home
                                </a>
                            </Col>
                            <Col>
                                <div style={{width: "300px", height: "300px", display: "block", marginLeft: "auto", marginRight: "auto"}}>
                                    <Lottie animationData={rocketData} />
                                </div>
                            </Col>
                            <Col>
                                <div style={{width: "300px", height: "300px", display: "block", marginLeft: "auto", marginRight: "auto"}}>
                                    <Lottie animationData={imageData} />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Fadeup>
            <br/ >
            <div className="post">
                <Post />
            </div>
        </div>
    );
}

export default NotFound;