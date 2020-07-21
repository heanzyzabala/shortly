import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

// eslint-disable-next-line react/prefer-stateless-function
export default class Navfooter extends Component {
    render() {
        return (
            <Navbar fixed="bottom" className="bg-light justify-content-end">
                <Navbar.Text>heanzyzabala © 2020</Navbar.Text>
            </Navbar>
        );
    }
}
