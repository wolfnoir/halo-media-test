import React from 'react';
import './Content.css';
import './Store.css';
import store1 from "../images/BananaSplitLong.png";
import store2 from "../images/BananaSplitShort.png";
import store3 from "../images/BananaSplitDigitalSingle.png";

class Store extends React.Component {
    render() {
        return (
            <div className="content-container yellow">
                <div className="title inverted black">
                    Store
                </div>
                <div className="store-flexbox">
                    <div className="store-item">
                        <div className="store-image" style={{ backgroundImage: `url(${store1})` }} />
                        <span className="name">Banana Split Long Sleeve</span><br />
                        <span className="price">$30.00</span>
                    </div>
                    <div className="store-item">
                        <div className="store-image" style={{ backgroundImage: `url(${store2})` }} />
                        <span className="name">Banana Split Short Sleeve</span><br />
                        <span className="price">$25.00</span>
                    </div>
                    <div className="store-item">
                        <div className="store-image" style={{ backgroundImage: `url(${store3})` }} />
                        <span className="name">Banana Split - Digital Single</span><br />
                        <span className="price">$1.29</span>
                    </div>
                </div>
                <div className="button-div right">
                    <a href="#" className="releases-button button black">Shop All</a>
                </div>
            </div>
        );
    }

}

export default Store