import React from 'react';
import './Content.css';

class Releases extends React.Component {
    render() {
        return (
            <div className="content-container gray">
                <div className="title inverted">
                    RELEASES
                </div>
                <div className="button-div right">
                    <a href="#" className="button yellow">View All Releases</a>
                </div>
            </div>
        );
    }

}

export default Releases