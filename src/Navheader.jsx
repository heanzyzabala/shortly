import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

// eslint-disable-next-line react/prefer-stateless-function
export default class Navheader extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="">Shortly</Navbar.Brand>
            </Navbar>
        );
    }
}
