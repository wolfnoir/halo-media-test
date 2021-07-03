import React from 'react';
import './NavBar.css';
import murdaBeatsIcon from "../images/MBlogowhite_x300.svg";
import { Navbar, Nav, Container } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

class NavBar extends React.Component {

    render(){
        return(
            <div className="navigation-wrapper">
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="light" fixed="top" bsClass="navbar" id="navbar"> {/* fixed="top" */}
                    <Container bsClass="container">
                        <Navbar.Brand href="#"><img src={murdaBeatsIcon} alt="MURDA BEATZ Logo" className="navbar-logo" /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ml-auto">
                                <Nav.Link href="#" bsClass="nav-link">Releases</Nav.Link>
                                <Nav.Link href="#" bsClass="nav-link">Videos</Nav.Link>
                                <Nav.Link href="#" bsClass="nav-link">Store</Nav.Link>
                                <Nav.Link href="#" bsClass="nav-link">Photos</Nav.Link>
                                <Nav.Link href="#" bsClass="nav-link">Subscribe</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
    
}

export default NavBar