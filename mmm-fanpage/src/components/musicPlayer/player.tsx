export default function Player() {
    return(
        <section>
            <div id="reproductor">
                <h2 className="song-name">{}</h2>
                <span id="start">0.0 ejemplo</span>
                <div className="bar">
                    <input type="range" min='0' id="" />
                    <div className="bar2"></div>
                    <div className="dot"></div>
                </div>
                <span className="" id="end"></span>
                <div className="reproductor-icons">
                    <input type="range" min='0' max='1' step='0.1' className="volumen" />
                    pause
                    play
                    close reproductor
                </div>
            </div>
        </section>
    )
}