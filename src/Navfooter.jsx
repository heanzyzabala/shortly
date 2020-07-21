import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

// eslint-disable-next-line react/prefer-stateless-function
export default class Navfooter extends Component {
    render() {
        return (
            <Navbar fixed="bottom" bg="light">
                <Navbar.Text className="float-right">heanzyzabala©2020</Navbar.Text>
            </Navbar>
        );
    }
}
