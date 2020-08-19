import React, { useState } from 'react';
import 'semantic-ui-css/semantic.min.css';

import {
    Container,
    Form,
    Icon,
    Card,
    Input,
    Button,
    Grid,
    Header,
    Message,
    Segment,
    List,
} from 'semantic-ui-react';

import shorten from './api';
import { TypedMessage, IconedHeader } from './components';

export default function App() {
    const [url, setUrl] = useState();
    const [message, setMessage] = useState();

    async function handleOnSubmit(event) {
        event.preventDefault();
        try {
            const response = await shorten(url);
            setMessage(<TypedMessage variant="positive" url={`http://hzab.me/${response.data.code}`} />);
        } catch (e) {
            const { status, data } = e.response;
            const { error } = data;
            if (status === 422 && error === 'Invalid URL') {
                setMessage(<TypedMessage variant="danger" />);
            } else {
                setMessage(<TypedMessage variant="info" />);
            }
        }
    }

    function handleOnChange(event) {
        setUrl(event.target.value);
    }

    return (
        <>
            <Segment basic style={{ padding: '8em 0em', marginBottom: '-8em' }}>
                <Grid container>
                    <Grid.Row>
                        <Card fluid style={{ padding: '2em' }}>
                            <Container style={{ marginBottom: '1em' }}>
                                <Header as="h3" textAlign="center" icon>
                                    <Icon name="staylinked" circular />
                                    <Header.Content> Shortly </Header.Content>
                                    <Header.Subheader> A free and simple link shortener. </Header.Subheader>
                                </Header>
                            </Container>
                            <Form onSubmit={handleOnSubmit}>
                                <Form.Group>
                                    <Message success content="hello" />
                                    <Form.Field onChange={handleOnChange} placeholder="Put your link here" control={Input} width={13} style={{ marginTop: '1em' }} />
                                    <Form.Field fluid control={Button} width={3} style={{ marginTop: '1em' }}>
                                        <Icon name="linkify" />
                                        Shorten
                                    </Form.Field>
                                </Form.Group>
                                <Form.Field style={{ margin: '1em 1em 3em' }}>
                                    <Header sub textAlign="center" color="grey" style={{ fontSize: '10px' }}>
                                        By clicking Shorten, you are agreeing to Shortly&apos;s
                                        {' '}
                                        <u>Terms of Service</u>
                                        {' and '}
                                        <u>Privacy Policy</u>
                                    </Header>
                                </Form.Field>
                                {message}
                            </Form>
                        </Card>
                    </Grid.Row>
                </Grid>
            </Segment>
            <Segment basic style={{ padding: '4em' }}>
                <Grid container centered verticalAlign="middle" columns={3}>
                    <Grid.Column computer={5} mobile={8}>
                        <IconedHeader icon="heart" header="Free" subHeader="You can generate links with no limits." />
                    </Grid.Column>
                    <Grid.Column computer={5} mobile={8}>
                        <IconedHeader icon="server" header="Persistent" subHeader="Generated links are perpetually stored." />
                    </Grid.Column>
                    <Grid.Column computer={5} mobile={8}>
                        <IconedHeader icon="chart bar" header="Analytics (Soon)" subHeader="View the number of clicks your link has generated." />
                    </Grid.Column>
                </Grid>
            </Segment>
            <Segment inverted vertical style={{ padding: '8em 0em' }}>
                <Container>
                    <Grid divided inverted stackable columns={3}>
                        <Grid.Row>
                            <Grid.Column width={6}>
                                <Header inverted as="h4" content="Links" />
                                <List link inverted>
                                    <List.Item as="a">Portfolio</List.Item>
                                    <List.Item as="a">Github</List.Item>
                                    <List.Item as="a">Linkedin</List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column width={6}>
                                <Header inverted as="h4" content="Other Projects" />
                                <List link inverted>
                                    <List.Item as="a">Github - Client Code</List.Item>
                                    <List.Item as="a">Github - Server Code</List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column width={2}>
                                <Header as="h4" inverted>
                                    Developer
                                </Header>
                                <p>
                                    heanzyzabala
                                </p>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </Segment>
        </>
    );
}
