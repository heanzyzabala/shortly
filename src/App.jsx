import React, { Component } from 'react';
import CustomForm from './CustomForm';
import Navfooter from './Navfooter';

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends Component {
    render() {
        return (
            <div>
                <CustomForm />
                <Navfooter />
            </div>
        );
    }
}
