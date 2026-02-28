function Home() {
    return (
        <>
        <div className="title">hey i'm amey...</div>
        <div className="subtitle" style={{marginBottom: '3rem'}}>i'm a software developer based out of Dublin, Ireland</div>
        <br />

        <div className="subtitle" style={{fontSize: '1.2rem', fontWeight: '500'}}>this is what i'm currently upto</div>
        <div className="cb-bar" style={{marginTop: '1rem'}}>
            <span className="cb-bar-label">building</span>
            <span className="cb-bar-value">lisaos : an operating system built in c</span>
        </div>
        <div className="cb-bar">
            <span className="cb-bar-label">learning</span>
            <span className="cb-bar-value">golang, systems design, swift concurrency and distributed systems</span>
        </div>
        <div className="cb-bar">
            <span className="cb-bar-label">playing</span>
            <span className="cb-bar-value">call of duty mw4 remastered and microsoft flight simulator</span>
        </div>
        </>
    );
}

export default Home;
