import React from 'react';
import {
    Container, Row, Col, Card,
} from 'react-bootstrap';

import ShortenerForm from './components/shortenerForm';
import './app.scss';

export default function App() {
    return (
        <Container fluid style={{ height: '100%' }}>
            <Row style={{ display: 'flex', backgroundColor: '#324b69', height: '55%' }}>
                <div style={{ width: '100%' }}>
                    <div style={{ textAlign: 'center', color: 'white' }}>
                        <h1> Shortly </h1>
                        <p> A simple and free url shortener. </p>
                    </div>
                    <ShortenerForm />
                </div>
            </Row>
            <Row style={{
                display: 'flex',
                marginLeft: '4rem',
                marginRight: '4rem',
                justifyContent: 'center',
                alignItems: 'center',
                height: '45%',
            }}
            >
                <Col sm={12} md={4}>
                    <Card className="text-center">
                        <Card.Body>
                            <Card.Title> Shortened </Card.Title>
                            <Card.Text>
                                No character limit for long urls. It will get shortened regardless.
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
