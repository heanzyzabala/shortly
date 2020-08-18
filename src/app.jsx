import React from 'react';
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
    Divider,
} from 'semantic-ui-react';

export default function App() {
    return (
        <>
            <Container style={{ height: '100%', padding: '2rem 1rem 1rem' }}>
                <Grid centered style={{ height: '100%' }}>
                    <Grid.Row>
                        <Card fluid style={{ padding: '2rem' }}>
                            <Container style={{ marginBottom: '1rem' }}>
                                <Header as="h3" textAlign="center" icon>
                                    <Icon name="staylinked" circular />
                                    <Header.Content> Shortly </Header.Content>
                                    <Header.Subheader> A free and simple link shortener. </Header.Subheader>
                                </Header>
                            </Container>
                            <Form>
                                <Form.Group>
                                    <Message success content="hello" />
                                    <Form.Field placeholder="Put your link here" control={Input} width={13} style={{ marginTop: '1rem' }} />
                                    <Form.Field fluid control={Button} width={3} style={{ marginTop: '1rem' }}>
                                        <Icon name="linkify" />
                                        Shorten
                                    </Form.Field>
                                </Form.Group>
                                <Form.Field style={{ marginTop: '1rem' }}>
                                    <Header sub textAlign="center" color="grey" style={{ fontSize: '10px' }}>
                                        By clicking Shorten, you are agreeing to Shortly's
                                        {' '}
                                        <u>Terms of Service</u>
                                        {' and '}
                                        <u>Privacy Policy</u>
                                    </Header>
                                </Form.Field>
                                <Message positive header="hello werld" content="hello" />
                            </Form>
                        </Card>
                    </Grid.Row>
                    <Divider section hidden />
                    <Grid.Row>
                        <Grid divided verticalAlign="middle" columns={3}>
                            <Grid.Column computer={5}>
                                <Header as="h4" textAlign="center" icon>
                                    <Icon name="heart" />
                                    Free
                                    <Header.Subheader style={{ paddingTop: '1rem' }}>
                                        You can generate links with no limits, for now.
                                    </Header.Subheader>
                                </Header>
                            </Grid.Column>
                            <Grid.Column computer={5}>
                                <Header as="h4" textAlign="center" icon>
                                    <Icon name="server" />
                                    Everlasting
                                    <Header.Subheader style={{ paddingTop: '1rem' }}>
                                        Generated links are perpetually stored, for now.
                                    </Header.Subheader>
                                </Header>
                            </Grid.Column>
                            <Grid.Column computer={5}>
                                <Header as="h4" textAlign="center" icon>
                                    <Icon name="chart bar" />
                                    Analytics
                                    <Header.Subheader style={{ paddingTop: '1rem' }}>
                                        View the number of clicks your link has generated. Soon.
                                    </Header.Subheader>
                                </Header>
                            </Grid.Column>
                        </Grid>
                    </Grid.Row>
                </Grid>
            </Container>
        </>
    );
}
