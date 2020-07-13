import React, { Component } from 'react'
import axios from 'axios';
import { Form, Button, Row, Col, Jumbotron } from 'react-bootstrap';

export default class UrlForm extends Component {
    constructor(props) {
        super(props);
        this.state = { url: null, shortenedUrl: null };
    }
    onChangeHandler = (evt) => {
        this.setState({ url: evt.target.value });
    }
    onSubmitHandler = async (evt) => {
        evt.preventDefault();
        const response = await axios.post('http://localhost:8080/api/shorten', {
            url: this.state.url
        });
        this.setState({ shortenedUrl: response.data.code });
    }
    render() {
        let shortenedUrlView = null;
        if (this.state.shortenedUrl) {
            shortenedUrlView = <Form.Row>
                <Col sm={9}>
                    <Form.Control
                        onChange={this.onChangeHandler}
                        type='text'
                        size='lg'
                        placeholder={this.state.shortenedUrl}
                        disabled />
                </Col>
                <Col sm={3}>
                    <Button
                        type='submit'
                        size='lg'
                        variant='primary'
                        block> Copy </Button>
                </Col>
            </Form.Row>
        }
        return (
            <div>
                <h1> Shorten your link </h1>
                <Jumbotron
                    className='p-5'
                    fluid>
                    {shortenedUrlView}
                    <Form onSubmit={this.onSubmitHandler}>
                        <Form.Row>
                            <Col sm={9}>
                                <Form.Control
                                    className='mt-3'
                                    onChange={this.onChangeHandler}
                                    type='text'
                                    size='lg' />
                            </Col>
                            <Col sm={3}>
                                <Button
                                    className='mt-3'
                                    type='submit'
                                    size='lg'
                                    variant='primary'
                                    block> Shorten </Button>
                            </Col>
                        </Form.Row>
                    </Form>
                </Jumbotron>
            </div>
        );
    }
}
