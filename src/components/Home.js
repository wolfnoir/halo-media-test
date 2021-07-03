import React from 'react';
import './Home.css';

class Home extends React.Component {
    render(){
        return(
            <div className="wrapper">
                <div className="home-container">
                    <div className="home-text">
                        <div className="home-text subtitle">Check out on Splice</div>
                        <div className="home-text title">Murda Beatz’ Quarantine Kit Sample Pack</div>
                        <button className="button black" style={{marginLeft: "10px"}}>Listen Now</button>
                    </div>
                    <div className="home-socials">
                        SOCIAL MEDIA PLACEHOLDER
                    </div>
                </div>
            </div>
        );
    }
    
}

export default Home