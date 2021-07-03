import React from 'react';
import './Content.css';

class Videos extends React.Component {
    render(){
        return(
                <div className="content-container gray">
                    <div className="title inverted">
                        Videos
                    </div>
                    <div className="button-div right">
                        <a href="#" className="button yellow">View All Videos</a>
                    </div>
                </div>
        );
    }
    
}

export default Videos