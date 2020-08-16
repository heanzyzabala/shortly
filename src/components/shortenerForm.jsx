import React, { useState } from 'react';
import {
    Form, Button, Col, Row,
} from 'react-bootstrap';

import shorten from '../api';

import TypedAlert from './typedAlert';

export default function ShortenerForm() {
    const [url, setUrl] = useState();
    const [alert, setAlert] = useState();

    async function handleOnSubmit(event) {
        event.preventDefault();
        try {
            const response = await shorten(url);
            setAlert(<TypedAlert variant="success" url={`http://hzab.me/${response.data.code}`} />);
        } catch (e) {
            const { status, data } = e.response;
            const { error } = data;
            if (status === 422 && error === 'Invalid URL') {
                setAlert(<TypedAlert variant="danger" />);
            } else {
                setAlert(<TypedAlert variant="warning" />);
            }
        }
    }

    function handleOnChange(event) {
        let { value } = event.target;
        if (value.trim() !== '' && !value.trim().startsWith('http://') && !value.trim().startsWith('https://')) {
            value = `http://${value}`;
        }
        setUrl(value);
    }

    return (
        <>
            <Form onSubmit={handleOnSubmit}>
                <Form.Row>
                    <Col sm={2} />
                    <Col sm={6} className="mb-2">
                        <Form.Control onChange={handleOnChange} type="text" placeholder="Enter URL here" size="lg" />
                    </Col>
                    <Col sm={2}>
                        <Button type="submit" size="lg" block> Shorten </Button>
                    </Col>
                    <Col sm={2} />
                </Form.Row>
                <Row>
                    <Col sm={2} />
                    <Col sm={8}>
                        {' '}
                        {alert}
                        {' '}
                    </Col>
                    <Col sm={2} />
                </Row>
            </Form>
        </>
    );
}
