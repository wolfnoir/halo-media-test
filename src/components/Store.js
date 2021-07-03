import React from 'react';
import './Content.css';

class Store extends React.Component {
    render(){
        return(
            <div className="wrapper">
                <div className="content-container yellow">
                    <div className="title inverted black">
                        Store
                    </div>
                    <button className="releases-button button black">Shop All</button>
                </div>
            </div>
        );
    }
    
}

export default Store