import React, { Component } from 'react';
import axios from 'axios';
import {
    Alert, Form, Button, Col, Jumbotron,
} from 'react-bootstrap';

export default class UrlForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: null,
            shortenedUrl: null,
            isValid: null,
            serverError: null,
        };
    }

    onChangeHandler = (evt) => this.setState({ url: evt.target.value });

    onSubmitHandler = async (evt) => {
        evt.preventDefault();
        const { url } = this.state;
        try {
            const response = await axios.post('http://localhost:8080/shortly/shorten', { url });
            this.setState({ shortenedUrl: `http://localhost:8080/shortly/${response.data.code}`, isValid: true });
        } catch (e) {
            const { status } = e.response;
            if (status === 422) {
                this.setState({ isValid: false });
            } else {
                this.setState({ serverError: true });
            }
        }
    }

    render() {
        let alert = null;
        const { shortenedUrl: url, isValid, serverError } = this.state;
        if (isValid != null && !isValid) {
            alert = (
                <Alert variant="danger">
                    <Alert.Heading>Uh-oh!</Alert.Heading>
                    You entered an invalid link.
                </Alert>
            );
        } else if (serverError != null && serverError) {
            alert = (
                <Alert variant="warning">
                    <Alert.Heading>Hmmm.</Alert.Heading>
                    Something seems to be wrong. Try again later!
                </Alert>
            );
        } else if (url) {
            alert = (
                <Alert variant="success">
                    <Alert.Heading>Success!</Alert.Heading>
                    <div>Here is your link: </div>
                    <Alert.Link href={url}>
                        {url}
                    </Alert.Link>
                </Alert>
            );
        }
        return (
            <div>
                <Jumbotron>
                    <div
                        className="text-center"
                    >
                        <h1> Shortly </h1>
                        <p className="mt-2">
                            A free, fast and simple link shortener.
                        </p>
                    </div>
                    <div
                        className="ml-5 mr-5 pt-3"
                    >
                        <Form
                            onSubmit={this.onSubmitHandler}
                            className="mb-4"
                        >
                            <Form.Row>
                                <Col
                                    sm={9}
                                    md={10}
                                    className="mb-2"
                                >
                                    <Form.Control
                                        onChange={this.onChangeHandler}
                                        type="text"
                                        placeholder="Shorten your link"
                                        size="lg"
                                    />
                                </Col>
                                <Col
                                    sm={3}
                                    md={2}
                                >
                                    <Button
                                        type="submit"
                                        size="lg"
                                        block
                                        variant="primary"
                                    >
                                        Shorten
                                    </Button>
                                </Col>
                            </Form.Row>
                        </Form>
                        {alert}
                    </div>
                </Jumbotron>
            </div>
        );
    }
}
