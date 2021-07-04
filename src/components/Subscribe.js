import React from 'react';
import './Content.css';
import './Subscribe.css';
import CountrySelect from './CountrySelect';
import { Form, Col } from 'react-bootstrap';

class Subscribe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            country: "0",
            murdaBeatz: true,
            interscope: true,
            universalMusic: true
        };
    }

    setCountry = (countryVal) => {
        this.setState({
            country: countryVal
        })
    }

    handleEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    handleCheckbox = (e) => {
        var target = e.target.id;
        this.setState({
            [target]: e.target.checked
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        alert("submit clicked");
    }

    render() {
        return (
            <div className="content-container gray">
                <Form onSubmit={this.handleSubmit} className='subscribe-form'>
                    <div className="title inverted">
                        Subscribe
                    </div>
                    <Form.Row className='subscribe-info'>
                            <Form.Control placeholder="Email Address" type="email" onChange={this.handleEmail} size='lg' className="subscribe-input"/>
                            <CountrySelect setCountry={this.setCountry} defaultValue={this.state.country} className="subscribe-input"/>
                    </Form.Row>
                    <Form.Label className="subtitle">Subscribe to Emails From:</Form.Label>
                    <Form.Group>
                        <Form.Check inline label="Murda Beatz" className="subscribe-checkbox" style={{marginRight: "20px"}}
                            onChange={this.handleCheckbox} checked={this.state.murdaBeatz} id="murdaBeatz" />
                        <Form.Check inline label="Interscope Records" className="subscribe-checkbox" style={{margin: "0px 20px"}}
                            onChange={this.handleCheckbox} checked={this.state.interscope} id="interscope" />
                        <Form.Check inline label="Universal Music Group" className="subscribe-checkbox" style={{marginLeft: "20px", marginBottom: "30px"}}
                            onChange={this.handleCheckbox} checked={this.state.universalMusic} id="universalMusic" />
                    </Form.Group>
                    <Form.Label className="subscribe-disclaimer">By submitting this form, you agree to the <a href="https://youtu.be/KBXsx1ZHgg0" target="__blank">Universal Music Group Privacy Policy.</a></Form.Label>
                    <div className="button-div">
                        <button className="button yellow" type="submit">Submit</button>
                    </div>
                </Form>
            </div>
        );
    }

}

export default Subscribe