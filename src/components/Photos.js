import React from 'react';
import './Content.css';

class Photos extends React.Component {
    render(){
        return(
            <div className="wrapper">
                <div className="content-container">
                    <div className="title inverted">
                        Photos
                    </div>
                    <div className="button-right">
                        <button className="releases-button button yellow">View All Photos</button>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default Photos