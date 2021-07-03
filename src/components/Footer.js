import React from 'react';
import './Footer.css';

class Footer extends React.Component {
    render(){
        return(
            <div className="wrapper">
                <div className="footer-container">
                    <span>© Interscope Records</span>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms &amp; Conditions</a>
                    <a href="#">Cookie Choices</a>
                    <a href="#">Do Not Sell My Personal Information</a>
                </div>
            </div>
        );
    }
    
}

export default Footer