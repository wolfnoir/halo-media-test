import React from 'react';
import './Content.css';

class Subscribe extends React.Component {
    render(){
        return(
            <div className="wrapper">
                <div className="content-container gray">
                    <div className="title inverted">
                        Subscribe
                    </div>
                    <button className="button yellow">Submit</button>
                </div>
            </div>
        );
    }
    
}

export default Subscribe