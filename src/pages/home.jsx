import React from 'react';

import {
    Container,
    Card,
    Grid,
    Segment,
} from 'semantic-ui-react';

import {
    IconedHeader,
    TitleHeader,
    ShortenerForm,
} from '../components';

export default function Home() {
    return (
        <>
            <Segment basic style={{ padding: '8em 0em', marginBottom: '-8em' }}>
                <Grid container>
                    <Grid.Row>
                        <Card fluid style={{ padding: '2em' }}>
                            <Container style={{ marginBottom: '1em' }}>
                                <TitleHeader icon="staylinked" header="Shortly" subHeader="A free and simple link shortener." />
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
        </>
    );
}
