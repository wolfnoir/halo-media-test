import React from 'react';
import './Content.css';

class Videos extends React.Component {
    render(){
        return(
            <div className="wrapper">
                <div className="content-container gray">
                    <div className="title inverted">
                        Videos
                    </div>
                    <div className="button-right">
                        <button className="button yellow">View All Videos</button>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default Videos