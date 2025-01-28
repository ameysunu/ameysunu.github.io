import { useEffect } from "react";

function Home(){

    useEffect(() => {
        console.log('%cAhh, a curious developer I see. Try not wandering into the dark side of the code. May the force be with you!', 'color: yellow;');
    }, []);
return (
    <div className="home">
        <h1 className="big-heading">
        Hey, I'm Amey
        <p className="mid-heading">A Software Engineer.</p>
        <p className="home-text-center">I'm an iOS and a Backend Developer, hence you will find this site buggy. </p>
        <p className="home-text-center">
            If you're a fellow <del>developer</del> frontend developer, please feel free to open a PR at my <a href="https://github.com/ameysunu/ameysunu.github.io"> code repository
            </a> and in return, I will write you the buggiest backend code &nbsp;
            <span className="system-null-ref">System.NullReferenceException </span>
            errors.
        </p>
        </h1>

    </div>
);
}

export default Home;