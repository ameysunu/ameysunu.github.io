import GitHubProjects from "../components/projects/GitHubProjects";
import Footer from "./Footer";
import LightspeedBackground from "../components/projects/LightspeedBackground";

export default function Stuff() {
    return (
        <div className="stuff-container">
            <LightspeedBackground />
            <div className="stuff-content">
                <div className="home">
                    <h1 className="mid-heading" style={{fontWeight: 'bold'}}>
                        Jump to Light Speed!
                    </h1>
                    <p className="home-text-center">Warp Through My GitHub-Powered creations, all built for the craic.</p>
                </div>
                <br />
                <br />
                <GitHubProjects />
                <Footer />
            </div>
        </div>
    );
}