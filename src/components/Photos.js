import React from 'react';
import './Content.css';
import './Photos.css';
import photo1 from "../images/Bitmap1.png";
import photo2 from "../images/Bitmap2.png";
import photo3 from "../images/Bitmap3.png";
import photo4 from "../images/Bitmap4.png";
import photo5 from "../images/Bitmap5.png";
import photo6 from "../images/Bitmap6.png";
import photo7 from "../images/Bitmap7.png";
import photo8 from "../images/Bitmap8.png";
import photo9 from "../images/Bitmap9.png";
import photo10 from "../images/Bitmap10.png";

class Photos extends React.Component {
    render(){
        return(
            <div className="content-container">
                <div className="title inverted">
                    Photos
                </div>
                <div className="photo-flexbox">
                    <div className="photo-column">
                        <div className="photo" style={{backgroundImage: `url(${photo1})`}}/>
                        <div className="photo" style={{backgroundImage: `url(${photo6})`}}/>
                    </div>
                    <div className="photo-column">
                        <div className="photo" style={{backgroundImage: `url(${photo2})`}}/>
                        <div className="photo" style={{backgroundImage: `url(${photo7})`}}/>
                    </div>
                    <div className="photo-column">
                        <div className="photo" style={{backgroundImage: `url(${photo3})`}}/>
                        <div className="photo" style={{backgroundImage: `url(${photo8})`}}/>
                    </div>
                    <div className="photo-column">
                        <div className="photo" style={{backgroundImage: `url(${photo4})`}}/>
                        <div className="photo" style={{backgroundImage: `url(${photo9})`}}/>
                    </div>
                    <div className="photo-column">
                        <div className="photo" style={{backgroundImage: `url(${photo5})`}}/>
                        <div className="photo" style={{backgroundImage: `url(${photo10})`}}/>
                    </div>
                </div>
                <div className="button-div right">
                    <a href="#" className="releases-button button yellow">View All Photos</a>
                </div>
            </div>
        );
    }
    
}

export default Photos