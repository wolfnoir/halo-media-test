import React from 'react';
import './Content.css';

class Releases extends React.Component {
    render(){
        return(
            <div className="wrapper">
                <div className="content-container gray">
                    <div className="title inverted">
                        RELEASES
                    </div>
                    <div className="button-right">
                        <button className="button yellow">View All Releases</button>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default Releases