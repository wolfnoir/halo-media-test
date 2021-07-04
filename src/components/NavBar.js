import React from 'react';
import './NavBar.css';
import murdaBeatsIcon from "../images/MBlogowhite_x300.svg";
import { Navbar, Nav, Container } from 'react-bootstrap';
import { goToTop } from 'react-scrollable-anchor'
import "bootstrap/dist/css/bootstrap.min.css";

class NavBar extends React.Component {
    // @ TODO: style changes on scroll

    render(){
        return(
            <div className="navigation-wrapper" id="navigation-wrapper">
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="light" fixed="top" bsClass="navbar" id="navbar"> 
                    <Container bsClass="container">
                        <Navbar.Brand href="#home"><img src={murdaBeatsIcon} alt="MURDA BEATZ Logo" className="navbar-logo" /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ml-auto">
                                <Nav.Link href="#releases" bsClass="nav-link">Releases</Nav.Link>
                                <Nav.Link href="#videos" bsClass="nav-link">Videos</Nav.Link>
                                <Nav.Link href="#store" bsClass="nav-link">Store</Nav.Link>
                                <Nav.Link href="#photos" bsClass="nav-link">Photos</Nav.Link>
                                <Nav.Link href="#subscribe" bsClass="nav-link">Subscribe</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
    
}

export default NavBar