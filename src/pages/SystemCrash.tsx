import Blaster from "./Blaster";

export default function SystemCrash() {
    return (
        <div style={{ padding: "2%" }}>
            <div className="error-box">
                <h1 className="big-heading">
                    Error 400
                </h1>
                <strong className="error-box-contents">You've triggered a bad request!</strong>
                <p className="error-box-contents">
                    Could not load file or assembly 'System.Data.AmeyEasterEggs, Version=6.7.1, Culture=Neutral, PublicKeyToken=
                    b03f5f7f11d50a3a'. (Exception from HRESULT: 0x80131621).
                    &nbsp;
                    Naah I'm just playing, this is a joke! Although a terrifying joke for any developer.
                </p>
                <br />
                <p className="error-box-contents" >Now that you're here anyways, enjoy killing some bugs - below game was completely built by ChatGPT</p>
                <Blaster />
            </div>
        </div>
    );
}