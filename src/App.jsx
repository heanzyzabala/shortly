import React, { Component } from 'react';
import UrlForm from './UrlForm';
import Navfooter from './Navfooter';

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends Component {
    render() {
        return (
            <div>
                <UrlForm />
                <Navfooter />
            </div>
        );
    }
}
