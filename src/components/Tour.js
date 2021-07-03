import React from 'react';
import './Content.css';
import './Tour.css';

class Tour extends React.Component {
    render(){
        return(
                <div className="content-container">
                    <div className="title inverted">
                        Tour
                    </div>
                    <div className="tour-flexbox">
                        <div className="tour-column">
                            <div className="tour-item">
                                <div className="tour-details">
                                    <span className="date">Jun 6</span><br/>
                                    <span className="venue">Jewel Nightclub</span><br/>
                                    <span className="city">Las Vegas, NV</span>
                                </div>
                                <div className="tour-links">
                                    <a href="#">Tickets</a>
                                    <a href="#">VIP</a>
                                    <a href="#">RSVP</a>
                                </div>
                            </div>
                            <div className="tour-item">
                                <div className="tour-details">
                                    <span className="date">Aug 7</span><br/>
                                    <span className="venue">Jewel Nightclub</span><br/>
                                    <span className="city">Las Vegas, NV</span>
                                </div>
                                <div className="tour-links">
                                    <a href="#">Tickets</a>
                                    <a href="#">VIP</a>
                                    <a href="#">RSVP</a>
                                </div>
                            </div>
                            <div className="tour-item">
                                <div className="tour-details">
                                    <span className="date">Jun 31</span><br/>
                                    <span className="venue">Jewel Nightclub</span><br/>
                                    <span className="city">Las Vegas, NV</span>
                                </div>
                                <div className="tour-links">
                                    <a href="#">Tickets</a>
                                    <a href="#">VIP</a>
                                    <a href="#">RSVP</a>
                                </div>
                            </div>
                        </div>
                        <div className="tour-column">
                        <div className="tour-item">
                                <div className="tour-details">
                                    <span className="date">Jun 6</span><br/>
                                    <span className="venue">Jewel Nightclub</span><br/>
                                    <span className="city">Las Vegas, NV</span>
                                </div>
                                <div className="tour-links">
                                    <a href="#">Tickets</a>
                                    <a href="#">VIP</a>
                                    <a href="#">RSVP</a>
                                </div>
                            </div>
                            <div className="tour-item">
                                <div className="tour-details">
                                    <span className="date">Jun 6</span><br/>
                                    <span className="venue">Jewel Nightclub</span><br/>
                                    <span className="city">Las Vegas, NV</span>
                                </div>
                                <div className="tour-links">
                                    <a href="#">Tickets</a>
                                    <a href="#">VIP</a>
                                    <a href="#">RSVP</a>
                                </div>
                            </div>
                            <div className="tour-item">
                                <div className="tour-details">
                                    <span className="date">Jun 31</span><br/>
                                    <span className="venue">Jewel Nightclub</span><br/>
                                    <span className="city">Las Vegas, NV</span>
                                </div>
                                <div className="tour-links">
                                    <a href="#">Tickets</a>
                                    <a href="#">VIP</a>
                                    <a href="#">RSVP</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="button-div right">
                        <a href="#" className="releases-button button yellow">View All Dates</a>
                    </div>
                </div>
        );
    }
    
}

export default Tour