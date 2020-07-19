import React, { Component } from 'react'
import axios from 'axios';
import { Alert, Form, Button, Col, Jumbotron } from 'react-bootstrap';

export default class UrlForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            url: null, 
            shortenedUrl: null 
        };
    }
    onChangeHandler = (evt) => {
        this.setState({ url: evt.target.value });
    }
    onSubmitHandler = async (evt) => {
        evt.preventDefault();
        const response = await axios.post('http://localhost:8080/api/shorten', {
            url: this.state.url
        });
        this.setState({ shortenedUrl: `http://heanzy.zabala.com/${response.data.code}` });
    }
    render() {
        let alert = null;
        const url = this.state.shortenedUrl;
        if (url) {
            alert = <Alert variant='success'> Here is your link: <Alert.Link href={url}> {url} </Alert.Link> </Alert>;
        }
        // <Alert variant='danger'> You entered an invalid link! </Alert>
        return (
            <div>
                <h1> Shortly </h1>
                <Jumbotron
                    className='p-5'
                    fluid>
                    {alert}
                    <Form onSubmit={this.onSubmitHandler}>
                        <Form.Row>
                            <Col sm={9}>
                                <Form.Control
                                    onChange={this.onChangeHandler}
                                    type='text'
                                    placeholder='Shorten your link'
                                    size='lg' />
                            </Col>
                            <Col sm={3}>
                                <Button
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
