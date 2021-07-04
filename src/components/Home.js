import React from 'react';
import './Home.css';

class Home extends React.Component {
    render() {
        return (
            <div className="home-container">
                <div className="home-text">
                    <div className="home-text subtitle">Check out on Splice</div>
                    <div className="home-text title">Murda Beatz’ Quarantine Kit Sample Pack</div>
                    <div className="button-div">
                        <a href="#videos" className="button black" style={{ marginLeft: "10px" }}>Listen Now</a>
                    </div>
                </div>
                <div className="home-socials">
                    <ul>
                        <li><a href="#" class="fa fa-envelope fa-2x"></a></li>
                        <li><a href="#" class="fa fa-spotify fa-2x"></a></li>
                        <li><a href="#" class="fa fa-music fa-2x"></a></li>
                        <li><a href="#" class="fa fa-instagram fa-2x"></a></li>
                        <li><a href="#" class="fa fa-twitter fa-2x"></a></li>
                        <li><a href="#" class="fa fa-facebook fa-2x"></a></li>
                    </ul>
                </div>
            </div>
        );
    }

}

export default Home