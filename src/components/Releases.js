import React from 'react';
import './Content.css';
import './Releases.css'
import audioTest from "../audio/02 Whirling-In-Rags, 8 AM.mp3";
import album1 from "../images/Album1.png";
import album2 from "../images/Album2.png";
import album3 from "../images/Album3.png";
import album4 from "../images/Album4.png";
import album5 from "../images/Album5.png";

class Releases extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            audio: new Audio(audioTest),
            isPlaying: false
        };
    }

    handleMouseOver = () => {
        var button = document.getElementById("play-button");
        button.classList.remove("hide");
    }

    handleMouseOut = () => {
        var button = document.getElementById("play-button");
        button.classList.add("hide");
    }

    handlePlay = () => {
        var isPlaying = this.state.isPlaying;
        if(isPlaying){
            this.state.audio.pause();
        }
        else {
            this.state.audio.play();
        }
        this.setState({
            isPlaying: !isPlaying
        });
    }

    render() {
        let buttonState = "▶";
        if(this.state.isPlaying) {
            buttonState = "❚❚";
        }
        return (
            <div className="content-container gray">
                <div className="title inverted">
                    RELEASES
                </div>
                <div className="releases-flexbox">
                    <div className="album" style={{ backgroundImage: `url(${album1})` }}
                        onMouseOver={this.handleMouseOver} onMouseOut = {this.handleMouseOut}
                        onClick = {this.handlePlay}>
                        <div className="play-button hide" id="play-button">{buttonState}</div>
                    </div>
                    <div className="releases-grid">
                        <div className="album small" style={{ backgroundImage: `url(${album2})` }} />
                        <div className="album small" style={{ backgroundImage: `url(${album3})` }} />
                        <div className="album small" style={{ backgroundImage: `url(${album4})` }} />
                        <div className="album small" style={{ backgroundImage: `url(${album5})` }} />
                    </div>
                </div>
                <div className="button-div right">
                    <a href="#" className="button yellow">View All Releases</a>
                </div>
            </div>
        );
    }

}

export default Releases