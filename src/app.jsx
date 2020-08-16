/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import {
    Container, Row, Col, Card,
} from 'react-bootstrap';

import ShortenerForm from './components/shortenerForm';
import './app.scss';

export default function App() {
    return (
        <Container
            fluid
            style={{
                backgroundColor: '#324b69',
                height: '100%',
                margin: '0',
            }}>
            <Row style={{
                height: '55%',
                justifyContent: 'center',
                margin: '0',
            }}>
                <div style={{
                    flexGrow: '1',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    marginBottom: '4rem',
                }}>
                    <div style={{ textAlign: 'center', color: 'white' }}>
                        <h1> Shortly </h1>
                        <p> A simple and free url shortener. </p>
                    </div>
                    <ShortenerForm style={{ paddingLeft: '1rem', paddingRight: '1rem' }} />
                </div>
            </Row>
            <Row style={{
                justifyContent: 'center',
                height: '45%',
                alignItems: 'center',
            }}>
                <Col sm={12} md={4}>
                    <Card className="text-center">
                        <Card.Body>
                            <Card.Title> Shortened </Card.Title>
                            <Card.Text>
                                No character limit for long urls. It&apos;ll be shortened regardless.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={4}>
                    <Card className="text-center">
                        <Card.Body>
                            <Card.Title> Persistent </Card.Title>
                            <Card.Text>
                                Generated links are permanently stored. You can use it anytime.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={4}>
                    <Card className="text-center">
                        <Card.Body>
                            <Card.Title> Statistics </Card.Title>
                            <Card.Text>
                                Check the amount of visitors for your shortened url.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
