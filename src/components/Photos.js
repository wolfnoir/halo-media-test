import React from 'react';
import './Content.css';
import './Photos.css';

class Photos extends React.Component {
    render(){
        return(
            <div className="content-container">
                <div className="title inverted">
                    Photos
                </div>
                <div className="photos-flexbox">

                </div>
                <div className="button-div right">
                    <a href="#" className="releases-button button yellow">View All Photos</a>
                </div>
            </div>
        );
    }
    
}

export default Photos