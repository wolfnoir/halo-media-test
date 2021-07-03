import React from 'react';
import './NavBar.css';
import murdaBeatsIcon from "../Images/MBlogowhite_x300.svg";
import { Navbar, Nav, Container } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

class NavBar extends React.Component {

    render(){
        return(
            <div className="navbar-wrapper">
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="light" bsClass="navbar"> {/* fixed="top" */}
                    <Container>
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