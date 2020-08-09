import React, { useState } from 'react';
import {
    Form, Button, Col, Row, Jumbotron,
} from 'react-bootstrap';

import axios from 'axios';

import CustomAlert from './components/CustomAlert';

export default function CustomForm() {
    const [url, setUrl] = useState();
    const [alert, setAlert] = useState();

    async function handleOnSubmit(event) {
        event.preventDefault();
        try {
            const response = await axios.post('http://shortly.heanzyzabala.com/api/shorten', { url });
            setAlert(<CustomAlert variant="success" url={`http://hzab.me/${response.data.code}`} />);
        } catch (error) {
            const { status } = error.response;
            if (status === 422) {
                setAlert(<CustomAlert variant="danger" />);
            } else {
                setAlert(<CustomAlert variant="warning" />);
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
        <div>
            <Jumbotron>
                <div className="text-center">
                    <h1 className="display-3"> Shortly </h1>
                    <p className="mt-2">
                        A free and simple link shortener.
                    </p>
                </div>
                <div className="ml-5 mr-5 pt-3">
                    <Form onSubmit={handleOnSubmit}>
                        <Form.Row className="mb-4">
                            <Col sm={2} />
                            <Col sm={6} className="mb-2">
                                <Form.Control onChange={handleOnChange} type="text" placeholder="Enter URL here" size="lg" />
                            </Col>
                            <Col sm={2}>
                                <Button type="submit" size="lg" block variant="primary"> Shorten </Button>
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
                </div>
            </Jumbotron>
        </div>
    );
}