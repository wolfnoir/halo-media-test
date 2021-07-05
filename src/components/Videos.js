import React from 'react';
import './Content.css';
import './Videos.css';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const handleDragStart = (e) => e.preventDefault();

const responsive = {
    800: { items: 1 },
    1024: { items: 2 },
};

const items = [
    <div style={{maxWidth: "80%"}}>
        <iframe src="https://www.youtube.com/embed/pNmXEL6g6xo" title="YouTube video player" frameborder="0" onDragStart={handleDragStart} 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
        <div className="video-details">
            <div className="title">Banana Split</div>
            <div className="subtitle">MURDA BEATZ (FEAT. YNW MELLY &amp; LIL DURK)</div>
        </div>
    </div>,
    <div style={{maxWidth: "80%"}}>
        <iframe src="https://www.youtube.com/embed/zdNFWS0xd-s" title="YouTube video player" frameborder="0" onDragStart={handleDragStart} 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
        <div className="video-details">
            <div className="title">Banana Split</div>
            <div className="subtitle">MURDA BEATZ (FEAT. YNW MELLY &amp; LIL DURK)</div>
        </div>
    </div>,
    <div style={{maxWidth: "80%"}}>
        <iframe src="https://www.youtube.com/embed/-GpEyVZyAY8" title="YouTube video player" frameborder="0" onDragStart={handleDragStart} 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
        <div className="video-details">
            <div className="title">Peasant's Quest</div>
            <div className="subtitle">The Chapman Brothers</div>
        </div>
    </div>,
];

class Videos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0
        };
    }

    slidePrev = () => {
        this.setState({
            activeIndex: this.state.activeIndex - 1
        })
    }

    slideNext = () => {
        this.setState({
            activeIndex: this.state.activeIndex + 1
        })
    }

    syncActiveIndex =({item}) => {
        this.setState({
            activeIndex: item
        })
    }

    render() {

        return (
            <div className="content-container gray">
                <div className="title inverted">
                    Videos
                </div>
                <div className="video-carousel">
                    <center>
                    <AliceCarousel
                        mouseTracking
                        disableDotsControls
                        disableButtonsControls
                        items={items}
                        activeIndex = {this.state.activeIndex}
                        responsive={responsive}
                        keyboardNavigation = {true}
                        onSlideChanged={this.syncActiveIndex}
                        infinite={true} />
                    </center>
                </div>
                <div className="button-div right">
                    <div className="video-buttons">
                        <button onClick={this.slidePrev}>◀</button>
                        <button onClick={this.slideNext}>▶</button>
                    </div>
                    <a href="#" className="button yellow">View All Videos</a>
                </div>
            </div>
        );
    }

}

export default Videos