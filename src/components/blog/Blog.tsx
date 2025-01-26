import React from "react";
import "./Blog.css";
import Post from "../Post";
import { Link } from "react-router-dom";

function Blog() {
    return (
        <div className="main">
            <style>
                {
                    "body { background-color: #9c2c34; }"
                }
            </style>
            <div className="blog-title" style={{ fontSize: "75px" }}>
                Blog
            </div>
            <div className="blog-body">
                <p> Hi there! This site is under construction. Lot of React, and Typescript. Maybe some .NET too? </p>
                <p>Stay tuned! </p>
                <br />
                <Link className="home-button" to="/">
                    Back home{" "}
                </Link>
            </div>
            <div className="post">
                <Post />
            </div>
        </div>
    );
}

export default Blog;
