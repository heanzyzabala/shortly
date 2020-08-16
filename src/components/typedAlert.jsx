import PropTypes from 'prop-types';
import React from 'react';
import { Alert } from 'react-bootstrap';

function get(variant, url) {
    switch (variant) {
    case 'success':
        return (
            <Alert variant="success">
                <Alert.Heading>Success!</Alert.Heading>
                <div>Here is your link: </div>
                <Alert.Link href={url}>
                    {url}
                </Alert.Link>
            </Alert>
        );
    case 'danger':
        return (
            <Alert variant="danger">
                <Alert.Heading>Uh-oh!</Alert.Heading>
                You entered an invalid link.
            </Alert>
        );
    case 'warning':
        return (
            <Alert variant="warning">
                <Alert.Heading>Hmmm.</Alert.Heading>
                Something seems to be wrong. Try again later!
            </Alert>
        );
    default:
        throw new Error('Invalid Alert Variant');
    }
}

export default function TypedAlert({ variant, url }) {
    return get(variant, url);
}

TypedAlert.propTypes = {
    variant: PropTypes.string.isRequired,
    url: PropTypes.string,
};

TypedAlert.defaultProps = {
    url: '',
};
