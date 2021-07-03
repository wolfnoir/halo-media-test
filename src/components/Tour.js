import React from 'react';
import './Content.css';

class Tour extends React.Component {
    render(){
        return(
            <div className="wrapper">
                <div className="content-container">
                    <div className="title inverted">
                        Tour
                    </div>
                    <div className="button-right">
                        <button className="releases-button button yellow">View All Dates</button>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default Tour