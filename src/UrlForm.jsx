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
            alert = <Alert variant="danger"> You entered an invalid link! </Alert>;
        } else if (serverError != null && serverError) {
            alert = <Alert variant="warning"> Uh-oh something went wrong! </Alert>;
        } else if (url) {
            alert = (
                <Alert variant="success">
                    Here is your link:
                    <Alert.Link href={url}>
                        {url}
                    </Alert.Link>
                </Alert>
            );
        }
        return (
            <div>
                <h1> Shortly </h1>
                <Jumbotron
                    className="p-5"
                    fluid
                >
                    {alert}
                    <Form onSubmit={this.onSubmitHandler}>
                        <Form.Row>
                            <Col sm={9}>
                                <Form.Control
                                    onChange={this.onChangeHandler}
                                    type="text"
                                    placeholder="Shorten your link"
                                    size="lg"
                                />
                            </Col>
                            <Col sm={3}>
                                <Button
                                    type="submit"
                                    size="lg"
                                    variant="primary"
                                    block
                                >
                                    Shorten
                                </Button>
                            </Col>
                        </Form.Row>
                    </Form>
                </Jumbotron>
            </div>
        );
    }
}
