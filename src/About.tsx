function About() {
    return (
        <>
        <div className="title">about</div>
        <div className="about-words">
            <span>bug maker.</span>
            <span>engineer.</span>
            <span>developer.</span>
        </div>
        <div className="about-opener" style={{marginTop: '1.5rem'}}>
            i write code.<br />
            and it works, sometimes.
        </div>
        <div className="about-bio" style={{marginTop: '1.5rem'}}>
            so, all i do is write software. mainly - backend in .net and mobile development on swift.
            i also sometimes write websites in react, like this, but i suck at it.
            <br />
            <br />
            i care about building things that are fast, minimal, and powerful.
            right now that's lisaos, an operating system written in c. and im slowly
            divulging into more systems level programming, learning about os design, distributed systems and concurrency.
        </div>
        </>
    );
}

export default About;
