import React from 'react';
import 'semantic-ui-css/semantic.min.css';

import {
    Container,
    Icon,
    Card,
    Grid,
    Header,
    Segment,
    List,
} from 'semantic-ui-react';

import { IconedHeader, TitleHeader, ShortenerForm } from './components';

export default function App() {
    return (
        <>
            <Segment basic style={{ padding: '8em 0em', marginBottom: '-8em' }}>
                <Grid container>
                    <Grid.Row>
                        <Card fluid style={{ padding: '2em' }}>
                            <Container style={{ marginBottom: '1em' }}>
                                <TitleHeader icon="staylinked" header="Shortly" subHeader="A free and simple link shortener." />
                                <Header as="h3" textAlign="center" icon>
                                    <Icon name="staylinked" circular />
                                    <Header.Content> Shortly </Header.Content>
                                    <Header.Subheader> A free and simple link shortener. </Header.Subheader>
                                </Header>
                                <ShortenerForm />
                            </Container>
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
