import React from 'react';
import './Content.css';

class Subscribe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            country: "",
            murdaBeatz: true,
            interscope: true,
            universalMusic: true
        };   
    }

    render(){
        return(
                <div className="content-container gray">
                    <div className="title inverted">
                        Subscribe
                    </div>
                    <div className="button-div">
                        <button className="button yellow">Submit</button>
                    </div>
                </div>
        );
    }
    
}

export default Subscribe