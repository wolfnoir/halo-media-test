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
                        <a href="#" className="button black" style={{ marginLeft: "10px" }}>Listen Now</a>
                    </div>
                </div>
                <div className="home-socials">
                    SOCIAL MEDIA PLACEHOLDER
                </div>
            </div>
        );
    }

}

export default Home