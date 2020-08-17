import React from 'react';
import 'semantic-ui-css/semantic.min.css';

import {
    Container,
    Form,
    Icon,
    Card,
    Input,
    Button,
} from 'semantic-ui-react';

export default function App() {
    return (
        <>
            <Container>
                <Card fluid style={{ padding: '1rem' }}>
                    <Form>
                        <Form.Group>
                            <Form.Field placeholder="Put your link here" control={Input} width={13} style={{ marginTop: '1rem' }} />
                            <Form.Field fluid control={Button} width={3} style={{ marginTop: '1rem' }}>
                                <Icon name="linkify" />
                                Shorten
                            </Form.Field>
                        </Form.Group>
                    </Form>
                </Card>
            </Container>
        </>
    );
}
